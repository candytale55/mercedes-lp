# Main Sections Structure Diagram

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
| `<section>` | `maybach-wheels` | Maybach wheels showcase section             |
| `<div>`     | `container`      | Content wrapper for maybach section         |
| `<h2>`      | `subtitle`       | Section heading (reusable typography class) |
| `<a>`       | `link-button`    | Call-to-action button (reusable)            |
| `<a>`       | `dark-button`    | Dark variant of button (modifier class)     |
| `<section>` | `appointment`    | Appointment booking call-to-action section  |

## Implementation Notes

**Key Points:**

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
