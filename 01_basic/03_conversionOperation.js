let score = 33
console.log(typeof score);
console.log(typeof(score));

let score1 = "33"
console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score2 = "33frftb"
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);


let score3 = null
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);


let score4 = undefined
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);


//"33"  => 33
//"33bbhsdg" => NaN


// let isLoggedIn = 1
let isLoggedIn = "madhuri"
// let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)   //Boolean check
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));