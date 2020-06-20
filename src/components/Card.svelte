<script>
	export let rise = false;
	export let hover = false;
</script>

<div class="m-3 card" class:rise={rise} class:hover={hover}>
	<div class="card-body">
		<slot></slot>
	</div>
</div>