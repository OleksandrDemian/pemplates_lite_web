<script>
	import RepoCopyInput from "./RepoCopyInput.svelte";
	import config from "../storage/config";
	import favorites from "../storage/favorites";
	import {createEventDispatcher} from "svelte";
	import Card from "./Card.svelte";
	import Badge from "./Badge.svelte";

	export let githubRepo;

	const dispatcher = createEventDispatcher();
	const enableOpenIde = config.get("enableOpenIde");

	let commandsToShow = config.get("commands");
	let isFavorite = favorites.has(githubRepo.html_url);

	const getCommand = (command, url) => {
		let val = command + " " + url;
		if (enableOpenIde) {
			val += " && open-ide";
		}

		return val;
	};

	const getGitValue = val => getCommand("git clone", val);
	const getDegitValue = val => getCommand("npx degit", val);

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

<Card>
	<a href="{githubRepo.html_url}" target="_blank">
		<h4>
			{githubRepo.name}
			by
			<span class="secondary-color">{githubRepo.owner.login}</span>
		</h4>
	</a>

	<p>{githubRepo.description}</p>

	<div class="badges-container">
		{#if isFavorite}
			<button class="favorite remove-favorite" on:click={removeFromFavorite}><b>Remove from favorites</b></button>
		{:else}
			<button class="favorite add-favorite" on:click={addToFavorites}><b>Add to favorites</b></button>
		{/if}

		<Badge>{githubRepo.language}</Badge>
		<Badge>Stars: {githubRepo.stargazers_count}</Badge>
		<Badge>Forks: {githubRepo.forks_count}</Badge>
		<Badge>Issues: {githubRepo.open_issues_count}</Badge>
	</div>

	{#if showCommand("git")}
		<RepoCopyInput type="git" value={getGitValue(githubRepo.html_url)}/>
	{/if}
	{#if showCommand("degit")}
		<RepoCopyInput type="degit" value={getDegitValue(githubRepo.html_url)}/>
	{/if}
</Card>

<style>
	div.badges-container {
		margin: 5px 0;
	}

	button.add-favorite {
		border: 1px solid #3481ff;
		color: #3481ff;
	}

	button.add-favorite:hover {
		border: 1px solid #347bf5;
		color: #347bf5;
	}

	button.remove-favorite {
		border: 1px solid orangered;
		color: orangered;
	}

	button.favorite {
		display: inline-block;
		padding: 5px 10px;
		margin: 5px 5px 5px 0;
		border-radius: 10px;
		font-size: 12px;
		background-color: white;

		cursor: pointer;
	}
</style>
