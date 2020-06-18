const config = {
	commands: [ "git", "degit" ]
};

const load = () => {
	const confStr = localStorage.getItem("config");
	if(confStr != null){
		const obj = JSON.parse(confStr);
		for(let prop in obj){
			if(obj.hasOwnProperty(prop)){
				config[prop] = obj[prop];
			}
		}
	}
};

const save = () => {
	localStorage.setItem("config", JSON.stringify(config));
};

const get = (prop) => {
	return config[prop];
};

const set = (prop, value) => {
	config[prop] = value;
	save();
};

load();

export default {
	get,
	set
};