---
title: Setup
sidebar_position: 2
---

# Setup

This page explains how to set up Markon in a React application.

---

## React Setup

Use `ReactMarkon` to render Markon-formatted content.

```tsx
import { ReactMarkon } from '@nofinite/markon';

const content = '#b[Hello]# World';

export function Example() {
  return <ReactMarkon content={content} />;
}
```

---

## Notes

- No provider or global configuration is required.
- Markon performs deterministic string-to-HTML transformation.
- Styling is fully controlled by the consumer.
