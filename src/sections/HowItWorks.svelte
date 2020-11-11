<script>
	import Card from "../components/Card.svelte";
</script>
<div>
	<h2>How it works</h2>

	<Card>
		<h4 class="no-margins">How to use templates?</h4>
		<ul>
			<li>Choose what you want to search (templates, biolerplate, starter-kit)</li>
			<li>Enter keywords (ex: react electron)</li>
			<li>Press enter or click search button</li>
			<li>Choose the template from the list (list is ordered by stars count)</li>
			<li>Choose between git clone or degit</li>
			<li>By clicking on one of those buttons, the command will be copied tou your clipboard. Open terminal and execute the copied command in order to clone the repository</li>
			<li>Start developing</li>
		</ul>
	</Card>

	<Card>
		<h4 class="no-margins">How can I add my own template?</h4>
		<p>Have your own awesome template? Publish it on github, make it public and tag it as "template".</p>
		<p>Now, everyone can find it using Templates.</p>
	</Card>
</div>
