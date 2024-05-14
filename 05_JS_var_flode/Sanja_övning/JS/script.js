
/*Aritmetik*/


//Power

console.log("Math.pow(10,2);");
console.log(Math.pow(10,2));

console.log("Math.pow(10,-2);");
console.log(Math.pow(10,-2));



//Random

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





//Round

console.log("Math.round(myRandom)");
let myRandom = Math.random()*10;
console.log("myRandom" + myRandom);
console.log(Math.round(Math.random));

console.log("ceiling");
console.log(Math.ceil(myRandom));
console.log("floor" + myRandom);
console.log(Math.floor(myRandom));



//abs

console.log("Math.abs(-2)");
console.log(Math.abs(-2));

console.log("Math.abs(2)");
console.log(Math.abs(2));


//abs with pow and sqrt

console.log(Math.sqrt("Math.pow(2,2)"));
console.log(Math.sqrt(Math.pow(2,2)));






//Max

console.log("Math.max(1,5,2,3)");
console.log(Math.max(1,5,2,3));



//Exempel algo max

let l = [1,5,2,3];
let tempMax = 0;

for (let i = 0; i < l.length; i++) {
    if(l[i] > tempMax) {
        tempMax = l[i];
    }
}

console.log(tempMax);



//Min

console.log("Math.min(3,1,2,3)");
console.log(Math.min(3,1,2,3));

console.log("Math.E");
console.log(Math.E);






//pareseInt

console.log("a = 5, b = `5`")
let a = 5;
let b = "5";
//checking if b is an integer
console.log("is b an integer" + Number.isInteger(b));

console.log("a + b");
console.log(a + b);

console.log("a + Number.parseInt(b)");
console.log("a = 5, b = 5")

if(!Number.isInteger(b)) {
    b = Number.parseInt(b);
}

b = Number.parseInt(b);
console.log(a + b);
//checking if b is an integer
console.log("is b an integer" + Number.isInteger(b));


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



//Date and time

console.log("Date.now() tim is sec from 1970");
console.log(Date.now());

 //how to get current date and time

console.log("new Date() creates a date object with the current date");

let currentDate = new Date(); //<-create date object 
console.log(currentDate); //<- return full date data or...
console.log("dateObject.getHours() returns hours");
console.log(currentDate.getHours()); //<-return specific data
console.log("dateObject.getMinutes() returns minutes");
console.log(currentDate.getMinutes());



//Strings

//Konvert integer to string

console.log("Number.toString(5)");
let integerNumber = 5;
let convertedNumber;

if(Number.isInteger(integerNumber)) {
    convertedNumber = integerNumber.toString();
}

console.log(convertedNumber);


//String length

let myName = "Lukas";
let school = "Grit Academy";
let emptyString = "";

console.log(`String variable with value ${myName} is ${myName.length}`);
console.log(`String variable with value ${emptyString} is ${emptyString.length} chars long`);



//String concatenate

console.log(`5 + "5"`);
console.log(5 + "5"); //this will give 55. JS is going to treat it a string concatenate

console.log(`5 + 5`);
console.log(5 + 5); //this will be treated as math




//Upper and lower case

let text = "HELLO";

console.log("start String: " + text);
let textToLowerCase = text.toLowerCase();
console.log("start string toLowerCase()" + textToLowerCase);
let textToUpperCase = textToLowerCase.toUpperCase();
console.log("start string toUpperCase" + textToUpperCase);
console.log(textToUpperCase);



//Substring and slice

let message = "Hello from JavaScript my friend";
console.log("message = " + message);
console.log("substring returns chars in the interval given");
let messageSubstring = message.substring(11,21);

console.log("message substring 11,21" + messageSubstring);

let messageForSlicing = "No, please don´t slice me";
console.log(messageForSlicing);
let slicedMessage = messageForSlicing.slice(11,9);
console.log(slicedMessage);
console.log(messageForSlicing);




//Find string

let article = "Ända sedan Daniel Craig 2021 tackade ja för sig som James Bond har det ";
let articleToLower = article.toLowerCase();
let hero;

