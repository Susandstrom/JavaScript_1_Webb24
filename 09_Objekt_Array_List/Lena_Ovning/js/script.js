// arrays and lists

let myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray);
console.log("My array lenght is : " + myArray.length);

// define lenght variable
let lengd = myArray.length;
console.log("My array lenght is : " + lengd);

// get value on index 0
let valueOnIndexZero = myArray[0];
console.log("Value On Index Zero is : " + valueOnIndexZero);

// get last index value
let valueOnLastIndex = myArray[lengd-1]; // -1 to know the lenght of the array
console.log("Last index value is : " + valueOnLastIndex);

// Functions and Arrays
// adding element in the end of the list
myArray.push("10");
console.log(myArray);
console.log("My array lenght is : " + lengd);
console.log("My array lenght is : " + myArray.length);


// update the variable lengd
lengd = myArray.length;
console.log("My array lenght atfer push(); is : " + lengd);

// Delete the last element in the list
let deleteLastIndex = myArray.pop(); // pop(); removes the last index and returns it
console.log("last element deleted : " + myArray);
console.log("last index value that was deleted : "+ deleteLastIndex);

deleteLastIndex = myArray.pop(); // pop(); removes the last index and returns it
console.log("last element deleted : " + myArray);
console.log("last index value that was deleted : "+ deleteLastIndex);

// for-loops with push(); && pop();
for (let i = 0; i<= myArray.length-1; i++) {
    console.log("we are on index : "+ i);
    console.log("value is : "+myArray[i]);
}

// for-loop that prints out from the end
for (let i = myArray.length-1 ; i>= 0; i--) {
    console.log("we are on index : "+ i);
    console.log("value is : "+myArray[i]);
}

// matrix with double for-loop and events

function changeMatrixSize(){ // only whan someone change the the input value.

    let slider = document.getElementById("slider");
    let rows = slider.value;
    let cols = slider.value;
    
    let matrix = []; // empty list
    
    for (let i = 0; i < rows ; i++) {
        let row = [];
        for(let j = 0; j < cols; j++){
            // push j values to inner list 
            row.push(j); 
        }
        // push inner list to outer list 
        matrix.push(row);
    }
    console.log(matrix);
}

// delete index values "splice(2-5);" thats means five index will be deleted from the index 2
console.log("array befor aplice : " + myArray);
myArray.splice(2,5); // delete five index from index 2
console.log("array after aplice : " + myArray);

// replace elements in interval 0-2
console.log("this is what left after splice: "+ myArray);
myArray.splice(0,2,0,5); // replace value between index 0-2 to 0,5
console.log("myArray after replacing : " + myArray);

// slice values in index inteval 0-3
let sliceArray = myArray.slice(0,2); // slice copt the same values to a new list
console.log("myArray after slicing index interval: " + myArray); 
console.log(sliceArray);


// delete the middle index in the array
//let listMiddleIndex = (myArray.length-1)/2;
//myArray.splice(listMiddleIndex, listMiddleIndex+1);

// while loop out of nowhere
for (let i = 0; i < 10; i++) {
    console.log("for loop "+i);
}

let j = 0;
while (j < 10) {
    console.log("while loop "+j);
    j++;
}
