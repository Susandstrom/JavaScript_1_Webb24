
//Övning strängar, trim & split
//dela upp strängen och extrahera varje produkt och dess pris, en i taget.
let txt1 = "Skärmskydd, 499";
console.log("original text:" + txt1);
txt1 = txt1.replaceAll(",","-"); //<--Ändrar "," till "-"
console.log("replace, with -" + txt1);

let txt2 = "Mobiltelefon, 299";
let txt3 = "Telefonfodral, 89";
let txt4 = "Laptop, 799";
let txt5 = "Hörlurar, 199";

//typeof (string), no list (extracting product name and price from txt1)
let txt1Product = txt1.substring(0,10);
let txt1Price = txt1.substring(11,19);
console.log("txt1Product: " + txt1Product);
console.log("txt1Price: " + typeof txt1Price);


//Uppercase text (number) + converting price to number. 
txt1Product = txt1Product.toUpperCase();
txt1Price = Number.parseInt(txt1Price);
console.log("txt1Product: " + txt1Product);
console.log("txt1Price: " + typeof txt1Price);

//produktordsök
if(txt1Product.includes("TELEFON")) {
    console.log("variable" +" " + txt1Product + " " + "containes the word TELEFON");
}else{
    console.log("variable" + " " + txt1Product +" " + "does not contain the word TELEFON");
}


//(Split & Trim) Code with list 
let txt1Split = txt1.split(",");  //<--Creates a list
console.log(txt1Split);
//trim value in each index in the list
for(let i=0; i <txt1Split.length; i++){
    txt1Split [i]= txt1Split[i].trim();

}
console.log(txt1Split);
//uppercase on index 0 in the list
txt1Split[0] = txt1Split[0].toUpperCase();
//produktordsök
if(txt1Split[0].includes("TELEFON")) {
    console.log("variable" +" " + txt1Split[0]+ " " + "containes the word TELEFON");
}else{
    console.log("variable" + " " + txt1Split[0] +" " + "does not contain the word TELEFON");
}

//converting to integer on index 1 in the list
txt1Split[1] = Number.parseInt(txt1Split[1]);
console.log(txt1Split);



