<script>
	import Loading from "./Loading.svelte";
	import SearchResult from "./SearchResult.svelte";

	let searchValue = "";
	let filterValue = "";
	let isSearching = false;
	let result = null;

	const onKeyUp = (e) => {
		if (e.keyCode === 13) {
			search();
		}
	};

	const search = async () => {
		//todo: topic:boilerplate+topic:starter-kit
		isSearching = true;
		filterValue = searchValue;
		try {
			// const url = `https://api.github.com/search/repositories?q=${search_value}+topic:template&sort=stars`;
			const url = `https://api.github.com/search/repositories?q=${searchValue}+topic:template&sort=stars`;
			const response = (await fetch(url));
			const data = await response.json();
			result = data.items;
			console.log(result);
		} catch (e) {
			console.error(e);
		}

		isSearching = false;
	}
</script>

<div class="container-fluid">
	<div class="row justify-content-center">
		<div class="col-lg-6 col-md-12">
			<div class="m-3">
				<h1>Pemplates</h1>
				<input class="form-control" type="text" bind:value={searchValue} on:keyup={onKeyUp} placeholder="Keywords" />
			</div>

			<div>
				{#if isSearching}
					<div class="m-3">
						<Loading message="Searching" />
					</div>
				{:else}
					{ #if result != null }
						{ #if result.length > 0 }
							{#each result as searchResult (searchResult.full_name)}
								<SearchResult githubRepo={searchResult} />
							{/each}
						{:else}
							<h3>There are no project templates for <b>"{filterValue}"</b></h3>
							<p>
								If you are sure there are, please let know to it's owner to mark it as template.
								Meanwhile, you can import it manually from "New" section.
							</p>
						{ /if }
					{/if}
				{/if}
			</div>
		</div>
	</div>
</div>