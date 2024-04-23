//Aritmetik

//Power
console.log("Math.pow(10,2);");
console.log(Math.pow(10,2));
console.log("Math.pow(10,-2);");
console.log(Math.pow(10,-2));
//gives error
//console.log("Math.pow(10,a);");
//console.log(Math.pow(10,a));

//Random 0-1
console.log("Math.random();");
console.log(Math.random());
//Random 0-10
console.log("Math.random()*10;");
console.log(Math.random()*10);
//Random 0-100
console.log("Math.random()*100;");
console.log(Math.random()*100);
//Random 50-100
console.log("50 + Math.random()*50;");
console.log(50 + (Math.random()*50));

//round
console.log("Math.round(myRandom)");
let myRandom = Math.random()*10;
console.log("myRandom " + myRandom);
console.log(Math.round(myRandom));

console.log("ceiling " );
console.log(Math.ceil(myRandom));
console.log("floor " + myRandom);
console.log(Math.floor(myRandom));

//abs
console.log("Math.abs(-2)");
console.log(Math.abs(-2));
console.log("Math.abs(2)");
console.log(Math.abs(2));

//abs with pow and sqrt
console.log("Math.sqrt(Math.pow(2,2))");
console.log(Math.sqrt(Math.pow(2,2)));

//Max
console.log("Math.max(1,5,2,3)");
console.log(Math.max(1,5,2,3));
//Max algo example
let l = [1,5,2,3];
let tempMax = 0;//Number.MIN_VALUE should be used here not 0
for (let i = 0; i < l.length; i++) {
    if(l[i] > tempMax){
        tempMax = l[i];
    }
}
console.log(tempMax);


//Min
console.log("Math.min(3,1,2,3)");
console.log(Math.min(3,1,2,3));

console.log("Math.E");
console.log(Math.E);

//parseInt
console.log("a = 5, b = '5'");
let a = 5;
let b = "5";
//checking if b is an integer
console.log("is b an integer? "+Number.isInteger(b));

console.log("a + b");
console.log(a + b);

console.log("a + Number.parseInt(b)");
console.log("a = 5, b = 5");
if(!Number.isInteger(b)){
    b = Number.parseInt(b);
}
console.log(a + b);
//checking if b is an integer
console.log("is b an integer? "+Number.isInteger(b));


//MAX VALUE
console.log("Number.MAX_VALUE");
console.log(Number.MAX_VALUE);
console.log("Number.MAX_VALUE + 10");
console.log(Number.MAX_VALUE + 10);

//MIN VALUE
console.log("Number.MIN_VALUE");
console.log(Number.MIN_VALUE);
console.log("Number.MIN_VALUE - 10");
console.log(Number.MIN_VALUE - 10);

//Date and Time
console.log("Date.now() time in sec from 1970");
console.log(Date.now());
//how to get current date and time
console.log("new Date() creates a date object with the currennt date");
let currentDate = new Date(); //<- create datae object
console.log(currentDate); // <- return full date data or...
console.log("dateObject.getHours() returns hours");
console.log(currentDate.getHours()); //<- return specific data
console.log("dateObject.getMinutes() returns minutes");
console.log(currentDate.setMinutes());

//Strings
//konvert integer to string
console.log("Number.toString(5)");
let integerNumber = 5;
let convertedNumber;

if(Number.isInteger(integerNumber)){
    convertedNumber = integerNumber.toString();
}
console.log(convertedNumber);


//String length
let myName = "Lukas";
let school = "Grit Academy";
let emptyString = "";

console.log(`String variable with value ${myName} is ${myName.length} chars long`);
console.log(`String variable with value ${emptyString} is ${emptyString.length} chars long`);

//String Concatenate
console.log('5 + "5"');
console.log(5 + "5");//this will give 55. JS is going to treat it a string concat

console.log('5 + 5');
console.log(5 + 5);//his will be treated as math 

//upper and lower case
let text = "HELLO"; 
console.log("start String: " + text);
let textToLowerCase = text.toLowerCase();
console.log("start string toLowerCase() " + textToLowerCase);
let textToUpperCase = textToLowerCase.toUpperCase();
console.log("start string toUpperCase() " + textToUpperCase);
console.log(textToUpperCase);

