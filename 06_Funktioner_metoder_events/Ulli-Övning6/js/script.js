//create simple function

function myName(){
    let name = "Ulli";
    console.log(name);
}

myName();//function executes


function sayName (name = "No Name"){
    console.log(name);
}

sayName("Bob Rob Zob"); //function executes
sayName();


// create simple function with parameter and default parameter value
function sayName ( Fname, Lname= "No LName"){
    console.log(Fname + "-" + Lname);
}

sayName (); 
sayName ();
sayName ();

let message = "Functions are exciting";
let modifiedMessage= saySomething(message);
console.log(modifiedMessage);


function saySomething(txt){
let newTxt= "User said that:" + txt;
return newTxt;
}

saySomething("Functions are exciting");

function writeName(){
    let x = "Hej";
    console.log(x);
}

writeName();

function myArea(width,height){

    return width * height;

}

//myArea(100 , 150);
console.log(myArea(100 , 150));



//Scope


let var1= " variabel in outer script";
let var4;
let var5;

function func(){

  let var2 = "vaiable in function scope";

    if(true){

        let var3 = " variable in if satatement scope";
        var4 = " variable initialized in if statement scope";
        var5 = "variable is initialized only if funk is executed";
        console.log(var1);
    }


}

console.log(var5);
func();
//console.log(var3);// wrong scope not avaliable outside if sats.
console.log(var4);


// scope example


let count = 0;

function add(){


for(let i = 0; i <10; i++){
count = count + 1;
let h1 = document.createElement("h1");
h1.innerText= count;
document.body.appendChild(h1);

}

console.log(count);

}


