import App from './App.svelte';
import "./notifications";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const app = new App({
	target: document.body,
	props: {
		searchValue: urlParams.get("query")
	}
});

export default app;