<script>
	import Card from "../components/Card.svelte";
</script>
<div>
	<h2>How it works</h2>

	<Card rise="true">
		<h4>How to use templates?</h4>
		<ul>
			<li>Choose what you want to search (templates, biolerplate, starter-kit)</li>
			<li>Enter keywords (ex: react electron)</li>
			<li>Press enter or click search button</li>
			<li>Choose the template from the list (list is ordered by stars count)</li>
			<li>Choose between git clone or degit</li>
			<li>By clicking on one of those the command will be copied tou your clipboard. Open terminal and execute the copied command in order to create a project.</li>
			<li>Start developing</li>
		</ul>
	</Card>

	<Card rise="true">
		<h4>How can I add my own template?</h4>
		<p>Have your own awesome template? Publish it on github, make it public and tag it as "template"</p>
		<p>Now, everyone can find it on Pemplates</p>
	</Card>
</div>
