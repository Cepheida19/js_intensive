let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");

function num_system(a, b){
	if ( isNaN(Number(a)) || isNaN(Number(b)) || a === " " || b === " " || b === "0" || b === "1"){
		return "Некорректный ввод!";
	} else {
		let arr = [];
		let i = 1;
		while(i !== 0){
			let ost = a % b;
			i = Math.floor(a / b); 
			arr.unshift(ost);
			a = i;
		}
		return(arr.join(""));
	}
}
console.log(num_system(num1, num2));