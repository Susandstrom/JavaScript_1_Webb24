
<<<<<<< Updated upstream
// one row comment
// tregtdhfd

/*
This is a
multi line
comment 
*/


/*
Variables declares with 'let', 'const', or 'boolean'
const defines a variable that is a constant.
Variable that can have values true, or false are booleans
*/

let suma = 2 + 2; // this is a sum of two values
const namn = "Lukas";
let isStudent = false;

//variable values are retrieved from variable names
console.log(suma);
console.log(namn);
console.log(isStudent);

/* 
typeof reserved word tells JavaScript to return the
variable type and not the value
*/

let sumaType = typeof suma; //sumaType value is 'number'
let namnType = typeof namn;
let isStudentType = typeof isStudent;

//variables can be used with String in many different ways
console.log("suma variable type: " + (typeof suma));
console.log(`My name: ${namn}`);
console.log("Suma type: " + sumaType);
console.log(`Namn type: ${namnType}, is student? ${isStudentType}`);


/*
Imoprtant difference between '==' and '==='
*/
let A = 20;
let B = "20"

console.log(A == B); //this will evaluate to true!!!!!!!!!!
console.log(A === B); //this will evaluate to false

/*
Conditions are constructed with if, else if, and else
*/

let number = 0;

if (number > 0) {
    //code that executes when number is bigger than zero
    //AKA when condition evaluates to true
} else if (number < 0) {
    //code that executes when number is smaller than zero
    //AKA when condition evaluates to true
} else {
    //code that executes when number is zero
    //AKA when condition evaluates to true
}

/* If conditions can be nested. each code block (if, else if, or else)
can have their own nested conditions */
let time = 40;
if (time > 15) {

    if (time === 15) {
        //DO SOMETHING
    } else if (time === 16) {
        //DO SOMETHING ELSE
    } else {
        if (time === 15) {
            //DO SOMETHING
        } else if (time === 16) {
            //DO SOMETHING ELSE
        } else {
            //DO DEFAULT
        }
    }
} else if (time < 22) {
    if (time === 15) {
        //DO SOMETHING
    } else if (time === 16) {
        //DO SOMETHING ELSE
    } else {
        //DO DEFAULT
    }
} else {
    //DO SOMETHING
}

/* logical operators */

let hour = 8;

//log when hour is between 5 and 10
//using and operator
if (hour > 5 && hour < 10) {
    console.log("hour is between 5 and 10");
}

console.log("boolean for hour > 5 && hour < 10 är: " + (hour > 5 && hour < 10));

hour = 15;
//log when hour is bigger than 5 or smaller than 10
//using or operator
if (hour > 5 || hour < 10) {
    console.log("hour is 5 or 10");
}


let x = 5;
console.log("let x = 5; ");
console.log("(x>5) evaluates to: " + (x > 5));
console.log("!(x>5) evaluates to: " + !(x > 5));
console.log("(x>=5) evaluates to: " + (x >= 5));
console.log("!(x>=5) evaluates to: " + !(x >= 5));
console.log("!(true) evaluates to: " + !(true));
console.log("!(false) evaluates to: " + !(false));
console.log("!(!(false)) evaluates to: " + !(!(false)));

let firstVariable = (5 > 10);

let secondVariable = (8 != 8);
let thirdVariable = ((!(true) || false) && 5 != 8);
let ferfVariable = !((!firstVariable && secondVariable) || thirdVariable);

console.log("and the winner is! " + ferfVariable);
=======
//one row comment
//tregtghd

/*This is a multi line comment*/




let summa = 2+2 ;

console.log(summa);

>>>>>>> Stashed changes
