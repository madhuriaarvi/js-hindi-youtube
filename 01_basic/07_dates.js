//  beginning of January 1, 1970
// MM-DD-YY
const Mydate = new Date();
console.log(Mydate.toString());// concert to string


console.log("toDateString: " + Mydate.toDateString());
console.log("toISOString: " + Mydate.toISOString());
console.log("toLocalDateString: " + Mydate.toLocaleDateString());
console.log("toJSON: " + Mydate.toJSON());


console.log(typeof Mydate);

let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleDateString());


// ========== TIMESTAMP =============

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());


newDate.toLocaleDateString('default',{
    weekday:"long",
})