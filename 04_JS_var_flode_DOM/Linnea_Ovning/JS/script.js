for (let row = 1; row < 6; row++) {
    let cell=""
    for (let col = 1; col < 6; col++){
    cell += "|" + row * col + "| \t";
    }
    console.log(cell);
}


let start = 0
let finish = 100

for (let index = 0; index < finish; index++) {
    let summa = 0;

    if (index%2!==0) {
        summa += index;
    }
    
}
//console.log(`The sum of odd numbers between ${start} and ${finish} is ${sum}´);


let header = document.createElement ("h1");
header.textContent = "Rubrik";
document.body.appendChild(header);

let newParagraph = document.createElement("p");
newParagraph.textContent = "Här kommer text";

document.body.appendChild(newParagraph);

document.body.style.backgroundColor = "lightgray";

