console.log("5x5 Multiplication Table:");

for (let row = 1; row <= 5; row++) {
    let cell ="";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "|";
    }

    console.log(cell);
}

console.log("---------------------------------------------");

let sum = 0;


for (let i = 0; i <= 100; i++) {

    if (i % 2 !== 0) {

        sum += i;
    }
}

console.log("The sum of odd numbers from 0 to 100 is:", sum);

console.log("---------------------------------------------");

let body = document.querySelector("body");

let table = document.createElement("table");
table.style.border = "2px solid black";
table.style.width = "50%";
table.style.height = "100px";
table.style.margin = "30vh ato 0 auto";

let rowCount = 5;
let colCount = 5;

for (let row = 0; row <= rowCount; row++) {
    let tableRow = document.createElement("tr");
    tableRow.style.width = "90%";
    table.appendChild(tableRow);

    for (let col = 0; col <= colCount; col++) {

        if (row === 0) {
            let tableHeader = document.createElement("th");
            tableHeader.innerText = "Header";
            tableRow.appendChild(tableHeader);
        }
        else{
            let tableData = document.createElement("td");
            tableData.setAttribute("id", `${row}${col}`);
            tableData.innerText = col;
            tableRow.appendChild(tableData);
        }
    }
}

body.appendChild(table);

for (let row = 0; row <= rowCount; row++) {

    for (let col = 0; col <= colCount; col++) {
        if (row !== 0) {
            document.getElementById(`${row}${col}`).innerText = row; 
        }
        
    }
}

document.getElementById(`34`).innerText = "test";

/* -------------------------------------------------------------- */









