// scope example

function outerFunc() {
    let num = 10;
    function innerFunc() {
        console.log(num); //tillgång till 'num' från den yttre omfånget
    }
    innerFunc();
    return innerFunc;
}
//outerFunc();
let closureEx = outerFunc();
closureEx(); // kmr att logga 10 till konsolen



//övning för 3 funktioner för att hantera matträtter 
// Skapa en variabel för att hålla räknaren för antalet maträtter
let counter = 0;

// Funktion för att lägga till en maträtt
function addDish(){
  counter++; // <--Öka räknaren med 1 för varje ny maträtt
  console.log("Maträtt tillagd!");
}

//en funktion för att räkna antalet tillagda maträtter (log(counter))
function dishCount(){
    console.log(counter);
}
//en funktion för att visa alla tillagda maträtter (for(´${i} maträtt´)).
function showDishes(){
    for (let i = 0; i < counter; i++){
        console.log(`${i+1} maträtt`);
    }
}

//Skapa en funktion taBortMaträtt som minskar antalet maträtter när en maträtt tas bort.
function removeDishes(){
    counter--;
    console.log("Matträtt borttagen!");
} 

//Lägg till en funktion rensaMaträtter som återställer antalet maträtter till 0.
function resetAll(){
    counter = 0;
    console.log("Alla maträtter borttagna!");
}


//executing functions
addDish();
addDish();
addDish();
addDish();
dishCount();
addDish();
addDish();
addDish();
addDish();
resetAll();
addDish();
addDish();
addDish();
dishCount();
showDishes();

removeDishes();
showDishes();
