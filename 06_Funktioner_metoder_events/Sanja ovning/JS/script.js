


/*name exempel*/

function writeName(name) {

    console.log("Namn:", name);

}

writeName("Sanja");


/* rektangel exempel*/


function area(width,height) {

    return width * height;
}

var rectangleWidth = 5;
var rectangleHeight = 10;
var rectangleArea = area(rectangleWidth, rectangleHeight);

console.log("Område av rectangle:", rectangleArea);


/*arrow function exempel*/


/*exempel 1*/
let dubble = (x) => {
    return x * 2;
  };

console.log(dubble(4))


/*exempel */

let power2=(x)=> {

    return x * 4;
};

console.log(power2(2));






/*exempel övning maträtter*/

let dishCounter = 0;
let dishes = {};

/*add dish*/

function addDish(name) {

    dishCounter++;
    dishes[dishCounter] = name;
}

/*count dishes*/

function countDishes() {

    console.log("Number of dishes: " + dishCounter);
}

/*show all dishes*/

function showAllDishes() {

    for (let i = 1; i <= dishCounter; i++) {

        console.log(`${i}. ${dishes[i]}`);
    }
}


addDish("Pizza");
addDish("Pasta");
addDish("Spagetti");
countDishes();
showAllDishes();
