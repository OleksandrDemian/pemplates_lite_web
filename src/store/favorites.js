import store from "../utils/store";

const data = store("favorites", {
	favorites: []
});

const get = () => {
	return data.get("favorites");
};

const push = (obj) => {
	const arr = data.get("favorites");
	arr.push(obj);
	data.set("favorites", arr);
};

const remove = (url) => {
	const arr = get();
	for(let i = 0; i < arr.length; i++){
		if(arr[i].html_url === url){
			arr.splice(i, 1);
			data.set("favorites", arr);
			return true;
		}
	}
	
	return false;
};

const has = (url) => {
	const arr = get();
	for(let i = 0; i < arr.length; i++){
		if(arr[i].html_url === url){
			return true;
		}
	}
	
	return false;
};

export default {
	get,
	push,
	remove,
	has
}