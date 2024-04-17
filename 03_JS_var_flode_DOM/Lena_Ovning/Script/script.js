

let bobAge=30;
let robAge=25;
let zobAge=35;

if (bobAge > robAge && bobAge > zobAge) {
    console.log("Bob är äldst");
}
else if (robAge > bobAge && robAge > zobAge) {
    console.log("Rob är äldst");
}
else if (zobAge > bobAge && zobAge > robAge) {
    console.log("Zob är äldst");
}
else if (zobAge === robAge && robAge === bobAge && zobAge === bobAge) {
    console.log("Alla har samma ålder");
}
else if (zobAge === bobAge || zobAge === robAge || robAge === bobAge){
    console.log("Det är lika mellan vissa personer");
}
