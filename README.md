# Edy Laverde — portfolio

A responsive personal portfolio using the Editorial design: a quiet introduction and an easy-to-scan list of seven projects.

## Stack

Plain HTML, CSS, and a small JavaScript file. No framework, packages, or build step. Google Fonts supplies DM Sans and Manrope, with system fallbacks if unavailable. All other assets are local.

## Preview

Open `index.html` in a browser, or run this in the project directory:

```sh
python3 -m http.server 8080
```

Visit http://localhost:8080 to view the portfolio.

## Project links

Project names, descriptions, URLs, and access labels are in `projects.js`.

- Facturoide, Nido, and Portfolio Dashboard are private and have no public links.
- Maybe is invite only and has no confirmed public link.
- [Better Sura](https://better-sura.vercel.app/), [Cámara](https://camaras-cc6weex16-edymerchks-projects.vercel.app/), and [SideVista](https://sidevista.edyhack.workers.dev/) are public. SideVista's production URL is documented in its README.

For future projects, use a confirmed public HTTPS URL and `access: "Public"`, or `url: null` with `access: "Private"` or `access: "Invite only"` as appropriate. An unconfigured project with neither a URL nor an access label shows “Link coming soon”.

The sibling project directories were used to read project descriptions. They are local source directories, not deployed URLs. No private app data is included.

The GitHub profile link uses `edymerchk`, found in the Facturoide repository README. Confirm this is the profile you want to share.

## Publish on GitHub Pages

This repository, `edymerchk/edymerchk.github.com`, publishes the portfolio at `https://edymerchk.github.io/` from its `master` branch and `/ (root)` folder. Update this repository when publishing site changes. Relative asset links work at the domain root, and `.nojekyll` keeps the site on plain static hosting.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The Editorial portfolio is published at the root URL above.
