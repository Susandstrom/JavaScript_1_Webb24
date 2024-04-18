let bobAge = 30
let robAge = 25
let zobAge = 35

if (bobAge > robAge && bobAge > zobAge) {
    console.log("Bob är äldst");
}

else if (robAge > bobAge && robAge > zobAge) {
    console.log("Rob är äldst");
}

else if (zobAge > bobAge && zobAge > robAge) {
    console.log("Zob är äldst")
}

else if (bobAge == robAge && bobAge == zobAge && robAge == zobAge){
    console.log("Alla har samma ålder")
}

else if (bobAge == robAge || bobAge == zobAge || robAge == zobAge) {
    console.log("Det är lika mellan vissa")
}


for (let i = 0; i < 10; i++) {
    let printString = "";
    for (let j = i; j >= 0; j--) {
        printString = printString + "*";
    }
    console.log(printString);
}

for (let i = 0; i < 10; i++) {
    let printString = "";
    for (let j = i* -1; j <= i; j++){
        printString = printString + "*";
    }
    console.log(printString);
}