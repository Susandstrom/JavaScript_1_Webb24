


let bobAge = 30;
let robAge = 25;
let zobAge = 35;

if (bobAge > robAge && bobAge > zobAge) { /* Äldre än båda */
    console.log ("Bob är äldst!");
}

else if (robAge > bobAge && robAge > zobAge) {
    console.log ("Rob är äldst!");
}

else if (zobAge > bobAge && zobAge > robAge) {
    console.log ("Zob är äldst!");
}

if (bobAge === robAge  ||  bobAge===zobAge   ||robAge===zobAge) {
    console.log("Det är lika mellan vissa personer")
}

else if (bobAge && robAge && bobAge && zobAge  && robAge && zobAge){

} ;






/* FOR loops */


for (let index = 0; index < 10; index++ ) { /* 1-9 */
    console.log (index);

    if (index === 9) {
        console.log (" Första klar")
    }
} 
 

 for (let i = 1; i < 52; i++) { /* 0-50 jämna tal */

    if (i%2 === 0) {
        console.log(i) ;
    }
}

   