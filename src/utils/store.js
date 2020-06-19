const load = (key, def) => {
	const confStr = localStorage.getItem(key);
	if(confStr != null){
		return JSON.parse(confStr);
	}
	
	return def;
};

const store = (key, def) => {
	const data = load(key, def);
	
	const save = () => {
		localStorage.setItem(key, JSON.stringify(data));
	};
	
	const get = (prop) => {
		return data[prop];
	};
	
	const set = (prop, value) => {
		data[prop] = value;
		save();
	};
	
	return {
		get,
		set
	}
};

export default store;