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

//övning - STORA bokstäver - uppercase
let letters = " Laptop, 799";
console.log ("Ordinary letters: " + letters);
let toBigLetters = letters.toUpperCase();
//console.log ("start string ()" + toBigLetters);
console.log ("BIG LETTERS: " + toBigLetters);

// substring and slice

let message = "Hello from JavaScript my friend";
console.log("message = " + message);
console.log("substirng returns chars in the interval given");
let messageSubstring = message.substring(11,21);
console.log("messageSubstring 11, 21" + messageSubstring);

//övning substring - plocka upp specifika "ord"
let phone = "Mobiltelefon, 299, ";
console.log("message = " + phone);
let phoneSubsting = phone.substring(0,12);
console.log("phoneSubstring 0, 12 " + phoneSubsting);

let price = "Mobiltelefon, 299, ";
console.log("message = " + price);
let priceSubsting = price.substring(14,17);
console.log("priceSubstring 14, 17 " + priceSubsting);

//parseInt - spara det som ett numreriskt värde
let convertedPrice = parseInt(priceSubsting);
console.log(convertedPrice);

//slice
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

//övning hitta ett specifikt ord 

//trim 
let badInputText = "     Hello     ";
console.log("badInputText: " + badInputText);
let trimedText = badInputText.trim();
console.log("trimedText: " + trimedText);

//övning trim - ta bort mellanslag i början och i slutet 
let badText = " Telefonfodral, 89, ";
console.log("badText: " + badText);
let trimText = badText.trim();
console.log("trimtext: " + trimText);

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
console.log("string before:" + stringBefore);
let stringAfter = stringBefore.replace("last", "first");
console.log("string after:" + stringAfter);

// övning - byta ut ord/tecken med ngt annat 

let beforeString = " Telefonfodral, 89, ";
console.log("string before: " + beforeString);
let afterString = beforeString.replaceAll(",", "-" );
console.log("string after:" + afterString);

//övning - ta bort bindesträcket med substring + trimma så att texten mellan slaget försvinner
afterString = afterString.substring(0,18).trim();
console.log(afterString);



let txt1 = " Skärmskydd , 499";
console.log("original text: ")
txt1 = txt1.replaceAll(",", "-");
console.log("replace , with -: " + txt1);
let txt2 = "Mobiltelefon, 299, ";
let txt3 = " Telefonfodral, 89, ";
let txt4 = " Laptop, 799";
let txt5 = " Hörlurar , 199 ";

 
//Dela upp strängen och extrahera varje produkt och dess pris en i taget.
//no list code
//axtracting product name & price from txt1 
let txt1Product = txt1.substring(1,13);
let txt1Price = txt1.substring(15,19);
console.log("txt1Product: " + txt1Product);
console.log("txt1Price: " + typeof txt1Price);
//formatting product name to uppercase
txt1Product = txt1Product.toUpperCase();
//converting price to number
txt1Price = Number.parseInt(txt1Price);
console.log("txt1Product: " + txt1Product);
console.log("txt1Price: " + typeof txt1Price);
if(txt1Product.includes("TELEFON")){
    console.log("variable " + txt1Product + " contains the word TELEFON")
}else{
    console.log("variable " + txt1Product + "doesn't contain the word TELEFON")
}


//code with a list

let txt1Split = txt1.split(",");//<-- creates a list
console.log(txt1Split);
//trim value in each index in the list
for (let i = 0; i < txt1Split.length; i++) {
    txt1Split[i] = txt1Split[i].trim()
}
console.log(txt1Split);
//uppercase on index 0 in the list
txt1Split[0] = txt1Split[0].toLocaleUpperCase();

if(txt1Split.includes("TELEFON")){
    console.log("variable " + txt1Split + " contains the word TELEFON")
}else{
    console.log("variable " + txt1Split + "doesn't contain the word TELEFON")
}
//converting to integer on index 1 in the list 
txt1Split[1] = Number.parseInt (txt1Split[1]);
console.log(txt1Split);
//console.log("txt1Product: " + txt1Product);
//console.log("txt1Price: " + typeof txt1Price);
//recycling variable återanvända variabel 