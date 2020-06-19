import store from "../utils/store";

export default store("config", {
	commands: [ "git", "degit" ],
	enableOpenIde: false
});