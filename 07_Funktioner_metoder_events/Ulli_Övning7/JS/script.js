
//scope example:

function outerFunc(){
let num = 10;
function innerFunc(){ // this function is not avaliable in outer scope
    console.log(num);
}

return innerFunc;

}

/*
 function maltiderSum( mal,antal){

   
   return mal * antal;
    
    }
    
    // function call, with reutrn value saved in a variable
    
    let result = maltiderSum(2,3);
    
    console.log("Sum is:", result); // result is 

*/


// en funtion för att lägga till maträtter (counter++)
/*
let dish1 = "pasta";
let dish2 = "pizza";
let dish3 = "burger";
let dish4 = "bagel";
*/
let counter =0; //represent dish count

function addDish(){

    counter++;  // the same as counter +1;
    console.log("Dish added");

    document.getElementById("message").innerText="Dish added";

    dishCount();
}

addDish();
addDish();
addDish();
addDish();
addDish();

//  en function för att lägga till maträtter (log(counter)).
 
 function dishCount(){
 console.log(counter);


 }

 dishCount();


function dishCount(){



    document.getElementById("counter").innerText=counter;
    console.log(counter);


}





//en funktion för att räkna antalet maträtter ( for(`${i} maträtt`))

function showDishes(){

    document.getElementById("article").replaceChildren();

 for(let i = 0; i < counter; i++){

    let p = document.createElement("p");
    p.innerText = `${i} maträtt`;
    document.getElementById("article").appendChild(p);
   
    console.log(`${i} maträtt`);
    }

    dishCount();
}





function removeDish(){

    counter--; // the same as counter -1;
    console.log(counter + "dish deleted");

    document.getElementById("message").innerText="Dish deleted";

    dishCount();
}


function resetDish(){

counter= 0;
console.log(counter +  "reset"); // dishes reset

document.getElementById("message").innerText="Dish reset";

dishCount();

}

//executing functions:


addDish();
addDish();
addDish();
addDish();
addDish();
dishCount(); 
addDish();
addDish();
addDish();
removeDish();
dishCount();
showDishes();
resetDish();
addDish();
addDish();
addDish();
dishCount();



//onclick Event ;


function addUserInputParagraph(){

let body = document.querySelector("body");

let userInput = document.getElementById("userInput");

let userInputText = userInput.value;

let newParagraph = document.createElement("p");
newParagraph.innerText= userInputText;
body.appendChild(newParagraph);

}





function changeColor(){

    let body= document.querySelector("body");
    body.style.backgroundColor="lightblue";
}


function changeColor2(){

    let body= document.querySelector("body");
    body.style.backgroundColor="lightpink";
}























