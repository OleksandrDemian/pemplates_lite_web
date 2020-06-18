<script>
	import config from "../utils/config";
	let commands = config.get("commands");

	$: {
		config.set("commands", commands);
	}

</script>

<div class="col-lg-5 col-md-12">
	<div class="m-3">
		<div class="form-group">
			<label for="searchIn"><b>Commands:</b></label>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" bind:group={commands} value="git" id="git">
				<label class="form-check-label" for="git">
					Git
				</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" bind:group={commands} value="degit" id="degit">
				<label class="form-check-label" for="degit">
					Degit
				</label>
			</div>
		</div>
	</div>
</div>