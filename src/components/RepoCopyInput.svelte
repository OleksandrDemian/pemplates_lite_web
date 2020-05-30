<script>
	import {notify} from "power-notifier";

	export let type;
	export let value;

	let element;

	const onCopy = () => {
		element.select();
		element.setSelectionRange(0, 99999);
		document.execCommand("copy");

		notify({
			title: "Copied to clipboard",
			message: value,
			timeout: 2500
		});
	}
</script>

<div class="input-group mb-3">
	<div class="input-group-prepend">
		<span class="input-group-text border-primary bg-primary text-white">{type}:</span>
	</div>
	<input class="form-control border-primary " disabled bind:this={element} value={value} on:click={onCopy}>
	<div class="input-group-append">
		<button class="btn btn-outline-primary" on:click={onCopy}>Copy {type} command</button>
	</div>
</div>