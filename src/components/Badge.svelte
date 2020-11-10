<div>
	<slot></slot>
</div>

<style>
	div {
		display: inline-block;
		padding: 5px 10px;
		margin: 5px;
		border: 1px solid gray;
		color: gray;
		border-radius: 10px;

		font-size: 12px;
	}

	div:first-child {
		margin-left: 0;
	}
</style>
