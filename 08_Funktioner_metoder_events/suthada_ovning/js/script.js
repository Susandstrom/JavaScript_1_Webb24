
//tillkallar vår body i html-dokument.
let body = document.getElementById("body");
body.style.border = "1px gray solid";


//navbar
function createNavbar() {
    let nav = document.createElement("nav");
    body.appendChild(nav);
}

//H1-vi skapar tom text eftersom vi endast tillkallar den från vår html.
function makeHeaderOne(text = " ", id = "") {
    let h1 = document.createElement("h1");
    h1.innerText = text;
    h1.setAttribute("id", id);
    return h1;
}

//h2 - vi skapar h2
function makeHeaderTwo(text = "", id = "") {
    let h2 = document.createElement("h2");
    h2.innerText = text;
    h2.setAttribute("id", id);
    return h2;
}

function makeTable(rowCount, colCount) {
    //Table, table row, table header, table data
    let table = document.createElement("table");

    //rows
    for (let row = 0; row < rowCount; row++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        //col
        for (let col = 0; col < colCount; col++) {

            //if/else för th
            if (row === 0) {
                let th = document.createElement("th");
                th.setAttribute("id", row + ":" + col);
                th.innerText = row + ":" + col;
                tr.appendChild(th);

            } else {
                let td = document.createElement("td");
                td.setAttribute("id", row + ":" + col);
                td.innerText = row + ":" + col;
                tr.appendChild(td);
            }
        }
    }
    return table;
}

//vi skapar artiklar.
function makeArticle(id, cls) { //cls är class
    let article = document.createElement("article");
    article.setAttribute("id", id);
    article.setAttribute("class", cls);
    return article;

}

//Paragrafer - p
function makeParagraph(text, id) {
    let p = document.createElement("p");
    p.innerText = text;
    p.setAttribute("id", id);
    return p;
}

//building webpage, if-sats

let isBuild = false;
//knapp kopplad i HTML.
function buildWebsite() {


    if (isBuild === false) {

        createNavbar();
        body.appendChild(makeHeaderOne("Webbsida övning", "h1"));
        body.appendChild(makeHeaderTwo("Table with table rows, headers and rows"));

        //tables
        let table = makeTable(5, 5); //Vi definierar antal rader i rowCount, colCount. 
        body.appendChild(table);

        //artikel 1 
        let article1 = makeArticle("article_1", "articles");
        article1.appendChild(makeHeaderTwo("This is a header", ""));
        article1.style.backgroundColor = "pink";
        article1.appendChild(makeParagraph("This is a paragraph 1", ""));
        article1.appendChild(makeParagraph("This is a paragraph 2", ""));
        body.appendChild(article1);

        //artikel 2
        let article2 = makeArticle("article_2", "article");
        article2.appendChild(makeHeaderTwo("This is a header", ""));
        article2.appendChild(makeParagraph("This is a paragraph 1", ""));
        article2.appendChild(makeParagraph("This is a paragraph 2", ""));
        body.appendChild(article2);
        isBuild = true;

        let allPs = document.getElementsByTagName("p");
        for (let index = 0; index < allPs.length; index++) {
            allPs[index].style.border = "1px solid black";
        }

    }

}

//knapp som rensar sidan
function clearWebpage() {
    let btn1 = document.getElementById("button1");
    let btn2 = document.getElementById("button2");
    let script = document.getElementById("script");

    //För att återställa knappen efter rensning
    body.replaceChildren();
    body.appendChild(script);
    body.appendChild(btn1);
    body.appendChild(btn2);
    isBuild = false;

}


function rotate(){
    let article1 = document.getElementById("article1");
    
}