<script>
	import config from "../store/config";

	let commands = config.get("commands");
	let themeName = config.get("theme");
	let enableOpenIde = config.get("enableOpenIde");

	const changeCommands = () => {
		config.set("commands", commands);
	};

	const changeTheme = () => {
		document.body.setAttribute("theme", themeName);
		config.set("theme", themeName);
	};

	const changeOpenIde = () => {
		config.set("enableOpenIde", enableOpenIde);
	}
</script>

<div class="col-lg-5 col-md-12">
	<!--	themes-->
	<div class="m-3">
		<div class="form-group">
			<label for="searchIn"><b>Theme:</b></label>
			<select class="form-control p-border" id="searchIn" bind:value={themeName} on:change={changeTheme}>
				<option value="">Classic</option>
				<option value="yellow-blue">Easy</option>
				<option value="red-black">Red-black</option>
			</select>
		</div>
	</div>

	<!--	commands-->
	<div class="m-3">
		<div class="form-group">
			<label for="searchIn"><b>Commands:</b></label>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" bind:group={commands} value="git" id="git" on:change={changeCommands}>
				<label class="form-check-label" for="git">
					Git
				</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" bind:group={commands} value="degit" id="degit" on:change={changeCommands}>
				<label class="form-check-label" for="degit">
					Degit
				</label>
			</div>
		</div>
	</div>

	<!--	open-ide -->
<!--	<div class="m-3">-->
<!--		<div class="form-group">-->
<!--			<label for="searchIn"><b>Open IDE:</b></label>-->
<!--			<div class="form-check">-->
<!--				<input class="form-check-input" type="checkbox" bind:checked={enableOpenIde} id="openIde" on:change={changeOpenIde}>-->
<!--				<label class="form-check-label" for="openIde">-->
<!--					Enable open-ide-->
<!--				</label>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
</div>