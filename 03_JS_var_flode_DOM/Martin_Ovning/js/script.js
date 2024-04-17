console.log("--------------------------------------------------------------------");

let bobAge = 30;
let robAge = 30; //25
let zobAge = 35; //35

if (bobAge > robAge && bobAge > zobAge) {
    console.log("Bob är äldst");
} else if (robAge > bobAge && robAge > zobAge) {
    console.log("Rob är äldst");
} else if (zobAge > bobAge && zobAge > robAge) {
    console.log('Zob är äldst');
} 

if (bobAge === robAge && bobAge === zobAge &&  robAge===zobAge) {
    console.log("De har samma ålder");
} else if (bobAge === robAge || bobAge === zobAge ||  robAge===zobAge) {
    console.log("Det är lika mellan vissa personer");
}

/* Om en condition är true i mitten av if-satsen då fortsätter inte programmet kolla vidare. Även om andra conditions är true längre ner det kommer inte printas i consolen. Om du vill kolla på de andra cindition är true då måste man dela if-satsen i flera if-satser  */

/* OR(||) condition ska vara efter och(&&) condition för att det ska kolla igenom hela koden i if-satsen */

console.log("--------------------------------------------------------------------");

for (let index = 0; index < 11; index++) {
    const element = index;
    console.log("Elementet: " + element);
}


/* Exempel på ett enkel for loop  */
/* let index = 0; - betyder att for loopen börjar på 0 */
/* index < 11; - betyder att om siffran är mindre än 11 så ska det + med 1 och i kod det är index++. index++ är samma som i = i + 1 */
/* Om siffran är 0 då tar det 0 och plussa med 1 och då får man resultat 1. Därefter det tar 1 och plussar med 1 och då får man 2 och så vidare */

for (let start = 0; slut < array.length; index++) {
    const element = array[index];
    
}


for (let i = 0; i < 10; i++) {
    console.log(i);    
}

for (let i = 10; i > 0; i--) {
    console.log(i);  
}


/* Istället för i++ eller i-- man kan ha index = index*2 så multiplicerar man */


for (let index = 10; index < 400; index= index*2) {
    console.log("index = " + index);
    if (index > 100) {
        console.log("Half way done!")
    }
}

console.log("--------------------------------------------------------------------");

for (let index = 0; index < 10; index++) {
    console.log(index);
}

for (let i = 111; i < 134; i++) {
    console.log(i);
}

for (let i = 20; i > 14; i--) {
    console.log(i);
}

for (let i = 50; i > -5; i = i - 5) {
    console.log(i);
}

for (let i = 1; i < 129; i = i*2) {
    console.log(i);
}

for (let i = 0; i < 51; i++) {
    if (i%2 === 0) {
        console.log(i);
    } 
}

for (let i = 0; i < 51; i++) {
    if (i%2 !== 0) {
        console.log(i);
    } 
}

console.log("--------------------------------------------------------------------");

for (i = 1; i < 3; i++) {
    for (j = 1; j < 10; j++ )
    console.log("i = " + i + " - j + " + j);
}

console.log("--------------------------------------------------------------------");

for (let row = 0; row < 2; row++) {
    let cell ="";
    for (let col = 0; col < 10; col++) {
        cell += "|" + row + " " + col + "|"
    }
    console.log(cell);
}

/* cell += samma sak som cell = cell + 1 */

console.log("--------------------------------------------------------------------");

for (let row = 0; row < 10; row++) {
    let printString = "";
    for (let col = 0; col <= row; col++) {
        printString = printString + "*";
    }
    console.log(printString);
}

console.log("--------------------------------------------------------------------");

for (let row = 0; row < 10; row++) {
    let printString = "";
    
    // Adding spaces to the left
    for (let space = 0; space < 10 - row; space++) {
        printString += " ";
    }

    // Adding stars
    for (let col = 0; col <= row; col++) {
        printString += "*";
    }

    console.log(printString);
}

console.log("--------------------------------------------------------------------");

for (let row = 0; row < 10; row++) {
    let printString = "";

    // Adding spaces to the left
    for (let space = 0; space < 10 - row; space++) {
        printString += " ";
    }

    // Adding stars to the left
    for (let col = 0; col <= row; col++) {
        printString += "*";
    }

    // Adding stars to the right
    for (let col = 0; col < row; col++) {
        printString += "*";
    }

    console.log(printString);
}

console.log("--------------------------------------------------------------------");

