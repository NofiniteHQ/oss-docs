---
sidebar_position: 3
title: Node.js SDK
---

# Node.js SDK

The `@nofinite/nid-node` package is a robust server-side client for handling authentication in Node.js applications. It ships with framework-agnostic core logic that can be used in any JavaScript backend.

## Installation

```bash
npm install @nofinite/nid-node
```

## Initialization & Configuration

The SDK exposes the `NidClient` class. It supports custom `fetch` implementations and precise timeout controls to ensure your application doesn't hang on external requests.

```typescript
import { NidClient } from '@nofinite/nid-node';

const client = new NidClient({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  redirectUri: 'http://localhost:3000/callback',
  idpUrl: 'https://nofinite.com',
  timeout: 5000, // 5 second timeout on all requests
});
```

### Configuration Parameters (`NidConfig`)

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `clientId` | `string` | Yes | Your OAuth2/OIDC Client ID. |
| `clientSecret` | `string` | Yes* | Your OAuth2/OIDC Client Secret. (*Required for confidential server environments). |
| `redirectUri` | `string` | No | The registered redirect URI for handling the authorization callback. |
| `idpUrl` | `string` | No | Override for the Identity Provider URL. Defaults to `https://nofinite.com`. |
| `timeout` | `number` | No | Request timeout in milliseconds. Defaults to `10000`. |
| `fetch` | `typeof fetch` | No | Custom fetch implementation, useful for proxies. |

---

## Client Methods

### `client.getAuthUrl(options)`

Generates the authorization URL to redirect the user to the Identity Provider.

**Parameters:**
- `options` (`object`):
  - `state` (`string`): Secure random string.
  - `codeChallenge` (`string`, optional): PKCE Challenge.
  - `codeChallengeMethod` (`string`, optional): Usually `'S256'`.
  - `scopes` (`string[]`, optional): Defaults to `['openid', 'profile', 'email']`.

### `client.exchangeCode(code, codeVerifier?)`

Exchanges an authorization code for an access token and ID token.

**Parameters:**
- `code` (`string`): The authorization code returned from the callback.
- `codeVerifier` (`string`, optional): The PKCE verifier if used.

**Returns Promise of `TokenSet`:**
| Field | Type | Description |
|-------|------|-------------|
| `access_token` | `string` | Access Token. |
| `id_token` | `string` | Raw JWT ID Token. |
| `refresh_token` | `string` | Refresh Token. |
| `expires_in` | `number` | Expiry time in seconds. |

### `client.verifyToken(token)`

Verifies an ID Token locally using JWKS and validates standard claims. Enforces RS256 algorithm to prevent algorithm confusion attacks.

**Parameters:**
- `token` (`string`): The raw JWT token.

**Returns Promise of `NidSession`:**
| Field | Type | Description |
|-------|------|-------------|
| `sub` | `string` | The unique User ID. |
| `email` | `string` | The user's email. |

### `client.getUserInfo(accessToken)`

Fetches the standard OIDC user info profile using the access token.

**Parameters:**
- `accessToken` (`string`): The valid Access Token.

**Returns Promise of `UserInfo`:**
| Field | Type | Description |
|-------|------|-------------|
| `sub` | `string` | User ID. |
| `name` | `string` | Full name. |
| `email` | `string` | Email address. |
