---
name: Treg/typescript
description: Validate TypeScript strictness and config.
---

# Treg/typescript

## When To Use

When tsconfig or strict typing rules are changed.

## Validation Checklist

- Run `type:check`.
- Confirm strict compiler options remain enabled.
- Ensure `exclude` does not hide product-logic paths.
