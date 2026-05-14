# AGENTS.md

## Goal

Turn technical Markdown documents into modern, readable, high-quality web pages.

The Markdown is the source of truth. Preserve technical accuracy. Do not invent facts, numbers, limits, APIs, pricing, or product behavior.

## Audience

Design for developers, admins, architects, and technical decision makers.

The page should help readers understand the topic quickly, then dive deeper if needed.

## Style

Create a modern technical product page, not a plain Markdown renderer.

Prefer:

- clear visual hierarchy
- spacious layout
- concise copy
- cards, diagrams, timelines, and comparison tables
- dark-first or neutral premium design
- subtle gradients
- clean typography
- responsive layout

Avoid:

- raw Markdown dump
- cluttered pages
- excessive animation
- fake metrics
- fake testimonials
- marketing fluff
- unsupported claims

## Content Rules

Use the Markdown as content input, then restructure it into useful sections.

Common section patterns:

- Hero / summary
- Key concepts
- Architecture or mental model
- Workflow or implementation steps
- Permissions / security model
- Comparison table
- Common mistakes
- FAQ
- Glossary
- Further reading

Choose only the sections that fit the document.

## Tech Stack

Prefer:

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion / Framer Motion
- Lucide icons

Keep the implementation simple.

Prefer a single-page app unless the document clearly needs multiple pages.

## UX Rules

Make the page easy to scan.

Use:

- short headings
- compact explanations
- visual grouping
- reusable data arrays for repeated content
- responsive cards and tables

For mobile:

- stack sections vertically
- avoid tiny text
- avoid wide tables unless horizontal scroll is necessary

## Accuracy Rules

Preserve:

- terminology
- relationships between concepts
- warnings and limitations
- official links
- tables and important values
- implementation steps

If the source document is unclear, mark it as unclear instead of guessing.

## Animation Rules

Use subtle motion only:

- section reveal
- card hover
- timeline entrance
- diagram fade-in

Avoid distracting or decorative animation that hurts readability.

## Code Rules

Use TypeScript and semantic HTML.

Keep dependencies minimal.

Prefer clean, compact components.

Do not add backend, authentication, or external API calls unless explicitly requested.

The project should run with:

```bash
npm install
npm run dev
```
