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

///////////////////////////////////////////////////////////////////////////////////

// 0-9

console.log("0-9");

console.log("");

for(let i = 0; i < 10 ; i++){
    console.log(i);
}

console.log("");

// 111-133

console.log("111-133");

console.log("");

 for(let i = 111; i < 134 ; i++){
    console.log(i);
}

console.log("");

// 20-15

console.log("20-15");

console.log("");

 for(let i = 20; i > 14 ; i--){
    console.log(i);
}

console.log("");

// 50-0 5 steg

console.log("50-0 5 steg");

console.log("");

 for(let i = 50; i > -5 ; i = i-5){
    console.log(i);
}

console.log("");

// 1-128 *2

console.log("1-128 *2");

console.log("");

  for(let i = 1; i <= 128 ; i = i*2){
    console.log(i);
}

console.log("");

// Jämna Tal 0-50

console.log("Jämna Tal 0-50");

console.log("");

for(let i = 0; i < 52; i++){
    if (i%2 == 0) {
        console.log(i);
    }
}

////////////////////////////////////////////////////////////////