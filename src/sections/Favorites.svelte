<script>
	import favorites from "../store/favorites";
	import SearchResult from "../components/SearchResult.svelte";

	let fav = favorites.get();

	const onRemove = () => {
		fav = favorites.get();
	};
</script>

<div class="col-lg-5 col-md-12">
	{ #if fav.length > 0 }
		{#each fav as favorite}
			<SearchResult githubRepo={favorite} on:removeFavorite={onRemove} />
		{/each}
	{:else}
		<h4 class="m-3">There are no favorites</h4>
	{ /if }
</div>