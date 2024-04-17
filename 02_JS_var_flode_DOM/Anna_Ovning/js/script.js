

let namn= "Anna";
let alder= 21;
let isStudent= true;

alert (`Jag heter ${namn} och är ${alder}`);

console.log (namn,alder,isStudent);

console.log ("Hej");
console.log ("Namn variabel typ: " + (typeof namn));
console.log ("Alder variabel typ:" + (typeof alder));
console.log ("Student variabel typ:"+(typeof isStudent)); 



let time= 12;

if (time > 15) { /* större än */
    alert ("Wake up"); /* vad som ska hände */
}
else if (time < 22) { /* större än */
    alert ("Go to sleep"); /* vad som ska hände */
}

let foo= 4

if (4 < 2) {
    console.log ("4 är större än 2")
}

else {
    console.log ("4 är mindre än 2")
}





let hour= 12; /* Logga om hour är mellan 5-10 */    

if (!(hour < 5) ) {
    console.log ("hour is between 5 and 10")
}
