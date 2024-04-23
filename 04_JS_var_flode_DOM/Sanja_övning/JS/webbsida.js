
//skapa tabell
let documentbody = document.getElementById("body");
 
let table = document.createElement("table");
 
table.style.border = "1px solid black";
table.style.width = "25px";
table.style.borderCollapse = "collapse";
 
let rowCount = 10;
let colCount = 5;
for (let row = 0; row < rowCount; row++) {
    let tableRow = document.createElement("tr");
    tableRow.style.border = "1px solid black";
    tableRow.style.width = "5px";
    table.appendChild(tableRow);
 
    for(let col = 0; col < colCount; col++) {
        if(row === 0) {
            let tableHeader = document.createElement("th");
            tableHeader.setAttribute("id", `${row}${col}`);
            tableHeader.innerText = "index";
            tableRow.appendChild(tableHeader);
        }else{
            let tableData = document.createElement("td");
            tableData.setAttribute("id", `${row}${col}`);
            tableData.innerText = col;
            tableRow.appendChild(tableData);
        }
    }
}
 
documentbody.appendChild(table);
 
for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
        if(row !== 0){
            document.getElementById(`${row}${col}`).innerText = row;
        }
    }
}
 



