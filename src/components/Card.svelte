<script>
	export let border = false;
</script>

<div class="card">
	<div class="card-body">
		<slot></slot>
	</div>
</div>

<style>
	div.card {
		padding: 20px;
		margin: 20px 0;

		box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
		border-radius: var(--border-radius);
	}
</style>
