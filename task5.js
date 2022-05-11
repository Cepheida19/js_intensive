class Calculator{
	constructor(x, y){
		if (arguments.length !== 2){
			throw new Error("Нужно передать два параметра");
		} else if(typeof x !== "number" || isNaN(x) || typeof y !== "number" || isNaN(y)){
			throw new Error("Параметры должны быть числами!");
		} else {
			this.x = x;
			this.y = y;
		}
	}
	setX(x){
		if(typeof x !== "number" || isNaN(x)){
			throw new Error("Первый параметр должен быть числом!");
		} else {
			this.x = x;
		}
	}
	setY(y){
		if(typeof y !== "number" || isNaN(y)){
			throw new Error("Второй параметр должен быть числом!");
		} else {
			this.y = y;
		}
	}
	logSum(){
		console.log(this.x + this.y);
	}
	logMul(){
		console.log(this.x * this.y);
	}
	logSub(){
		console.log(this.x - this.y);
	}
	logDiv(){
		if (this.y === 0){
			throw new Error ("Деление на ноль!");
		} else {
			console.log(this.x / this.y);
		}
	}
}