//Array and lists

let myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray);
console.log("myArray length is: " + myArray.length);
//define length variable
let lengd = myArray.length;
console.log("myArray length is: " + lengd);
//get value on index 0
let valueOnIndexZero = myArray[0];
console.log("value on index zero: " + valueOnIndexZero);
//get last index value
let valueOnLastIndex = myArray[lengd-1];
console.log("last index value is: " + valueOnLastIndex);
//adding element at the end of the list
myArray.push("10");
console.log(myArray);
console.log("myArray length is: " + lengd);
console.log("myArray length is: " + myArray.length);
//update lengd var
lengd = myArray.length;
console.log("lengd var after updated value, after push " + lengd);
//deleting last element in the list
let deletedLastIndex = myArray.pop();
console.log("last element deleted " + myArray);
console.log("last index value that was deleted " + deletedLastIndex);

let ontherDeletedLastIndex = myArray.pop();
console.log("last element deleted " + myArray);
console.log("another last index value that was deleted " + ontherDeletedLastIndex);
console.log("last index value that was deleted " + deletedLastIndex);

//pushing new value to myArrey
let newValue = 100;
myArray.push(newValue);
console.log(myArray);
//for loop with push() pop();
for(let index = 0; index <= myArray.length-1; index++){
  console.log("We are on index: " + index);
  console.log("Value is: " + myArray[index]);
}
//for loop that prints out values from the end
for(let index = myArray.length-1; index >= 0; index--){
  console.log("We are on index: " + index);
  console.log("Value is: " + myArray[index]);
}
//gives undefined, index does not exist
console.log(myArray[-1]);
console.log(myArray[1000]);
//0 index and length-1 index is the same
let arr = ["B"];

//matrix with double for loop and event
function changeMatrixSize(){

  let slider = document.getElementById("slider");
  slider.style.accentColor = "rgb(254,124,0)";
  let rows = slider.value;
  let cols = slider.value;
  //create empty outer list 
  let matrix = [];
  
  for(let i = 0; i < rows; i++){
    //create empty inner list
    let row = [];
    for(let j = 0; j < cols; j++){
      //push values to inner list
      row.push(j);
    }
    //push inner list to outer list
    matrix.push(row);
  }
  
  console.log(matrix);
}

console.log("array before splicing: " + myArray);
//delete index values in interval 2-5
//end index is not included in the operation
//only index 2,3,4 is going to be deleted
console.log("splicing index interval 2-5");
let deletedArrayItems = myArray.splice(2,5);
console.log("this is the deleted part: " + deletedArrayItems);
console.log("this is whats left in myArray: " +myArray);

//replace elements in interval 0-2
console.log("replace elements in interval 0-2");
myArray.splice(0,2,0,0);
console.log("myArray after replcaing interval with zero " + myArray);

//slice values in index interval 0-3
let slicedArrayItems =  myArray.slice(0,3);
console.log("myArray after slicing index interval 0-3 " + myArray);
console.log("sliced items in index interval 0-3 " + slicedArrayItems);


//delete the midlle index in the array

//let listMiddleIndex = (myArray.length-1)/2;
//myArray.splice(listMiddleIndex, listMiddleIndex+1 );

//for loop Vs while loop

for(let i = 0; i < 10; i++){
  console.log(i);
}

console.log(";;;;;;;;;;;;;;;;;;")
let m = 0;
while(m < 10){
  console.log(m);
  m++;
}

//while loop with event

let isRunning = true;
let counter = 0;
let increment = 1;

function count(){
  counter= counter + increment;
  console.log(counter);
}

function backwards(){
  increment = -1;
}
function forward(){
  increment = 1;
}
function stop(){
  isRunning = false;
}
//setInterval(count, 1);
