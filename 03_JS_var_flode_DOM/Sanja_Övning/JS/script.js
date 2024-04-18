

let bobAge = 30
let robAge = 25
let zobAge = 35

if (bobAge > robAge && bobAge > zobAge) {

    console.log ("Bob is oldest");

}else if (robAge > bobAge && robAge > zobAge) {

    console.log ("Rob is oldest");

}else if (zobAge > bobAge && zobAge > robAge) {

    console.log("Zob is oldest");

}else if (bobAge === robAge || bobAge === zobAge || robAge === zobAge) {

    cosole.log("It´s same between some people");

}else if (bobAge === robAge && robAge === zobAge && bobAge === zobAge) {

    console.log("Everyone is the same older");
}


  
for (let i=0; i<10; i++) {

    console.log ("i=" +i);
}


for (let i=111; i<134; i++) {

    console.log ("i=" +i);
}


for (let i=20; i>15; i--) {

    console.log (i);
}














/*jämna siffror*/
for (let i=0; i<50; i++) {

    if(i%2 === 0) {

        console.log(i);
    }
}


 /*ojämna siffror*/
for (let i=0; i<50; i++) {

    if(i%2 !== 0) {

        console.log(i);
    }
}



for (let row=0; row<10; row++) {

    let cell="";

    for (let col=0; col<10; col++) {

        cell = cell + "|" + row + " " + col + "|";
    }

    console.log(cell);
}




const rows = 10;
const columns = 10;

// Outer loop for rows
for (let i = 0; i < rows; i++) {

    printString = "";

  // Inner loop for columns
for (let j = 0; j <= i; j++) {

    printString = printString + "*";
  }
    console.log(printString);
}









