<script>
	import Search from "./sections/Search.svelte";
	import Configurations from "./sections/Configurations.svelte";
	import About from "./sections/About.svelte";
	import Favorites from "./sections/Favorites.svelte";
	import HowItWorks from "./sections/HowItWorks.svelte";
	import Footer from "./sections/Footer.svelte";
	import Navigation from "./sections/Navigation.svelte";
	import Route from "./store/route";

	export let searchValue;
</script>

<main>
	<Navigation />

	<div id="app">
		{#if $Route.hash === "search" || $Route.hash === ""}
			<Search searchValue={searchValue} />
		{:else if $Route.hash === "config"}
			<Configurations />
		{:else if $Route.hash === "favorites"}
			<Favorites />
		{:else if $Route.hash === "howItWorks"}
			<HowItWorks />
		{:else if $Route.hash === "about"}
			<About />
		{/if}

		<Footer />
	</div>
</main>

<style>
	/* mobile and desktop */
	main {
		max-width: 1000px;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 25px;
		margin-left: auto;
		margin-right: auto;

		padding: 15px 45px;
		margin-top: 60px;
	}

	/*APP*/
	div#app {
		display: flex;
		flex-direction: column;
		/* ignore nav bar */
		min-height: calc(100vh - 90px);
		justify-content: space-between;
	}

	/* desktop */
	@media screen and (min-width: 771px) {
		main {
			grid-template-columns: 1fr 3fr 1fr;
			padding: 0;
			margin-top: 0;
			min-height: 100vh;
		}
	}
</style>
