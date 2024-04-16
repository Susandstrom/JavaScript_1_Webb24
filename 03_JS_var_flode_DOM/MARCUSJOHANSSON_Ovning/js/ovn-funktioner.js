let bobAge = 30;
let robAge = 25;
let zobAge = 35;
let msg = "Tja!";

if (bobAge === robAge && bobAge === zobAge){
    console.log(msg + " Alla har samma ålder!");
} else if (bobAge === robAge && bobAge > zobAge || robAge === bobAge && robAge > zobAge || zobAge === bobAge && zobAge > robAge){
    console.log(msg + " Det är lika mellan vissa personer.");
} else {
    if (bobAge > robAge && bobAge > zobAge){
        console.log(msg + " Bob är äldst.");
    } else if (robAge > bobAge && robAge > zobAge){
        console.log(msg + " Rob är äldst.");
    } else if (zobAge > bobAge && zobAge > robAge){
        console.log(msg + " Zob är äldst.");
    }
}