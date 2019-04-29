# Coding interview: algorithms and data structures

A website for reviewing algorithms and data structures to prepare
for coding interviews.

## Python requirements

These Python packages are needed to build the site.
- htmlmin
- jinja2
- libsass

Install these plugins using pip.

## Formatting code

> TODO: css setup for 60 charater line limit

## Building

Run python script `build.py` to generate the updated HTML and CSS for the
site. The built files are placed in the `docs/` directory. GitHub pages is used
to host the site, so push changes to the master branch on GitHub to deploy.

## Making changes

Jinja2 templates in the `templates/` directory define the site content.
Each page consists of these main components:
- `base`: The framework of every page.
- `banner`: The title banner shown at the top of each page.
- `menu`: The site menu shown below the banner.
- `content`: The content block in which each page's unique content is shown.

The remaining jinja templates contain the content of individual pages. Edit
these templates and rebuild the site to make updates. To add a new page, create
a new template for it and then add a corresponding entry to the `MENU_ITEMS`
list in `build.py`.

CSS is generated by converting the scss files in `styles/` to CSS. Edit these
files, rebuild, and deploy to change the style. If adding a new scss file,
it must be imported in `styles/main.scss`.
