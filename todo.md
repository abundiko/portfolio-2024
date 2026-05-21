# AI Crawlability Fixes - Todo List

Based on analysis.html findings (Score: 11/100 - Weak structural crawlability)

## Critical Issues (Must Fix)

### 1. Add `<main>` tag to page
**Files:** `app/(index)/page.tsx`
- Wrap all page content in a semantic `<main>` tag
- AI cannot isolate content from chrome without it

### 2. Add `<h1>` heading
**Files:** `app/(index)/Hero.tsx`
- Add a proper H1 tag that clearly names who you are
- AI has no structural entry point without it

### 3. Add JSON-LD Schema
**Files:** `app/(index)/layout.tsx`
- Organization schema (name, URL, description)
- FAQPage schema (5 questions AI will cite)
- BreadcrumbList schema
- Microdata attributes as redundancy

### 4. Fix Client-Side Rendering Issue
**Files:** `app/(index)/page.tsx`, all components
- Ensure critical content is server-rendered
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot) don't execute JavaScript
- Currently: 0 words in static HTML

## High Priority (Should Fix)

### 5. Add Canonical URL
**Files:** `app/(index)/layout.tsx`, `functions/metadata.ts`
- Add canonical meta tag to prevent duplicate version splitting citation authority

### 6. Add Open Graph meta tags
**Files:** `app/(index)/layout.tsx`, `functions/metadata.ts`
- Already partially implemented but should be reviewed
- Important for social and AI bots

### 7. Fix Title Length
**Files:** `app/(index)/layout.tsx`
- Current title is very long and may be truncated by AI
- Consider: "Abundiko - FullStack Developer | Responsive websites & apps"

### 8. Improve Heading Structure
**Files:** `app/(index)/About.tsx`, `app/(index)/Hero.tsx`, `app/(index)/Projects.tsx`
- Add descriptive H2-H3 headings for all sections
- Headings are used as content map by AI
- Current: Only "About Me" is descriptive, others are company names

## Medium Priority (Nice to Have)

### 9. Add more content below fold
**Files:** `app/(index)/Footer.tsx`, new section
- Currently content is mostly near the top
- More explanatory content below would help AI understand fully
- Target: 600+ words (currently ~548)

### 10. Add FAQ section with structured data
**Files:** `app/(index)/About.tsx` or new component
- FAQPage schema for AI engines to cite
- 5 relevant questions about services

### 11. Improve semantic HTML
**Files:** All components
- Use `<article>`, `<section>` properly
- Replace divs with semantic elements where appropriate
- Currently: max div depth 5, only 6% semantic

## Implementation Order

1. **metadata.ts** - Add canonical URL
2. **layout.tsx** - Add JSON-LD schema (Organization + FAQPage + Breadcrumb)
3. **page.tsx** - Wrap in `<main>` tag
4. **Hero.tsx** - Add descriptive H1
5. **About.tsx** - Improve heading hierarchy (H1 + H2 + H3)
6. **Projects.tsx** - Add descriptive section headings
7. **Footer.tsx** - Consider adding FAQ content

## Technical Notes

- Use Next.js `generateMetadata` or static metadata
- JSON-LD should be in `<script type="application/ld+json">` tags
- Canonical: `<link rel="canonical" href="..." />`
- Verify with: `curl -s https://abundiko.vercel.app | grep -E '<main>|<h1>|schema|canonical'`