/*let Arr = ["Ваня", "ishtan", "Karina"];

console.log(Arr[1]);
console.log(Arr.length);

Arr.push(1, 2, "Dany");
console.log(Arr);

Arr.pop("Dany");

console.log(Arr);

Arr.splice(1,3);

console.log(Arr);*/

/* Arrs*/

/*
arr.push метод,- который добавляет элемент в конце массива;
arr.pop метод,- который удаляет элемент в конце массива;
arr.shift метод,- который удаляет элемент в начале массива;
arr.unshift метод, который добавляет элемент в начале массива;
arr.splice метод,- который удаляет или добавляет элементы по выделенному диапазону;
arr.slice метод,- который копирует массив или часть массива в выделенном диапазоне;
arr.concat метод,- который копирует массив с добавлением новых элементов массива;
arr.split - метод, который;
arr.join - метод, который;
arr.forEach- метод, который
arr.indexOf - метод, который - ищет элеммент, начиная с заданного индекса. В случае нахождения возвращает индекс найденного item, если элемента нет в массиве возвращает -1;
arr.lastIndex - метод, который- ищет элемент, начиная с заданного индекса, но с конца массива ( справа налево);
arr.includes - метод, который- ищет элемент, начиная  с заданного индекса, в случае нахождения возвращает true или false
*/
// Итак, про массивы. Могут создаваться двумя способами
/*
let arrOne = new Array(); //способ первый

let arrTwo = []; // способ второй

// Добавление эллементов в массив.

arrOne.push("one", "two", "three"); // добавляет элементы в конец массива

arrOne.unshift("zero"); // добавляет элемент в начало массива

//Удаление элементов из массива

arrOne.pop("three"); //Удаление элемента из конца массива

arrOne.shift(0, 1); //Удаление элементов из начала массива

//Метод splice удаляет элементы в заданном диапазоне

arrOne.push(1, 2, 3, 4, 5);

arrOne.splice(2, 4); //удаление методов в диапазоне на примере

console.log(arrOne.includes("two"));

if(arrOne.includes('four')){
    console.log("этот массив содержит этот элемент");
}else{
    console.log('не содержит этот элемент');
}
//Методы для разбивки и объеденения массива split & join

//split преобразует строку в массив, разделив заданным аргументом

let one = 'hellow, darkness, my old friend';
let arrFour = one.split(',');
console.log(arrFour);
*/
/*
let someArr = [];

someArr.push("dany", "vanya", "vika");

console.log(someArr);

console.log(someArr[0]);

let vika = someArr.pop();
console.log(someArr);

someArr.push(vika);
console.log(someArr);

someArr.splice(1,1);
console.log(someArr);

someArr.unshift('point');

console.log(someArr);

someArr.shift();
console.log(someArr);

someArr.splice(0,0, 'vanya');
console.log(someArr);
*/

//let text = 'i love tits'
let oneArr = ["katya", "tits", "boobs"];

let twoArr = oneArr.slice();

console.log(twoArr);

let threeArr = oneArr.concat('tits');

console.log(threeArr);

threeArr.splice(2,3);
console.log(threeArr);

threeArr[0] = 'ass'
console.log(threeArr);