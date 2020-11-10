<script>
	import config from "../storage/config";
	import Card from "../components/Card.svelte";

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

<div id="configurations">
	<h2>Configurations</h2>
	<!--	themes-->
<!--	<Card>-->
<!--		<div class="form-group">-->
<!--			<label for="searchIn"><b>Theme:</b></label>-->
<!--			<select class="main" id="searchIn" bind:value={themeName} on:change={changeTheme}>-->
<!--				<option value="">Classic</option>-->
<!--				<option value="yellow-blue">Easy-yellow</option>-->
<!--				<option value="easy-green">Easy-green</option>-->
<!--				<option value="easy-red">Easy-red</option>-->
<!--				<option value="red-black">Red-black</option>-->
<!--			</select>-->
<!--		</div>-->
<!--	</Card>-->

	<!--	commands-->
	<Card>
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

			<p>In order to use <a href="https://git-scm.com/" target="_blank">git</a> or <a href="https://www.npmjs.com/package/degit" target="_blank">degit</a>, be sure they are installed on your machine (degit requires npm v6 or newer)</p>
		</div>
	</Card>

	<!--	open-ide -->
	<Card>
		<div class="form-group">
			<label for="searchIn"><b>Open IDE:</b></label>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" bind:checked={enableOpenIde} id="openIde" on:change={changeOpenIde}>
				<label class="form-check-label" for="openIde">
					Enable open-ide
				</label>
			</div>
			<p>Open IDE is a CLI tool distributed via NPM. It allows you to open a folder inside of your favorite edito right from the command line.</p>
			<p>Use this option only if <a href="https://www.npmjs.com/package/open-ide" target="_blank">open-ide</a> is installed on your machine</p>
		</div>
	</Card>
</div>

<style>
	div#configurations {

	}
</style>
