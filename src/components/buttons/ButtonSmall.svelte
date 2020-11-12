<script>
	export let type = "blue";
</script>

<button class:blue={type === "blue"} class:coral={type === "coral"} on:click>
	<slot></slot>
</button>

<style>
	button.blue {
		background-color: white;
		border: 1px solid #3481ff;
		color: #3481ff;
	}

	button.blue:hover {
		border: 1px solid white;
		color: white;

		background-color: #3481ff;
	}

	button.coral {
		background-color: white;
		border: 1px solid coral;
		color: coral;
	}

	button.coral:hover {
		border: 1px solid white;
		color: white;

		background-color: #f57b4e;
	}

	button {
		display: inline-block;
		padding: 5px 10px;
		margin: 5px 5px 5px 0;
		border-radius: var(--border-radius);
		font-size: 12px;

		cursor: pointer;
		transition: all var(--animation-speed) ease-in-out;
	}
</style>
