//power
console.log("Math.pow(10,2);");
console.log(Math.pow(10,2));
console.log("Math.pow(10,-2);");
console.log(Math.pow(10,-2));

//random 0-10
console.log("Math.random();");
console.log(Math.random());

//random
console.log("Math.random()*10;");
console.log(Math.random()*10);

//random 0-100
console.log("Math.random()*100;");
console.log(Math.random()*100);

//random 50-100
console.log("50 + Math.random()*50;");
console.log(50 + (Math.random()*50));

//round
console.log("Math.round(myRandom)");
let myRandom = Math.random()*10;
/*console.log("myRandom" +);*/

console.log("cealing");
console.log(Math.ceil(myRandom));
console.log("floor" + myRandom);
console.log(Math.floor(myRandom));

//abs - tar bort minus 
console.log("Math.abs(-2)");
console.log(Math.abs(-2));
console.log("Math.abs(2)");
console.log(Math.abs(2));

//abs with pow and sqrt..

//max
console.log("Math.max(2,3,5)");
console.log(Math.max(2,3,5));

//max algo...
/*let 1 = [2,3,5];
let tempMax*/

//min 
console.log("Math.min(1,2,3");
console.log(Math.min(1,2,3));

//parseInt

let a = 5;
let b = "5";

Number.isInteger(b); //checking if b is an integer

console.log("a+b");
console.log(a + b);

console.log("a + Number.parseInt(b)");
console.log(a + Number.parseInt(b));
console.log("is b an integer?" + Number.isInteger(b));

//Date and time
console.log("Date.now() timw is sec from 1979") ;
console.log(Date.now());

console.log("new Date () creates a date object with the currant date");
let currentDate = new Date();//<-- create date object
console.log(currentDate);//<-- return full date data or..
console.log("dateObject.getHours() return hours");
console.log(currentDate.getHours()); //<-- return spesific data
console.log("dateObject.getMinutes() return minutes"); 
console.log(currentDate.getMinutes());

//strings 
//konvert integer to string
console.log("Number.toString(5)");
let integerNumber = 5;
let convertedNumber;

if(Number.isInteger(integerNumber)){
    convertedNumber = integerNumber.toString();
}

console.log(convertedNumber);

//string lenght
let myName = "Jovana";
let school = "Grit academy";
let emptyString = "";
let notAString = false;
console.log(`String variable with value ${myName} is ${myName.length} chars long`);
console.log(`String variable with value ${emptyString} is ${emptyString.length} chars long`);
console.log(`String variable with value ${notAString} is ${notAString.length} chars long`);

// string concatenate
console.log('5+"5"');
console.log(5 + "5");// this will give 55, JS is going to treat it a string

console.log('5 + 5');
console.log(5 + 5);//this will be treated as math 

//upper & lower case
let text = "HELLO";
console.log("start String: " + text);
let textToLowerCase = text.toLowerCase();
console.log("start string toLowerCase() " + textToLowerCase);
let textToUpperCase = textToLowerCase.toUpperCase();
console.log("start string toUpperCase() " + textToUpperCase);
console.log(textToUpperCase);

// substring and slice

let message = "Hello from JavaScript my friend";
console.log("message = " + message);
console.log("substirng returns chars in the interval given");
let messageSubstring = message.substring(11,21);
console.log("messageSubstring 11, 21" + messageSubstring);

let messageForSlicing = "No, pls dnt slice me";
console.log(messageForSlicing);
let slicedMessage = messageForSlicing.slice(8);
console.log(slicedMessage);
console.log(messageForSlicing);

//find string
let article = "sfshfifnöfuiahwed uohfeuowugfuow hdfwuof ijd ijfiw9e ojfuijfiwklf ije ijf i";
let articleToLower = article.toLowerCase();
let hero;
if (article.includes("ije")){
    let index = article.indexOf("ije")
    hero = article.substring(index, index + 3)
} else {
    hero ="Mr Bean";
}

console.log("The hero is: " + hero);

//trim 
let badInputText = "     Hello     ";
console.log("badInputText: " + badInputText);
let trimedText = badInputText.trim();
console.log("trimedText: " + trimedText);

//split

let userData = "Bob, Rob, Zob, Bobland, Robland, Zobland, Bobska, Robska, Zobska";
let userDataSplit = userData.split(",");
console.log("Data before split");
console.log(userData);
for (let i = 0; i < userDataSplit.length; i++) {
    //get value from the list, trim it, and put it back
    userDataSplit[i] = userDataSplit[i].trim();
}

console.log("Data after split")
console.log(userDataSplit);

console.log("joining user data split with ', ' ");
let userDataJoin = userDataSplit.join(", ");
console.log(userDataJoin);

//replace a string with another string

let stringBefore = "This is the last example of the evening.";
console.log("string before:" + stringBefore)
let stringAfter = stringBefore.replace("last", "first");
console.log("string after:" + stringAfter);


