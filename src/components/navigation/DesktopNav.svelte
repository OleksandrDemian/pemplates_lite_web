<script>
	import Route from "../../store/route";
	import Routes from "../../data/routes";
</script>

<nav>
	<h2>Menu</h2>

    { #each Routes as route }
		<div class:current={$Route.hash === route.hash}>
			<a href="#{route.hash}">{route.label}</a>
		</div>
    {/each}
</nav>

<style>
	nav {
		display: none;
		flex-direction: column;
		height: fit-content;
		position: sticky;
		top: 0;
	}

	nav > div {
		margin: 5px 0;
		width: fit-content;
		border-bottom: 2px solid transparent;
	}

	nav > div:hover {
		border-bottom: 2px solid black;
	}

	nav > div.current {
		border-bottom: 2px solid black;
	}

	nav > div > a {
		font-size: 16px;
		text-decoration: none;
		font-weight: bold;
		color: black;
		padding: 5px;
		display: block;
	}

	@media screen and (min-width: 771px) {
		nav {
			display: flex;
		}
	}
</style>
