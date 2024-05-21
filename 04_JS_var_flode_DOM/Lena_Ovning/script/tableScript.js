/*
create element table
create element row 
row append table
create element header
row append header (onlly in row 0)
create element table data
row append table
*/

// get body ref from html
let body= document.getElementById("body");

// create table element
let table = document.createElement("table");
table.style.border= "1.5px solid lightblue";
table.style.width="500px";

let rowCount= 5;
let colCount= 5;

for (let row = 0; row <rowCount; row++){
    let tableRow = document.createElement("tr");
    tableRow.style.width="10px";
    table.appendChild(tableRow);

    for (let col = 0; col <colCount; col++) {
        if (row === 0) {
            let tableHeader= document.createElement("th")
            tableHeader.setAttribute("id",`${row}${col}`)
            tableHeader.innerText = "HEADER"
            tableRow.appendChild(tableHeader);
        }
        else{
        let tableData = document.createElement("td");
        tableData.style.border= "1.5px solid lightpink";
        tableData.innerText = `${row}${col}`;
        tableRow.appendChild(tableData);
        }
    }
}


// connect table element to body_tag in HTML
body.appendChild(table);


// How to change the text in cells
/*
for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
        document.getElementById(`23`).innerText="hello";
        document.getElementById(`13`).innerText="next";
    }
}
*/

// how to  use universell selector
/*

let allElements= document.getElementByTagName("*");
for (let index = 0; index < allElements.length; index++){
    allElements[index].style.backgroundColor="red"
}
*/

let table02 =document.createElement("table");

let rowNum =3
let colNum =5
for (let row2 = 0; row2 <=rowNum; row2++) {
    let tableRow02 = document.createElement("tr");
    table02.appendChild(tableRow02);
    table02.style.border= "1.5px solid grey";
    table02.style.width="300px";
    tableRow02.innerText= row2


    for (let col2 = 0; col2 <=  colNum; col2++) {
        let tableCol02 = document.createElement("td"); 
        tableRow02.appendChild(tableCol02);
        tableCol02.innerText=col2;
        tableCol02.style.border= "1.5px solid grey";
    }  
}

body.appendChild(table02);


document.getElementById(`00`).innerText="Header 00"
document.getElementById(`01`).innerText="Header 01"
document.getElementById(`02`).innerText="Header 02"
document.getElementById(`03`).innerText="Header 03"
document.getElementById(`04`).innerText="Header 04"



let lorem = document.querySelector("p");
lorem.style.color="lightpink"
lorem.style.border=" 1px solid lightblue"