# Eliminate CTA Code Duplication Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove duplicated CTA markup in index.njk by using existing include files

**Architecture:** Nunjucks templating - leverage `{% include %}` directive for both desktop and mobile CTA components

**Tech Stack:** Nunjucks (11ty), HTML

---

## Task 1: Replace Inline Mobile CTA with Include

**Files:**
- Modify: `src/index.njk:46-53` (first occurrence, repeat for all 10 slides)

**Step 1: Replace first mobile CTA duplication**

Remove lines 46-53, replace with:

```njk
{% if cta %}
  {% include "cta-mobile.njk" %}
{% endif %}
```

**Step 2: Replace remaining 9 mobile CTA duplications**

Locations:
- Lines 85-92 (slide 2)
- Lines 131-138 (slide 3)
- Lines 177-184 (slide 4)
- Lines 225-232 (slide 5)
- Lines 273-280 (slide 6)
- Lines 320-327 (slide 7)
- Lines 368-375 (slide 8)
- Lines 415-422 (slide 9)
- Lines 462-469 (slide 10)

Replace each block with same include pattern.

**Step 3: Commit mobile changes**

```bash
git add src/index.njk
git commit -m "refactor: replace duplicated mobile CTA with includes

- Removed 10 instances of inline mobile CTA markup
- Replaced with {% include 'cta-mobile.njk' %}
- DRY principle compliance

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Replace Inline Desktop CTA with Include

**Files:**
- Modify: `src/index.njk:519-529`

**Step 1: Replace desktop CTA duplication**

Remove lines 519-529, replace with:

```njk
{% if cta %}
  {% include "cta-desk.njk" %}
{% endif %}
```

**Step 2: Commit desktop changes**

```bash
git add src/index.njk
git commit -m "refactor: replace duplicated desktop CTA with include

- Removed inline desktop CTA markup
- Replaced with {% include 'cta-desk.njk' %}
- Completes CTA deduplication effort

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Verify Build

**Step 1: Build site**

```bash
npm run build
```

Expected: Build succeeds without errors

**Step 2: Verify CTA rendering**

Note: `cta` frontmatter variable currently `false` (line 12). CTAs won't display until set to `true`.

To test CTAs work:
1. Temporarily change line 12: `cta: true`
2. Run dev server: `npm run start`
3. Verify CTAs render on homepage
4. Revert `cta: false` if desired

---

## Unresolved Questions

1. Should `cta: false` remain, or enable CTAs permanently?
2. Are CTA text/dates in include files current?
