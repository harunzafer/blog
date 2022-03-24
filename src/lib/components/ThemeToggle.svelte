<script>
	import { onMount } from 'svelte';

	let mode = '';
	onMount(() => {
		mode = localStorage.getItem('theme') ?? 'dark';
		if (mode === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
		}
	});

	function toggleNightMode() {
		if (mode === 'light') {
			mode = 'dark';
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			mode = 'light';
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	}
</script>

<div class="mode {mode}" id="mode-switcher" on:click={toggleNightMode}>
	<span />
</div>
