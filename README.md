# Personal site

A small, fast, no-build website that introduces you. Plain HTML, CSS and a few lines of JavaScript.

```
personal-site/
├── index.html   ← your content
├── style.css    ← colours, fonts, layout
├── script.js    ← copy-email button + footer year
└── README.md
```

## 1. Make it yours

Open `index.html` and search for `EDIT`. Each comment marks something to change:

- Page title and description (top of the file)
- Your name (`<h1>`) and the one-line intro
- Your photo: replace the `.portrait` initials with an `<img>` (instructions are in the comment)
- About text, "Right now" list and skills
- Projects (copy and paste a `<li>` to add more)
- Timeline entries
- Email address (change it in the `href` and the visible text) and social links

To change colours, edit the variables at the top of `style.css`. There's a matching dark theme
in the `prefers-color-scheme: dark` block.

## 2. Preview it

Double-click `index.html`, or run a local server from this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## 3. Put it online (free options)

- **GitHub Pages:** push the folder to a repo, then Settings → Pages → deploy from the `main` branch.
- **Netlify or Cloudflare Pages:** drag the folder into the dashboard.

## Notes

- Fonts (Bricolage Grotesque and Source Serif 4) load from Google Fonts. If they can't load, the page falls back to system fonts.
- The page respects light/dark mode, keyboard navigation and reduced-motion settings.
