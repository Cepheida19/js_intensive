function selectFromInterval(arr, first, second){
    if(!Array.isArray(arr)){
        throw new Error("Ошибка! Первым параметром должен быть массив");
    }
   let is_number = arr.every(n => typeof n === "number" && !isNaN(n));
    if(!is_number){
       throw new Error("Ошибка! В массиве должны быть только числа");
    }
    if(typeof first !== "number" || typeof second !== "number" || isNaN(first) || isNaN(second)){
       throw new Error("Ошибка! Параметры должны быть числами");
    }

   let min = Math.min(first, second);
   let max = Math.max(first, second);
   let res = [];
   res = arr.filter(x => x >= min && x <= max);
   return res;
}