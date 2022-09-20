---
title: "Hosting your static blog on GitHub Pages"
date: "2022-04-01"
categories: 
  - "numbers"
  - "odd"
draft: true
---

In the previous article we talked about creating a static blog with SvelteKit and I pointed out some good articles as starting points. In this article, I want to share my configuration to deploy my blog to GitHub pages.

First of all you need a public repository for hosting. You can either have two separate repositories for source code and hosted files or you can have a single repo with two branches.

In my case, I use separate repositories. Here is my packages.json scripts to build and deploy my blog.

```
"build": "rm -rf build && svelte-kit build && touch build/.nojekyll && echo harunzafer.com >> build/CNAME",
"deploy": "npm run build && npx gh-pages -d build -b master -r git@main:hrzafer/hrzafer.github.io.git -t true",`
```

- `touch build/.nojekyll` is to tell GitHub, we're not using Jekyll.
- `echo harunzafer.com >> build/CNAME` is to tell GitHub we're using a custom domain.
- `npx gh-pages` will be pushing `build` folder to the `master` branch of 
- `-t true` flag is to tell `gh-pages` to upload files starting with `.` as well.

<br>

## Coming Soon

```js
console.log('article coming soon');
```