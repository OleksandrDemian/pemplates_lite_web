<script>
	import RepoCopyInput from "./components/RepoCopyInput.svelte";
	import config from "./utils/config";

	export let githubRepo;

	let commandsToShow = config.get("commands");

	const getGitValue = val => "git clone " + val;
	const getDegitValue = val => "npx degit " + val;

	const showCommand = (com) => {
		return commandsToShow.includes(com);
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
	</div>
</div>