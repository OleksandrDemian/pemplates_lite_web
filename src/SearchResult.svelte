<script>
	import RepoCopyInput from "./components/RepoCopyInput.svelte";
	export let githubRepo;

	const getGitValue = val => "git clone " + val;
	const getDegitValue = val => "npx degit " + val;
</script>

<div class="card m-3">
	<div class="card-body">
		<h3>
			<a href="{githubRepo.html_url}" target="_blank">{githubRepo.name}</a>
			by
			<span class="secondary-color">{githubRepo.owner.login}</span>
		</h3>
		<p>
			<span class="badge badge-success">{githubRepo.language}</span>
			<span class="badge badge-info">Stars: {githubRepo.stargazers_count}</span>
			<span class="badge badge-primary">Forks: {githubRepo.forks_count}</span>
			<span class="badge badge-warning">Issues: {githubRepo.open_issues_count}</span>
		</p>
		<p>{githubRepo.description}</p>

		<RepoCopyInput type="git" value={getGitValue(githubRepo.html_url)} />
		<RepoCopyInput type="degit" value={getDegitValue(githubRepo.html_url)} />
	</div>
</div>