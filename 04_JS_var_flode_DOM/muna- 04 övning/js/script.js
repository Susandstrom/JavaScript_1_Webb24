/*
let multiplikakation =5*5;
console.log(multiplikakation);
console.log(1*2);
console.log(2*2);
console.log(3*2);
console.log(4*2);
console.log(5*2);
*/



for (let i = 0; i < 6; i++) {
    let muna = "";
 for (let m = 0; m < 6; m++) {
        printString= "|" + i*m + "| \t";

  console.log(printString);
}

}

for (let row = 0; row < 10; row++) {
    let cell ="";
    for (let col = 0; col < 10; col++) {
        cell += "|" + row + " " + col + "|";
    }
    console.log(cell);
}


/*

 onsole.log(`

  
        cell += "|" + row + " " + col + "|";
    }
    console.log(cell);
}
    `);


for (let row = 0; row < 10; row++) {
    let cell ="";
    for (let col = 0; col < 10; col++) {
        cell += "|" + row + " " + col + "|";
    }
    console.log(cell);
}
*/
