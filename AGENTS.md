# Portfolio agent guide

## Purpose and scope

This is Edy Laverde’s personal portfolio. Edy is a software developer based in
Medellín, Colombia. The site introduces him and lists a few apps with short
descriptions and links. Keep it simple, modern, clean, and easy to maintain.

The user selected the **Editorial** design. Preserve its generous whitespace,
restrained green accents, light background, typography, and compact project
list. Do not restore the discarded Gallery or After hours designs or the design
switcher unless requested.

## Stack and files

The site uses plain HTML, CSS, and vanilla JavaScript. There is no package
manager, build step, backend, or test framework. Keep this architecture for
ordinary changes; do not introduce a framework or dependencies without a
concrete need in the requested work.

- `index.html`: page structure, introduction, metadata, project container,
  no-JavaScript fallback, and footer.
- `styles.css`: Editorial styling, responsive breakpoints, and accessibility
  states. Use the existing CSS variables for colors and fonts.
- `projects.js`: project data and rendering. Edit names, descriptions, URLs,
  access labels, and inline SVG icons here.
- `favicon.svg`: the site icon.
- `.nojekyll`: keeps GitHub Pages serving the site as plain static files.
- `README.md`: preview instructions, configuration, and publishing steps.

Google Fonts supplies DM Sans and Manrope; retain usable fallback fonts.
Keep local asset paths relative so the site works under a GitHub Pages
repository path as well as at a domain root.

## Content and project links

The projects are Facturoide, Better Sura, Cámara, Nido, SideVista, Maybe, and
Portfolio Dashboard. Keep descriptions short, factual, and focused on what
each app helps people do. Site copy is
currently English; preserve accents in names such as Medellín and Cámara.

The sibling project directories are source references, not deployed URLs. Do
not modify those apps as part of portfolio work or copy private app data,
credentials, or personal records into this public site.

Use confirmed public HTTPS URLs. Do not infer that an app or its repository is
public. An unknown URL stays `null`; the renderer shows “Link coming soon”
when the project has no access label.
Use `access: "Private"` for a confirmed private project, `access: "Invite only"`
for a restricted project, or `access: "Public"` when an explicit public label
is wanted. `access: null` omits the label. These labels are descriptive, not
access controls.

When changing the project list, also update the count and the `noscript`
summary in `index.html`. The HTML templates in `projects.js` currently render
trusted, locally maintained content; do not interpolate untrusted data into
them.

## Working and checking changes

Inspect the current files and Git status before editing; preserve unrelated
user changes. Keep edits focused and update the README when configuration or
publishing instructions change.

Preview from the repository root:

```sh
python3 -m http.server 8080
```

For JavaScript changes, run `node --check projects.js`. Check local asset paths
and remove obsolete references when deleting or renaming files. There is no
automated test suite; do not add test infrastructure for routine copy or style
changes.

For layout or interaction changes, use an available browser to check desktop
and mobile widths, all seven projects, links, keyboard focus, and horizontal
overflow. Preserve semantic headings, the skip link, accessible link names,
the no-JavaScript fallback, and reduced-motion support. If browser validation
is unavailable, say so rather than claiming it passed.

The site targets GitHub Pages with the repository root as its publishing
source. Keep it compatible with static hosting. Local implementation does not
imply deployment; report what changed, what was verified, and whether anything
was published.
