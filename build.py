#!/usr/bin/python3
from collections import namedtuple
from glob import glob
from jinja2 import Template
import htmlmin
import sass


DOCS = 'docs/'


def build_algorithms():
    """Generate a javascipt file containing all algorithm data."""
    paths = glob('algorithms/**/*.js', recursive=True)
    algorithms = []
    for path in paths:
        with open(path, 'r') as f:
            algorithms.append(f.read())
    with open('templates/algorithms.js.jinja', 'r') as f:
        template = Template(f.read())
    text = template.render({
        "algorithms": algorithms,
    })
    with open(DOCS + 'algorithms.js', 'w') as f:
        f.write(text)


def build_styles():
    """Generate CSS file from sass files."""
    css = sass.compile(
        filename='styles/main.scss',
        output_style='compressed'
    )
    with open(DOCS + 'main.css', 'w') as f:
        f.write(css)


# def build_pages():
#     """Generate html content."""
#     banner = render_page('templates/banner.html.jinja')
#     generate_page_content(banner, 'Home', 'index.html')
#     for menu_item in MENU_ITEMS:
#         generate_page_content(banner, menu_item.name, menu_item.route)
#
#
# def generate_page_content(banner, page_name, filename):
#     content = render_page(
#         'templates/base.html.jinja',
#         {
#             "banner": banner,
#             "menu": render_page(
#                 'templates/menu.html.jinja',
#                 {
#                     "current_page": page_name,
#                     "menu_items": MENU_ITEMS,
#                 }
#             ),
#             "content": render_page('templates/{}.jinja'.format(filename)),
#         }
#     )
#     with open(DOCS + filename, 'w') as f:
#         f.write(htmlmin.minify(content))


def render_page(path, args={}):
    """Convert a jinja template to an html file."""
    with open(path, 'r') as f:
        template = Template(f.read())
    return template.render(args)


def run():
    build_algorithms()
    build_styles()
    # build_pages()


if __name__ == "__main__":
    run()
