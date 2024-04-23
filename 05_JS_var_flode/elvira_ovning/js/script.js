console.log("Power: " + (Math.pow(10,2)));
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
console.log(nyttMeddelande);