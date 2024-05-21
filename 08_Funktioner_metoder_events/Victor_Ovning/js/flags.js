let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");

function button1(){
    if (button2Flag == true || button3Flag == true){
        button1.style.backgroundColor = "yellow"
    }
}