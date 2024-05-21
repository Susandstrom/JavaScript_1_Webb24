/*
for (let row = 1; row < 6; row++) {
    let cell ="";

    for (let col = 1; col < 6; col++) {
        cell += "|" + row * col + "| \t" ;
    }
    console.log(cell);
}

*/

/*
console.log("hej");

let body = document.getElementsByTagName("body")[0];
//document.createElement("body"); //document.body
body.style.backgroundColor = "rgb(211,211,211)";
//body.appendChild(body)


let myHeader = document.createElement("h1");
myHeader.innerText = "this is the new header text";
body.appendChild(myHeader)


let myParaghraph = document.createElement("p");
myParaghraph.innerText = "this is the new paragraph";
body.appendChild(myParaghraph);

*/


/*
//get bodyref from
let documentBody = document.getElementById("body");
body.style.backgroundColor = "rgb(211, 211, 211)";
//create table 
let table= document.createElement("table");

table.style.border = "1 px solid black ";
table.style.width = "30px";

let rowCount = 10;
let colCount = 5;

for( let row= 0; row < rowCount; row++){
    let tableRow = document.createElement("tr");
    tableRow.style.border = "1 px solid black ";
    tableRow.style.width = "5px";
    table.appendChild(tableRow);


    for ( let col = 0; col < colCount; col++){

        if ( row=== 0) {
            let tableHeader = document.createElement("th");
            tableHeader.setAttribute("id", `${row}${col}`);
            tableHeader.innerText= "HEADER";
            tableHeader.style.border = " 2px solid blue"; 
            tableRow.appendChild(tableHeader);

        }else{
            let tableData = document.createElement("td");
            tableData.setAttribute("id", `${row}${col}`);
            tableData.style.border = " 2px solid blue"; 
            tableData.innerText = col;
            tableRow.appendChild(tableData);

        }

    }
}

        documentBody.appendChild(table);


 /*   for ( let col = 0; col < colCount ; col++){

        let tableData = document.createElement("td");
        tableData.style.border = " 2px solid lightblue";                // gamla versionen
        tableData.setAttribute( "id", `${row} ${col}`);
        tableData.innerText = col;
        tableRow.appendChild(tableData);
    }

    
        documentBody.appendChild(table);
*/
/*
   for ( let row = 0; row < rowCount ; row++) {
    for( let col = 0; col < colCount; col++) {
        if( row !== 0){

        
        document.getElementById (`${row}${col}`).innerText = row;

        }
    }


    }

    document.getElementById(`34`).innerText="HELLO";

    let header4 = document.getElementById(`04`);
    header4.innerText = "HEJSAN";
*/
   

/*=======ÖVNING==========*/




let body = document.getElementById("body");

let allElements = body.getElementsByTagName("*");

for (let index = 0; index < allElements.length; index++){
    allElements[index].style.backgroundColor = "lightblue";
}

let nav = document.createElement("nav" );
nav.style.backgroundImage= "url(https://cdn.pixabay.com/photo/2015/01/17/13/52/gem-602252_1280.jpg";
nav.style.height= "300px";
nav.style.border= "2px solid black";
nav.style.backgroundRepeat = "no-repeat";
nav.style.backgroundPosition = "center";

body.appendChild(nav);

let header1 = document.createElement("h1");
header1.innerText = "04_JS_var_flode_DOM";
header1.style.width = "60%";
header1.style.margin = "20px auto";
header1.style.textAlign = "center";
header1.style.backgroundColor = "antiquewhite";
header1.style.border = " 2px solid black";

body.appendChild(header1);

let header2 = document.createElement("h2");
header2.innerText = "Table with table rows, headers, and rows";
header2.style.width = "80%";
header2.style.margin = "20px auto";
header2.style.textAlign = "center";
header2.style.backgroundColor = "rgb(127,255,212)";
header2.style.border = " 2px solid black";

body.appendChild(header2);





let table= document.createElement("table");

table.style.border = "2px solid black";
table.style.width = "60%";
table.style.margin = "auto";

let rowCount = 6;
let colCount = 5;

for( let row= 0; row < rowCount; row++){
    let tableRow = document.createElement("tr");

    tableRow.style.border = "1px solid black ";
    tableRow.style.width = "5px";

    table.appendChild(tableRow);


    for ( let col = 0; col < colCount; col++){

        if ( row === 0) {

            let tableHeader = document.createElement("th");
            tableHeader.setAttribute("id", `${row}${col}`);

            tableHeader.innerText= " Index " + `${col}`;

            tableHeader.style.border = " 2px solid black"; 
            tableRow.appendChild(tableHeader);

        }else{
            let tableData = document.createElement("td");
            tableData.setAttribute("id", `${row}${col}`);

            tableData.innerText =`${row-1}${col}`;

            tableData.style.border = " 2px solid black"; 
            tableRow.appendChild(tableData);
        }
    }
}

 body.appendChild(table);




   /*for ( let row = 0; row < rowCount ; row++) {
        for( let col = 0; col < colCount; col++) {
            if( row !== 0){

        document.getElementById (`${row}${col}`).innerText = `${row -1}${col}`;
        }
    }
    
    }

   */

   /* document.getElementById(`34`).innerText="HELLO";

    let header4 = document.getElementById(`04`);
    header4.innerText = "HEJSAN";

   */

    //let cell = 
    
    //document.getElementById( `${row}${col}`).
    //cell.innerText = "hej";
 


let article1 = document.createElement("article");
article1.style.width = " 50% ";
article1.style.height =
article1.style.margin = "20px auto"
article1.style.backgroundColor= " aliceblue";
article1.style.border = "2px solid black";

body.appendChild(article1);

let h1 = document.createElement("h1");
h1.innerText = "This is the first article";
h1.style.margin= "20px auto";
h1.style.textAlign = "center";
h1.style.width= "80%";
h1.style.backgroundColor = "antiquewhite";
h1.style.border = " 2px solid black";

article1.appendChild(h1);

let p1 = document.createElement("p");
p1.innerText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
p1.style.margin = "10px auto";
p1.style.textAlign = "center";
p1.style.width = "60%";
p1.style.border =" 2px solid black";
p1.style.margin= "20px auto";

article1.appendChild(p1);


let p2 = document.createElement("p");
p2.innerText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
p2.style.margin = "10px auto";
p2.style.textAlign = "center";
p2.style.width = "60%";
p2.style.border =" 2px solid black";
p2.style.margin= "20px auto";

article1.appendChild(p2);


let article2 = document.createElement("article");
article2.style.width = " 50% ";
article2.style.height =
article2.style.margin = "20px auto"
article2.style.backgroundColor= "rgb(223,240,176)";
article2.style.border = "2px solid black";

body.appendChild(article2);

let h2 = document.createElement("h1");
h2.innerText = "This is the first article";
h2.style.margin= "20px auto";
h2.style.textAlign = "center";
h2.style.width= "80%";
h2.style.backgroundColor = "antiquewhite";
h2.style.border = " 2px solid black";

article2.appendChild(h2);

let p3 = document.createElement("p");
p3.innerText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
p3.style.margin = "10px auto";
p3.style.textAlign = "center";
p3.style.width = "60%";
p3.style.border =" 2px solid black";
p3.style.margin= "20px auto";

article2.appendChild(p3);


let p4 = document.createElement("p");
p4.innerText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
p4.style.margin = "10px auto";
p4.style.textAlign = "center";
p4.style.width = "60%";
p4.style.border =" 2px solid black";
p4.style.margin= "20px auto";

article2.appendChild(p4);



