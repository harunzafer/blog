<!-- This layout matches only blog routes. 
    We can opt a Markdown file out of any mdsvex layout by adding layout: false to the frontmatter. 
 -->
<script>
	import '$lib/styles/prism-one-dark.css';
	export let title;
	export let date;
</script>

<svelte:head>
	<title>My blog - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
