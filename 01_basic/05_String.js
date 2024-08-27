const str1 = "madhuri"
const str2 = "30"


console.log(str1 + str2 + " demo"); // Old method

console.log(`Hello my name is ${str1.toLowerCase} and my repo count is ${str2}`);  // New method
console.log(`Hello my name is ${str1} and my repo count is ${str2}`);  // New method


const gameName = new String('madhuri-Demo');
console.log(gameName[0]); // key access

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));

console.log(gameName.indexOf('u'));

console.log(gameName.charAt(5));

const newString = gameName.substring(1, 4);console.log(newString);

const newString2 = gameName.slice(-1, 4);console.log(newString2);


const str3 = "     madhuri        "

console.log(str3);
console.log(str3.trim());

const str4 = "https://madhuri.com/madhuri%2000#rhurthn%hdjsf__eryt%%%%"
console.log(str4.replace('%','-'));
console.log(str4.includes('ri'));

//String to array -- madhuri-demo

console.log(gameName.split('-'));
