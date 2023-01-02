---
title: "Static Blogging with SvelteKit"
date: "2022-03-30"
categories: 
  - "svelte"
  - "blogging"
---

<script>
    import '$lib/styles/prism-one-dark.css';
</script>

<!-- Markdown content here -->

In this article series, I want to share my experience on creating a static blog from scratch with SvelteKit.

<br>

## Why a static blog instead of Wordpress?

I have a WordPress [blog](https://hrzafer.com/) in Turkish since 2008 which has around 60 technical posts. Although I haven't written any posts for years, it still generates around 5K visitors per month. In short, I am an experienced WordPress user who still uses it. 

<br>

Since this blog will be mostly about software engineering and my open source projects on GitHub, it just felt right to host this blog also on GitHub in the first place. On top of that, it brings the following advantages:

- Hosting is free on GitHub pages.
- Super fast since everything is static.
- No backup needed, git version control already takes care of everything.
- I prefer writing blog posts in Markdown rather than a rich text editor.
- Migration is easy if I ever want to host my blog somewhere else.
- It is a great way of improving my frontend skills (more on that in the next section).

Of course, these advantages don't come for free. Here are some cons you should consider before deciding whether to use a static site generator (SSG) or not.

- Not for everyone. Depending on the SSG you use, it requires some basic software development skills or at least familiarity with the terminal.
- Again depending on the SSG, the number of plugins and themes are very limited compared to WordPress. (No theme or plugin for SvelteKit)
- Dynamic parts like a comments section is cumbersome to add (but not impossible).

## Why SvelteKit?

As an experienced backend developer, I always felt the lack of frontend development skills whenever I wanted to work on a side project. I knew some basic CSS, HTML, and JS but was never confident to build anything that is not super simple and doesn't look horrendous. In addition, I had tried all major frontend frameworks (react, vue, angular) but couldn't like any of them. Finally, I've found Svelte which I fell in love with at first sight and there were no excuses left for me not to learn frontend development seriously.
<br>
That's why instead of some SSGs such as Jekyll, Gatsby, and Hugo that require much less coding and provide some ready-to-use plugins and themes, I decided to go with SvelteKit. SvelteKit is built on top of Svelte and provides pretty much everything to build a web application. So static site generation is not the main purpose of SvelteKit unlike the other tools mentioned above. 

In summary, SvelteKit is way more flexible and capable than regular SSGs. As a trade-off I have to code a blog from scratch but that's already what I want to learn CSS, JS, Svelte, SvelteKit in a fun way. 


## Why blogging now?

After many years, I've finally found the motivation to start a blog in English, because I decided to contribute more on my open source projects on GitHub and I want to write about them. 


## Where to Start

I benefited a lot from [this article](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog). I also recommend checking out [these articles](https://svelteland.github.io/svelte-kit-blog-demo/).

## What is Next

The articles above give you a good starting point but there are still much to do such as styling, pagination, and comments section. I will be sharing more blog post as I implement those features on my blog. You can always [check out the source code for this blog](https://github.com/harunzafer/blog). The hosted files which are generated as static can be found [here](https://github.com/harunzafer/hrzafer.github.io).







