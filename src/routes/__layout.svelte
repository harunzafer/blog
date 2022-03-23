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

	<div class="main-container">
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
		max-width: 1205px;
		margin: 0 auto 0 auto;
		gap: 45px;
	}

	main {
		width: 100%;
	}

	.main-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 960px;
		align-items: center;
	}

	@media (max-width: 400px) {
		.wrapper {
			padding: 35px 20px 30px 20px;
		}
	}

	@media (max-width: 1200px) {
		.wrapper {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
