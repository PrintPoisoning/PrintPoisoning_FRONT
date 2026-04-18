## Architecture: Feature-Sliced Design (FSD)

This project follows Feature-Sliced Design. Respect the rules below for all file placement, imports, and refactoring decisions.

### Layer Hierarchy (Unidirectional)

```
app → pages → widgets → features → entities → shared
```

Each layer can import **only from lower layers**. Same-layer horizontal imports between slices are forbidden (narrow exception: global interface rule).

### Layer Roles

| Layer      | Role                                                | Slices |
| ---------- | --------------------------------------------------- | ------ |
| `app`      | Service bootstrap, providers, routing               | ✗      |
| `pages`    | User-facing routes, view composition                | ✓      |
| `widgets`  | Composite UI (modals, multi-feature blocks)         | ✓      |
| `features` | Single-action UI/logic (one micro-domain)           | ✓      |
| `entities` | Domain models — API, hooks, types, utils            | ✓      |
| `shared`   | Domain-agnostic reusables (UI, utils, hooks, store) | ✗      |

### Interface Rule

External access to a slice goes through its `index.ts` only. Do not deep-import internal files from outside the slice.

### When To Load the `fsd-architecture-skill` Skill

For concrete placement decisions, widget-vs-feature judgment, interface patterns, or any refactoring that shifts files across layers, consult the `fsd-architecture-skill` skill. Do not invent placement rules — the skill has the decision flow.
