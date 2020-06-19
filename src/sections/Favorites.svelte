<script>
	import favorites from "../store/favorites";
	import SearchResult from "../components/SearchResult.svelte";

	let fav = favorites.get("favorites");

	const onRemove = () => {
		fav = favorites.get("favorites");
	};
</script>

<div class="col-lg-5 col-md-12 p-3">
	{ #if fav.length > 0 }
		{#each fav as favorite}
			<SearchResult githubRepo={favorite} mode={2} on:removeFavorite={onRemove} />
		{/each}
	{:else}
		<h4>There are no favorites</h4>
	{ /if }
</div>