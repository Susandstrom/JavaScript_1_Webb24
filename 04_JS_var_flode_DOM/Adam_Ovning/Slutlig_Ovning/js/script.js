let documentBody = document.getElementById("body");

let nav = document.createElement("nav");
documentBody.appendChild(nav);
nav.style.backgroundImage = "url(Matejko.png)";
nav.style.height = "200px";
nav.style.margin = "0 auto";
nav.style.backgroundSize = "cover"

let h1 = document.createElement("h1");
h1.innerText = "04_JS_var_flode_DOM";
h1.style.textAlign = "center"
h1.style.border = "1px solid black"
h1.style.backgroundColor = "antiquewhite"
h1.style.width = "80%"
h1.style.margin = "20px auto"
documentBody.appendChild(h1);

let h2 = document.createElement("h2");
h2.innerText = "Table with table rows, headers, and rows";
h2.style.textAlign = "center"
h2.style.border = "1px solid black"
h2.style.backgroundColor = "aquamarine"
documentBody.appendChild(h2);


let table = document.createElement("table");
table.style.border = "1px solid red";
table.style.width = "80%";
table.style.textAlign = "center";
table.style.margin = "auto";


let rowCount = 5;
let colCount = 5;

for (let row = 0; row < rowCount; row++) {
    let tableRow = document.createElement("tr");
    tableRow.style.border = "1px solid red";
    tableRow.style.width = "5px";
    table.appendChild(tableRow);

    for (let col = 0; col < colCount; col++) {
        if (row === 0) {
            let tableHeader = document.createElement("th");
            tableHeader.setAttribute("id",`${row}${col}`);
            tableHeader.innerText = `Index ${col}`
            tableHeader.style.border = "1px solid red";
            tableRow.appendChild(tableHeader);
        } else {  
            let tableCol = document.createElement("td");
            tableCol.setAttribute("id",`${row}${col}`);
            tableCol.innerText = col;
            tableCol.style.border = "1px solid red";
            tableRow.appendChild(tableCol);
        }
    }
}

documentBody.appendChild(table);

 
for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
        if (row !== 0){
        document.getElementById(`${row}${col}`).innerText = row;
        }
    }
}


let article1 = document.createElement("article")
documentBody.appendChild(article1)
article1.style.border = "1px solid black"
article1.style.backgroundColor = "aliceblue"



let art1h1 = document.createElement("h1")
art1h1.innerText = "This is the first article"
article1.appendChild(art1h1)
art1h1.style.border = "1px solid black"
art1h1.style.backgroundColor = "antiquewhite"


let art1p1 = document.createElement("p")
art1p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
article1.appendChild(art1p1)
art1p1.style.border = "1px solid black"

let art1p2 = document.createElement("p")
art1p2.innerText = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
article1.appendChild(art1p2)
art1p2.style.border = "1px solid black"


let article2 = document.createElement("article")
documentBody.appendChild(article2)
article2.style.border = "1px solid black"


let art2h1 = document.createElement("h1")
art2h1.innerText = "This is the second article"
article2.appendChild(art2h1)
art2h1.style.border = "1px solid black"
art2h1.style.backgroundColor = "antiquewhite"

let art2p1 = document.createElement("p")
art2p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
article2.appendChild(art2p1)
art2p1.style.border = "1px solid black"

let art2p2 = document.createElement("p")
art2p2.innerText = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
article2.appendChild(art2p2)
art2p2.style.border = "1px solid black"

article1.style.width = "60%"
article1.style.margin = "auto"
article1.style.marginTop = "20px"

article2.style.width = "60%"
article2.style.margin = "auto"
article2.style.marginTop = "20px"

let articles = document.getElementsByTagName("article");
for (let index = 0; index < articles.length; index++) {
    articles[index].style.backgroundColor = "red"
    
}
Array.articles
articles.forEach(element  => {
    element.style.width = "300px"
});
