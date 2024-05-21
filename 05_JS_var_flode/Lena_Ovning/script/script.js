

//Aritmetik
console.log(Math.pow(10,2));
console.log(Math.round(7.8));
console.log(Math.ceil(2.3));
console.log(Math.floor(2.3));

// Gives random value between 0 and 1
console.log(Math.random());

// Gives random value between 1 and 10
console.log(Math.random()*10);
 
// Gives random value between 50 and 100
console.log(50+(Math.random()*50));

// Rounded random numbers
console.log(Math.round(Math.random()*10));

// To know what number
let randomNum= Math.random()*10;
console.log("randomNum " + randomNum);
console.log(Math.round(randomNum));

console.log(Math.abs(-2));
console.log(Math.max(1,2,3));
console.log(Math.min(1,2,3));

console.log(Math.sqrt(Math.pow(2,2)));

// How to change the string variable to a number
let a = 3;
let b = "3";
console.log(a + b);
console.log(a + Number.parseInt(b));
console.log("Is b an integer ? " + Number.isInteger(b));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


//Date and Time
console.log(Date.now());

// Shows current date
let currentDate = new Date();
console.log(currentDate);

// Return one information 
console.log(currentDate.getDate());


// Strings
// convert integer to string
let integerNum= 5;
let convertNum;
console.log(convertNum);

/*If inetegerNum is a number then convert if to a string

if(Number.isInteger(integerNum)){
    convertNum = integerNum.toString();
}
console.log(convertNum);
*/

// String length

let myName= "Lena";
let school= "Grit Academy";
let string= "";

console.log(`String variable with value ${myName} is ${myName.length} chars long`);
console.log(`String variable with value ${school} is ${school.length} chars long`);
console.log(`String variable with value ${string} is ${string.length} chars long`);


// String Concatenate

let firstName= "Bill";
let lastName="Gates";
let fullName= firstName + " " + lastName;
console.log(fullName);

// Or with using concat()
let fullName02= firstName.concat(" ", lastName);
console.log(fullName02);

// Uppercase and Lowercase

let message ="Hello";
console.log(message.toLowerCase());
console.log(message.toUpperCase());

let text ="Hello World One";
let textToLowerCase= text.toLowerCase();
let textToUpperCase= text.toUpperCase();
console.log(textToLowerCase);
console.log(textToUpperCase);

//substring and slice


//Gives cases from 0-5 !==5
console.log(text.substring(0,5)); 
//Gives cases after 6
console.log(text.slice(6));


//indexOF and includes
let meaning="When you memorize a poem, it becomes a part of you forever.";
let hero;

if(meaning.includes("memorize")){
    let index = meaning.indexOf("memorize");
    hero = meaning.substring(index, index+9);
}else{
    hero= "Mr Bean";
}
console.log("When you " + hero);

// trim
let trim="    hello   ";
let trimText= trim.trim();
console.log(trim);
console.log(trimText);


//split

let userData="bob, zob, rob, bobland, zobland, robland, 2398489, bobska, zobska, robska";
let userDataSplit= userData.split(",");
console.log(userData);

for(let i =0; i < userDataSplit.length; i++){
    // get value from the list, trim it , and put it back
    userDataSplit[i]= userDataSplit[i].trim();
}
console.log(userDataSplit);


// join
let words= ["Javasscript","is","fun"];
let textWords = words.join(" ");
console.log(textWords);

// replace
let message02="Hello Maria";
let newMessage02=message02.replace("Maria","Martha");
console.log(newMessage02);


// ÖVNING


let txt1 = " Skärmskydd , 499"
let txt2 = "Mobiltelefon, 299, "
let txt3 = " Telefonfodral, 89, "
let txt4 = " Laptop, 799"
let txt5 = " Hörlurar , 199 "

// How to split text in txt1
let txt1Split=txt1.split(",");
console.log(txt1Split);


// Another way to solve the code
/*
let txt1Product =txt1.substring(2,13);
txt1Product = txt1Product.toUpperCase();

// Code with a list
let txt1Split=txt1.split(",");
console.log(txt1Split);
for(let i=0; i<txt1Split.length ;i++ ){
    txt1Split[i]=txt1Split[i].trim();
}
console.log(txt1Split);
txt1Split[0] = txt1Split[0].toUpperCase();
txt1Split[1] = Number.parseInt(txt1Split[1]);
console.log(txt1Split);
*/


let txt2Split=txt2.split(",");
console.log(txt2Split);

let txt3Split=txt3.split(",");
console.log(txt3Split);

let txt4Split=txt4.split(",");
console.log(txt4Split);

let txt5Split=txt5.split(",");
console.log(txt5Split);


// After split can trim be used
let txt1Trim= txt1Split[0].trim();
console.log(txt1Trim);
let txt2Trim=txt2Split[0].trim()
console.log(txt2Trim);
let txt3Trim=txt3Split[0].trim();
console.log(txt3Trim);
let txt4Trim=txt4Split[0].trim()
console.log(txt4Trim);
let txt5Trim=txt5Split[0].trim();
console.log(txt5Trim);

//Trim Price 
let txt1TrimPrice= txt1Split[1].trim();
console.log(txt1TrimPrice);
let txt2TrimPrice=txt2Split[1].trim()
console.log(txt2TrimPrice);
let txt3TrimPrice=txt3Split[1].trim();
console.log(txt3TrimPrice);
let txt4TrimPrice=txt4Split[1].trim()
console.log(txt4TrimPrice);
let txt5TrimPrice=txt5Split[1].trim();
console.log(txt5TrimPrice);

// Upper Case
console.log(txt1Split[0].toUpperCase());
console.log(txt2Split[0].toUpperCase());
console.log(txt3Split[0].toUpperCase());
console.log(txt4Split[0].toUpperCase());
console.log(txt5Split[0].toUpperCase());

// Replace , with - 
console.log(txt1.replaceAll(",","-"));
console.log(txt2.replaceAll(",","-"));
console.log(txt3.replaceAll(",","-"));
console.log(txt4.replaceAll(",","-"));
console.log(txt5.replaceAll(",","-"));


// includes
if(txt1Trim.includes("Telefon")){
    console.log(txt1Trim);
}else{
    console.log(txt1Trim + " har inte ordet ´Telefon´");
}

if(txt2Trim.includes("Telefon")){
    console.log(txt2Trim);
}else{
    console.log(txt2Trim+ " har inte ordet ´Telefon´");
}

if(txt3Trim.includes("Telefon")){
    console.log(txt3Trim);
}else{
    console.log(txt2Split+ " har inte ordet ´Telefon´");
}
if(txt4Trim.includes("Telefon")){
    console.log(txt4Trim);
}else{
    console.log(txt4Trim+ " har inte ordet ´Telefon´");
}
if(txt5Trim.includes("Telefon")){
    console.log(txt5Trim);
}else{
    console.log(txt5Trim+ " har inte ordet ´Telefon´");
}