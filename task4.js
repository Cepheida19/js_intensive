function createDebounceFunction(callback, delay){
	clearTimeout(timerId);
	var timerId = setTimeout(callback, delay);
}

function log100(){
	console.log("100");
}
