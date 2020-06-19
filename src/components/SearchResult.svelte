<script>
	import RepoCopyInput from "./RepoCopyInput.svelte";
	import config from "../store/config";
	import favorites from "../store/favorites";
	import {createEventDispatcher} from "svelte";

	export let githubRepo;

	const dispatcher = createEventDispatcher();
	const enableOpenIde = config.get("enableOpenIde");

	let commandsToShow = config.get("commands");
	let isFavorite = favorites.has(githubRepo.html_url);

	const getCommand = (command, url) => {
		let val = command + " " + url;
		if(enableOpenIde) {
			val += " && open-ide";
		}

		return val;
	};

	const getGitValue = val => getCommand("git clone",  val);
	const getDegitValue = val => getCommand("npx degit",  val);

	const showCommand = (com) => {
		return commandsToShow.includes(com);
	};

	const addToFavorites = () => {
		favorites.push({
			owner: {
				login: githubRepo.owner.login
			},
			name: githubRepo.name,
			html_url: githubRepo.html_url,
			description: githubRepo.description,
			language: githubRepo.language,
			stargazers_count: githubRepo.stargazers_count,
			forks_count: githubRepo.forks_count,
			open_issues_count: githubRepo.open_issues_count
		});

		isFavorite = true;
		dispatcher("addFavorite");
	};

	const removeFromFavorite = () => {
		favorites.remove(githubRepo.html_url);
		isFavorite = false;
		dispatcher("removeFavorite");
	};
</script>

<div class="card m-3">
	<div class="card-body">
		<a href="{githubRepo.html_url}" target="_blank">
			<h4>
                {githubRepo.name}
				by
				<span class="secondary-color">{githubRepo.owner.login}</span>
			</h4>
		</a>

		<p>
			<span class="badge badge-success">{githubRepo.language}</span>
			<span class="badge badge-info">Stars: {githubRepo.stargazers_count}</span>
			<span class="badge badge-primary">Forks: {githubRepo.forks_count}</span>
			<span class="badge badge-warning">Issues: {githubRepo.open_issues_count}</span>
		</p>
		<p>{githubRepo.description}</p>

		{#if showCommand("git")}
			<RepoCopyInput type="git" value={getGitValue(githubRepo.html_url)}/>
		{/if}
		{#if showCommand("degit")}
			<RepoCopyInput type="degit" value={getDegitValue(githubRepo.html_url)}/>
		{/if}

		{#if isFavorite}
			<button class="btn" on:click={removeFromFavorite}>Remove from favorites</button>
		{:else}
			<button class="btn" on:click={addToFavorites}>Add to favorites</button>
		{/if}
	</div>
</div>