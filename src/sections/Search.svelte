<script>
	import Loading from "../components/Loading.svelte";
	import SearchResult from "../components/SearchResult.svelte";
	import {onMount} from "svelte";
	import Card from "../components/Card.svelte";
	import SearchInput from "../components/SearchInput.svelte";

	export let searchValue = "";
	let filterValue = "";
	let topicValue = "template";
	let isSearching = false;
	let result = null;

	const search = async () => {
		//todo: topic:boilerplate+topic:starter-kit
		document.activeElement.blur();
		if (searchValue == null || searchValue.length < 1) {
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

	const onSearchTrigger = (e) => {
		searchValue = e.detail.input;
		search();
	};

	// const mock = {
	// 	html_url: "asfasfasfasfasf",
	// 	name: "Ciane ciao",
	// 	language: "Javascript",
	// 	owner: {
	// 		login: "USename?"
	// 	},
	// 	description: "Lorem ipsum, description sinsommasdkfs asf",
	// 	stargazers_count: 45,
	// 	forks_count: 5,
	// 	open_issues_count: 6
	// };

	onMount(search);
</script>

<div id="searchContainer" class="col-lg-5 col-md-12">
	<h2>Search</h2>

	<div class="input-container">
		<label class="input-label" for="searchIn"><b>Search in:</b></label>
		<select class="main" id="searchIn" bind:value={topicValue} on:change={search}>
			<option value="template">Templates</option>
			<option value="boilerplate">Boilerplate</option>
			<option value="starter-kit">Starter-kit</option>
		</select>
	</div>

	<div class="input-container">
		<SearchInput on:search={onSearchTrigger} />
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

<style>
	div.input-container {
		margin: 25px 0;
	}
</style>
