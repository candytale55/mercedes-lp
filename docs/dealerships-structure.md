# Dealerships Section Structure Diagram

```
<section class="dealerships">
│
├── <div class="container">
│   │
│   ├── <h2 class="subtitle">Find the nearest Mercedes dealer to you.</h2>
│   │
│   └── <p>
│       Browse over 1000 dealers worldwide...
│
└── <div class="dealer-nightmap">
    │
    └── <div class="dealer-card-container">
        │
        ├── <h2>Discover your local Mercedes partner store</h2>
        │
        └── <a href="#" class="link-button long-button">
            Find a partner store near you
```

## Classes Reference

| Element     | Class                   | Purpose                                       |
| ----------- | ----------------------- | --------------------------------------------- |
| `<section>` | `dealerships`           | Dealership finder section container           |
| `<div>`     | `container`             | Intro text wrapper (reusable wrapper class)   |
| `<h2>`      | `subtitle`              | Section heading (reusable typography class)   |
| `<div>`     | `dealer-nightmap`       | Background image container (night map)        |
| `<div>`     | `dealer-card-container` | Content card with semi-transparent background |
| `<a>`       | `link-button`           | Call-to-action button (reusable)              |
| `<a>`       | `long-button`           | Button modifier for longer text               |

## Implementation Notes

**Key Points:**

**Structure:**

- Two main subsections: intro content (`.container`) + interactive map (`.dealer-nightmap`)
- `.container` wraps the introductory heading and description
- `.dealer-nightmap` provides the background image layer
- `.dealer-card-container` creates a semi-transparent overlay card
- TODO: Container naming is inconsistent - consider refactoring for clarity

**Intro Section (`.container`):**

- Flexbox layout with `column` direction
- Padding: 3em 2em (TODO: Unify padding/margin conventions)
- Larger paragraph text: 1.2em font size with 1.2 line-height
- Uses `.subtitle` class instead of `.section-title`

**Background Image:**

- Background image: `url(../images/dealer-night-map.png)`
- Uses `background-size: cover` for full coverage
- Height: `60svh` (60% of small viewport height for mobile-first)
- TODO: Accessibility concern - background images should have alt text equivalent
- TODO: Verify background image approach is appropriate for this section

**Content Card:**

- Semi-transparent gray background: `rgba(128, 128, 128, 0.5)`
- Flexbox layout with `column` direction
- `justify-content: space-around` distributes content evenly
- Takes 100% height of parent
- Border radius applied via CSS variable
- Padding: 1em

**Typography:**

- Card heading: 2.5em font size, 400 weight
- Heading width constrained to 80% for better readability
- Line height: 1.2 for tighter spacing on large headings
- TODO: Text styling needs adjustment for very small devices

**Button:**

- Uses `.long-button` modifier (likely for width adjustment)
- Standard `.link-button` styling applies
