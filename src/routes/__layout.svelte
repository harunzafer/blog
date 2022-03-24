<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Harun Zafer</title>
</svelte:head>

<div class="container">
	<Header />
	<Navbar />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	main {
		width: 100%;
	}
</style>
