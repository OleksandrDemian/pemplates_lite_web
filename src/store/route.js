import { writable } from "svelte/store";

const { subscribe, update } = writable({
	hash: null
});

const setHash = (hash) => update(cur => ({...cur, hash}));

const start = () => {
	const onHash = () => {
		let hash = location.hash;
		if(hash != null && hash.length > 0){
			hash = hash.substring(1, hash.length);
		}
		
		setHash(hash);
	};
	
	onHash();
	
	window.addEventListener("hashchange", onHash);
};

const Route = {
	subscribe,
	setHash,
	start
};

export default Route;
