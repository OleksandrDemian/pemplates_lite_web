import {readable} from "svelte/store";

const isMobile = (changePoint) => {
	return readable(true, (set) => {
		const listener = () => {
			set(window.matchMedia(`(max-width: ${changePoint}px)`).matches);
		};
		
		window.addEventListener("resize", listener);
		listener();
		
		return () => window.removeEventListener("resize", listener);
	});
};

export default isMobile;
