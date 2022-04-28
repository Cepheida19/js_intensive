class Queue {
	constructor(){
	  this.arr = [];
	}
	enqueue(...arr){
	   arr.forEach(x => this.arr.push(x) )
	   return this.arr;
	}
	dequeue(){
		return this.arr.shift(0);
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