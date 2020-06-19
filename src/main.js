import App from './App.svelte';
import "./notifications";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

import config from "./utils/config";

let themeName = config.get("theme");
document.body.setAttribute("theme", themeName);

const app = new App({
	target: document.body,
	props: {
		searchValue: urlParams.get("query")
	}
});

export default app;