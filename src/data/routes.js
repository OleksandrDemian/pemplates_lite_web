import Search from "../sections/Search.svelte";
import About from "../sections/About.svelte";
import Configurations from "../sections/Configurations.svelte";
import Favorites from "../sections/Favorites.svelte";
import HowItWorks from "../sections/HowItWorks.svelte";

const Routes = [
	{ label: "Search", hash: "search", component: Search },
	{ label: "About", hash: "about", component: About },
	{ label: "How it works", hash: "howItWorks", component: HowItWorks },
	{ label: "Configurations", hash: "config", component: Configurations },
	{ label: "Favorites", hash: "favorites", component: Favorites }
];

Routes.get = (hash) => {
	for(let i = 0; i < Routes.length; i++){
		if(Routes[i].hash === hash){
			return Routes[i];
		}
	}
	
	return null;
};

export default Routes;
