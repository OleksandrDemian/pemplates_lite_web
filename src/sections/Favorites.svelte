<script>
	import favorites from "../storage/favorites";
	import SearchResult from "../components/SearchResult.svelte";

	let fav = favorites.get();
</script>

<div id="favorites">
	<h2>Favorites</h2>
	{ #if fav.length > 0 }
		{#each fav as favorite}
			<SearchResult githubRepo={favorite} />
		{/each}
	{:else}
		<h4 class="m-3">There are no favorites</h4>
	{ /if }
</div>

<style>
	div#favorites {

	}
</style>
