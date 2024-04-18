

// Change the text in the h1 element, more specific, can specify through class or id
let myHeader = document.querySelector("h1");
myHeader.innerText = "This is the new header"


// Change the content in the whole body element. Can also add extra content.
let body = document.querySelector("body");
body.innerHTML = body.innerHTML + "<h4> New changed HTML code, through JS</h4>";


// Change add shit
body.style.backgroundColor = "#ffa384"

let newH2 = document.createElement("h2");
newH2.innerText = "This is the new H2 text, added with extra work";

// append child node to the body element 
body.appendChild(newH2);

let newPar = document.createElement("p");
newPar.innerText = "New Paragraph for the people";
body.appendChild(newPar);






// change style properties
let simpleText = document.querySelector("p");
/* simpleText.style.fontSize = "12px" */
simpleText.style.backgroundColor = "#e7f2f8"

let button = document.querySelector("#btn")
button.style.backgroundColor = "#efe7bc"

let button2 = document.querySelector("#btn2")
button2.style.backgroundColor = "#74bdcb"

// Change property value, can't see it in HTML but shows up if u console.log it
/* myHeader.id = "myHeader";
myHeader.attributes["id"] = "myHeader";
myHeader.setAttribute("id", "myHeader");  */
// console logs to get id
/* console.log(myHeader.id);
console.log(myHeader["id"]);
console.log(myHeader.getAttribute("id"));

console.log(myHeader.attributes);

let header1 = document.getElementById("myHeader");  */

