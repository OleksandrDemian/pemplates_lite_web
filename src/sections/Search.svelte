<script>
	import Loading from "../components/Loading.svelte";
	import SearchResult from "../components/SearchResult.svelte";
	import {onMount} from "svelte";

	export let searchValue = "";
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
		document.activeElement.blur();
		if(searchValue == null || searchValue.length < 1){
			result = null;
			return;
		}

		isSearching = true;
		filterValue = searchValue;
		try {
			const url = `https://api.github.com/search/repositories?q=${searchValue}+topic:${topicValue}&sort=stars`;
			const response = (await fetch(url));
			const data = await response.json();
			result = data.items;
			console.log(data);
		} catch (e) {
			console.error(e);
		}

		isSearching = false;
	};

	onMount(search);
</script>

<div id="searchContainer" class="col-lg-5 col-md-12">
	<div class="m-3">
		<div class="form-group">
			<label for="searchIn"><b>Search in:</b></label>
			<select class="form-control p-border" id="searchIn" bind:value={topicValue} on:change={search}>
				<option value="template">Templates</option>
				<option value="boilerplate">Boilerplate</option>
				<option value="starter-kit">Starter-kit</option>
			</select>
		</div>

		<div class="form-group">
			<label for="searchFor"><b>Search for:</b></label>
			<div class="input-group mb-3">
				<input id="searchFor" class="form-control p-border" type="text" bind:value={searchValue} on:keyup={onKeyUp} placeholder="Keywords" />
				<div class="input-group-append">
					<button class="btn" on:click={search}><b>Search</b></button>
				</div>
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
						<SearchResult githubRepo={searchResult} mode={1} />
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