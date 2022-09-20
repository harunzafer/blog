<!-- This layout matches only blog routes. 
    We can opt a Markdown file out of any mdsvex layout by adding layout: false to the frontmatter. 
 -->
<script>
	// import '$lib/styles/prism-one-dark.css';
	export let title;
	export let date;
	export let categories;
</script>

<svelte:head>
	<title>My blog - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<h1>{title}</h1>

<div class="post-header">
	<div class="post-date">
		<img src="/images/icon/calendar-solid.svg" class="social-icon" alt="calendar icon" />
		<time datetime="2019-10-23T00:00:00Z">{date} </time>
	</div>
	<div class="post-tags">
		<img src="/images/icon/hashtag-solid.svg" class="social-icon" alt="calendar icon" />
		{#each categories as category}
			<div class="category"><a href="/#">{category}</a></div>
		{/each}
	</div>
</div>

<!-- <p>Published: {date}</p> -->

<div class="blog-post-content">
	<slot />
</div>

<style>
	h1 {
		margin-bottom: 15px;
	}
	.post-date * {
		vertical-align: middle;
	}
	.post-header .social-icon {
		height: 16px;
		margin-right: 5px;
		vertical-align: middle;
	}
	.post-header {
		vertical-align: middle;
		margin-bottom: 3em;
	}
	.post-date {
		vertical-align: middle;
	}

	.category {
		margin-right: 5px;
		background: var(--bg-color);
		padding: 0px 5px;
		font-weight: bold;
	}
	.category:hover {
		background: var(--bg-hover-color);
	}

	.post-tags {
		display: flex;
		align-items: center;
	}
</style>
