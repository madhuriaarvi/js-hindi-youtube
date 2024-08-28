const number1 = 100
console.log(number1);

const number2 = new Number(50000)
console.log(number2);



const number3 = 1111123.897
const number4 = number3.toString();
console.log(typeof(number4));
console.log(number3.toFixed(4));
console.log(number3.toPrecision(7));

number5 = 1000000000
console.log(number5.toLocaleString("de-DE"));
console.log(number5.toLocaleString("ja-JP", { style: "currency", currency: "EUR" }))


//===================== MATHS =====================

console.log(Math);
console.log(Math.abs(-346537846)); //negative to positive
console.log(Math.round(7769.876)); // ceil - top value , floor - bottom value


console.log(Math.min(4,90,1,23));
console.log(Math.random());

console.log((Math.random() * 10) + 1);

const min  = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))