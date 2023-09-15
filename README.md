# Bridgetown Excellent

Welcome to your new Bridgetown website! You can update this README file to provide additional context and setup information for yourself or other contributors.

## Preview

[https://bridgetown-excellent.netlify.app/](https://bridgetown-excellent.netlify.app/)

## Table of Contents

- [Features](#features)
- [TODO](#todo)
- [Install](#install)
- [Development](#development)
- [Commands](#commands)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features

- Built with [Bridgetown](https://www.bridgetownrb.com).
- [Remix](https://remixicon.com/) icons.
- [Atkinson Hyperlegible](https://brailleinstitute.org/freefont) typeface for greater legibility and readability for low vision readers, locally served.
- Justin Ribeiro's [`lite-youtube`](https://github.com/justinribeiro/lite-youtube) plugin.
- [Bridgetown SEO Tag](https://github.com/bridgetownrb/bridgetown-seo-tag) plugin for better SEO.
- Opens external links and PDFs in a new window. Thanks to Joost van der Schee from [JekyllCodex](http://jekyllcodex.org/).
- Favicon generated with [Favicon.io](https://favicon.io/)
- Blog post placeholder image from [Placehold.co](https://placehold.co/)
- [Sitemap](https://github.com/ayushn21/bridgetown-sitemap) plugin for better SEO.
- Host on [Render](https://render.com/), just edit the `render.yaml` file in site root.

## TODO

- [x] Accessible, responsive and robust main navigation.
- [x] SEO basics.
- [x] Sitemap.
- [ ] Activate/load `lite-youtube` only with `youtue: true` in front-matter.
- [ ] Inline SVG files.
- [x] Open external links in a new tab/window.
- [ ] Create basic components/layouts.

## Install

```sh
cd bridgetown-site-folder
bundle install && yarn install
```

> Learn more: [Bridgetown Getting Started Documentation](https://www.bridgetownrb.com/docs/).

## Development

To start your site in development mode, run `bin/bridgetown start` and navigate to [localhost:4000](https://localhost:4000/)!

Use a [theme](https://github.com/topics/bridgetown-theme) or add some [plugins](https://www.bridgetownrb.com/plugins/) to get started quickly.

### Commands

```sh
# running locally
bin/bridgetown start

# build & deploy to production
bin/bridgetown deploy

# load the site up within a Ruby console (IRB)
bin/bridgetown console
```

> Learn more: [Bridgetown CLI Documentation](https://www.bridgetownrb.com/docs/command-line-usage)

## Deployment

You can deploy Bridgetown sites on hosts like Render or Vercel as well as traditional web servers by simply building and copying the output folder to your HTML root.

> Read the [Bridgetown Deployment Documentation](https://www.bridgetownrb.com/docs/deployment) for more information.
