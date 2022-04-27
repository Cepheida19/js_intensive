class Stack {
	constructor(){
	  this.arr = [];
	}
  
	push(...arr){
	   arr.forEach(x => this.arr.push(x) )
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