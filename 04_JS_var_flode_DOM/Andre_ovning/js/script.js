//get body ref from html
let documentBody = document.getElementById("body");
//create table element
let table = document.createElement("table");

table.style.borderStyle = "lime"
table.style.border="1px solid black";
table.style.width = "15px";

let rowCount = 10;
let colCount = 5;
for (let row= 0; row < rowCount ; row++) {
    let tableRow = document.createElement("tr");
    tableRow.style.border = "1px solid black";
    tableRow.style.width = "5px";
    table.appendChild(tableRow);

    for (let col = 0; col < colCount; col++) {
       let tableData = document.createElement("td");
       tableData.innerText=col;
       tableRow.appendChild(tableData);
       
    }

}



//append table element to the body
documentBody.appendChild(table);






for (let row = 1; row <= 5; row++) {
    let cell = "";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "| \t";
    }
    console.log(cell);
}




let myHeader = document.querySelector("h1");
myHeader.innerText = "04_JS_var_flode_DOM";

let newHeader = document.querySelector("h2");
newHeader.innerText = "Table with table rows, headers, and rows";
newHeader.backgroundColor= "Yellow";

let menu = document.querySelector("nav");




//change the content in the body element//
let body = document.querySelector("body");
body.innerHTML = body.innerHTML + "<h4> Table with table rows, headers, and rows </h4>";

//Change body background color
body.style.backgroundColor = "red";


//change property value
myHeader.id = "myHeader";
//myHeader.attributes("id") = 'myHeader';
myHeader.setAttribute("id", "myHeader");


//show element propert diffent ways
console.log(myHeader.id);
//console.log(myHeader("id"));
console.log(myHeader.getAttribute("id"));

//show all attributes of an element
console.log(myHeader.attributes);

// add class
myHeader.classList.add("myHeaderClass");


let header1 = document.getElementById("myHeader");

//apend child node to the body element

let newH2 = document.createElement("h2");
newH2.innerText = "This is the new H2, hurray";
newH2.id = "newID";

body.appendChild(newH2);



// övning 4:2let body = document.querySelector("body");
body.innerHTML = body.innerHTML + "<h1> easy peasy</h1>" + "<p> Hurray</p>"

//Change body background color
body.style.backgroundColor = "white";




