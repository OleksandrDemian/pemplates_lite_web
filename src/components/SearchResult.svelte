<script>
	import RepoCopyInput from "./RepoCopyInput.svelte";
	import config from "../storage/config";
	import favorites from "../storage/favorites";
	import {createEventDispatcher} from "svelte";
	import Card from "./Card.svelte";
	import Badge from "./Badge.svelte";
	import ButtonSmall from "./buttons/ButtonSmall.svelte";

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
		<span class="repo-name">{githubRepo.name}</span>
	</a>
	<span class="user-name">By {githubRepo.owner.login}</span>

	<p>{githubRepo.description}</p>

	<div class="badges-container">
		{#if isFavorite}
			<ButtonSmall type="coral" on:click={removeFromFavorite}><b>Remove from favorites</b></ButtonSmall>
		{:else}
			<ButtonSmall type="blue" on:click={addToFavorites}><b>Add to favorites</b></ButtonSmall>
		{/if}

		<Badge>{githubRepo.language}</Badge>
		<Badge>Stars: {githubRepo.stargazers_count}</Badge>
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

	span.user-name {
		font-size: 12px;
		color: gray;
		display: block;
	}

	span.repo-name {
		font-size: 16px;
		font-weight: bold;
	}
</style>
