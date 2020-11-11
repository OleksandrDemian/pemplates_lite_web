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
		padding: 10px;
		margin: 20px 0;

		border-bottom: 2px solid #EEEEEE;
	}
</style>
