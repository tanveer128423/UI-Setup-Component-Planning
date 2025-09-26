# UI Plan — UI Skeleton (submission)

## Overview
This project demonstrates a UI skeleton with reusable components built using Next.js (App router) + Tailwind CSS. Focus is layout & reusability only (no backend).

## Component list (reusable)
- Navbar
  - Props: brand, links[]
  - Responsive: hamburger menu at small widths
- Footer
  - Minimal legal / copyright
- Button
  - Props: variant ('primary'|'secondary'|'ghost'), size
  - Purpose: used across forms, actions
- Input
  - Props: id, label, type, placeholder
  - Accessible label + focus state
- Card
  - Props: title, children
  - Used for content grouping
- DashboardLayout
  - Sidebar + main content grid
  - Reusable layout wrapper for dashboard pages

## Page-level components
- Home (app/page.jsx)
- Dashboard (app/dashboard/page.jsx) — uses DashboardLayout

## Styling approach
- Tailwind CSS (utility-first)
- Consistent spacing, rounded-2xl card style, soft shadows
- Responsive breakpoints: mobile (≤640px), tablet (≥640px), desktop (≥1024px)

## Accessibility
- Buttons and links are keyboard-focusable
- Labels for inputs
- Semantic HTML (header, main, footer, nav, aside)

## Folder structure
(see repo tree in submission)

## How to run
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

## Notes & next steps
- Add controlled forms & validation (later)
- Add Storybook for isolated component previews
- Add unit tests for components
