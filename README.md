# NxReproReleaseBug

Repro steps:

```json
{
  "release": {
    "projects": ["public-library"],
    "version": {
      "conventionalCommits": true,
      "fallbackCurrentVersionResolver": "disk"
    }
  }
}
```

- On first commit
  - @nx-repro-release-bug/public-library is at 2.0.0
  - @nx-repro-release-bug/internal-library not published
- Update packages/internal-library/src/lib/internal-library.ts
- Commit with `feat(internal-library): update internal-library wording`
  - This is the state of the repo
- `npx nx release version --dry-run` => dosn't version public-library

