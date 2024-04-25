//ovning genomgång
let txt1 = " Mobiltelefon, 299,  ";

let txt1Product = txt1.substring(1,13);
let txt1Price = txt1.substring(12,19);
console.log("txt1Product: " + txt1Product);
console.log("txt1Price:" +  txt1Price);
txt1Product = txt1Product.toUpperCase();
txtPrice = Number.parseInt();
console.log("txt1Product: " + txt1Product);
console.log("txt1Price:" + typeof txt1Price);


let txtSplit = txt1.split(",");
console.log(txtSplit);
for (let i = 0; i < txtSplit.length; i++){
    txtSplit [i] = txtSplit [i].trim();
}
console.log(txtSplit)
txtSplit[0] = txtSplit[0].toUpperCase();
txtSplit[1] = Number.parseInt(txtSplit[1]);
console.log("txt1Product: " + txt1Product);
console.log("txt1Price:" + typeof txt1Price);
if(txt1Product.includes("TELEFON")){
    console.log("variable" + txt1Product + "contains the word telehone")
}else{
    console.log("variable" + txt1Product + "does not contain word");
}

txt1 = txt1.replaceAll(",", "-");



//ovning
let txt2 = " Mobiltelefon, 299,        ";
let result = txt2.trim();
console.log(result);



let txt222 = txt2.split(", ");
console.log(txt222);
console.log(txt2.slice(15));
console.log(txt2.toUpperCase());
let txt22 = txt2.replace(',' , "-")
console.log(txt22);
console.log(txt2.includes('telefon'));








console.log("number.toString(5)");
let integerNumber = 5;
let convertedNumber;
if(Number.isInteger(integerNumber)){
    convertedNumber = integerNumber.toString();
}
console.log(convertedNumber);


let article = "Ända sedan Daniel Craig 2021 osvosvosv James Bond"
let articleToLower = article.toLowerCase();
let hero;
if(article.includes("James Bond")){
    let index = article.indexOf("James Bond");
    hero = article.substring(index, index + 11);
    console.log("The hero is: " + hero);

}
if(articleToLower.includes("James Bond")){
    let index = articleToLower.indexOf("James Bond");
    hero = articleToLower.substring(index, index + 11);
    console.log("The hero is: " + hero);

}else{
    hero = "Mr Bean";
}
console.log("The hero is: " + hero);


let badInputText = "    hello    "
console.log("badInputText: " + badInputText);
let trimedText = badInputText.trim();
console.log("trimedText: " + trimedText);


let userData= "Bob, Rob, Zob, Bobland, Zobland";
let userDataSplit = userData.split(" ");
console.log("Data before split");
console.log(userDataSplit);
for (let i = 0; i < userDataSplit.length; i++ ){
    userDataSplit[i] = userDataSplit[i]. trim();
}
console.log("data after split");
console.log(userDataSplit);

console.log("joining user data split");
let userDataJoin = userDataSplit.join("! ");
console.log(userDataJoin)


let stringBefore = "This is the last example of the evening";
console.log("string before: " + stringBefore);
let stringAfter = stringBefore.replace("France", "Burkino Faso"); 
console.log("String after: " + stringAfter);

let stringWithMultipleReplace = stringBefore.replaceAll("France", "Burkino Faso"); 
console.log("String after: " + stringAfter);



stringBefore = "This is a new text";



let myName = "lukas";
let school= "Grit Academy";
let emptyString = "";
let notAstring = false;

let fullstandigtNamn = myName + '' + school


console.log('')


console.log(`String variable with value $(myName) is $(myName.length) chars long`);
console.log(`String variable with value $(emptyString) is $(emptyString.length) chars long`);
console.log(`String variable with value $(notAstring) is $(notAstring.1) chars long`);


console.log('5 + "5"');
console.log(5 + "5");


//let text="HELLO";
console.log("start String: " + text);
let textToLowerCase = text.toLowerCase();
console.log("start string toLowerCase() " + textToLowerCase);
let textToUppserCase = textToLowerCase.toUpperCase();
console.log("start string toUpperCase() " + textToUppserCase);


let message = "hello from Javascript my friend";
console.log("message = " + message)
console.log("substring return chars in the interval given");
let messageSubstring = message.substring(11,9);
console.log(messageSubstring);


let messageForSlicing = "no, please dont slice me";
console.log(messageForSlicing);
let slicedmessage = messageForSlicing.slice(11,9);
console.log(slicedmessage);
console.log(messageForSlicing);



console.log("HELLO".toLowerCase());

console.log(Math.random()*100);

console.log("Math.pow(10,2);");
console.log(Math.pow(10,2));



console.log(Math.random());


console.log("Math.random()*10");
console.log(Math.random()*10);
let myRandom = Math.random()*10;
console.log("myRandom" + myRandom);
console.log(Math.round(myRandom));

console.log("ceiling");
console.log(Math.ceil(myRandom));

console.log("floor");
console.log(Math.floor(myRandom));




console.log("Math.max(1,2,3,4,5,6,7)");
console.log(Math.max(1,2,3,4,5,6,7));

console.log("Math.min(1,2,3,4,5)");
console.log(Math.min(1,2,3,4,5));


console.log("Math.E");
console.log(Math.E);


console.log("a = 5, b = '5'");
let a = 5;
let b = "5"

console.log("Number.MAX_VALUE");
console.log(Number.MAX_VALUE);
console.log("Number.MAX_VALUE + 10");
console.log(Number.MAX_VALUE + 10);



console.log("Number.MIN");
console.log(Number.MIN_VALUE);
console.log("Number.MIN - 10");
console.log(Number.MIN_VALUE - 10);



console.log("date now() time in sec from 1978");
console.log(Date.now());

console.log("new date () create a a data objet with the current data");
let currentDate = new Date();
console.log(currentDate);
console.log("dataObjekt.GetHours() returns hours");
console.log(currentDate.getHours());
console.log(currentDate.setMinutes());




console.log("a + Number.parseInt(b)");
console.log(a + Number.parseInt(b));


console.log("Math.abs(-2)");
console.log(Math.abs(-2));

console.log("Math.abs(2)");
console.log(Math.abs(2));



let i = [3,1,2,5];
let tempMax = 0;
for (let i = 0;1 < i.lenght; i++){
    let tempMax = 0;

    if(i[i] > tempMax){
        tempMax = i[i];
    }
}
console.log(tempMax);


//console.log("Math.abs(-2)");
//console.log(Mats.abs(-2));



console.log();