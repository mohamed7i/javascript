// مجموع الارقام
console.log(20+30);
// نص
console.log("hello word");

// معرفة قيمة الفاريبلز اذا كان رقم او نص 
let salary = 10000;
console.log(salary, typeof salary);

let string ="mohamed";
console.log(string,typeof string);

// نوع الصح والغلط

const isRaining =true;
console.log(isRaining , typeof isRaining);

const isSunny = false;
console.log(isSunny ,typeof isSunny);

// undefined

let age;
console.log(age,typeof age);

// null

let year = null;
console.log(year,typeof year);

// BigInt
// البيج نمبر يستخدم فوق ال15 خانة من الارقام 
const number =999999999999999;
console.log(number, typeof number);
const BigNumber =9999999999999999999n;
console.log(BigNumber, typeof BigNumber);

// Symbol

// Array

const friends = [
    "mohamed","hamed","ahmed"
];
console.log(friends, typeof friends);

// object

const person = {
    name: "mohamed",
    age: 23,
    isMarried: false
};

console.log(person, typeof person);

// date

const date = new Date("2024-11-06");
console.log(date,typeof date);


