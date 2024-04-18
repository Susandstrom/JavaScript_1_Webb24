/*
for (let row = 1; row < 6; row++) {
    let cell ="";

    for (let col = 1; col < 6; col++) {
        cell += "|" + row * col + "| \t" ;
    }
    console.log(cell);
}

*/


console.log("hej");

let body =  document.getElementsByTagName("body")[0]
//document.createElement("body"); //document.body
body.style.backgroundColor = "rgb(211,211,211)";
//body.appendChild(body)


let myHeader =  document.createElement("h1");
myHeader.innerText = "this is the new header text";
body.appendChild(myHeader)


let myParaghraph =  document.createElement("p");
myParaghraph.innerText = "this is the new paragraph";
body.appendChild(myParaghraph);

