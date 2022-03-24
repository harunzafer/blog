<script>
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav class="navbar">
	<div class="toggle">
		<ThemeToggle />
	</div>

	<ul>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/projects">Projects</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<style>
	.navbar {
		background-color: gray;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--bg-color);
		border: 1px dashed var(--border-color);
		margin-bottom: 30px;
	}
	.navbar ul {
		display: flex;
		margin: 0;
	}
	.navbar ul li {
		list-style-type: none;
		margin: 0px 10px;
	}
</style>
