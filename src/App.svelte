<script>
	import Loading from "./components/Loading.svelte";
	import SearchResult from "./SearchResult.svelte";

	let searchValue = "";
	let filterValue = "";
	let topicValue = "template";
	let isSearching = false;
	let result = null;

	const onKeyUp = (e) => {
		if (e.keyCode === 13) {
			search();
		}
	};

	const search = async () => {
		//todo: topic:boilerplate+topic:starter-kit
		if(searchValue.length < 1){
			return;
		}

		isSearching = true;
		filterValue = searchValue;
		try {
			// const url = `https://api.github.com/search/repositories?q=${search_value}+topic:template&sort=stars`;
			const url = `https://api.github.com/search/repositories?q=${searchValue}+topic:${topicValue}&sort=stars`;
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
	<div id="app" class="row justify-content-center">
		<div class="col-lg-6 col-md-12">
			<div class="m-3">
				<h1>
					<a id="headLink" href="https://github.com/OleksandrDemian/pemplates_lite_web" target="_blank">
						Pemplates
					</a>
				</h1>

				<div class="form-check form-check-inline m-3">
					<input class="form-check-input" id="ir1" type="radio" name="topic" value="template" bind:group={topicValue} checked>
					<label class="form-check-label" for="ir1">Templates</label>
				</div>
				<div class="form-check form-check-inline m-3">
					<input class="form-check-input" id="ir2" type="radio" name="topic" value="boilerplate" bind:group={topicValue}>
					<label class="form-check-label" for="ir2">Boilerplate</label>
				</div>
				<div class="form-check form-check-inline m-3">
					<input class="form-check-input" id="ir3" type="radio" name="topic" value="starter-kit" bind:group={topicValue}>
					<label class="form-check-label" for="ir3">Starter-kit</label>
				</div>

				<div class="input-group mb-3">
					<input class="form-control border-primary" type="text" bind:value={searchValue} on:keyup={onKeyUp} placeholder="Keywords" />
					<div class="input-group-append">
						<button class="btn btn-outline-primary" on:click={search}>Search</button>
					</div>
				</div>
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

	<div id="footer" class="row justify-content-center">
		<div id="footer-container" class="col-lg-6 col-md-12">
			Made by <a target="_blank" href="https://twitter.com/9zemian5">Oleksandr Demian</a>
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
</style>