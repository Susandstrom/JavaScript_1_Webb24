
//change the text in the p element
let myHeader =  document.querySelector("h1");// <-get element from html
myHeader.innerText = "this is the new header text";// <- change text in element

//change the content in the body element
let body = document.querySelector("body");// <-get elemnt from html
body.innerHTML = body.innerHTML + "<h2>new changed html</h2>";// <-add html elemnt

//change body background color
body.style.backgroundColor = "rgb(141, 236, 180)";

//change id property value, different ways
myHeader.id = "myHeader";
//myHeader.attributes["id"] = "myHeader";
//myHeader.setAttribute("id", "myHeader");

//show element property different ways
console.log(myHeader.id);
//console.log(myHeader["id"]);
//console.log(myHeader.getAttribute("id"));

//show all attributes of an element
console.log(myHeader.attributes);

//add class 
myHeader.classList.add("myHeaderClass");
myHeader.innerText = "Inner Text\n";
myHeader.textContent = "text content";
//
console.log(myHeader.classList);

let header1 = document.getElementById("myHeader");

//append child node to the body element
let newH2 = document.createElement("h2");// create new element
newH2.innerText = "this is the newH2  appenndddeddd"; //add text to new element
newH2.id = "newID";//add id attribute to new element
//append new element to body
body.appendChild(newH2);


//create and add 100 new p elements to body
for (let index = 0; index < 100; index++) {
    let newP = document.createElement("p");
    newP.innerText = index;
    body.appendChild(newP);
}


/*
creating a table 
we must have a reference to a body element
we must create a table element
we must create table rows and add them to table element
in each row, table columns must be created. They are called table data in html
first row, row with index 0 must have table headers instead of table data.
lastly table element must be added to the body element.

we are also changing some text in some specific elements along the way
*/


//get body ref from html
let documentBody = document.getElementById("body");
//create table element
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

let allElements = document.getElementsByTagName("*");

for (let index = 0; index < allElements.length; index++) {
    allElements[index].style.backgroundColor = "red";
    
}

Array(allElements).forEach(element => {
    console.log(element);
});


console.log();
