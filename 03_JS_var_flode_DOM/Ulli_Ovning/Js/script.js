/*
let bobAge = 30;
let robAge = 25;
let zobAge = 35;



if (bobAge > robAge && bobAge > zobAge){

    console.log ( "Bob är äldst");
    
}

else if (robAge > bobAge && robAge > zobAge){

    console.log ( "Rob är äldst");
}
else if ( zobAge > bobAge && zobAge > robAge){

console.log("Zob är äldst");

}

 if ( bobAge === robAge || robAge === zobAge || zobAge === bobAge ){

    console.log("Det är lika mellan vissa personer.");
}

else ( bobAge === robAge && bobAge === zobAge && robAge === zobAge ){

    console.log ( "De har alla samma ålder");

}
*/


/*


   for(let i = 0; i < 10; i++){

    console.log( "for" + i);

   }



 for(let i = 111; i < 134; i++){

    console.log( "for" + i);
    
   }



   for(let i = 20; i > 14; i--){

    console.log( "for" + i);

   }



   for(let i = 50; i > -1 ; i = i-5){

    console.log( "for" + i);

   }

*/

for (let i = 0; i < 10; i++) {
    let printString = "";
    for (let j = i; j >= 0; j--) {
        printString = printString + "*";
    }
    console.log(printString);
}
















