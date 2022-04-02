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

In my case, I use separate repositories. 

```
"build": "rm -rf build && svelte-kit build && touch build/.nojekyll && echo harunzafer.com >> build/CNAME",
"deploy": "npm run build && npx gh-pages -d build -b master -r git@main:hrzafer/hrzafer.github.io.git -t true",`
```

of the series, we'll build an absolute minimal markdown blog with SvelteKit.

<br>

[Static Blogging with SvelteKit Part 0: Introduction](/blog/static-blogging-with-sveltekit-part-0-introduction)

[Static Blogging with SvelteKit Part 1: Creating a Minimal Blog](/blog/static-blogging-with-sveltekit-part-1-creating-a-minimal-blog)

Static Blogging with SvelteKit Part 2: Deploying to GitHub Pages (you are here)

[Static Blogging with SvelteKit Part 3: Adding Tags or Categories to Posts](blog/#)


## Coming Soon

```js
console.log('article coming soon');
```