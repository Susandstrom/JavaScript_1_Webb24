let body = document.getElementById("body");
//body.style.border = " 1px gray solid";

function makeNavbar() {
  let nav = document.createElement("nav");
  body.appendChild(nav);
}

function makeHeaderOne(text = "", id = "") {
  let h1 = document.createElement("h1");
  h1.innerText = text;
  h1.setAttribute("id", id);
  return h1;
}

function makeHeaderTwo(text = "", id = "") {
  let h2 = document.createElement("h2");
  h2.innerText = text;
  h2.setAttribute("id", id);
  return h2;
}

function makeTable(rowCount, colCount) {
  //table, table row, table header, table data
  let table = document.createElement("table");

  //rows
  for (let row = 0; row < rowCount; row++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    //col
    for (let col = 0; col < colCount; col++) {
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

function makeArticle(id, cls) {//cls is class
  let article = document.createElement("article");
  article.setAttribute("id", id);
  article.setAttribute("class", cls);
  return article;
}

function makeParagraph(text, id) {
  let p = document.createElement("p");
  p.innerText = text;
  p.setAttribute("id", id);
  return p;
}

let isBuild = false;
console.log("flag sets till false");
//building webpage
function buildWebsite() {

  if (isBuild === false) {
    makeNavbar();
    body.appendChild(makeHeaderOne("04_JS_var_flode_DOM", "h1"));
    body.appendChild(makeHeaderTwo("Table with table rows, headers, and rows"));

    let table = makeTable(5, 5);
    body.appendChild(table);

    let article1 = makeArticle("article_1", "articles");
    article1.appendChild(makeHeaderOne("this is header", ""));
    article1.style.backgroundColor = "rgb(237, 189, 206)";

    let paragraph1Text = "this is paragraph 1"
    article1.appendChild(makeParagraph(paragraph1Text, ""));
    article1.appendChild(makeParagraph("this is paragraph 2", ""));
    body.appendChild(article1);

    let article2 = makeArticle("article_2", "articles");
    article2.appendChild(makeHeaderOne("this is header", ""));
    article2.appendChild(makeParagraph("this is paragraph 1", ""));
    article2.appendChild(makeParagraph("this is paragraph 2", ""));
    body.appendChild(article2);
    isBuild = true;
    console.log("flag sets till true");

    let allPs = document.getElementsByTagName("p");
    for (let index = 0; index < allPs.length; index++) {
      allPs[index].style.border = "1px solid black";
    }
  }
}

function clearWebpage() {
  let btn1 = document.getElementById("button1");
  let btn2 = document.getElementById("button2");
  let script = document.getElementById("script");
  body.replaceChildren();
  body.appendChild(script);
  body.appendChild(btn1);
  body.appendChild(btn2);
  isBuild = false;
  console.log("flag sets till false");
}


