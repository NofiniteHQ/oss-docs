---
sidebar_position: 5
title: JS SDK
---

# JS SDK

For modern web applications, Nid offers `@nofinite/nid` for plain JS/TS Single Page Applications (SPAs) and traditional browser environments.

The JS SDK utilizes a secure popup-based flow combined with Public Client PKCE (Proof Key for Code Exchange), which doesn't require a client secret.

## Installation via NPM

```bash
npm install @nofinite/nid
```

## Installation via CDN

For environments without a bundler, you can include the SDK directly via unpkg or esm.sh:

```html
<script type="module">
  import { NidJS } from 'https://esm.sh/@nofinite/nid';
  
  // NidJS is now available in your script
</script>
```

## Initialization & Configuration

The primary export of the JS SDK is the `NidJS` class. You must instantiate it with a `NidJSConfig`.

```typescript
import { NidJS } from '@nofinite/nid';

const auth = new NidJS({
  clientId: 'your-public-client-id',
  redirectUri: window.location.origin,
  idpUrl: 'https://nofinite.com',
  timeout: 10000 // Configurable timeout for robust networking
});
```

### Configuration Parameters (`NidJSConfig`)

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `clientId` | `string` | Yes | Your Public OAuth2/OIDC Client ID. |
| `redirectUri` | `string` | No | The authorized callback URL. Defaults to `window.location.origin`. |
| `idpUrl` | `string` | No | Override for the Identity Provider URL. Defaults to `https://nofinite.com`. |
| `timeout` | `number` | No | Network timeout in milliseconds. Defaults to `10000`. |
| `fetch` | `typeof fetch` | No | Custom fetch implementation, if required. |

---

## Client Methods

### `auth.loginWithPopup()`

Initiates the entire login flow automatically. This method opens a popup window, executes the PKCE authorization flow, handles the callback securely via window messaging, and exchanges the code for the final tokens.

**Returns Promise of:**
```typescript
{
  tokens: TokenSet;
  user: UserInfo;
}
```

**`TokenSet` Properties:**
| Field | Type | Description |
|-------|------|-------------|
| `access_token` | `string` | Passed to backend APIs via `Authorization: Bearer <token>`. |
| `id_token` | `string` | The user's Identity Token. |
| `expires_in` | `number` | Time to expiration in seconds. |

**`UserInfo` Properties:**
| Field | Type | Description |
|-------|------|-------------|
| `sub` | `string` | Unique User ID. |
| `name` | `string` | User's full name. |
| `email` | `string` | User's email address. |

### Usage Example

```typescript
const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', async () => {
  try {
    const { tokens, user } = await auth.loginWithPopup();
    console.log(`Welcome, ${user.name}!`);
    console.log(`Access Token: ${tokens.access_token}`);
  } catch (err) {
    console.error('Login failed', err);
  }
});
```
