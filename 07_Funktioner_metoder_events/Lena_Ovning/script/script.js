

// Anonymous functions
let dubble =function(x){
    return x*2;
}
// console.log(dubble(3));

// Arrow functions
let power2=(y)=>{
    return y*4;
}
// console.log(power2(3));

// Övning
let hello= (z) =>{
    return z*2
}
// console.log(hello(4));

// Scope and Closures
function outerFunc() {
    let num = 4;
    function innerFunc() {
        console.log(num); //Accessing 'num' from the outer scope (closure)
    }
    return innerFunc;
}
// we have to deklare the function as a variable fisrt before we call the outer function 
// let closureEx = outerFunc(); 
// closureEx(); // console shows 10 

// Övning

let dish1= "Pizza";
let dish2= "Pasta";
let dish3= "Rice";
let dish4= "Soup";
let counter = 0; // represent dish count

function addDish(){
    counter++; // same as counter= counter+1
    console.log("dish added");
    document.getElementById("message").innerText="One dish addes";
    dishCount();
}

function dishCount(){
    // updates counter element text with value of counter variable
    document.getElementById("counter").innerText=counter;
    console.log("the number of the dishes is: "+counter);
}

function showDishes(){
    for (let i = 1; i < counter; i++) {
        /*
        if(counter==0){
            console.log(`${i} ${dish1}`);   
            console.log(`${i+1} ${dish2}`);
            console.log(`${i+2} ${dish3}`);  
            console.log(`${i+3} ${dish4}`);  
        }
        */
    }
    dishCount();   
}

function deleteDish(){
    counter--; // the same as counter = counter-1
    console.log("the "+counter+" dish deleted");
    document.getElementById("message").innerText="the "+counter+" dish deleted";
    dishCount();
}

function resetDish(){
    counter = 0;
    console.log("The Dishes was reseted: "+counter+" dishes");
    document.getElementById("message").innerText="The Dishes was reseted: "+counter+" dishes";
    dishCount();
}

addDish();
dishCount();
addDish();
addDish();
resetDish();
addDish();
addDish();
deleteDish();
addDish();
addDish();
dishCount();
showDishes();


// HTML events "onclick"
function addUserInputPara(){
    // get reference to input field
    let userInput = document.getElementById("userInput");
    // get text from input field
    let userInputText = userInput.value; 
    // create element paragrapgh
    let newPara= document.createElement("p");
    // get text from input field
    newPara.innerText = userInputText;

    // get reference to body element
    let body = document.querySelector("body")
    // appendChild
    body.appendChild(newPara);
}


function changeColor(){

    let body = document.querySelector("body")
    body.style.backgroundColor="lightpink"
}

function changeColor2(){

    let body = document.querySelector("body")
    body.style.backgroundColor="lightblue"
}
