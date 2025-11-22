# Header Structure Diagram

```
<header>
│
├── <nav class="main-nav">
│   │
│   ├── <a href="#">
│   │   └── <img class="mercedes-logo">
│   │       └── src: "./src/images/icon-mercedes.svg"
│   │
│   └── <ul class="main-nav-list">
│       │
│       ├── <li class="menu-close">
│       │   └── <svg> [Close Menu X Icon]
│       │
│       ├── <li>
│       │   └── <a class="nav-link" href="#">Electric</a>
│       │
│       ├── <li>
│       │   └── <a class="nav-link" href="#">Maybach</a>
│       │
│       ├── <li>
│       │   └── <a class="nav-link" href="#">Accessories</a>
│       │
│       └── <li>
│           └── <a class="nav-link" href="#">Stories</a>
│
└── <nav class="secondary-nav">
    │
    └── <ul class="secondary-nav-list">
        │
        ├── <li>
        │   └── <a href="#">
        │       └── <img class="icon" src="./src/images/user-icon.png">
        │
        ├── <li>
        │   └── <a href="#">
        │       └── <img class="icon" src="./src/images/shopping-bag-icon.png">
        │
        └── <li class="burger-menu">
            └── <a href="#">
                └── <img class="icon" src="./src/images/burger-menu-icon.svg">
```

## Classes Reference

| Element | Class                | Purpose                        |
| ------- | -------------------- | ------------------------------ |
| `<nav>` | `main-nav`           | Primary navigation container   |
| `<a>`   | (wrapper)            | Wraps logo, makes it clickable |
| `<img>` | `mercedes-logo`      | Mercedes logo image            |
| `<ul>`  | `main-nav-list`      | Main navigation menu list      |
| `<li>`  | `menu-close`         | Close menu button (mobile)     |
| `<a>`   | `nav-link`           | Navigation link items          |
| `<nav>` | `secondary-nav`      | Secondary navigation container |
| `<ul>`  | `secondary-nav-list` | Icon-based navigation list     |
| `<img>` | `icon`               | Icons in secondary nav         |
| `<li>`  | `burger-menu`        | Hamburger menu toggle button   |

## Implementation Notes

**Key Points:**

- Logo is wrapped in an anchor tag for homepage navigation
- Close menu (`.menu-close`) contains inline SVG - style the `<li>` not the SVG
- All secondary nav images share the `.icon` class for consistent sizing
- Burger menu icon is SVG (`.svg`), user and shopping icons are PNG (`.png`)
- `.menu-close` is hidden on desktop, visible only in mobile menu
- Two separate `<nav>` elements: one for main links, one for icons
