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

console.log("----------------------------------------------------------------------------------------");

if (bobAge === robAge && bobAge === zobAge && robAge===zobAge) {
    console.log("De har samma ålder");
} else if (bobAge === robAge || bobAge === zobAge || robAge===zobAge) {
    console.log("Det är lika mellan vissa personer");
}

console.log("----------------------------------------------------------------------------------------");

console.log("Starting loop from 0 to 9 with +1 increment");

for (let index = 0; index < 10; index++) { //<- index ++ is the same as i = i + 1;
    console.log("index = " + index);
}
console.log("Stoping loop index = 10");

console.log("----------------------------------------------------------------------------------------");

console.log("Starting loop from 10 to 1 with -1 increment");

for (let index = 10; index > 0; index--) { //<- index -- is the same as i = i - 1;
    console.log("index = " + index);
}
console.log("Stoping loop index = 0");

console.log("----------------------------------------------------------------------------------------");

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log("i = " + i + " : j = " + j);
    }
}

console.log("----------------------------------------------------------------------------------------");

for (let i = 0; i < 10; i++) {
    let printString = "";
    for (let j = i; j >= 0; j--) {
        printString = printString + "*";
    }
    console.log(printString);
}

