
let body = document.getElementById("body");


// let isBuild = false; // deklare a variable to put it in if condition

// function for the button in HTML
// function buildWebsite(){ // we have to put everything in the biuldWebsite(); function to work and show the code onclick
    // create a function for navbar 

    // if (isBuild === false) { // if isBuild is false so the butoon will work
        function backgroundImg(element, url){
            element.style.backgroundImage = "url("+url+")"

        }
        function navBar(){
            let nav = document.createElement("nav");
            body.appendChild(nav);
            backgroundImg(nav, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Logo_Bild-de.svg/2560px-Logo_Bild-de.svg.png");
            nav.innerText = "hello backgroundImg(bodyupload.wikimedia.org/wikipedia/commons/thumb/d/de/Logo_Bild-de.svg/2560px-Logo_Bild-de.svg.png"

            nav.style.backgroundSize = "contain"
            // nav.style.height = "500px"
            nav.style.width ="300px"

            nav.style.backgroundRepeat ="no-repeat";
            nav.style.margin= " 0 auto";


        }
    
        // create a function for h1 to be able to use often in different places by calling the function
        function head01(id, text){
            let h1 = document.createElement("h1");
            h1.innerText = text;
            h1.setAttribute("id",id);
            return h1;
        }
    
        // another function for h2 
        function head02(id, text){
            let h2 = document.createElement("h2");
            h2.innerText = text;
            h2.setAttribute("id",id);
            return h2;
        }
    
        // style.css
        function style(){
    
            //style for head "h1" in the webbpage
            let h1 = document.getElementById("h1");
            h1.style.width="100%";
            h1.style.fontWeight="bold";
            h1.style.backgroundColor="antiquewhite";
            h1.style.border="1px solid black";
            h1.style.textAlign="center";            
    
            //style for head "h2" in the webbpage
            let h2 = document.getElementById("h2");
            h2.style.width="100%";
            h2.style.fontWeight="bold";
            h2.style.backgroundColor="aquamarine";
            h2.style.border="1px solid black";
            h2.style.textAlign="center";

            // style for background article_1
            let article_1 = document.getElementById("article_1");
            article_1.style.backgroundColor = "aliceblue"
            article_1.style.width="60%";
            article_1.style.margin="10px auto";
            article_1.style.border="1px solid black";

            // style for head in article_1'
            let art_1Head = document.getElementById("art_1Head");
            art_1Head.style.margin="10px auto";
            art_1Head.style.textAlign="center";
            art_1Head.style.width="80%";
            art_1Head.style.backgroundColor="antiquewhite";
            art_1Head.style.border="1px solid black";

            // style for paragraph 1 in article_1
            let para1 = document.getElementById("paraArt11");
            para1.style.margin="10px auto";
            para1.style.textAlign="center";
            para1.style.width="60%";
            para1.style.border="1px solid black";

            // style for paragraph 2 in article_1
            let para2 = document.getElementById("paraArt12");
            para2.style.margin="10px auto";
            para2.style.textAlign="center";
            para2.style.width="60%";
            para2.style.border="1px solid black";

            // style for background article_2
            let article_2 = document.getElementById("article_2");
            article_2.style.backgroundColor = "rgb(223, 240, 176)"
            article_2.style.width="60%";
            article_2.style.margin="10px auto";
            article_2.style.border="1px solid black";

            // style for head in article_1'
            let art_2Head = document.getElementById("art_2Head");
            art_2Head.style.margin="10px auto";
            art_2Head.style.textAlign="center";
            art_2Head.style.width="80%";
            art_2Head.style.backgroundColor="antiquewhite";
            art_2Head.style.border="1px solid black";

            // style for paragraph 1 in article_2
            let para3 = document.getElementById("paraArt21");
            para3.style.margin="10px auto";
            para3.style.textAlign="center";
            para3.style.width="60%";
            para3.style.border="1px solid black";

            // style for paragraph 2 in article_2
            let para4 = document.getElementById("paraArt22");
            para4.style.margin="10px auto";
            para4.style.textAlign="center";
            para4.style.width="60%";
            para4.style.border="1px solid black";


            // style for cell 0:0
            let cell00 = document.getElementById("0:0");
            cell00.style.backgroundColor="lightpink";

            // let button=document.getElementById("refreshButton");
            // button.style.backgroundColor="lightpink";
    
        }
    
        // function for the table
        // Table, table row, table head, table row, table data
        function makeTable(rowCount, colCount){
            let table = document.createElement("table");
    
            // rows
            for (let row = 0; row < rowCount; row++) {
                let tr = document.createElement("tr");
                table.style.margin = "0 auto";
                table.appendChild(tr);
    
                // columns
                for (let col = 0; col < colCount; col++) {
                    if (row === 0) { // when row === 0 table row will append "th" 
                        let th = document.createElement("th");
                        th.setAttribute("id", row+":"+col); // "th" id is row + col
                        th.innerText = "Index"+row+":"+col;
                        th.style.padding = "3px"
                        tr.appendChild(th); 
                        th.style.backgroundColor = "lightblue";
                        th.style.border = "1px solid black";
    
                    }else{ // when row !== 0 table row will append "td"
                        let td = document.createElement("td");
                        td.setAttribute("id", row+":"+col);
                        td.innerText = `${row-1}:${col}`; // -1 means that the row will start counting from 0
                        tr.appendChild(td);
                        td.style.textAlign = "center";
                        td.style.border = "1px solid black";
                        
                    }
                }
            }
            return table; 
        }
    
        function makeArticle(id,cls){ // two parameters id, class
            let article = document.createElement("article");
            article.setAttribute("id", id); // "id" is for the id in HTML-tag and id is for tha parameter that we can change when calling the function
            article.setAttribute("class", cls);
            return article;
        }
    
        // create a functions for the paragraph
        function paraArt(id,text){ 
            let p = document.createElement("p");
            p.innerText = text
            p.setAttribute("id", id);
            return p;
        }
    
        navBar(); // call navBar(); function
    
        body.appendChild(head01("h1","04_JS_var_flode_DOM"));
        body.appendChild(head02("h2","Table with table rows, headers, and rows"));
        body.appendChild(makeTable(5,6));   
    
    
        // fisrt article
        let article_1 = makeArticle("article_1","articles") // create a variable for the article 
        article_1.appendChild(head01("art_1Head","This is the first article")); // append head01 function to article-1. The first parameter is the text and the second parameter is th id
    
    
        // create a variable for the paras to be able to use when we want to appendChild
        let paraArt11 = paraArt("paraArt11","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        let paraArt12 = paraArt("paraArt12","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    
    
        article_1.appendChild(paraArt11); // append the first para to the article
        article_1.appendChild(paraArt12); // append the second para to the article
        body.appendChild(article_1);// append article-1 to body element
    
        // second article
        let article_2 = makeArticle("article_2","articles") // create a variable for the article 
        article_2.appendChild(head01( "art_2Head","This is the second article"));// append head01 function to article-12. The first parameter is the text and the second parameter is th id
    
        let paraArt21 = paraArt("paraArt21","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        let paraArt22 = paraArt("paraArt22","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    
    
        article_2.appendChild(paraArt21); // append the first para to the article
        article_2.appendChild(paraArt22); // append the second para to the article
        body.appendChild(article_2);// append article-2 to body element
    
        style();
        // isBuild = true; // we give the variable isBuild a new value that will change when we click on the button and the button will not work anymore because of if-condition is not right
//    }
    
//}

/*
function clearWebsite(){
    let button1= document.getElementById("refreshButton");
    let button2 = document.getElementById("clearButton");
    let script = document.getElementById("script");
    body.replaceChildren();
    body.appendChild(script);
    body.appendChild(button1);
    body.appendChild(button2);
    isBuild= false
}
*/
