let bobAge = 30;
let robAge = 25;
let zobAge = 35;


if (zobAge > bobAge && zobAge > robAge) {
    console.log("Zob är äldst");
} else if(robAge > bobAge && robAge > zobAge){
    console.log("Rob är älds");
}else{
    console.log("Bob är äldst");
}
if (bobAge == robAge && robAge == zobAge && zobAge == bobAge) {
    console.log("De har alla samma ålder");
} else if(bobAge == zobAge || zobAge == robAge || bobAge == robAge){
    console.log("Det är lika mellan vissa personer");
}