# 230 Conversations Design System

## Overview
This document outlines the design system for the 230 Conversations web application, including color schemes, typography, spacing, and component patterns for both light and dark modes.

## Brand Identity

**Ministry:** Youth-led ministry under Trans-Orange Conference of the Seventh-day Adventist Church

**Mission:** Creating meaningful conversations about faith, life, and spirituality among young people

---

## Color Palette

### Original Color Scheme
- **Primary Dark:** `#262450` (Navy) - Headers, primary elements
- **Primary Accent:** `#a57614` (Gold/Bronze) - CTAs, highlights, active states
- **Secondary Dark:** `#414143` (Charcoal) - Navbar, footer
- **Accent Hover:** `#8c6310` (Darker gold)
- **Neutrals:** Gray scale (white, gray-50 to gray-900)

### Light Mode Palette
- **Background:** `#ffffff` (White)
- **Secondary Background:** `#f9fafb` (gray-50)
- **Surface:** `#ffffff` with subtle shadows
- **Primary Text:** `#111827` (gray-900)
- **Secondary Text:** `#6b7280` (gray-500)
- **Border:** `#e5e7eb` (gray-200)
- **Accent:** `#a57614` (Gold)
- **Accent Hover:** `#8c6310` (Darker gold)
- **Glass Effect:** `rgba(255, 255, 255, 0.8)` with backdrop blur

### Dark Mode Palette
- **Background:** `#0f172a` (slate-900)
- **Secondary Background:** `#1e293b` (slate-800)
- **Surface:** `#1e293b` (slate-800)
- **Card Background:** `#334155` (slate-700)
- **Primary Text:** `#f1f5f9` (slate-100)
- **Secondary Text:** `#94a3b8` (slate-400)
- **Border:** `#334155` (slate-700)
- **Accent:** `#d4a574` (Lighter gold for dark mode)
- **Accent Hover:** `#b8935f` (Darker version)
- **Glass Effect:** `rgba(30, 41, 59, 0.8)` with backdrop blur

---

## Typography

### Font Families
- **Headings:** 'Montserrat', sans-serif (weights: 400, 600, 700, 800)
- **Body:** 'Open Sans', sans-serif (weights: 400, 500, 600, 700)
- **Source:** Google Fonts

### Type Scale
- **h1:** 3xl-4xl (mobile-desktop), font-bold (700-800)
- **h2:** 2xl-3xl, font-bold (700)
- **h3:** xl-2xl, font-semibold (600)
- **h4:** lg-xl, font-semibold (600)
- **Body:** base (16px), font-normal (400)
- **Small:** sm (14px), font-normal (400)
- **Caption:** xs (12px), text-gray-500/400

---

## Spacing System

Using Tailwind's default spacing scale (4px base unit):
- **Component Padding:** p-4 to p-8 (16px-32px)
- **Section Spacing:** py-12 to py-16 (48px-64px)
- **Card Spacing:** p-6 (24px)
- **Gap Between Elements:** gap-4 to gap-8 (16px-32px)

---

## Glass Morphism Effect

### Navbar Glass Effect (on scroll)
- **Background:** `backdrop-blur-lg` (16px blur)
- **Light Mode:** `bg-white/80` (80% opacity white)
- **Dark Mode:** `bg-slate-800/80` (80% opacity slate-800)
- **Border:** Bottom border with subtle color
- **Shadow:** Soft shadow for depth

### Implementation
- Triggered when scroll position > 10px
- Smooth transition between states (300ms)
- Maintains readability with backdrop-filter blur

---

## Component Patterns

### Cards
- **Background:** White (light) / slate-800 (dark)
- **Border Radius:** rounded-lg (8px)
- **Shadow:** shadow-md with hover:shadow-xl
- **Padding:** p-6
- **Hover Effect:**
  - Transform: scale(1.02) or translateY(-4px)
  - Shadow increase
  - Transition: 300ms ease

### Buttons

**Primary Button (CTA):**
- Background: Gold accent
- Text: White
- Padding: px-6 py-2
- Rounded: rounded-md (6px)
- Hover: Darker gold + shadow
- Transition: all 300ms

**Secondary Button:**
- Border: 2px solid accent
- Text: Accent color
- Background: Transparent
- Hover: Filled with accent

### Navigation Links
- **Default:** White text (light mode) / Light text (dark mode)
- **Hover:** Gold accent color
- **Active:** Gold accent + font-semibold
- **Transition:** color 200ms

---

## Dark Mode Implementation

### Strategy
- **Method:** Class-based dark mode (Tailwind's `dark:` prefix)
- **Toggle:** Moon/Sun icon in navbar
- **Persistence:** localStorage key `theme`
- **Default:** System preference detection

### Context Provider
- React Context for theme state
- Custom hook `useTheme()`
- Functions: `toggleTheme()`, `setLightMode()`, `setDarkMode()`

### Transition
- Smooth color transitions on theme change
- Duration: 200-300ms
- Properties: background-color, color, border-color

---

## Responsive Design

### Breakpoints (Tailwind defaults)
- **sm:** 640px - Small tablets
- **md:** 768px - Tablets/landscape
- **lg:** 1024px - Desktop
- **xl:** 1280px - Large desktop
- **2xl:** 1536px - Extra large

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Hamburger menu < md breakpoint
- Grid layouts: 1 col → 2 col → 3 col

---

## Accessibility

### Color Contrast
- Minimum WCAG AA contrast ratios (4.5:1 for text)
- Gold accent tested against both light and dark backgrounds
- Adjusted gold tint for dark mode (`#d4a574`) for better contrast

### Interactive Elements
- Focus states with ring utilities
- Keyboard navigation support
- ARIA labels on icon buttons
- Semantic HTML

### Motion
- Respects `prefers-reduced-motion`
- Optional: Disable animations for users who prefer reduced motion

---

## Animation & Transitions

### Standard Transitions
- **Duration:** 200-300ms
- **Easing:** ease-in-out (default)
- **Properties:**
  - Colors: 200ms
  - Transforms: 300ms
  - Opacity: 200ms

### Hover Effects
- Cards: Transform + shadow change
- Buttons: Background color + shadow
- Links: Color change only

### Page Transitions
- Smooth scroll behavior
- Fade-in on mount (optional)

---

## Icons

**Library:** Lucide React (v0.344.0)

**Common Icons:**
- Menu, X - Navigation toggle
- Calendar, MapPin, Users - Event metadata
- Sun, Moon - Theme toggle
- Play, Video - Media
- Mail, Phone, MapPin - Contact
- Facebook, Instagram, Youtube - Social

**Size:** 20-24px standard, 16px small, 32px+ large

---

## Layout Structure

### Page Container
```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### Section Padding
```
py-12 sm:py-16 (vertical)
```

### Content Grid
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
```

---

## Best Practices

1. **Consistency:** Use defined color variables and spacing scale
2. **Performance:** Use CSS transforms for animations (GPU accelerated)
3. **Accessibility:** Always include focus states and ARIA labels
4. **Dark Mode:** Test all components in both themes
5. **Glass Effect:** Use sparingly, only on navbar when scrolling
6. **Transitions:** Keep under 300ms for snappy feel
7. **Contrast:** Verify text readability in both modes

---

## Future Enhancements

- [ ] Add theme color customization
- [ ] Implement reduced motion preference
- [ ] Add skeleton loading states
- [ ] Create animation library for page transitions
- [ ] Add micro-interactions for enhanced UX
