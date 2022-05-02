function myFilter(arr, callback, obj_this) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
	  if (callback.call(obj_this, arr[i], i, arr)) {
		res.push(arr[i]);
	  }
	}
	return res;
  }