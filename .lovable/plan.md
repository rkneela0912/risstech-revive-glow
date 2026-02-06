

# Integrate RISS Technologies Logo Throughout Site

## Overview

The provided logo features a professional design with:
- **Color palette**: Teal/cyan blues (#0891b2 range), green accents (#22c55e range)
- **Design elements**: Globe, buildings with "R", upward arrow (symbolizing growth/innovation)
- **Typography**: Bold "RISS TECHNOLOGIES LLC" text

This plan will integrate the logo into the site while adapting the color scheme to blend with the existing purple theme.

---

## Changes

### 1. Copy Logo to Assets

Save the uploaded logo to the project assets for use in components.

| File | Action |
|------|--------|
| `src/assets/riss-logo.png` | Copy uploaded logo here |

---

### 2. Update Navigation Logo

Replace the simple purple "R" box with the actual logo image.

| File | Change |
|------|--------|
| `src/components/sections/Navigation.tsx` | Import logo, replace div with img element, add proper sizing |

**Before:**
```text
+-------+
|   R   |  RISS Technologies
+-------+
```

**After:**
```text
[logo image]  RISS Technologies
```

---

### 3. Update Footer Logo

Match the footer branding to use the same logo.

| File | Change |
|------|--------|
| `src/components/sections/Footer.tsx` | Import logo, replace div with img element |

---

### 4. Create Simplified Favicon

Generate a simplified version of the logo for the favicon (just the icon portion, no text).

| File | Action |
|------|--------|
| `public/favicon.png` | Generate simplified icon version |

---

### 5. Optional Color Accent Updates

Add teal/cyan accent colors to complement the logo colors in certain UI elements:

| File | Change |
|------|--------|
| `src/index.css` | Add teal accent color variable for subtle accents |

---

## Technical Details

**Navigation Component Changes:**
- Import: `import rissLogo from "@/assets/riss-logo.png"`
- Replace logo div with: `<img src={rissLogo} alt="RISS Technologies" className="h-10 w-auto" />`
- Adjust spacing and alignment

**Footer Component Changes:**
- Same import pattern
- Replace the logo box with the image
- Ensure proper sizing for footer context

**Favicon Generation:**
- Use the icon portion of the logo (globe + buildings + R)
- Simplify for small sizes (16x16, 32x32)
- Maintain the teal/green gradient

---

## Summary

| Location | Current | After |
|----------|---------|-------|
| Navbar | Purple box with "R" | Full logo image |
| Footer | Purple box with "R" | Full logo image |
| Favicon | Generic R icon | Simplified logo icon |

This creates consistent branding across the entire site using the official RISS Technologies logo.

