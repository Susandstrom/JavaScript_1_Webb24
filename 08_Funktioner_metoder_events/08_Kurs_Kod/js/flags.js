let b1 = document.getElementById("button1");
let b2 = document.getElementById("button2");
let b3 = document.getElementById("button3");
let b4 = document.getElementById("button4");

let button1Flag = true;
let button2Flag = true;
let button3Flag = true;
let button4Flag = false;

b1.style.backgroundColor = "yellow";b2.style.backgroundColor = "green";
b3.style.backgroundColor = "green";
b4.style.backgroundColor = "red";

function button1(){
    if(button2Flag == true && button3Flag==true){
        b1.style.backgroundColor = "yellow";
        b2.style.backgroundColor = "green";
        b3.style.backgroundColor = "green";
        b4.style.backgroundColor = "red";
        button1Flag = true;
        button2Flag = true;
        button3Flag = true;
        button4Flag = false;
    }

}
function button2(){
    if(button1Flag == true && button4Flag==true){
        b1.style.backgroundColor = "green";
        b2.style.backgroundColor = "yellow";
        b3.style.backgroundColor = "red";
        b4.style.backgroundColor = "green";
        button1Flag = true;
        button2Flag = true;
        button3Flag = false;
        button4Flag = true;
    }
}
function button3(){
    if(button1Flag == true && button4Flag==true){
        b1.style.backgroundColor = "green";
        b2.style.backgroundColor = "red";
        b3.style.backgroundColor = "yellow";
        b4.style.backgroundColor = "green";
        button1Flag = true;
        button2Flag = false;
        button3Flag = true;
        button4Flag = true;
    }
}
function button4(){
    if(button3Flag == true && button2Flag==true){
        b1.style.backgroundColor = "red";
        b2.style.backgroundColor = "green";
        b3.style.backgroundColor = "green";
        b4.style.backgroundColor = "yellow";
        button1Flag = false;
        button2Flag = true;
        button3Flag = true;
        button4Flag = true;
    }
}