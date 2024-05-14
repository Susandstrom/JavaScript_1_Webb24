let body = document.getElementById("body");
body.style.border = "1px gray solid";

function createNavbar(){
    let nav = document.createElement("nav");
    body.appendChild(nav);
}

function makeHeaderOne(text="", id=""){
    let h1 = document.createElement("h1");
    h1.innerText = text;
    h1.setAttribute("id", id);
    return h1;
}
function makeHeaderTwo(text="", id=""){
    let h2 = document.createElement("h2");
    h2.innerText = text;
    h2.setAttribute("id", id);
    return h2;
}
function makeTable(rowCount, colCount){// här skapar vi en tabell med rader, headers och data.
 let table = document.createElement("table");

 // Rows
for (let row = 0; row < rowCount; row++) {
    let tableRow = document.createElement("tr");
    table.appendChild(tableRow);
 // Cols
    for (let col = 0; col < colCount; col++) {
        if(row === 0){
            let tableHead = document.createElement("th");
            tableHead.setAttribute("id", row + ":" + col);
            tableHead.innerText = row + ":" + col;
            tableRow.appendChild(tableHead);
        }else{
            let tableCol = document.createElement("td");
            tableCol.setAttribute ("id", row + ":" + col); 
            tableCol.innerText = row + ":" + col;
            tableRow.appendChild(tableCol); 
            
        }
    
    }
    
}
return table;
}

function makeArticle(id, cls){ //cls = class.

let article = document.createElement("article");
article.setAttribute("bsid", id);
article.setAttribute("class", cls);
return article;
}

function makeParagraph(text,id){
    let p = document.createElement("p");
    p.innerText= text;
    p.setAttribute("id", id);
    return p;
}
let isBuild = false;
function buildWebsite(){
    if (isBuild === false){
    createNavbar();
    body.appendChild(makeHeaderOne("bla bla bla 08_JS", "h1"));
    body.appendChild(makeHeaderTwo("bla bla bla h2", "h2")); 
    body.appendChild (makeTable(5,8));
    
    let article1 = makeArticle("article_1", "articles");
    article1.appendChild(makeHeaderTwo("Header 1"));
    article1.appendChild(makeParagraph ("This is a paragraph 1"));
    article1.appendChild(makeParagraph("This is a paragraph 2"));
    body.appendChild(article1);
    
    let article2 = makeArticle("article_2", "articles");
    article2.appendChild(makeHeaderTwo("Header 2"));
    article2.appendChild(makeParagraph ("This is a paragraph 1"));
    article2.appendChild(makeParagraph ("This is a paragraph 2"));
    body.appendChild(article2);
    isBuild = true;
}
}

function clearWebpage(){
    let btn1 = document.getElementById("button1");
    console.log(btn1);
    let btn2 = document.getElementById("button2");
    console.log(btn2);
    let script = document.getElementById("script")
    console.log(script);
    body.replaceChildren();
    body.appendChild(btn1);
    body.appendChild(btn2);
    isBuild = false;
}


