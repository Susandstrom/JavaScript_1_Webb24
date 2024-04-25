runAll();

function runAll(){

myName(); //function executes

//create simple function
function myName(){
    let name = "Lukas";
    console.log(name);
}

sayName();
sayName("Bob Rob Zob"); //funktion med parameter
sayName();

//simple function
function sayName(name="No name"){
    console.log(name);
}

//funktion med retur
let message = "Functions are exciting";
let modifiedMessage = saySomething(message);
saySomething("Functions are exciting"); 
console.log(modifiedMessage);

function saySomething(txt){
    let newTxt = "User said that:" + txt
    return newTxt;
   // return "User said that:" + txt; //Detta kan också användas. 
}

}

//funktioner med 2 parametrar
function sayNames(fName, lName="No name"){
    console.log(fName);
}

sayNames(); //Kommer att skrivas ut undefined i konsolen
sayNames("Lukas"); //Kommer att skrivas ut "Lukas"
sayNames("Lukas","K") //Kommer att skrivas ut "Lukas - K"


//Övning funktioner
writeName("Bob");

function writeName (name){
    console.log(name);
}

//Övning area(width*height)
console.log(writeArea (5,10));


function writeArea(width, height){
    let area = "The are of the rectangle is:" + width * height + "m^2"
    return area;

}


//scopes

//Yttrescope
let var1 = "variable in outer script";
let var4; //Med hjälp av detta kan vi dra fram information till det yttrescope. 1.
let var5; // Only if func() är aktiverad. 

//Inrescope
function func(){
    let var2 = "variable in function scope";

    if(true){
        let var3 = "variable in if-statement scope";
        var4 = "variable initialised in if-statement scope"; //Detta gör att vi kan dra fram information till det yttrescope. 2. 
        var5 = "Variable is initialised ONLY if func() is executed"; //Only if func() är aktiverad.

        console.log(var1);
    }
}

console.log(var5); //Only if func() är aktiverad. 
func();

// console.log(var3); //Vi kan inte läsa en lägre scope i en inre funktion
console.log(var4); // Detta gör att vi kan visa var4 i yttrescope. 3. 

//Scope example:

//escope
let count = 0; 

function add(){
    count = count +1;
    console.log(count);
}

