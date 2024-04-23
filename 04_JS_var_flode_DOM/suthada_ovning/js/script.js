

for (let row = 1; row <= 5; row++) {
    let cell ="";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "|";
    }
    console.log(cell);
}


let size=5; 

for (let row = 1; row <=size; row++) {
    let rowdata="";
    for (let col = 1; col < size + 1; col++) {
        rowdata =rowdata + "|" + row * col + "| \t";
    }
    console.log(rowdata);
}


//Övning strängar

let txt1 = "skärmskydd,499";
let txt2 = "Mobiltelefon,299";
let txt3 = "Telefonfodral, 89";
let txt4 = "Laptop, 799";
let txt5 = "Hörlurar,199";

console.log(txt1);


