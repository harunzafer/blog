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

<button id="dark-mode-toggle" class="dark-mode-toggle" on:click={toggleNightMode}>
	<svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"
		><path
			fill="currentColor"
			d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"
			transform="translate(-8 -8)"
		/></svg
	>
</button>

<!-- <div class="mode {mode}" id="mode-switcher" on:click={toggleNightMode}>
	<span />
</div> -->
<style>
	.dark-mode-toggle {
		color: var(--foreground);
		border: 0px;
		padding: 4px;
		background: transparent;
		cursor: pointer;
		border-radius: 5px;
		width: 30px;
		height: 30px;
	}
	.dark-mode-toggle:hover {
		transform: scale(1.1);
	}
</style>
