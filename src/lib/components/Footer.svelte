<script>
	import Widgets from './Widgets.svelte';
	import MediaQuery from './MediaQuery.svelte';
</script>

<MediaQuery query="(max-width: 1199px)" let:matches>
	{#if matches}
		<Widgets />
	{/if}
</MediaQuery>

<footer class="footer">
	<p>©2015–2022 Harun Zafer.</p>
	<p>
		Made with <a href="https://kit.svelte.dev/">SvelteKit</a>. Hosted on
		<a href="https://pages.github.com/">GitHub Pages</a>.
	</p>
</footer>

<style>
	footer {
		width: 70%;
		margin-top: 100px;
		padding: 30px;
		/* border-style: dashed; */
		text-align: center;
		font-size: 0.75em;
		border-top: solid 1px #e7e9ee;
	}
</style>
