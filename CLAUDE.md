# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

Note: Project uses pnpm (pnpm-lock.yaml exists) but npm scripts work normally.

## Architecture

**Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + shadcn/ui

**Language:** Korean-first portfolio website

### Key Directories

- `app/` - Next.js App Router pages and API routes
- `app/api/` - API endpoints (portfolio, projects, resume, resume-pdf, send-resume, notion-sync)
- `components/portfolio/` - Main portfolio components (introduction-page.tsx is the primary view)
- `components/ui/` - shadcn/ui components (Radix UI primitives)
- `contexts/` - React Context providers (language-context, theme-context)
- `hooks/` - Custom hooks (use-active-section, use-scroll-animation, use-toast)
- `lib/types.ts` - All TypeScript interfaces
- `lib/mock-data/` - Portfolio content data files (personal-info, companies, projects, skills, articles, etc.)
- `lib/utils.ts` - Utility functions (cn() for className merging)

### Data Flow

Portfolio data is modular in `lib/mock-data/*.ts` files, aggregated in `lib/mock-data.ts`, and exported as `mockPortfolioData` (type: `PortfolioData`). API routes serve this data as JSON.

### Key Types (lib/types.ts)

- `PortfolioData` - Root type containing all portfolio sections
- `Company` - Work experience with achievements and technologies
- `Project` - Project details linked to companies via `companyId`
- `StructuralContribution` - Background/solution narrative structure for project contributions
- `Article` - Blog articles with Notion integration

## Patterns

**Styling:** Use `cn()` from `lib/utils` to merge Tailwind classes. shadcn/ui components use class-variance-authority for variants.

**Components:** Client components use `"use client"` directive. Prefer shadcn/ui components from `components/ui/`.

**Data:** Add new portfolio content to appropriate file in `lib/mock-data/`, update types in `lib/types.ts` if needed.

**Theming:** Dark mode via next-themes with class-based switching. Custom colors: lime (#9CCC65) and coral (#FF7043).
