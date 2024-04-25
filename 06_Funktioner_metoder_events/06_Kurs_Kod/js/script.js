//create simple function
function myName(){
    let name = "Lukas";
    console.log(name);
}

//create simple function with parameter and default parameter value
function sayName(name="No Name"){
    console.log(name);
}
//create simple function with 2 parameters and 1 default parameter value
function sayNames(fName, lName="No LName"){
    console.log(fName + " - " +lName);
}
sayNames(); // -> undefined - NolName
sayNames("Lukas"); // Lukas - No lName
sayNames("Lukas", "K"); // Lukas - K


//create simple function with parameter and return value
function saySomething(txt, number, A, B, c){
    let newTxt = "User said that: " + txt;
    return newTxt;
    //more compact version of the same code
    //return "User said that: " + txt;
}

//function executes
myName();
sayName("Bob Rob Zob");
sayName();


let message = "Functions are exciting";
let modifiedMessage = saySomething(message);
console.log(modifiedMessage);
//more compact version of the same code
//console.log(saySomething("Functions are exciting"));

//Scope 


let var1 = "variable in outer script";
let var4;
let var5;

function func(){
    let var2 = "variable in function scope";
    if(true){
        let var3 = "variable in if statement scope";
        var4 = "variable initialised in if statement scope";
        var5 = "variable is initialised ONLY if func() is executet";
        console.log(var1);
    }
}
console.log(var5);
func();
//console.log(var3);//wrong scope not avaliable outside if statement scope
console.log(var4);

// Scope example

let count = 0;

function add(){

    for (let i = 0; i < 10; i++) {
        count = count + 1;
        let h1 = document.createElement("h1");
        h1.innerText = count;
        document.body.appendChild(h1);  
    }
   
    console.log(count);
}

