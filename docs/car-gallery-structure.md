# Car Gallery Section Structure Diagram

```
<section class="car-gallery">
│
├── <article class="card-container">
│   │
│   ├── <h3 class="card-title">Electric</h3>
│   │
│   ├── <p>Mercedes E450 Cabriolet</p>
│   │
│   ├── <img class="product-card-image" src="./src/images/mercedes-benz-silver-convertible.png" alt="...">
│   │
│   └── <div class="card-bottom-container">
│       │
│       ├── <a class="link-button" href="#">More Info</a>
│       │
│       └── <div class="color-container">
│           ├── <div class="color-circle gray"></div>
│           ├── <div class="color-circle red"></div>
│           ├── <div class="color-circle blue"></div>
│           └── <div class="color-circle black"></div>
│
├── <article class="card-container">
│   │
│   ├── <h3 class="card-title">Hybrid</h3>
│   ├── <p>Mercedes GLC SUV</p>
│   ├── <img class="product-card-image" src="...">
│   └── <div class="card-bottom-container">
│       ├── <a class="link-button" href="#">More Info</a>
│       └── <div class="color-container">
│           └── [4 color circles]
│
├── <article class="card-container">
│   └── [Same structure repeats...]
│
└── <article class="card-container">
    └── [Same structure repeats...]
```

## Classes Reference

| Element | Class | Purpose |
|---------|-------|---------|
| `<section>` | `car-gallery` | Gallery container for multiple car cards |
| `<article>` | `card-container` | Individual car card wrapper |
| `<h3>` | `card-title` | Car category/type heading |
| `<img>` | `product-card-image` | Product image within card |
| `<div>` | `card-bottom-container` | Container for button and color options |
| `<a>` | `link-button` | Call-to-action button (reusable) |
| `<div>` | `color-container` | Wrapper for color selection circles |
| `<div>` | `color-circle` | Individual color option circle |
| `<div>` | `gray` | Gray color modifier |
| `<div>` | `red` | Red color modifier |
| `<div>` | `blue` | Blue color modifier |
| `<div>` | `black` | Black color modifier |

## Implementation Notes

**Key Points:**

**Section Structure:**
- Gallery uses `<article>` elements for semantic HTML (each car is independent content)
- Four car cards currently displayed (expandable structure)
- Each card follows identical structure for consistency
- Gallery section has teal border (dev only - TODO: Remove borders)

**Card Layout:**
- Each card contains: category title, model name, car image, action button, and color options
- `.card-container` has card background color, rounded corners via CSS variable, 1em margin and padding
- `overflow: hidden` ensures border-radius applies to children elements
- `.card-bottom-container` groups the interactive elements (button + color picker) - has orange border (dev only)
- Images use descriptive alt text with view angle and color details

**Product Images:**
- `.product-card-image` class for consistent sizing
- Width: 100%, Height: 150px
- `object-fit: contain` maintains aspect ratio
- 1em top margin for spacing
- Has golden border (dev only)

**Color Selection:**
- Four color options per car: gray, red, blue, black
- Color circles use two classes: base `.color-circle` + color modifier (`.gray`, `.red`, etc.)
- Colors styled via CSS background-color based on modifier class (implementation pending)

**Typography:**
- `.card-title` heading: 1.875rem font size, 400 weight
- Car model name in plain `<p>` tag (no specific class)
- Category labels: "Electric", "Hybrid" indicate vehicle type

**TODO Items:**
- Remove development borders (teal, darkred, darkorange, darkgoldenrod)
- Consider using `clamp()` for responsive image height
- `.card-bottom-container` layout needs flexbox/grid implementation
- `.color-circle` base styling + color variants need to be implemented
- Consider responsive grid layout for card display (mobile-first approach)
- Color circles may need interactive states (hover, active, selected)
- Unify padding and margin conventions across sections
