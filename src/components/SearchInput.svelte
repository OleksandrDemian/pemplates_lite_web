<script>
	import {createEventDispatcher} from "svelte";

	export let input;

	const dispatch = createEventDispatcher();

	const onSearch = () => {
		dispatch("search", {
			input
		});
	};

	const onKeyUp = (e) => {
		if (e.keyCode === 13) {
			onSearch();
		}
	};
</script>

<div>
	<label class="input-label" for="searchFor"><b>Search for:</b></label>
	<div class="input">
		<input id="searchFor" type="text" class="main" bind:value={input} on:keyup={onKeyUp} placeholder="Keywords" />
		<button class="main" on:click={onSearch}>Search</button>
	</div>
</div>

<style>
	div.input {
		display: flex;
	}

	div.input > input {
		border-radius: 10px 0 0 10px;
	}

	div.input > button {
		border-radius: 0 10px 10px 0;
		box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
	}
</style>
