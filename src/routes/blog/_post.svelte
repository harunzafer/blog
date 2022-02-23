<!-- This layout matches only blog routes. 
    We can opt a Markdown file out of any mdsvex layout by adding layout: false to the frontmatter. 
 -->
<script>
	export let title;
	export let date;
</script>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
