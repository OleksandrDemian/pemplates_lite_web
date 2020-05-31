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
		<span class="input-group-text border-primary bg-primary text-white">{type}:</span>
	</div>
	<input class="form-control border-primary" disabled bind:this={element} value={value}>
	<div class="input-group-append">
		<button class="btn btn-outline-primary">Copy</button>
	</div>
</div>