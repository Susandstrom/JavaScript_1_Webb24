//Artimetik


//Pwer
console.log("Math.pow(10,2);");
console.log(Math.pow(10,2));


//Random
console.log("math.ran")






//Date and Time
console.log("Date.now() time in sec from 1970")
console.log(Date.now());
//how to get current date and time
console.log("newDate() creates a date object with the current date");
let currentDate = new Date();//<- create date object
console.log(currentDate);//<- returnfull date data or...
console.log(" dateObject.getHours()returns hours");
console.log(currentDate.getHours());//<- return specific data
console.log("dateObject.getMinutes()returns minutes");
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


let myName = " Lukas";
let school = "Grit Academy";
let emptyString = ""

console.log(`String variable with value ${myName} is ${myName.length} chars long`);
console.log(`String variable with value ${emptyString} is ${emptyString.length} chars long`);


//String Concatenate

console.log (`5+"5"`);
console.log(5+"5");//this will give 55. JS is going to teat it as a string.

console.log( `5+5`);
console.log(5+5);//this will be teated as math


// upper and lower case

let text = "HELLO";
console.log("start String:" + text);

let textToLowerCase = text.toLocaleLowerCase();
console.log("start string toLowerCase()" + textToLowerCase)

let textToUpperCase = textToLowerCase.toLocaleUpperCase();
console.log ("start string toUpperCase()" + textToUpperCase);
console.log(textToUpperCase);

// substring and slice

let message =" Hello from JavaScript my friend ";

console.log (" message = " + message);
console.log("substring returns chars inthe intervalgiven");

let messageSubstring= message.substring (11,21);
console.log(" message substring 11,21" + messageSubstring);


let messageForSlicing = "No, pleace dont slice me";
console.log(messageForSlicing);

let slicedMessage = messageForSlicing.slice (11);

console.log(slicedMessage);
console.log(messageForSlicing);



// find string

let article ="Ända sedan Daniel Craig 2021 tackade för sig som James Bond";
let articleToLower = article.toLocaleLowerCase();
let hero;

if(articleToLower.includes("james bond")){

  let index = articleToLower.indexOf("james bond");
  hero = articleToLower.substring( index, index + 11);
   
}else{

  hero = "Mr Bean";

 }

 console.log(" The hero is " + hero);


//trim

let badInputText = " hello ";
console.log( " badInputText: " + badInputText);
let trimedText = badInputText.trim();
console.log(" trimedText:" + trimedText);

//split
let userData = "Bob,Rob,Zob,Bobland,Robland,Zobland,345687,Bobska ";
let userDataSplit = userData.split(",");
console.log("Data before split");
console.log(userData);

for( let i = 0; i < userDataSplit.length; i++){
  //get value from the list, trim it, and put it back
  userDataSplit[i] = userDataSplit[i].trim();
}
console.log( " Data after split");
console.log(userDataSplit);


console.log("joining user data split with`,`");
let userDataJoin = userDataSplit.join(",");
console.log(userDataJoin);

// replace a string with another string

let stringBefore= " This is the last example of the evening ";
console.log( " stringbefore:" + stringBefore);
let stringAfter = stringBefore.replace(" last", "first");
console.log( " string after:" + stringAfter);

let stringAfterUnsuccesfullReplace = stringBefore.replace("France","Burkin");
console.log( " string after:" + stringAfter);


//stringBefore= "this is the new text";



//Övning 5;

let txt1 = "  Skärmskydd, 499,";
let txt2 = " Mobiltelefon, 299,  ";
let txt3 = "  Telefonfodral, 89,";
let txt4 = " Laptop,   799, ";
let txt5 = " Hörlurar , 199  ";



let userProdukt = txt1 + txt2 + txt3 + txt4 + txt5 ; //Concutenera
let userProduktSplit = userProdukt.split(",");

console.log(userProduktSplit);

for(let i= 0; i < userProduktSplit.length; i++){ // 
  userProduktSplit[i] = userProduktSplit[i].trim();

   if(i %2 !==0 ){
    userProduktSplit[i]=parseInt(userProduktSplit[i]); // omvandlat till integer heltal (priset på udda index)
   }
   
   if(i %2 ==0 ){
    userProduktSplit[i]=userProduktSplit[i].toUpperCase();// omvandlat till bokstäver produktnamn till versaler stora bokstäver i jämn index.
  }

}

console.log(userProduktSplit);



let userProduktSplitAfter = userProdukt.replaceAll(`,`, `-`);
console.log("resultat: " + userProduktSplitAfter);




let prod;

console.log(typeof userProduktSplit);

 for( let i = 0 ; i< userProduktSplit.length; i++){
 console.log(userProduktSplit[i].toString().includes("TELEFON"));

  if(userProduktSplit[i].toString().includes("TELEFON")){
  console.log(userProduktSplit[i]);
  
  }else{
  prod=" Nothing found ";
  }
  
}
 console.log("Result"+ prod);



/*If ( Number.isInteger (b)){

b=Number.parseInt(b);
}
*/

/*
let txt1 = "  Skärmskydd, 499,";
console.log("original text1: " + txt1);
txt1 = txt1.replaceAll(",","-");
console.log("replace, with - : ",txt1);


let txt2 = " Mobiltelefon, 299,  ";
let txt3 = "  Telefonfodral, 89,";
let txt4 = " Laptop,   799, ";
let txt5 = " Hörlurar , 199  ";

//Dela upp stränger och exrahera varje produkt och dess pris en i taget.

let txt1Product = txt1.substring(0,10);
let txt1Price = txt1.substring(15,19);
console.log("txt1Product:" + txt1Product);
console.log("txt1Price:" + typeof txt1Price);

txt1Product = txt1Product.toUpperCase();
txt1Price = Number.parseInt(txt1Price);
console.log("txt1Product:" + txt1Product);
console.log("txt1Price" + typeof txt1Price);


txt1 = txt1.replaceAll(",","-");
let txt1Split = txt1.split(",");

console.log(txt1Split);

for ( let i =0; i < txt1Split.length; i++){
txt1Split[i] = txt1Split[i].trim;

console.log(txt1Split);

txt1Split[0] = txt1Split[0].toLocaleUpperCase;

txt1Split[1] = Number.parseInt(txt1Split[1]);
console.log("txt1Product:" + txt1Product);
console.log
}
*/