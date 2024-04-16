let bobAge = 30;
let robAge = 25;
let zobAge = 35;

//Bob 
if(bobAge > robAge && bobAge > zobAge){
    console.log("Bob är äldst !");
}

//Rob
if(robAge > bobAge && robAge > zobAge){
    console.log("Rob är äldst!");
}

//Zob
if(zobAge > bobAge && zobAge > robAge){
    console.log("Zob är äldst!");
}

//Jämförelse
if(bobAge == robAge && bobAge > zobAge && robAge > zobAge){
    console.log("Det är lika mellan olika personer! Bob och Rob är äldre än Zob!");
}
else if(bobAge == zobAge && bobAge > robAge && zobAge > robAge){
    console.log("Det är lika mellan olika personer! Bob och Zob är äldre än Rob!");
}
else if(robAge == zobAge && robAge > bobAge && zobAge > bobAge){
    console.log("Det är lika mellan olika personer! Rob och Zob är äldre än Bob!");
}

//Alla är lika
if(bobAge == robAge && bobAge == zobAge && robAge == zobAge){
    console.log("Alla är lika gamla!");
}
