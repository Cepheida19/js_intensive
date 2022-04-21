let num1 = prompt("Введите первое число");
console.log(check_and_sum(num1));

function check_and_sum(a){
    if ( isNaN(Number(a)) || a === " "){
         		return "Некорректный ввод!";
         	} else {
                 let b = prompt("Введите второе число");
                 if(isNaN(Number(b)) || b === " "){
                     return "Некорректный ввод!";
                 } else {
                    return `Ответ: ${Number(a) + Number(b)}, ${a / b}`;
                 }
             }
}