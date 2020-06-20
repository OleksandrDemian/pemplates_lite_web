<script>
	import Search from "./sections/Search.svelte";
	import Configurations from "./sections/Configurations.svelte";
	import About from "./sections/About.svelte";
	import Favorites from "./sections/Favorites.svelte";
	import HowItWorks from "./sections/HowItWorks.svelte";

	export let searchValue;

	let route = "search";

	window.addEventListener('hashchange', function () {
		switch (location.hash) {
			case "#search":
				route = "search";
				break;
			case "#config":
				route = "config";
				break;
			case "#about":
				route = "about";
				break;
			case "#howItWorks":
				route = "howItWorks";
				break;
			case "#favorites":
				route = "favorites";
				break;
		}
	});
</script>

<div class="container-fluid">
	<div id="app" class="row justify-content-center">
		<div class="col-lg-2">
			<div class="m-3">
				<h4><img id="spicysalmon" src="/spicysalmon_512_t.png" width="64" /></h4>
				<a href="#search"><h4>Pemplates</h4></a>
				<a href="#about"><h4>About</h4></a>
				<a href="#howItWorks"><h4>How it works</h4></a>
				<a href="#config"><h4>Configurations</h4></a>
				<a href="#favorites"><h4>Favorites</h4></a>
			</div>
		</div>

		{#if route === "search"}
			<Search searchValue={searchValue} />
		{:else if route === "config"}
			<Configurations />
		{:else if route === "favorites"}
			<Favorites />
		{:else if route === "howItWorks"}
			<HowItWorks />
		{:else if route === "about"}
			<About />
		{/if}
	</div>

	<div id="footer" class="row justify-content-center">
		<div id="footer-container" class="col-lg-6 col-md-12">
			<p>Made by <a target="_blank" href="https://twitter.com/9zemian5"><h4>Oleksandr Demian</h4></a></p>
		</div>
	</div>
</div>

<style>
	#app {
		min-height: 90vh;
	}

	#footer {
		height: 10vh;
		align-items: center;
	}

	#footer-container {
		text-align: center;
	}

	#spicysalmon {
		margin-left: auto;
		margin-right: auto;
	}
</style>