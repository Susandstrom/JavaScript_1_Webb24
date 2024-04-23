/* 
console.log("---------------------------------");

for (let row = 1; row <= 5; row++) {
    let cell ="";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "|";
    }
    console.log(cell);
}

console.log("---------------------------------");

let sum = 0;

for (let i = 0; i <= 100; i++) {
    if (i%2 !== 0) {
        sum += i;
    }
}

console.log(sum);

console.log("---------------------------------"); 
*/

/* F2 shortcut för att ändra till exempel alla variabler med samma namn  */
/* 
let body = document.querySelector("body");

body.style.backgroundColor = "green";

let p = document.createElement("p")
let h1 = document.createElement("h1")

p.innerText += "Hello World";
h1.innerText += "Header";

body.appendChild(h1)
body.appendChild(p) 
*/

console.log("---------------------------------");

// Skapade en nav tagg med background-image 

let body = document.querySelector("body");

let nav = document.createElement("nav");
nav.style.backgroundImage = "url(../resources/hero-img.jpg)";
nav.style.height = "300px";
nav.style.width = "900px";
nav.style.backgroundPosition = "center";
nav.style.backgroundSize = "cover";
nav.style.margin = "auto";

body.appendChild(nav);


// Skapade h1 tagg med id = "h1" 

let h1 = document.createElement("h1");
h1.setAttribute("id", "h1");
h1.innerHTML = "04_JS_var_flode_DOM";
h1.style.textAlign = "center";
h1.style.backgroundColor = "lightblue";
h1.style.width = "90%";
h1.style.margin = "20px auto";


body.appendChild(h1);

// Skapade en h2 

let h2 = document.createElement("h2");
h2.innerHTML = "Table with table rows, headers, and rows";
h2.style.textAlign = "center";
h2.style.backgroundColor = "orange";
h2.style.width = "98%";
h2.style.margin = "20px auto";

body.appendChild(h2);


// Skapade dubbel for-loop som skriver ut tabel

let table = document.createElement("table");
table.style.border = "2px solid black"
table.style.width = "50%";
table.style.height = "100px";
table.style.margin = "5px auto 0 auto"
table.style.borderCollapse = "collapse";

let rowCount = 5;
let colCount = 5;

for (let row = 0; row < rowCount; row++) {
    let tableRow = document.createElement("tr");
    tableRow.style.border = "30px"
    tableRow.style.width = "90%";
    table.appendChild(tableRow);


    for (let col = 0; col < colCount; col++) {
        if (row === 0) {
            let tableHeader = document.createElement("th");
            tableHeader.innerText = "Header";
            tableRow.appendChild(tableHeader);
        } else {
            let tableData = document.createElement("td");
            tableData.setAttribute("id", `${row}${col}`);
            tableData.innerText = col;
            tableData.style.border = "1px solid black";
            tableData.style.padding = "5px";
            tableData.style.textAlign = "center";
            tableRow.appendChild(tableData);
        }
        
    }

}

body.appendChild(table);

for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
        if (row !== 0) {
            document.getElementById(`${row}${col}`).innerText = col;
        }
    }
    
}

// Ändrar texten i cellerna rad 4, kolumn 5 eftersom man börjar räkna från 0
document.getElementById("34").innerText = "nr";

let headers = document.getElementsByTagName("th");
let headersData = ["name", "job", "bil", "cat", "dog"];

for (let index = 0; index < headers.length; index++) {
    headers[index].innerText = headersData[index];
    
}


// Created an article with h2 and 2 paragraphs

let article_1 = document.createElement("article");
article_1.setAttribute("class","articles");
article_1.style.backgroundColor = "black";
article_1.style.opacity = "0.8";
article_1.style.color = "white";
article_1.style.textAlign = "center";
article_1.style.padding = "5px 80px";
article_1.style.margin = "20px auto";
article_1.style.width = "fit-content";



let second_h2 = document.createElement("h2");
second_h2.innerText = "This is the first article";
second_h2.style.backgroundColor = "blue";
second_h2.style.width = "fit-content";
second_h2.style.margin = "10px auto 20px auto";
second_h2.style.padding = "5px 10px";


let p_1 =  document.createElement("p");
p_1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.";
p_1.style.backgroundColor = "darkgreen";
p_1.style.width = "fit-content";
p_1.style.margin = "15px auto";
p_1.style.padding = "5px 10px";

let p_2 = document.createElement("p");
p_2.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.";
p_2.style.backgroundColor = "darkgreen";
p_2.style.width = "fit-content";
p_2.style.margin = "10px auto";
p_2.style.padding = "5px 10px";

body.appendChild(article_1);
article_1.appendChild(second_h2);
article_1.appendChild(p_1);
article_1.appendChild(p_2);
