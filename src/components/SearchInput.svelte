<script>
	import {createEventDispatcher} from "svelte";
	import ButtonMain from "./buttons/ButtonMain.svelte";

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
		<input id="searchFor" type="text" class="main" bind:value={input} on:keyup={onKeyUp} placeholder="Keywords (ex: react typescript)" />
		<ButtonMain append on:click={onSearch}>Search</ButtonMain>
	</div>
</div>

<style>
	div.input {
		display: flex;
	}

	div.input > input {
		border-radius: 10px 0 0 10px;
	}
</style>
