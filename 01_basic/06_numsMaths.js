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


