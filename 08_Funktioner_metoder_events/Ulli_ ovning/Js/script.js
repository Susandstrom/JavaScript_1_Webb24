let body = document.getElementById("body");
body.style.backgroundColor= " lightblue";

function makeNavbar() {
  let nav = document.createElement("nav");
  body.appendChild(nav);
}

function makeHeaderOne(text = "", id = "") {
  let h1 = document.createElement("h1");
  h1.innerText = text;
  h1.setAttribute("id", id);
  h1.style.textAlign="center";

  return h1;
}

function makeHeaderTwo(text = "", id = "") {
  let h2 = document.createElement("h2");
  h2.innerText = text;
  h2.setAttribute("id", id);
  h2.style.textAlign="center";

  return h2;
}
// table

function makeTable(rowCount, colCount) {
  let table = document.createElement("table");
  table.style.border= "2px solid black";
  table.style.width=" 700px";
  table.style.textAlign= "center";
  table.style.margin= "auto";

  //row

  for (let row = 0; row < rowCount; row++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    

    //col

    for (let col = 0; col < colCount; col++) {
      if (row === 0) {
        let th = document.createElement("th");
        th.setAttribute("id", row + ":" + col);
        th.innerText = row + ":" + col;
        th.style.backgroundColor="lightgray";
        tr.appendChild(th);
        th.style.border="2px solid black";
        
        } else {
        let td = document.createElement("td");
        td.setAttribute("id", row + ":" + col);
        td.innerText = `${row - 1} :${col}`;
        td.style.backgroundColor="lightpink";
        tr.appendChild(td);
        td.style.border="2px solid black";
        
        
      }

    }

   }

    return table;

}


function makeArticle(id, cls) {
  // cls i class
  let article = document.createElement("article");
  article.setAttribute("id", id);
  article.setAttribute("class", cls);

  return article;
}

function makeParagraph(text,id){

    let p = document.createElement("p");
    p.innerText= text;
    p.setAttribute("id",id);
    p.style.textAlign="center";

    return p;
}


let isBuild = false;


function buildWebsite(){


//building webbpage
if(isBuild===false){
makeNavbar();

body.appendChild(makeHeaderOne("04_JS_var_flode_DOM", "h1"));
body.appendChild(makeHeaderTwo("Table with tablerows, headers, and rows"));

let table = makeTable(5, 8);
body.appendChild(table);
document.getElementById("1:0").innerText="Hello";


let article1 = makeArticle("article_1", "articles");
article1.appendChild(makeHeaderOne("This is header", ""));
article1.style.border="2px solid black";
article1.style.margin= " 5px";

let paragraph1Text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
article1.appendChild(makeParagraph(paragraph1Text,""));
let paragraph2Text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
article1.appendChild(makeParagraph(paragraph2Text,""));
body.appendChild(article1);


let article2 = makeArticle("article_2", "articles");
article2.appendChild(makeHeaderOne("This is header", ""));
article2.style.border=" 2px solid black";
article2.style.margin= " 5px";

let paragraph3Text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
article2.appendChild(makeParagraph(paragraph3Text,""));
let paragraph4Text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
article2.appendChild(makeParagraph(paragraph4Text,""));
body.appendChild(article2);
isBuild = true;


let allPs = document.getElementsByTagName("p");

    for (let index = 0; index < allPs.length; index++){

        allPs[index].style.border= "1px solid black";
    }
}

}





function clearWebpage(){
    let btn1= document.getElementById("button1");
    let btn2= document.getElementById("button2");
    let script=document.getElementById("script");

    
   
    body.replaceChildren();
    body.appendChild(btn1);
    body.appendChild(btn2);
    body.appendChild(script);
    isBuild = false;
    console.log("flag sets to false");
}


 



