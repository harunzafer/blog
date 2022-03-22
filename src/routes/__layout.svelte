<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/style.css';
</script>

<svelte:head>
	<title>Harun Zafer</title>
</svelte:head>

<div class="wrapper">
	<Header />

	<div class="main">
		<main>
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		padding: 60px 20px 30px 20px;
		max-width: 1200px;
		margin: 0 auto 0 auto;
		gap: 30px;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 1200px) {
		.wrapper {
			flex-direction: column;
		}
	}
</style>
