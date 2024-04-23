


for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {

      console.log(i + " * " + j + " = " + i * j);
    }
  }
  


  console.log("--------------------ny rad-----------------------");


  /*exempel of multiplication tabel 5x5*/


  for (let row=1; row<= 5; row++) {

    let cell="";

    for (let col=1; col<= 5; col++) {

        cell = cell + "|" + row * col + "|";
    }

    console.log(cell);
}


console.log("--------------------ny rad-----------------------");




let size = 5;

for (let row = 1; row < size + 1; row++) {

    let rowData = "";

    for (let col = 1; col < size + 1; col++) {

        rowData = rowData + "|" + row * col + "|";
    }

    console.log(rowData);
}



console.log("--------------------ny rad-----------------------");


/* exempel of sum of odd numbers 0 - 100*/

let start = 0;
let finish = 100;
let summa = 0;

for (let index = start; index < finish; index++) {

    if(index%2 !== 0) {

     summa = summa + index;
}
}

console.log(summa)



console.log("--------------------ny rad------------------------");


