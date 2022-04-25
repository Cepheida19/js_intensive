function makeObjectDeepCopy(obj){
	let copy_obj = {};
	for(let x in obj){
		if(obj[x] !== null && typeof obj[x] === "object"){
			copy_obj[x] = makeObjectDeepCopy(obj[x]);
			continue;
		}
		copy_obj[x] = obj[x];
	}
	return copy_obj;
}