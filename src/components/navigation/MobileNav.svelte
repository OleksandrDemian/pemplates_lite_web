<script>
	import Route from "../../store/route";
	import Routes from "../../data/routes";

	let showMenu = false;
</script>

<nav>
	<div id="nav-bar">
		<span id="title">Templates</span>
		<img src="/images/menu.svg" on:click={() => showMenu = !showMenu} alt="Show menu" />
	</div>

	<div id="nav-content" class:shown={showMenu === true}>
		{ #each Routes as route }
			<div class:current={$Route.hash === route.hash}>
				<a href="#{route.hash}" on:click={() => showMenu = false}>{route.label}</a>
			</div>
		{/each}
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}

	div#nav-bar {
		display: flex;
		background-color: white;
		justify-content: space-between;

		padding: 5px 45px;

		box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);

		align-items: center;
		height: 60px;
	}

	div#nav-content {
		background-color: white;
		transform: translateX(100%);
		bottom: 0;
		left: 0;
		right: 0;
		top: 60px;
		padding: 0 45px;
		position: fixed;

		display: flex;
		flex-direction: column;
		align-items: flex-end;
		border-top: 2px solid black;

		transition: transform var(--animation-speed) ease-in-out;
	}

	div#nav-content.shown {
		transform: translateX(0);
	}

	div#nav-content > div {
		margin: 5px 0;
		width: fit-content;
		border-bottom: 2px solid transparent;
	}

	div#nav-content > div:hover {
		border-bottom: 2px solid black;
	}

	div#nav-content > div.current {
		border-bottom: 2px solid black;
	}

	div#nav-content > div > a {
		font-size: 16px;
		text-decoration: none;
		font-weight: bold;
		color: black;
		padding: 5px;
		display: block;
	}

	@media screen and (min-width: 771px) {
		nav {
			display: none;
		}
	}

	span#title {
		font-size: 24px;
		font-weight: bold;
	}
</style>
