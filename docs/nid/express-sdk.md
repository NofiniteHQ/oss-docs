---
sidebar_position: 4
title: Express SDK
---

# Express SDK

The `@nofinite/nid-node` package includes a highly convenient middleware designed to natively protect your Express.js routes. It utilizes the core Nofinite client to validate Bearer tokens using strict `RS256` verification.

## Installation

```bash
npm install @nofinite/nid-node express
```

## Middleware Initialization

Initialize the core `NidClient` and wrap it with `createRequireAuth` to generate your middleware.

```typescript
import express from 'express';
import { NidClient, createRequireAuth } from '@nofinite/nid-node';

const client = new NidClient({
  clientId: 'your-client-id',
  idpUrl: 'https://nofinite.com'
});

const app = express();
const requireAuth = createRequireAuth(client);
```

### `createRequireAuth(client: NidClient)`

**Parameters:**
- `client`: A configured instance of `NidClient`.

**Returns:** 
- An Express middleware function: `(req: Request, res: Response, next: NextFunction) => Promise<void>`

## Protecting Routes

Apply the `requireAuth` middleware to any route or router you wish to secure. The middleware will strictly check the `Authorization: Bearer <token>` header.

```typescript
app.get('/api/protected', requireAuth, (req, res) => {
  // If the request reaches here, req.nidSession is guaranteed to be valid
  res.json({
    message: 'Welcome to the protected route!',
    userId: req.nidSession.sub,
    email: req.nidSession.email
  });
});
```

### Request Context Modification

If the authorization header is valid, the middleware securely injects the decoded JWT session directly into the Express Request object:

**`req.nidSession` (`NidSession`)**
| Property | Type | Description |
|----------|------|-------------|
| `sub` | `string` | The authenticated User ID. |
| `email` | `string` | The authenticated User Email. |
| `tid` | `string` | The active Tenant ID. |

### Error Handling

The middleware handles authorization errors automatically. If the header is missing, malformed, or the token is invalid/expired, it automatically halts the request and responds with:

**Status Code:** `401 Unauthorized`
**Response Body:**
```json
{
  "error": "nid: token validation failed: jwt expired"
}
```
