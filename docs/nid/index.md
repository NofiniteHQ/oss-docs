---
sidebar_position: 1
title: NID (Nofinite Identity)
---

# Introduction

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/NofiniteHQ/nid)

**Nid** is the official suite of authentication SDKs for integrating [Nofinite](https://nofinite.com) Identity & Access Management (IAM) into your applications. All code is open-source and hosted on our [GitHub repository](https://github.com/NofiniteHQ/nid). 

Designed for enterprise-grade security, scalability, and developer experience, our SDKs abstract away the complexity of OAuth2 and OIDC flows so you can focus on building your core product.

---

## Why Nid?

Authentication is critical infrastructure. The Nid SDKs are built on strict security principles and production-readiness:

- **Algorithm Confusion Prevention**: Strict enforcement of asymmetric algorithms (e.g., `RS256`) during JWT verification.
- **Resilient Networking**: Custom HTTP client support and built-in timeout architectures via `AbortController` to prevent server hanging or resource exhaustion.
- **PKCE by Default**: Native utilities to effortlessly implement Proof Key for Code Exchange (PKCE) in all environments.

---

## Supported Platforms

Nid provides native support and idiomatic APIs across the following ecosystems:

### [Go SDK](./go-sdk.md)
A high-performance, concurrent-safe client designed for Go backend services. Fully integrates with Go's `context.Context` and `net/http` paradigms.

### [Node.js SDK](./node-sdk.md)
A robust Node.js client featuring framework-agnostic core logic for custom server environments.

### [Express SDK](./express-sdk.md)
Seamless Express.js middleware built on top of the core client to effortlessly protect your REST APIs.

### [JS SDK](./js-sdk.md)
A universal JS/TS client tailored for modern web applications and SPAs, featuring a secure pop-up based flow.

### [Next.js SDK](./nextjs-sdk.md)
Specialized utilities tailored specifically for the Next.js App Router, bridging Server Components and Route Handlers.

---

## Installation

Nid is organized as a monorepo. You can install the specific package for your environment:

**Go**:
```sh
go get github.com/NofiniteHQ/nid/go
```

**Node.js / Express**:
```sh
npm install @nofinite/nid-node
```

**JS (Browser)**:
```sh
npm install @nofinite/nid
```

**Next.js**:
```sh
npm install @nofinite/nid-next
```

---

## Next Steps

Explore the detailed documentation for your platform of choice using the sidebar, or dive straight into our [GitHub repository](https://github.com/NofiniteHQ/nid) to see the source code and examples.
