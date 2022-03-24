<!-- This layout matches only blog routes. 
    We can opt a Markdown file out of any mdsvex layout by adding layout: false to the frontmatter. 
 -->
<script>
	import '$lib/styles/prism-one-dark.css';
	import { page } from '$app/stores';
	export let title;
	export let date;
</script>

<svelte:head>
	<title>My blog - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<h1>{title}</h1>

<div class="post-header">
	<div class="post-date">{date}</div>
	<div class="post-share">
		Share:&nbsp;
		<a href="https://www.facebook.com/sharer/sharer.php?u={$page.url}" target="_blank"
			><img src="/images/icon/facebook.svg" class="social-icon" alt="facebook share button" /></a
		>
		<a
			href="https://twitter.com/intent/tweet?source=tweetbutton&amp;original_referer={$page.url}&amp;text=Mi adipiscing condimentum malesuada congue enim et"
			target="_blank"
			><img src="/images/icon/twitter.svg" class="social-icon" alt="twitter share button" /></a
		>
		<a href="https://api.whatsapp.com/send?text={$page.url}" target="_blank"
			><img src="/images/icon/whatsapp.svg" class="social-icon" alt="whatsapp share button" /></a
		>
	</div>
</div>

<p>Published: {date}</p>

<div class="blog-post-content">
	<slot />
</div>
