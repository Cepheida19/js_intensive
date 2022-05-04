class Calculator{
	constructor(num1, num2){
		if (arguments.length !== 2){
			throw new Error("Нужно передать два параметра");
		} else if(typeof num1 !== "number" || isNaN(num1) || typeof num2 !== "number" || isNaN(num2)){
			throw new Error("Параметры должны быть числами!");
		} else {
			this.num1 = num1;
			this.num2 = num2;
		}
	}
	setX(num1){
		if(typeof num1 !== "number" || isNaN(num1)){
			throw new Error("Первый параметр должен быть числом!");
		} else {
			this.num1 = num1;
		}
	}
	setY(num2){
		if(typeof num2 !== "number" || isNaN(num2)){
			throw new Error("Второй параметр должен быть числом!");
		} else {
			this.num2 = num2;
		}
	}
	logSum(){
		console.log(this.num1 + this.num2);
	}
	logMul(){
		console.log(this.num1 * this.num2);
	}
	logSub(){
		console.log(this.num1 - this.num2);
	}
	logDiv(){
		if (this.num2 === 0){
			throw new Error ("Деление на ноль!");
		} else {
			console.log(this.num1 / this.num2);
		}
	}
}