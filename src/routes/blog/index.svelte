<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Blog - Harun Zafer</title>
</svelte:head>

<h1>Posts</h1>

<div class="post-container">
	{#each posts as post}
		{#if !post.meta.draft}
			<div class="post-list">
				<a class="post-title" href={post.path}>{post.meta.title}</a>
				<time datetime={post.meta.date} class="post-date">{post.meta.date}</time>
			</div>
		{/if}
	{/each}
</div>

<!-- <style>
	.post-list-container {
		width: 80%;
	}
	.post-list {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding: 5px 10px;
		font-size: 1.5em;
	}
	.post-list a {
		text-decoration: none;
		color: black;
	}
</style> -->
