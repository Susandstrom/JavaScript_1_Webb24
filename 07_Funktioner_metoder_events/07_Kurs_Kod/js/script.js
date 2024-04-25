//scope example

function outerFunc() {
  let num = 10;
  function innerFunc() {//this function is not avaliable in the outer scope
    console.log(num); // ​
  }
  return innerFunc;
}
//outerFunc(); 
let closureEx = outerFunc(); //outerFunc() return reference to innerFunc()
closureEx(); // this will log num

//funktioner ovning
    //Skapa tre funktioner för att hantera maträtter. Istället för att använda listor eller arrayer kommer vi att använda funktioner för att spara och manipulera data

    //en funktion för att lägga till en maträtt (counter++)
let counter = 0; //represents dish count


function addDish(){
    counter = counter + 1; //the same as counter++
    console.log("Dish added");
    document.getElementById("message").innerText = "Dish added";
    dishCount();
}
    //en funktion för att räkna antalet tillagda maträtter (log(counter)) 
function dishCount(){
  //updates counter element text with value of counter variable
  document.getElementById("counter").innerText = counter;
  console.log(counter);

}
  //en funktion för att visa alla tillagda maträtter (for(´${i}  maträtt´)).
function showDishes(){
  //clear article element from children
  document.getElementById("article").replaceChildren();
  for (let i = 0; i < counter; i++) {
    //create new paragraph
    let p = document.createElement("p");
    //put text in new paragraph
    p.innerText = `${i}  maträtt`;
    //append paragraph to article
    document.getElementById("article").appendChild(p);
    console.log(`${i}  maträtt`);
  }
  dishCount();
}

function removeDish(){
  counter = counter - 1; //the same as counter--
  console.log("Dish removed");
  document.getElementById("message").innerText = "Dish removed";
  dishCount();
}

function resetDishes(){
  counter = 0;
  console.log("Dishes reset")
  document.getElementById("message").innerText = "Dishes reset";
  dishCount();
}

//excuting functions
addDish();
addDish();
addDish();
addDish();
dishCount();
addDish();
resetDishes();
addDish();
addDish();
dishCount();
showDishes();


// onclick example example

function addUserInputParagraph(){
  //get reference to input field 
  let userInput = document.getElementById("userInput");
  //get text from input field
  let userInputText = userInput.value;
  //create paragraph element
  let newParagraph = document.createElement("p");
  //add text from input field to the paragraph
  newParagraph.innerText = userInputText;
  //get reference to body element
  let body = document.querySelector("body");
  //add paragraph to the body element
  body.appendChild(newParagraph);
}

function backgroundRed(){
    //get reference to body element
    let body = document.querySelector("body");
    body.style.backgroundColor="rgba(247, 0, 63, 0.41)";
}

function backgroundBlue(){
  //get reference to body element
  let body = document.querySelector("body");
  body.style.backgroundColor="rgba(0, 0, 255, 0.33)";
}




