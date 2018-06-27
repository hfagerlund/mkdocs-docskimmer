# docSkimmer Theme

**docSkimmer** is a skimmable minimal theme for [MkDocs](https://github.com/mkdocs/mkdocs/).

<img style="max-width:100%;" alt="Screenshot of docSkimmer theme for MkDocs" src="/screenshots/mkdocs-docskimmer.png" align="center" /><br />

*Figure 1: Screenshot of docSkimmer theme for MkDocs*

## Features

* accessible;
* responsive;
* valid HTML5 + CSS3;
* no fonts (include only what you prefer using `extra_css`);
* no libs - except for a single (~2KB) module (include only what you prefer using `extra_javascript`);
* supports MkDocs configuration features such as `google_analytics`.

## Install

* Clone docSkimmer from GitHub:

```
$ git clone https://github.com/hfagerlund/mkdocs-docskimmer.git

```

Or [download the required version](https://github.com/hfagerlund/mkdocs-docskimmer/releases) - refer to: ['Version compatibility'](https://github.com/hfagerlund/mkdocs-docskimmer#version-compatibility).

* Copy the contents of the `mkdocs_docskimmer` directory into the MkDocs project root (ie. at the same level as the `docs` directory).

### For docSkimmer v0.2.1:

* Add to `mkdocs.yml`:

```
theme:
  name: null
  custom_dir: 'mkdocs_docskimmer'
  include_search_page: true
  search_index_only: false
  static_templates:
  - 404.html

plugins: ['search']

extra:
    version: 0.2.1

```

### For docSkimmer v0.2.0:

* Add to `mkdocs.yml`:

```
theme:
    name: null
    custom_dir: 'mkdocs_docskimmer'

static_templates:
    - 404.html

extra:
    version: 0.2.0

```

### For docSkimmer v0.1.x:

* Add to `mkdocs.yml`:

```
theme_dir: 'mkdocs_docskimmer'

```

(Not on PyPI yet. )

## Version compatibility

| docSkimmer theme version(s) | MkDocs version(s) |
| :------: | :------: |
| 0.2.1 | 0.17.4<br>0.17.3<br>0.17.2<br>0.17.0 |
| 0.2.0 | 0.17.0 |
| 0.1.1<br>0.1.0 | 0.16.3<br>0.16.2 |

## Demo

A demo of the docSkimmer theme is available on its [documentation homepage](https://hfagerlund.github.io/mkdocs-docskimmer/).


## License
Copyright (c) 2017 Heini Fagerlund. Licensed under the [Simplified BSD License](https://github.com/hfagerlund/mkdocs-docskimmer/blob/master/LICENSE).
