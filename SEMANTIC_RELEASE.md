# Semantic Release Setup

This repository uses semantic-release for automated versioning and publishing.

## GitHub Actions Workflows

This project has two separate workflows:

1. **PR Validation** (`.github/workflows/pr-validation.yml`)
   - Runs on pull requests
   - Performs linting, type checking, testing, and building
   - Runs semantic-release in dry-run mode to preview releases

2. **Release** (`.github/workflows/release.yml`)
   - Runs on pushes to main, beta, and nightly branches
   - Builds the project and creates releases using semantic-release

## Required GitHub Secrets

To enable automated releases, you need to set up the following secrets in your GitHub repository:

1. **GITHUB_TOKEN** - Automatically provided by GitHub Actions (no setup needed)
2. **NPM_TOKEN** - Required if you want to publish to NPM (optional for this project)

### Setting up NPM_TOKEN (if needed):
1. Go to npmjs.com and create an account
2. Generate an access token in your NPM account settings
3. Add it as a secret named `NPM_TOKEN` in your GitHub repository settings

## Commit Message Format

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features (triggers minor version bump)
- `fix:` - Bug fixes (triggers patch version bump)
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Breaking Changes
- Add `BREAKING CHANGE:` in the commit body or use `!` after the type (e.g., `feat!:`) to trigger a major version bump

## Manual Release

To manually trigger a release locally:
```bash
npm run release
```

## Branches

- `main` - Production releases
- `beta` - Beta pre-releases
- `nightly` - Nightly pre-releases
