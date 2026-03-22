---
name: Treg/husky
description: Verify and maintain git hook automation.
---

# Treg/husky

## When To Use

When pre-commit and pre-push checks must stay enforced and consistent.

## Validation Checklist

- Ensure hooks are executable.
- Ensure hooks include `format:check` and `lint:check`.
- If type-checking or tests are enabled, ensure those checks are included.
