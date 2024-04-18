/*
for (let row = 1; row < 6; row++) {
    let cell ="";
    for (let col = 1; col < 6; col++) {
        cell += "|" + row * col + "|\t";
    }
    console.log(cell);
}
*/


//skapa header
let header = document.createElement ("h1");

//ge header innehåll
header.textContent = "Hello Danial!";

//appenda h1 till body
document.body.appendChild(header)

//skapa div
let newDiv = document.createElement("div");

// Skapa paragraf
let newParagraph = document.createElement("p");
newParagraph.textContent = "Detta är komplicerat MenMen" ;

//Appenda paragrafen till diven
newDiv.appendChild(newParagraph);

//appenda diven till bodyn
document.body.appendChild(newDiv);


//Byt bakrgrundsfärg
document.body.style.backgroundColor = "lightgray"