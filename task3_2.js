class Stack {
	constructor(){
	  this.arr = [];
	}
  
	push(x){
		if(this.arr.length === 0){
			this.arr[0] = x;
		} else {
			let ind = this.arr.length;
			this.arr[ind] = x;
		}
	   return this.arr;
	}

	pop(){
		let ind = this.arr.length - 1;
		return this.arr.splice(ind, 1);
	}

	peek(){
		return this.arr[this.arr.length - 1];
	}

	length(){
		return this.arr.length;
	}
}
