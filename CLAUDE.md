# CLAUDE.md

## Project Overview

Clearance Website — marketing/presentational site for Clearance, an open-source quality filter for OpenStreetMap data.

## Tech Stack

- **Framework**: Nuxt 4 (SSG via `nuxi generate`)
- **UI**: Nuxt UI v4 (Tailwind CSS v4)
- **Content**: Nuxt Content v3 (Markdown-driven, SQLite-backed)
- **SEO**: @nuxtjs/seo meta-module
- **Package Manager**: pnpm
- **Node**: v22+ (required for Nuxt Content v3 native SQLite)

## Commands

- `pnpm dev` — Start development server
- `pnpm generate` — Build static site
- `pnpm lint:fix` — Lint and auto-fix
- `pnpm typecheck` — TypeScript checks
- `pnpm test:run` — Run tests once

## Conventions

- ESLint: `@antfu/eslint-config`
- Commits: conventional commits enforced by commitlint
- Git hooks: simple-git-hooks + lint-staged
- **Mobile-first**: Design and implement for mobile screens first, then enhance for larger breakpoints

## Tests

- **Keep tests in sync with the codebase.** Every time an issue is resolved, verify that existing tests still match the code and update or remove tests that no longer apply. Add new tests for new functionality.

## Git Commits

- Never include "Co-Authored-By: Claude" or any mention of Claude AI in commit messages.
- All commits must be authored by the current git user.
