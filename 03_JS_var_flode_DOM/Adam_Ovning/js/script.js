let bobAge = 30;
let robAge = 25;
let zobAge = 35;

/* Min lösning */

/* if (bobAge > robAge && bobAge > zobAge) {
    console.log("Bob är äldst");
}
else if (robAge > bobAge && robAge > zobAge) {
    console.log("Rob är äldst");
}
else if (zobAge > bobAge && zobAge > robAge) {
    console.log("Zob är äldst");
}
else if (bobAge === robAge && robAge === zobAge && bobAge === zobAge) {
    console.log("De har alla samma ålder");
}
else if (bobAge === robAge || robAge === zobAge || bobAge === zobAge ) {
    console.log("Det är lika mellan vissa personer");
}
 */
/* Lukas lösning */

if (bobAge > robAge && bobAge > zobAge) {
    console.log("Bob är äldst.");
} else if (robAge > bobAge && robAge > zobAge) {
    console.log("Rob är äldst.");
} else if (zobAge > robAge && zobAge > bobAge) {
    console.log("Zob är äldst.");
}

if (bobAge === robAge && bobAge === zobAge && robAge === zobAge) {
    console.log("De har alla samma ålder");
} else if (bobAge === robAge || bobAge === zobAge || robAge === zobAge) {
    console.log("Det är lika mellan vissa personer");
}


/* for (let index = 0; index <= 10; index ++) {
    console.log("index = " + index);
}
for (let i = 10; i >= 0; i--) {
    console.log(i);
} */

/* for (let i = 0; i < 10; i++) {
    console.log(i)
}
for (let x = 111; x <= 133; x++) {
    console.log(x)
}
for (let z = 20; z >= 15; z--) {
    console.log(z)
}
for (let w = 50; w < 1; w-) {
    console.log(w)
}
 */
/* for (let row = 0; row < 10; row++) {
    let printString = "";
    for (let col = 0; col <= row; col++) {
        printString = printString + "*";
    }
    console.log(printString)
} */

/* for (let row = 0; row < 10; row++) {
    let printString = "";
    for (let col = row*-1; col <= row; col++) {
        printString = printString + "*";
    }
    console.log(printString)
} */