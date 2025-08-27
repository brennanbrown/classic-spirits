# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
- Potential: refine mobile base size and line-height.
- Potential: mail provider integration (Mailchimp/Buttondown/Beehiiv) for newsletter.
- Potential: image lightbox for figures.
- Potential: add copy-to-clipboard tooltip styling.
 - Potential: manual dark-mode toggle icon variants; theme color tokens.

## [2025-08-27]
### Added
- Modular SCSS structure with partials under `/_sass/` (components, layout, variables, mixins).
- New Sass entrypoint `assets/css/main.scss` wired in `/_includes/01_head.html`.
- GitHub Actions workflow for Jekyll `/.github/workflows/jekyll.yml`.
- Ruby version pin in `/.ruby-version` for reproducible builds.

### Changed
- Extracted styles from `/_sass/_custom.scss` into:
  - `/_sass/layout/_reading.scss`, `/_sass/layout/_nav.scss`
  - `/_sass/components/_pagination.scss`, `/_sass/components/_buttons.scss`, `/_sass/components/_forms.scss`
- Kept `assets/css/custom.css` in repo for now; archived variant `assets/css/custom.legacy.css` added.
- Updated Sass configuration in `/_config.yml`.

### Fixed
- Dark mode contrast improvements for figcaptions, sidebar, calendar, footer, inputs/placeholders, nav links.

Notes: Site builds with Sass `@import` deprecation warnings; plan migration to `@use/@forward` next.

## [2025-08-25]
### Added
- Newsletter signup widget (Netlify form) in `_includes/04_sidebar.html` with `.newsletter-form` styles.
- Author box include `_includes/author_box.html` showing avatar, name, bio, and links; included in `/_layouts/post.html` after content.
- Reading time calculation in `/_layouts/post.html` post meta.
- Mini prev/next inline nav under post title in `/_layouts/post.html`.
- Tag footer section beneath content in `/_layouts/post.html`.
- Blockquote, link underline, and figure caption styling in `assets/css/custom.css`.
- Code-block "Copy" buttons via `assets/js/custom.js` and corresponding CSS `.code-copy` and `.code-block`.
- Archive list with leader dots using flex by editing `_includes/JB/posts_collate` and CSS `.al-*` classes.
- Basic dark mode palette using `prefers-color-scheme: dark` in `assets/css/custom.css`.
 - Theme toggle button in `/_includes/03_navigation.html` with persistence in `assets/js/custom.js` and manual overrides via `body.theme-dark`.
 - Simple image lightbox for `.reading img` (non-linked) in `assets/js/custom.js` with styles in `assets/css/custom.css`.

### Changed
- Increased post metadata sizes: `.post-meta` to 1rem; `small.post-meta` to 0.95rem.
 - Mobile legibility: bumped base to 18px and `.reading` to 1.1rem under 768px.

## [2025-08-24]
### Added
- Google Fonts: EB Garamond (reading) and Space Grotesk (UI) in `_includes/01_head.html`.
- Comfortable reading width and padding; tuned paragraph rhythm and heading scale in `assets/css/custom.css`.
- Code block spacing and rounded corners in `assets/css/custom.css`.
- Archive year/month spacing tweaks and sidebar widget spacing.

### Changed
- Base font-size raised from 16px to 18px with responsive scaling.
- Applied EB Garamond to reading areas and Space Grotesk for UI.
- Added `.post-meta` class in `/_layouts/post.html` and styled it in custom CSS.

---

Format: Keep newest entries on top. Group by Added/Changed/Removed/Fixed as needed.
