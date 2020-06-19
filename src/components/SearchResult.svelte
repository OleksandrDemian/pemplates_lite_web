<script>
	import RepoCopyInput from "./RepoCopyInput.svelte";
	import config from "../store/config";
	import favorites from "../store/favorites";
	import {createEventDispatcher, onMount} from "svelte";

	export let githubRepo;
	export let mode;

	const dispatcher = createEventDispatcher();
	let commandsToShow = config.get("commands");
	let isFavorite = false;

	const getGitValue = val => "git clone " + val;
	const getDegitValue = val => "npx degit " + val;

	const showCommand = (com) => {
		return commandsToShow.includes(com);
	};

	const addToFavorites = () => {
		const obj = {
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
		};

		const arr = favorites.get("favorites");
		arr.push(obj);
		favorites.set("favorites", arr);
		isFavorite = true;
		dispatcher("addFavorite");
	};

	const removeFromFavorite = () => {
		const arr = favorites.get("favorites");
		for(let i = 0; i < arr.length; i++){
			if(arr[i].html_url === githubRepo.html_url){
				arr.splice(i, 1);
				favorites.set("favorites", arr);
				dispatcher("removeFavorite");
				isFavorite = false;
				return true;
			}
		}

		return false;
	};

	const checkIsFavorite = () => {
		const arr = favorites.get("favorites");
		for(let i = 0; i < arr.length; i++){
			if(arr[i].html_url === githubRepo.html_url){
				return true;
			}
		}

		return false;
	};

	onMount(() => {
		isFavorite = checkIsFavorite();
	});
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

		{#if mode === 1}
			<button class="btn" disabled={isFavorite} on:click={addToFavorites}>Add to favorites</button>
		{:else if mode === 2}
			<button class="btn" on:click={removeFromFavorite}>Remove from favorites</button>
		{/if}
	</div>
</div>