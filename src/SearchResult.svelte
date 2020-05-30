<script>
	export let githubRepo;

	let gitCloneElement;
	let degitElement;

	const copyToClipboard = (element) => {
		return () => {
			element.select();
			element.setSelectionRange(0, 99999);
			document.execCommand("copy");
		};
	};

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

		<div class="input-group mb-3">
			<input class="form-control" bind:this={gitCloneElement} value={getGitValue(githubRepo.html_url)} on:click={copyToClipboard(gitCloneElement)}>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" on:click={copyToClipboard(gitCloneElement)}>Copy git command</button>
			</div>
		</div>

		<div class="input-group mb-3">
			<input class="form-control" bind:this={degitElement} value={getDegitValue(githubRepo.html_url)} on:click={copyToClipboard(degitElement)}>
			<div class="input-group-append">
				<button class="btn btn-outline-secondary" on:click={copyToClipboard(degitElement)}>Copy degit command</button>
			</div>
		</div>
	</div>
</div>