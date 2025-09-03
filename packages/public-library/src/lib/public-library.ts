import { internalLibrary } from '@nx-repro-release-bug/internal-library'

export function publicLibrary(): string {
  return 'public-library' + internalLibrary();
}
