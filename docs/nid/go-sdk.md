---
sidebar_position: 2
title: Go SDK
---

# Go SDK

The Nid Go SDK provides a high-performance, concurrent-safe client designed for Go backend services. It abstracts the complexities of OIDC and OAuth2 flows while maintaining enterprise-grade security and configurability.

## Installation

```bash
go get github.com/NofiniteHQ/nid/go
```

## Initialization & Configuration

You can initialize the client using `nid.Config` and `nid.NewClient()`.

```go
import (
	"net/http"
	"time"
	"github.com/NofiniteHQ/nid/go"
)

cfg := nid.Config{
    ClientID:     "your-client-id",
    ClientSecret: "your-client-secret",
    RedirectURI:  "http://localhost:8080/callback",
    IdpURL:       "https://nofinite.com",
    HTTPClient: &http.Client{
        Timeout: 10 * time.Second, // Enterprise feature: custom proxy/timeout support
    },
}

client, err := nid.NewClient(cfg)
```

### Configuration Parameters (`nid.Config`)

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ClientID` | `string` | Yes | Your OAuth2/OIDC Client ID. |
| `ClientSecret` | `string` | Yes* | Your OAuth2/OIDC Client Secret. (*Required for token exchange). |
| `RedirectURI` | `string` | No | The registered redirect URI for handling the authorization callback. |
| `IdpURL` | `string` | No | Override for the Identity Provider URL. Defaults to `https://nofinite.com`. |
| `HTTPClient` | `*http.Client`| No | Custom HTTP client, useful for strictly enforcing request timeouts. |

---

## Authentication Flow Methods

### `GeneratePKCE()`

Generates a secure Proof Key for Code Exchange challenge and verifier to protect against code interception.

**Returns:**
- `verifier` (`string`): The secret to be saved in a cookie/session.
- `challenge` (`string`): The hash to send in the `AuthCodeURL`.
- `err` (`error`): Any error during cryptographic generation.

### `client.AuthCodeURL(state string, opts nid.AuthCodeOptions)`

Generates the authorization URL to redirect the user to.

**Parameters:**
- `state` (`string`): A secure random string to prevent CSRF attacks.
- `opts` (`nid.AuthCodeOptions`): Options struct where you can pass the `CodeChallenge` and `CodeChallengeMethod` (usually `"S256"`).

### `client.ExchangeCode(ctx context.Context, code string, verifier string)`

Exchanges an authorization code for an access token and ID token.

**Parameters:**
- `ctx`: A standard Go context.
- `code`: The authorization code from the query string.
- `verifier`: The PKCE verifier generated earlier.

**Returns `*nid.TokenSet`:**
| Field | Type | Description |
|-------|------|-------------|
| `AccessToken` | `string` | Used to access APIs. |
| `IDToken` | `string` | The JWT containing user profile data. |
| `RefreshToken` | `string` | Used to acquire new tokens. |
| `ExpiresIn` | `int` | Expiration time in seconds. |

---

## Token Verification

### `client.VerifyToken(tokenString string)`

Locally verifies ID Tokens using public keys fetched securely from the IdP's JWKS endpoint. It enforces `RS256` to prevent algorithm confusion attacks.

**Parameters:**
- `tokenString` (`string`): The raw JWT token.

**Returns `*nid.Session`:**
| Field | Type | Description |
|-------|------|-------------|
| `Subject` | `string` | The unique User ID (`sub`). |
| `Email` | `string` | The user's email address. |

```go
session, err := client.VerifyToken(tokens.IDToken)
if err != nil {
    // token is invalid, expired, or tampered with
}

fmt.Printf("Authenticated User ID: %s\n", session.Subject)
```
