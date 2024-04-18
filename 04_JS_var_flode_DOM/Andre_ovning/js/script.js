for (let row = 1; row <= 5; row++) {
    let cell = "";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "| \t";
    }
    console.log(cell);
}

//change the text in the h1 element
let myHeader = document.querySelector("h1");
myHeader.innerText = "this is the new header text";

//change the content in the body element//
let body = document.querySelector("body");
body.innerHTML = body.innerHTML + "<h4> new changed html </h4>";

//Change body background color
body.style.backgroundColor = "red";


//change property value
myHeader.id = "myHeader";
//myHeader.attributes("id") = 'myHeader';
myHeader.setAttribute("id", "myHeader");


//show element propert diffent ways
console.log(myHeader.id);
//console.log(myHeader("id"));
console.log(myHeader.getAttribute("id"));

//show all attributes of an element
console.log(myHeader.attributes);

// add class
myHeader.classList.add("myHeaderClass");


let header1 = document.getElementById("myHeader");

//apend child node to the body element

let newH2 = document.createElement("h2");
newH2.innerText = "This is the new H2, hurray";
newH2.id = "newID";

body.appendChild(newH2);






