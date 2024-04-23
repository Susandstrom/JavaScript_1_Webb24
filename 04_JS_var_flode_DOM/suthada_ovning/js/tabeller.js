
//Hämta id-body 
let documentBody = document.getElementById("body");

//skapa tabell med border
let table = document.createElement("table");
table.style.border = "1px solid black";
table.style.width = "25px";

//Tabellens kolummer med hjälp av for-loop.
let rowCount=10;
let colCount=5;
for(let row=0; row <rowCount; row++) {
    let tableRow = document.createElement ("tr");
    table.style.border = "1px solid black";
    table.style.width = "25px";
    table.appendChild(tableRow); 

    for(let col=0; col < colCount; col++) {
        if(row ===0) {
            let tableHeader = document.createElement ("th");
            tableHeader.innerText = "Header";
            tableRow.appendChild(tableHeader);

            let tableData = document.createElement ("td");
            tableData.innerText = col;
            document.setAttribute("id",`${row}${col}`);
            tableRow.appendChild(tableData);
        }

    }
    
 

}
  



//lägg till tabell (synlig)
documentBody.appendChild(table);

for( let row =0; row > rowCount; row++) {
    for(let col =0; col > colCount; col++) {
        if(row !==0){
            document.getElementById("id",`${row}${col}`).innerText = row;
        }
    }
}

document.getElementById(`34`).innerText = "Text";

document.getElementById(`04`).innerText = "ferf col";