// substring and slice
let message = "Hello from javascript my friend";
console.log("message = " + message)
console.log("substring returns chars in the interval given");
let messageSubstring = message.substring(11, 9);
console.log("message substring 11,21 " + messageSubstring);

let messageForSlicing = "No, please dont slice me!";
console.log(messageForSlicing);
let slicedMessage = messageForSlicing.slice(11,9);
console.log(slicedMessage);
console.log(messageForSlicing);

//find string
let article = "Ända sedan Daniel Craig 2021 tackade för sig som James Bond har det spekulerats om vem som ska ta sig an rollen som den ikoniske superspionen. Henry Cavill, Tom Hardy, Aaron Taylor-Jones, Andrew Garfield och Lucien Laviscount är namn som nämnts.";
let articleToLower = article.toLowerCase();
let hero;

if(articleToLower.includes("james bond")){
    let index = articleToLower.indexOf("james bond");
    hero = articleToLower.substring(index, index + 11);
}else{
    hero = "Mr Bean";
}


console.log("The hero is: " + hero);

//trim
let badInputText = "    hello    ";
console.log("badInputText: " + badInputText);
let trimedText = badInputText.trim();
console.log("trimedText: " + trimedText);

//split
let userData = "Bob, Rob, Zob, Bobland, Zobland, Robland,34539876, Bobska, Robska, Zobska"
let userDataSplit = userData.split(",");
console.log("Data before split");
console.log(userData);
for (let i = 0; i < userDataSplit.length; i++) {
    //get value from the list, trim it, and put it back
    userDataSplit[i] = userDataSplit[i].trim();
}
console.log("Data after split");
console.log(userDataSplit);

//join
console.log("joining user data split with ', ' ");
let userDataJoin = userDataSplit.join(", ");
console.log(userDataJoin);

//replace a string with another string

let stringBefore = "This is the last example of the evening.";
console.log("string before: " + stringBefore);
let stringAfter = stringBefore.replace("last", "first");
console.log("String after: " + stringAfter);

let stringAfterUnsuccesfullReplace = stringBefore.replace("France", "Burkino Faso");
console.log("String after: " + stringAfter);

let stringWithMultipleReplace = stringBefore.replaceAll("e", "x");
console.log("stringWithMultipleReplace: " + stringWithMultipleReplace);


//Ovning - Doing only txt1 other variables txt2, txt3.... are done in te same way
let txt1 = "  Skärmskydd , 499"  ;
console.log("original text1: " + txt1);
txt1 = txt1.replaceAll(",", "-");
console.log("replace , with -: " + txt1);

let txt2 = "Mobiltelefon, 299, ";
let txt3 = " Telefonfodral,  89,  "   ;
let txt4 = " Laptop,         799";
let txt5 = " Hörlurar   ,  199     ";

//Dela upp strängen och extrahera varje produkt och dess pris en i taget.

// no list code
//extracting product name and price from txt1
let txt1Product = txt1.substring(2,13);
let txt1Price = txt1.substring(15,19);
console.log("txt1Product: " + txt1Product);
console.log("txt1Price: " + typeof txt1Price);
//formatting product name to uppercase
txt1Product = txt1Product.toUpperCase();
//converting price to a number
txt1Price = Number.parseInt(txt1Price);
console.log("txt1Product: " + txt1Product);
console.log("txt1Price: " + typeof txt1Price);
if(txt1Product.includes("TELEFON")){
    console.log("variable " + txt1Product + " containes the word TELEFON")
}else{
    console.log("variable " + txt1Product + " does not contain the word TELEFON")
}


//code with a list - An alternative to the previous one giving the same result

let txt1Split = txt1.split("-"); //<- creates a list
console.log(txt1Split);
//trim value in each index in the list
for (let i = 0; i < txt1Split.length; i++) {
    txt1Split[i] = txt1Split[i].trim(); 
}
console.log(txt1Split);
//uppercase on index 0 in the list
txt1Split[0] = txt1Split[0].toUpperCase();
if(txt1Split[0].includes("TELEFON")){
    console.log("variable " + txt1Split[0] + " containes the word TELEFON")
}else{
    console.log("variable " + txt1Split[0] + " does not contain the word TELEFON")
}
//converting to integer on index 1 in the list
txt1Split[1] = Number.parseInt(txt1Split[1]);
console.log(txt1Split);






