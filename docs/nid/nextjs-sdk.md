---
sidebar_position: 6
title: Next.js SDK
---

# Next.js SDK

The `@nofinite/nid-next` SDK is specifically tailored for the Next.js App Router (`app/`) architecture. It leverages the core `@nofinite/nid-node` library under the hood, seamlessly passing along all its enterprise-grade security features directly into Server Components and Route Handlers.

## Installation

```bash
npm install @nofinite/nid-next @nofinite/nid-node
```

## Route Handler Integration

Creating a fully-featured authentication route is completely seamless using our pre-built handler.

**`app/api/auth/[...nofinite]/route.ts`**

```typescript
import { handleAuth } from '@nofinite/nid-next/route-handler';
import { NidClient } from '@nofinite/nid-node';

const client = new NidClient({
  clientId: process.env.NID_CLIENT_ID!,
  clientSecret: process.env.NID_CLIENT_SECRET!,
  idpUrl: 'https://nofinite.com'
});

const handler = handleAuth(client);

export { handler as GET, handler as POST };
```

### `handleAuth(client: NidClient, options?)`

This method automatically intercepts API requests and provisions three primary authentication routes out-of-the-box:

1. `/api/auth/login`
   - Initiates the secure PKCE login flow.
   - Generates a PKCE Verifier and Challenge.
   - Sets a temporary `pkce_verifier` HttpOnly cookie.
   - Redirects to the IdP.

2. `/api/auth/callback`
   - Securely handles the OAuth callback from the IdP.
   - Exchanges the authorization code and verifier for a TokenSet.
   - Serializes the token set and user profile into an encrypted HttpOnly cookie called `nid_session`.
   - Safely cleans up the PKCE cookie and redirects the user to the home page (`/`).

3. `/api/auth/logout`
   - Clears the `nid_session` cookie locally.
   - Redirects to the Identity Provider's logout URL to end the global session.

**Options:**
| Property | Type | Description |
|----------|------|-------------|
| `baseUrl` | `string` | Optional override for the base URL used in redirects. Defaults to `req.nextUrl.origin` or `process.env.NEXT_PUBLIC_BASE_URL`. |

---

## Server Components

Once the user is logged in, you can easily access their active session inside any React Server Component using `getAuthSession`.

```tsx
import { getAuthSession } from '@nofinite/nid-next/session';

export default async function Dashboard() {
  const session = await getAuthSession();

  if (!session) {
    return <p>You must be logged in to view the dashboard.</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Your tenant is: {session.user.tid}</p>
    </div>
  );
}
```

### `getAuthSession()`

Parses and returns the currently authenticated session directly from the `nid_session` cookie.

**Returns Promise of `NidSession | null`**
| Field | Type | Description |
|-------|------|-------------|
| `sub` | `string` | The unique User ID. |
| `email` | `string` | The user's email. |
| `tid` | `string` | The active Tenant ID. |
