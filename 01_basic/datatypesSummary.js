
// primitive - call by value

// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt



// non-primitive - call by reference

// arrays
// objects
// functions

//Examples:

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

//Define Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 234344857483560937502370523752n   //fjkdhgjkdfhgjkhdfjkgd n - n represent big Int

//Arrays

const fruits = ["Apple","banana","Grapes"]

//Object
let object1 = {
    name:"madhuri",
    age:22,
}

//function

const myFunction = function(){
    console.log("hello");
}

//Type of Datatype
console.log(typeof outSideTemp);




//+++++++++++++++++++++++++++++++++++++++++++++ MEMORY

// Stack (primitive) , Heap (non-primitive)

let myYoutubeName = "madhurirathour"
let anotherName = myYoutubeName

anotherName = "DemoChannel"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    name:"demo",
    email: "eurieu@gmail.com",
    upiId: "1212axisbank"
}

let userTwo =  userOne

userTwo.email = "demo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);