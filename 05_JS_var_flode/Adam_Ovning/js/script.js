let txt1 = " Skärmskydd , 499";
txt1 = txt1.replaceAll(",", "-")

let txt2 = "Mobiltelefon, 299, ";
let txt3 = " Telefonfodral, 89, ";
let txt4 = " Laptop,    799";
let txt5 = " Hörlurar , 199 ";
let megaTxt = txt1 + txt2 + txt3 + txt4 + txt5;


let txt1Product = txt1.substring(1,11);
let txt1Price = txt1.substring(14,17);
console.log("txt1Product: " + txt1Product);
console.log("txt1Price: " + txt1Price);

txt1Product = txt1Product.toUpperCase();
txt1Price = Number.parseInt(txt1Price);
console.log("txt1Product: " + typeof txt1Product);
console.log("txt1Price: " + typeof txt1Price);

if (txt1Product.includes("TELEFON")) {
    console.log("variable " + txt1Product + " contains the word TELEFON")
} else {
    console.log("variable " + txt1Product + " does not contain the word TELEFON")
}


let txt1Split = txt1.split(",");
console.log(txt1Split);

for (let i = 0; i < txt1Split.length; i++) {
    txt1Split[i] = txt1Split[i].trim();
}
console.log(txt1Split);

txt1Split[0] = txt1Split[0].toUpperCase();
if (txt1Split[0].includes("TELEFON")) {
    console.log("variable " + txt1Split[0] + " contains the word TELEFON")
} else {
    console.log("variable " + txt1Split[0] + " does not contain the word TELEFON")
}
txt1Split[1] = Number.parseInt(txt1Split[1]);
console.log(txt1Split);

if (megaTxt.includes("TELEFON")) {
    console.log("variable " + megaTxt + " contains the word TELEFON")
} else {
    console.log("variable " + megaTxt + " does not contain the word TELEFON")
}



/* 
console.log(txt1.substring(0,11))
console.log(txt1.slice(11))


let produkter = `${txt1}; ${txt2}; ${txt3}; ${txt4}; ${txt5}`;

console.log(txt1.trim());
console.log(produkter.trim()); */

function changeImage() {
    let image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
}