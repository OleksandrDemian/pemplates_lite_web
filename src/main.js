import App from './App.svelte';
import "./notifications";
import config from "./storage/config";
import Route from "./store/route";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let themeName = config.get("theme");
document.body.setAttribute("theme", themeName);

Route.start();

const app = new App({
	target: document.body,
	props: {
		searchValue: urlParams.get("query")
	}
});

export default app;
