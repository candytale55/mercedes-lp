# Footer Structure Diagram

```
<footer>
│
├── [COMMENTED OUT] Newsletter Form Section
│   └── <section class="footer-form">
│       ├── <h3>Join the Power</h3>
│       ├── <p>Sign up for our Newsletter</p>
│       └── <form action="POST">
│           ├── <label for="email">
│           ├── <input id="email" type="email">
│           ├── <button type="submit" class="btn">
│           ├── <input id="checkbox" type="checkbox">
│           └── <label for="checkbox">
│               └── <a href="#">privacy policy</a>
│
├── <div class="social-media"> [ACTIVE]
│   └── <ul class="social-media-list">
│       ├── <li>
│       │   └── <a href="#">
│       │       └── <img src="./src/images/icon-facebook.svg">
│       ├── <li>
│       │   └── <a href="#">
│       │       └── <img src="./src/images/icon-instagram.svg">
│       ├── <li>
│       │   └── <a href="#">
│       │       └── <img src="./src/images/icon-youtube.svg">
│       ├── <li>
│       │   └── <a href="#">
│       │       └── <img src="./src/images/icon-linkedin.svg">
│       └── <li>
│           └── <a href="#">
│               └── <img src="./src/images/icon-tiktok.svg">
│
└── <section class="footer-nav-section">
    │
    ├── <nav class="footer-nav">
    │   ├── <h4>Explorer</h4>
    │   └── <ul>
    │       ├── <li><a class="nav-link" href="#">Electric Bikes</a></li>
    │       ├── <li><a class="nav-link" href="#">City Bikes</a></li>
    │       ├── <li><a class="nav-link" href="#">Kids' Bikes</a></li>
    │       ├── <li><a class="nav-link" href="#">Accessories</a></li>
    │       ├── <li><a class="nav-link" href="#">Outlet</a></li>
    │       ├── <li><a class="nav-link" href="#">Business</a></li>
    │       ├── <li><a class="nav-link" href="#">Insurance Electric</a></li>
    │       └── <li><a class="nav-link" href="#">Size Guide</a></li>
    │
    ├── <nav class="footer-nav">
    │   ├── <h4>About</h4>
    │   └── <ul>
    │       ├── <li><a class="nav-link" href="#">About Us</a></li>
    │       ├── <li><a class="nav-link" href="#">Journal</a></li>
    │       ├── <li><a class="nav-link" href="#">Reviews</a></li>
    │       ├── <li><a class="nav-link" href="#">Press</a></li>
    │       └── <li><a class="nav-link" href="#">Jobs</a></li>
    │
    └── <nav class="footer-nav">
        ├── <h4>Help</h4>
        └── <ul>
            ├── <li><a class="nav-link" href="#">Contact</a></li>
            ├── <li><a class="nav-link" href="#">Faq</a></li>
            ├── <li><a class="nav-link" href="#">Delivery</a></li>
            ├── <li><a class="nav-link" href="#">Assembly & manuals</a></li>
            ├── <li><a class="nav-link" href="#">Payment options</a></li>
            ├── <li><a class="nav-link" href="#">Privacy policy</a></li>
            └── <li><a class="nav-link" href="#">Terms & conditions</a></li>
```

## Classes Reference

| Element     | Class                | Purpose                                             |
| ----------- | -------------------- | --------------------------------------------------- |
| `<section>` | `footer-form`        | Newsletter signup section (currently commented out) |
| `<button>`  | `btn`                | Submit button for newsletter form (commented out)   |
| `<div>`     | `social-media`       | Social media icons wrapper (active)                 |
| `<ul>`      | `social-media-list`  | Social media list container                         |
| `<section>` | `footer-nav-section` | Footer navigation container (active)                |
| `<nav>`     | `footer-nav`         | Individual navigation column                        |
| `<a>`       | `nav-link`           | Footer navigation links                             |

## Implementation Notes

**Key Points:**

- Newsletter form section (`.footer-form`) is **currently commented out**
- Social media section (`.social-media`) is **active** and displays icon links
- Social media uses flexbox layout with `.social-media-list` for icon distribution
- Social media icons now correctly point to `./src/images/` (fixed)
- TODO in HTML: Move `.social-media` into `.footer-form` once form section is completed
- Active footer uses `.footer-nav-section` for the container (not `.footer-nav`)
- Three navigation columns each use `.footer-nav` class on `<nav>` elements
- All footer links reuse the `.nav-link` class from header navigation for consistency
- "Veloretti" branding needs update to Mercedes when newsletter is activated
- Form needs backend integration before activation
