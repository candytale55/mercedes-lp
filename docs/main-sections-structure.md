# Main Sections Structure Diagram

## Hero Section

```
<section class="hero">
│
├── <h2 class="subtitle">New Mercedes CLS</h2>
│
└── <p>The power in your hands</p>
```

## Maybach Wheels Section

```
<section class="maybach-wheels">
│
└── <div class="container">
    │
    ├── <h2 class="subtitle">The Mercedes-Maybach wheel programme</h2>
    │
    ├── <img src="./src/images/maybach-wheels.png" alt="...">
    │
    ├── <p>
    │   The exclusive Mercedes-Maybach wheel programme...
    │
    └── <a class="link-button dark-button" href="#">Learn More</a>
```

## Appointment Section

```
<section class="appointment">
│
├── <p>
│   Ready to own the car of your dreams?...
│
└── <a class="link-button" href="#">Contact Now</a>
```

## Classes Reference

| Element     | Class            | Purpose                                     |
| ----------- | ---------------- | ------------------------------------------- |
| `<section>` | `hero`           | Hero banner section with background image   |
| `<section>` | `maybach-wheels` | Maybach wheels showcase section             |
| `<div>`     | `container`      | Content wrapper for maybach section         |
| `<h2>`      | `subtitle`       | Section heading (reusable typography class) |
| `<a>`       | `link-button`    | Call-to-action button (reusable)            |
| `<a>`       | `dark-button`    | Dark variant of button (modifier class)     |
| `<section>` | `appointment`    | Appointment booking call-to-action section  |

## Implementation Notes

**Key Points:**

**Hero Section:**

- Background image: `url(../images/hero-image.jpeg)` with `cover` sizing
- Flexbox layout with `flex-direction: column` and `justify-content: flex-end` (content anchored at bottom)
- Height: `40svh` (40% of small viewport height)
- Background positioned center with no-repeat
- White text color for contrast against background
- Text aligned left (overrides body's center alignment)
- Heading: 2em font size, subtitle class
- Paragraph: 1.1em, capitalized, 1px letter-spacing
- Tight line-height: 0.9em for compact text layout
- Minimal padding: 0.7em
- TODO: Decide if image should be HTML `<img>` or CSS background (currently CSS background)
- TODO: Consider aria-label for accessibility if staying as background image
- Note: Commented out `<img class="hero-image">` in HTML for reference

**Maybach Wheels Section:**

- Uses `.container` div to wrap content (consistent with other sections)
- White background (`.maybach-wheels`) provides contrast against other sections
- Image displays wheel close-up before description text
- Uses `.dark-button` modifier class for black background button
- `.subtitle` class is a reusable typography style (2.5em, 400 weight)

**Appointment Section:**

- Simplified structure with just text and CTA button
- Dark background for visual emphasis
- No container div - padding applied directly to section
- Uses standard `.link-button` (white background)
- Larger font size (1.1em) for better readability

**Shared Elements:**

- Both sections use `.link-button` for CTAs
- Text-center alignment applied globally in body
- Padding TODO: Consider using shorthand notation for cleaner code
- Margin TODO: Investigate why margin behaves differently than padding in `.maybach-wheels`
