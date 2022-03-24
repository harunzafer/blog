<script>
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav class="navbar">
	<div class="toggle">
		<ThemeToggle />
	</div>

	<ul>
		<li><a href="/blog" title="Blog">Blog</a></li>
		<li><a href="/projects" title="Projects">Projects</a></li>
		<li><a href="/contact" title="Contact">Contact</a></li>
	</ul>
</nav>

<style>
	.toggle {
		display: flex;
		align-items: center;
	}
	.navbar {
		background-color: gray;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--bg-color);
		border: 1px dashed var(--border-color);
		margin-bottom: 30px;
		padding-left: 5px;
		padding-right: 10px;
	}
	.navbar ul {
		display: flex;
		margin: 0;
	}
	.navbar ul li {
		list-style-type: none;
		margin-left: 10px;
	}
	.navbar li a:hover {
		font-weight: bold;
	}

	.navbar li a::before {
		display: block;
		content: attr(title);
		font-weight: bold;
		height: 0;
		overflow: hidden;
		visibility: hidden;
	}
</style>
