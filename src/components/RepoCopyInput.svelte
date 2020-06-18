<script>
	import {notify} from "power-notifier";

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
			title: "Copied to clipboard",
			message: value,
			timeout: 2500
		});
	}
</script>

<div class="input-group mb-3" on:click={onCopy}>
	<div class="input-group-prepend">
		<span class="input-group-text p-border-1">{type}:</span>
	</div>
	<input class="form-control" disabled bind:this={element} value={value}>
	<div class="input-group-append">
		<button class="btn">Copy</button>
	</div>
</div>