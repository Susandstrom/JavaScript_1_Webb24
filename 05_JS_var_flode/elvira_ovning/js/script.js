/* console.log("Power: " + (Math.pow(10,2)));
console.log("Random: " + Math.random());
console.log("Random: " + Math.random()*10);
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");

//String legth

let firstName = "Elvira";
let lastName = "Pilblad";

console.log(`String variable ${firstName} is ${firstName.length}`);

let message = "Hej på dig!";
console.log(message.slice(4));
let message1 = "Hej på dig!";
console.log(message1.slice(0,4));

let mening = "When you are feeling tired, dare to keep going.";
console.log(mening.indexOf('tired'));
console.log(mening.includes('dare'));

let article = "Hej på dig din lilla lus. Du är en liten mus!";
let hero;

if(article.includes("din lilla lus")){
    let index1 = article.indexOf("Din lilla lus");
    hero= article.substring(10,25);
}else{
    hero = "Du är en liten mus";
}
console.log("Svaret är: " + hero);

// Replace

let meddelande="Hej John";
let nyttMeddelande = meddelande.replace('John', "Johnny");
console.log(nyttMeddelande); */

// Slutuppgift
let txt1 = " Skärmkydd, 499";
let txt2 = "Mobiltelefon,299, ";
let txt3 = " Telefonfodral, 89";
let txt4 = "Laptop,  799";
let txt5 = "Hörlurar , 199 ";

console.log(txt1.substring(1, 10));
console.log(txt1.substring(12, 16));
console.log(txt2.substring(0, 12));
console.log(txt2.substring(13, 16));
console.log(txt3.substring(1, 14));
console.log(txt3.substring(16, 18));
console.log(txt4.substring(0, 6));
console.log(txt4.substring(9, 12));
console.log(txt5.substring(0, 8));
console.log(txt5.substring(11, 14));

console.log(txt1.trim());
console.log(txt2.trim());
console.log(txt3.trim());
console.log(txt4.trim());
console.log(txt5.trim());

console.log(Number.parseInt(txt1.substring(12,16)));
console.log(Number.parseInt(txt2.substring(13,16)));
console.log(Number.parseInt(txt3.substring(16, 18)));
console.log(Number.parseInt(txt4.substring(9, 12)));
console.log(Number.parseInt(txt5.substring(11, 14)));

console.log(txt1.toUpperCase());
console.log(txt2.toUpperCase());
console.log(txt3.toUpperCase());
console.log(txt4.toUpperCase());
console.log(txt5.toUpperCase());

let nytttxt1 = txt1.replace(',', "-");
let nytttxt2 = txt2.replaceAll(',', "-");
let nytttxt3 = txt3.replace(',', "-");
let nytttxt4 = txt4.replace(',', "-");
let nytttxt5 = txt5.replace(',', "-");
console.log(nytttxt1);
console.log(nytttxt2);
console.log(nytttxt3);
console.log(nytttxt4);
console.log(nytttxt5);

if (txt2.includes("telefon")) {
    console.log("Answer is true")
}else {
    console.log("Answer is false")
}