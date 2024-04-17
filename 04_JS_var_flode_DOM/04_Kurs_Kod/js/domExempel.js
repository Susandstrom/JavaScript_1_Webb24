
//change the text in the p element
let myHeader =  document.querySelector("h1");// <-get element from html
myHeader.innerText = "this is the new header text";// <- change text in element

//change the content in the body element
let body = document.querySelector("body");// <-get elemnt from html
body.innerHTML = body.innerHTML + "<h2>new changed html</h2>";// <-add html elemnt

//change body background color
body.style.backgroundColor = "rgb(141, 236, 180)";

//change id property value, different ways
myHeader.id = "myHeader";
//myHeader.attributes["id"] = "myHeader";
//myHeader.setAttribute("id", "myHeader");

//show element property different ways
console.log(myHeader.id);
//console.log(myHeader["id"]);
//console.log(myHeader.getAttribute("id"));

//show all attributes of an element
console.log(myHeader.attributes);

//add class 
myHeader.classList.add("myHeaderClass");

//
console.log(myHeader.classList);

let header1 = document.getElementById("myHeader");

//append child node to the body element
let newH2 = document.createElement("h2");// create new element
newH2.innerText = "this is the newH2  appenndddeddd"; //add text to new element
newH2.id = "newID";//add id attribute to new element
//append new element to body
body.appendChild(newH2);


//create and add 100 new p elements to body
for (let index = 0; index < 100; index++) {
    let newP = document.createElement("p");
    newP.innerText = index;
    body.appendChild(newP);
}


/*
create element table
create element row
table append row
create element header
row append header (only in row 0)
create element table data
row ppend table data


*/