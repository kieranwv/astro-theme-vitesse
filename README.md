# Vitesse theme for Astro

A minimal, SEO-friendly portfolio and blog theme for Astro, supports Vue and UnoCSS.

[![Netlify Status](https://api.netlify.com/api/v1/badges/0624323a-339f-48da-8b28-03037d664c40/deploy-status)](https://app.netlify.com/sites/astro-theme-vitesse/deploys)

## Preview

![Preview Image](./public/preview.jpg)

## Features

- 100 / 100 Lighthouse performance.
- Responsive.
- SEO-friendly.
- Light / Dark Theme.
- Markdown support.
- <a target="_blank" href="https://mdxjs.com/">MDX</a> (components in your markdown) support.
- <a target="_blank" href="https://vuejs.org/">Vue</a> SFC component support.
- Auto generated sitemap and RSS Feed <a target="_blank" href="https://vueuse.org/">VueUse</a> & <a target="_blank" href="https://lodash.com/">Lodash</a> support.
- Use the <a target="_blank" href="https://unocss.dev/">UnoCSS</a> for style, it's fast.

## Lighthouse Performance

![Lighthouse Performance Image](./public/lighthouse.jpg)

## Quick Start

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kieranwv/astro-theme-vitesse)

Click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

If you  just want to develop locally, you can [create a repo](https://github.com/kieranwv/astro-theme-vitesse/generate) from this template on GitHub.

## Usage

First, install the dependencies.

```bash
npm install
```

Just run and visit http://localhost:1977.

```bash
npm run dev
```

> Node.js version 18 or higher is required for this project.

To build the App, you can run:

```bash
npm run build
```

You will then see the `dist` folder generated for publishing, which you can preview locally with the following command.

```bash
npm run preview
```

## Use pnpm / yarn

If you want to use pnpm or yarn as a package management tool, please refer to the following steps.

> If `preinstall` exists in `scripts`, remove it first.

### pnpm

Replace `"pre-commit": "npx lint-staged"` in package.json with `"pre-commit": "pnpm lint-staged"`.

And replace `"*": "npm run lint:fix"` with `"*": "pnpm lint:fix"`.

Like this:

```json
{
  // ...
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "pnpm lint:fix"
  }
}
```

### yarn

Replace `"pre-commit": "npx lint-staged"` in package.json with `"pre-commit": "yarn lint-staged"`.

And replace `"*": "npm run lint:fix"` with `"*": "yarn lint:fix"`.

Like this:

```json
{
  // ...
  "simple-git-hooks": {
    "pre-commit": "yarn lint-staged"
  },
  "lint-staged": {
    "*": "yarn lint:fix"
  }
}
```

## License

[MIT License](./LICENSE) © 2024 [Kieran Wang](https://github.com/kieranwv/)