if(articleToLower.includes("james bond")) {
    let index = articleToLower.indexOf("james bond");
    hero = articleToLower.substring(index, index + 11);
   
}else{
    hero = "Mr Bean";
}

console.log("The hero is: " +  hero);




//Trim

let badInputText = "    Hello    ";
console.log("badInputText: " + badInputText);
let trimedText = badInputText.trim();
console.log("trimedText: " + trimedText);



//Split

let userData = "Bob, Rob, Zob, Bobland, Robland, Zobland, 34539876, Bobska, Rrobska, Zobska";
let userDataSplit = userData.split(",");
console.log("Data before split");
console.log(userData);
//get value from the list, trim it, and put it back

for(let i = 0; i < userDataSplit.length; i++) {

    userDataSplit[i] = userDataSplit[i].trim();
}

console.log("Data after split");
console.log(userDataSplit);




//Join

console.log("joining user data split with ´, ´ ");
let userDataJoin = userDataSplit.join(", ");
console.log(userDataJoin);




//Replace a string with another string

let stringBefore = "This is the last example of evening";
console.log("String before: " + stringBefore)
let stringAfter = stringBefore.replace("last", "first");
console.log("String after: " + stringAfter);

let stringAfterUnsuccesfullReplace = stringBefore.replace("France", "Burkino Paso");
console.log("String after: " + stringAfter);


let stringWithMultipleReplace = stringBefore.replaceAll("e", "x");
console.log("stringAfterUnsuccesfullReplace: " +  stringBefore.replaceAll("e", "x"));

stringBefore = "this is a new text";




//Övning i slutet

let userComp = "Skärmskydd, 499, Mobiltelefon, 299, Telefonfodral, 89, Laptop, 799, Hörlurar, 199";
let userCompSplit = userComp.split(",");
console.log("Data after split");
 

console.log(userComp);
console.log(userCompSplit);



for(let i = 0; i < userCompSplit.length; i++) {

    userCompSplit[i] = userCompSplit[i].trim();
    
    if(i%2 !== 0) {
        
        userCompSplit[i]= Number.parseInt(userCompSplit[i]);

    }
    
    if(i%2 === 0) {

        userCompSplit[i] = userCompSplit[i].toUpperCase();

    } 
}  


console.log(userCompSplit);


//another example

const products = [
    {
      name: "Skärmskydd",
      price: 499
    },
    {
      name: "Mobiltelefon",
      price: 299
    },
    {
      name: "Telefonfodral",
      price: 89
    },

    {  name: "Laptop",
       price: 799 
    },

    {  name: "Hörlurar",
       price: 199 
    
    }
    

  ];

  console.log(products);



 
  
  // Definiera strängarna
var txt1 = " Skärmskydd , 499";
var txt2 = "Mobiltelefon, 299, ";
var txt3 = " Telefonfodral, 89, ";
var txt4 = " Laptop, 799";
var txt5 = " Hörlurar , 199 ";

// Funktion för att bearbeta varje sträng
function processString(txt) {
    // Dela upp strängen vid kommatecken och trimma för att ta bort mellanslag
    var parts = txt.split(",");
    var productName = parts[0].trim().toUpperCase(); // Konvertera till versaler
    var price = parseFloat(parts[1].trim()); // Konvertera priset till ett numeriskt värde

    // Ersätt kommatecknet med bindestreck och ta bort eventuella mellanslag runt bindestrecket
    productName = productName.replace(",", " - ");

    // Kontrollera om produktnamnet innehåller ordet "Telefon"
    if (productName.includes("TELEFON")) {
        console.log(productName); // Skriv ut produktnamnet om det innehåller "Telefon"
    }

    // Returnera produktnamn och pris som ett objekt
    return {
        productName: productName,
        price: price
    };
}

// Bearbeta varje sträng och skriv ut resultatet
console.log(processString(txt1));
console.log(processString(txt2));
console.log(processString(txt3));
console.log(processString(txt4));
console.log(processString(txt5));

  

