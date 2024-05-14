// Funktion med start värde 0 som ökar med 1 vid varje tryck
function count(startValue) {
    return function() {
        startValue++;
        return startValue;
    }
}

let raknare = count(0);
let button = document.getElementById("counterButton")
let resultDiv = document.getElementById("result")

button.addEventListener('click', function(){
    let newValue = raknare();
    resultDiv.textContent = 'Värde: ' + newValue;
});


// Funktions övning med maträtter


let div = document.createElement("div");
let counter = 0;  // represents dish number count

function addDish() {
    counter++;
    //console.log("Dish added");
    document.getElementById("message").innerText="Dish added"
    dishCount();
}
function dishCount() {
    //console.log(counter);
    document.getElementById("counters").innerText=counter;
}
function showDishes() {
    for (let i = 0; i < counter; i++) {
        console.log(`${i} maträtt`);
    }
    document.getElementById("message").textContent="Amount of dishes"
    dishCount();
}
function removeDish() {
    counter--;
    //console.log("Dish removed");
    document.getElementById("message").textContent="1 Dish removed"
    dishCount();
}
function resetDishes() {
    counter = 0;
    //console.log("Dish full reset");
    document.getElementById("message").textContent="Dishes full reset"
    dishCount();
}
// Execution 
/* 
addDish()
dishCount()
showDishes()
removeDish()
resetDishes()
*/




// Onclick events // Div because of center styling through css

function add() {
    let school = document.getElementById("school");
    let div = document.createElement("div");
    div.textContent = school.value;
    document.body.appendChild(div);
}
// Color changing styling on mouse events
function styleing() {
    document.body.style.backgroundColor="red"
}
function styleing2() {
    document.body.style.backgroundColor="blue"
}
function styleing3() {
    document.body.style.backgroundColor="white"
}
function styleing4() {
    document.body.style.backgroundColor="green"
}