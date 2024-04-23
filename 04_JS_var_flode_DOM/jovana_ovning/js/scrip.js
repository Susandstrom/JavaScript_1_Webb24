/* 
for (let row = 1; row <= 5; row++) {
    let cell ="";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "|";
    }
    console.log(cell);
}


for (let i=0; i < 101; i++ ) {
    if (i %2!== 0) {
     console.log (i);
    } 
 }

 let body = document.querySelector("body");
 body.style.backgroundColor = "lightgrey";

 //append child node to the body element
let h1 = document.createElement("h1");// create new element
h1.innerText = "funny"; //add text to new element
h1.id = "ID";//add id attribute to new element
//append new element to body
body.appendChild(h1);

let textp =document.createElement ("p");
textp.innerText = "this is a funny text";
textp.id = "pID";

body.appendChild(textp)
 */


//get body ref from html
let documentBody = document.querySelector("body");
//create table element

let nav = document.createElement("nav");
nav.style.border ="1px solid red";
nav.style.height = "200px";
nav.style.backgroundImage = "url(img/Djokovic.jpg)";
nav.style.backgroundPosition = "center";
nav.style.backgroundSize = "cover";

documentBody.appendChild(nav);

let table = document.createElement("table");
//change table styling
table.style.border = "1px solid black";
table.style.width = "25px";
table.style.borderCollapse = "collapse";


let rowCount = 10;
let colCount = 5;
//create rows with styling, and append row to table
for (let row = 0; row < rowCount ; row++) {
  let tableRow = document.createElement("tr");
  tableRow.style.border = "1px solid black";
  tableRow.style.width = "5px";
  table.appendChild(tableRow);

  //create table columns and add it to table row
  for (let col = 0; col < colCount; col++) {
    //if row index is 0 columns added is a table header otherwise it is tale data
    if(row === 0){
        let tableHeader = document.createElement("th");
        tableHeader.setAttribute("id",`${row}${col}`);
        tableHeader.innerText = "HEADER";
        tableRow.appendChild(tableHeader);
    }else{
        let tableData  = document.createElement("td");
        tableData.setAttribute("id",`${row}${col}`);
        tableData.innerText = col;
        tableRow.appendChild(tableData);
    }

  }
}

//append table element to html body
documentBody.appendChild(table);

//change every table data cell text in the table to row value
for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
        if(row !== 0){
            document.getElementById(`${row}${col}`).innerText = row;
        }
    } 
}

//change text of an element with id 04
let header4 = document.getElementById(`04`);
header4.innerText = "ferf col";

//change text of an element with id 34
document.getElementById(`34`).innerText = "text";
