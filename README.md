# Clearance Website

Marketing website for [Clearance](https://github.com/teritorio/clearance) — an open-source quality gate for OpenStreetMap data.

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Production

Generate static site:

```bash
pnpm generate
```

Preview production build:

```bash
pnpm preview
```

## Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `pnpm dev`       | Start development server     |
| `pnpm build`     | Build for production         |
| `pnpm generate`  | Generate static site         |
| `pnpm preview`   | Preview production build     |
| `pnpm lint`      | Run ESLint                   |
| `pnpm lint:fix`  | Run ESLint with auto-fix     |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm test`      | Run tests in watch mode      |
| `pnpm test:run`  | Run tests once               |
