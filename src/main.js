import App from './App.svelte';
import {createStyle} from "power-notifier";

createStyle("default", {
	header: {
		backgroundColor: "var(--blue)",
		color: "white",
		textAlign: "center"
	},
	content: {
		backgroundColor: "white",
		color: "var(--blue)",
		border: "1px solid #6495ED"
	},
	button: {
		backgroundColor: "var(--blue)",
		color: "white"
	}
});

const app = new App({
	target: document.body
});

export default app;