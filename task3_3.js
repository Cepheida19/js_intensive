class Queue {
	constructor(){
	  this.arr = [];
	}
	enqueue(x){
		let ind = this.arr.length;
		this.arr[ind] = x;
	   return this.arr;
	}
	dequeue(){
		return this.arr.splice(0, 1);
	}
	front(){
		return this.arr[0];
	}
	isEmpty(){
		return this.arr.length === 0;
	}
	size(){
		return this.arr.length;
	}
}
