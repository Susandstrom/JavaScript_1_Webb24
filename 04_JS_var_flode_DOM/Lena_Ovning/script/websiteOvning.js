

let bodyTag= document.getElementById("body");
let nav= document.createElement("nav");
nav.style.backgroundImage="url(https://i.etsystatic.com/43678560/r/il/25ba49/5143876711/il_1080xN.5143876711_sidr.jpg)";
nav.style.height="300px";
nav.style.width="100%";
nav.style.maxWidth="1000px";
nav.style.margin="0 auto";
nav.style.border="1px solid black";

/*
let head01= document.createElement("h1");
head01.innerText="04_JS_var_flode_DOM";
head01.style.textAlign="center";
head01.style.backgroundColor="antiquewhite";
bodyTag.appendChild(head01);
*/


/*
// get body ref from html
let div= document.getElementById("table1");

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
            tableHeader.setAttribute("id",`${row}${col}`);
            tableHeader.innerText = "HEADER";
            tableRow.appendChild(tableHeader);
        }
        else{
        let tableData = document.createElement("td");
        tableData.setAttribute("id",`${row}${col}`);
        tableData.style.border= "1.5px solid lightblue";
        tableData.innerText = col;
        tableRow.appendChild(tableData);
        }
    }
}


// connect table element to body_tag in HTML
div.appendChild(table);
*/

let table = document.createElement("table");
table.style.border= "1.5px solid grey";
table.style.backgroundColor="antiquewhite";
table.style.width="80%";
table.style.margin="20px auto";

let rowCount= 10;
let colCount= 1;

for (let row = 0; row <rowCount; row++){
    let tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    for (let col = 0; col <colCount; col++) {
        if (row === 0) {
            let tableHeader= document.createElement("th");
            let tableTitle= document.createElement("h2");
            tableTitle.innerText = "04_JS_var_flode_DOM";
            tableRow.appendChild(tableHeader);
            tableHeader.appendChild(tableTitle);
        }
        else{
        let tableData = document.createElement("td");
        tableData.style.border= "1.5px solid grey";
        tableData.innerText = col;
        tableData.style.textAlign="center";
        tableRow.appendChild(tableData);
        }
    }
}

let h2 = document.createElement("h2");
h2.innerText="Table with table rows, headers, and rows";
h2.style.width="100%";
h2.style.fontWeight="bold";
h2.style.backgroundColor="aquamarine";
h2.style.border="1px solid black";
h2.style.textAlign="center";

let table02 = document.createElement("table");
table02.style.border= "1.5px solid grey";
table02.style.margin="5px auto";
table02.style.width="80%";

let rowCount02= 6;
let colCount02= 5;

for (let row02 = 0; row02 <=rowCount02; row02++){
    let tableRow02 = document.createElement("tr");
    table02.appendChild(tableRow02); 
    
    for (let col02 = 0; col02 <=colCount02; col02++) {
        if (row02 === 0) {
            let tableHeader02= document.createElement("th");
            let tableTitle02= document.createElement("h2");
            tableTitle02.innerText = "Index ";
            tableHeader02.style.border="1px solid black";
            tableRow02.appendChild(tableHeader02);
            tableHeader02.appendChild(tableTitle02);
        }
        else{
        let tableData02 = document.createElement("td");
        tableData02.style.border= "1.5px solid grey";
        tableData02.innerText = col02;
        tableData02.style.textAlign="center";
        tableRow02.appendChild(tableData02);
        }
    }
}



let art01= document.createElement("article");
art01.style.width="60%";
art01.style.margin="10px auto";
art01.style.backgroundColor="aliceblue";
art01.style.border="1px solid black";

let h1 = document.createElement("h2");
h1.innerText="This is the first article";
h1.style.margin="10px auto";
h1.style.textAlign="center";
h1.style.width="80%";
h1.style.backgroundColor="antiquewhite";
h1.style.border="1px solid black";

let p1 = document.createElement("p");
p1.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
p1.style.margin="10px auto";
p1.style.textAlign="center";
p1.style.width="60%";
p1.style.border="1px solid black";

let p2 = document.createElement("p");
p2.innerText="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
p2.style.margin="10px auto";
p2.style.textAlign="center";
p2.style.width="60%";
p2.style.border="1px solid black";

let art02= document.createElement("article");
art02.style.width="60%";
art02.style.margin="10px auto";
art02.style.backgroundColor="rgb(223, 240, 176)";
art02.style.border="1px solid black";

let h1_2 = document.createElement("h2");
h1_2.innerText="This is the first article";
h1_2.style.margin="10px auto";
h1_2.style.textAlign="center";
h1_2.style.width="80%";
h1_2.style.backgroundColor="antiquewhite";
h1_2.style.border="1px solid black";

let p1_2 = document.createElement("p");
p1_2.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
p1_2.style.margin="10px auto";
p1_2.style.textAlign="center";
p1_2.style.width="60%";
p1_2.style.border="1px solid black";

let p2_2 = document.createElement("p");
p2_2.innerText="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
p2_2.style.margin="10px auto";
p2_2.style.textAlign="center";
p2_2.style.width="60%";
p2_2.style.border="1px solid black";




bodyTag.appendChild(nav);
bodyTag.appendChild(table);
bodyTag.appendChild(h2);
bodyTag.appendChild(table02);
bodyTag.appendChild(art01);
bodyTag.appendChild(art02);
art01.appendChild(h1);
art01.appendChild(p1);
art01.appendChild(p2);
art02.appendChild(h1_2);
art02.appendChild(p1_2);
art02.appendChild(p2_2);



