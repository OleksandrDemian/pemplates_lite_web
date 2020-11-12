<script>
	import {notify} from "power-notifier";
	import ButtonMain from "./buttons/ButtonMain.svelte";

	export let type;
	export let value;

	let element;

	const onCopy = () => {
		element.disabled = false;

		element.select();
		element.setSelectionRange(0, 99999);
		document.execCommand("copy");

		element.disabled = true;

		notify({
			message: "Copied to clipboard",
			timeout: 2500
		});
	}
</script>

<div class="input" on:click={onCopy}>
	<span class="prepend">{type}:</span>
	<input aria-label="Value to copy" class="main middle" disabled bind:this={element} value={value}>
	<ButtonMain>Copy</ButtonMain>
</div>

<style>
	div.input {
		display: grid;
		grid-template-columns: 50px 1fr 100px;
		padding: 5px 10px;
		border-radius: var(--border-radius);
		grid-gap: 10px;
	}

	span.prepend {
		display: flex;
		align-items: center;
	}
</style>
