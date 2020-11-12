<script>
	export let type = "blue";
	export let prepend = false;
	export let append = false;
</script>

<button class:blue={type === "blue"} class:coral={type === "coral"} class:append={append} class:prepend={prepend} on:click>
	<slot></slot>
</button>

<style>
	button {
		border-radius: var(--border-radius);
		padding: 8px 16px;
		cursor: pointer;
		border: none;
		font-size: 16px;
		transition: background-color var(--animation-speed) ease-in-out;

		box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
	}

	button.blue {
		background-color: #3481ff;
		color: white;
	}

	button.blue:hover {
		background-color: #347bf5;
	}

	button.coral {
		background-color: coral;
		color: white;
	}

	button.coral:hover {
		background-color: #f57b4d;
	}

	button.append {
		border-radius: 0 10px 10px 0;
	}

	button.prepend {
		border-radius: 10px 0 0 10px;
	}
</style>
