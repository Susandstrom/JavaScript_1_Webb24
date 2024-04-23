/* 
Math.pow();
Math.random();
 */

/* 
console.log("--------------------------------");

console.log(Math.random());
console.log("\n");
console.log(Math.round(1.687));

console.log("--------------------------------");

// Date and Time
let currentDate = new Date();
console.log(currentDate);

console.log(currentDate.getFullYear());
 */

console.log("--------------------------------");

// Strängar

/* console.log(stringNumber.toString()); */

let stringNumber = 5;
let convertNumber;

if (Number.isInteger(stringNumber)) {
    convertNumber = stringNumber.toString();
}
console.log(convertNumber);




console.log("--------------------------------");

/* fornamn.concat('', efternamn); */

console.log("HELLO".toLowerCase());

let text = "HELLO";
console.log("Start string: " + text);

let textToLowerCase = text.toLowerCase();
console.log("Start string toLowerCase: " + textToLowerCase);

let textToUpperCase = textToLowerCase.toUpperCase();
console.log("Start string to UpperCase: " + textToUpperCase);


let strang = "JavaScript är sämst";

console.log(strang.substring(0, 4));
console.log(strang.slice(4));

console.log(strang.indexOf("är")); 
console.log(strang.includes("är")); 

console.log("-------------------------------");

let badInputText = "   hello   ";
console.log("bad text; "+ badInputText);
let trimedText = badInputText.trim();
console.log("Trimed Text; "+ trimedText);


console.log("-------------------------------");
console.log("-------------------------------");


let userData = "Bob, Rob ,  Zob";
let userDataSplit = userData.split(",");
console.log(userData);
for (let i = 0; i < userDataSplit.length; i++) {
    userDataSplit[i] = userDataSplit[i].trim();
}
console.log(userDataSplit);

let userDataJoin = userDataSplit.join(", ");
console.log("Joining user data split with ', ' ");
console.log(userDataJoin);


console.log("-------------------------------");

let message = "Hej John";
let newMessage = message.replace("John", "Johnny");
console.log(newMessage);


console.log("-------------------------------");