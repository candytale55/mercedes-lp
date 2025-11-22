# Header Structure Diagram

```
<header>
│
├── <nav class="main-nav">
│   │
│   ├── <img class="mercedes-logo">
│   │   └── src: "./src/images/icon-mercedes.svg"
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
        │       └── <img src="./src/images/user-icon.png">
        │
        ├── <li>
        │   └── <a href="#">
        │       └── <img src="./src/images/shopping-bag-icon.png">
        │
        └── <li class="burger-menu">
            └── <a href="#">
                └── <img src="./src/images/burger-icon.png">
```

## Classes Reference

| Element | Class | Purpose |
|---------|-------|---------|
| `<nav>` | `main-nav` | Primary navigation container |
| `<img>` | `mercedes-logo` | Mercedes logo image |
| `<ul>` | `main-nav-list` | Main navigation menu list |
| `<li>` | `menu-close` | Close menu button (mobile) |
| `<a>` | `nav-link` | Navigation link items |
| `<nav>` | `secondary-nav` | Secondary navigation container |
| `<ul>` | `secondary-nav-list` | Icon-based navigation list |
| `<li>` | `burger-menu` | Hamburger menu toggle button |
