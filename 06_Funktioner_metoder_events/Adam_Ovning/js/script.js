let knapp = document.createElement("button")
knapp.innerText = "TRYCK HÄR!"
document.querySelector("body").appendChild(knapp)



runAll()

function runAll() {

function myName() {
    let name = "Adam";
    console.log(name);
}
function sayName(name="No Name") {
    console.log(name);
}

function sayNames(fName, lName="No lName") {
    console.log(fName + " , " + lName );
}

function saySomething(txt) {
    let newTxt = "User said that: " + txt;
    return newTxt;
}


myName();
sayName("bob rob zob");
sayName();
sayNames("Adam");


let message = "Functions are exciting";
let modifiedMessage = saySomething(message);
console.log(modifiedMessage);
}



//
console.log()
//



function writeName(namn) {
    return "Mitt namn är " + namn
}

function area(width, height) {
    return "Area = " + width * height;
}

console.log(writeName("Adam"))
console.log(area(5,5))



//
console.log()
//



let var1 = "variable in outer script";
let var4;
let var5;

function func() {
    let var2 = "variable in function scope";

    if (true) {
        let var3 = "variable in if statement scope";
        var4 = "variable initialised in if statement scope";
        var5 = "variable is initialised ONLY if func is called for";
        console.log(var1)

    }
}


console.log(var5)
func();
console.log(var5)