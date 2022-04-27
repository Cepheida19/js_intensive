let myIterable = {
	from: 1,
	to: 6,
  
	[Symbol.iterator]() {
	  if(this.from > this.to){
		throw new Error("Ошибка! to < from")
	  }
	  if(typeof this.from !== "number" || typeof this.to !== "number" || isNaN(this.from) || isNaN(this.to)){
		throw new Error("Ошибка! from и to должны быть числами")
	  }
	  return this;
	},
	next() {
	  if (this.from <= this.to) {
		return { done: false, value: this.from++ };
	  } else {
		return { done: true };
	  }
	}
  };