
//Array and list

let myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray);
console.log("myArrat length is" + myArray.length);

//define lenght variable

let lengd = myArray.length;
console.log ("myArray length is:" + lengd);

// get value on index 0

let valueOnIndexZero = myArray[0];
console.log("value on index zero:" + valueOnIndexZero);

//get last index value

let valueOnLastIndex = myArray[lengd-1];
console.log("last index value is:" + valueOnLastIndex);

//adding element at the end of the list

myArray.push("10");
console.log(myArray);
console.log ("myArray length is:" + lengd);
console.log("myArray length is:" + myArray.length);

//update lengd var

lengd= myArray.length;
console.log("lengd var after updated value, after push" + lengd);

// deleting last element in the list
let deletedLastIndex= myArray.pop();
console.log("last element deleted" + myArray);
console.log(" las index value that was deleted" + deletedLastIndex);


let newValue = 100;

myArray.push(newValue);
console.log(myArray);

// for loop with push() pop() ;

for(let index = 0; index <= myArray.length-1; index++){

     console.log("We are on index : " + index);
     console.log( myArray[index]);
}

//for loop that prints out values from the end

for(let index = myArray.length-1; index >= 0 ; index--){

    console.log("We are on index : " + index);
    console.log( myArray[index]);

}

console.log(myArray[-1]);
console.log(myArray[1000]);

//let arr = ["B"];



//matrix with dubble for-loops

function changeMatrixSize(){

let slider= document.getElementById("slider");
slider.style.accentColor="rgb(254, 154, 0)";
let rows=slider.value;
let cols=slider.value;

//create empty outer list
let matrix = [];

for(let i = 0 ; i < rows; i++){
// push values to inner list
    let row = [];

for(let j = 0 ; j < cols; j++){
// push values to inner list
   row.push(j);


}
//push inner list to outer list
matrix.push(row);

}

console.log(matrix);
}


// delete the midle index in the array
//delete index values in interval 2-5
//the index is not included in the operation
//only index 2,3,4 is going to be deleted
console.log(" splicing index interval 2-5");
let deletedArrayItems= myArray.splice(2,5);
console.log("This is the deleted part" + deletedArrayItems);
console.log("This is what is left in myArray" + myArray);


//replace elements in interval 0-2
console.log (" replace elements in interval 0-2");
myArray.splice(0,2,0,0);
console.log(" myArray after replacing interval with zero" + myArray);

//slice values in index interval 0-3
let silicedArrayItems= myArray.slice(0,3);
console.log("myArray after slicing index interval 0-3" + myArray);
console.log("sliced items in index interval 0-3" + silicedArrayItems);

//delete the middle index in the array
//let listMiddleIndex= (myArray.length-1)/2;
//myArray.splice(listMiddleIndex,listMiddleIndex+1);

//for loop Vs while loop

for(let i = 0; i<10; i++){

    console.log(i);
}



console.log("------------------------");




let m = 0;

while(m < 10){

    console.log(m);

    m++;
}


//while loop with event

/*
let isRunning = true; 
let counter = 0;
let increment = 1;

while(isRunning){

    counter = counter + increment

    console.log(counter);
    
}

function backwards(){

    increment = -1;

}

function forward(){

    increment= 1;
}

function stop(){

    isRunning = false;
}
*/

//ÖVNING:

//1.

function beräknaSumma(array){

    let sum = 0;
    
    for(let i = 0; i < array.length; i++){
     
        sum = sum + array [i];
        //sum += array[i];
    
    }
    
    return sum;
    
    }
    
    let array = [1,2,3,4,5];
    console.log(beräknaSumma(array));
    
    
    //2.
    
    function konkateneraSträngar( sträng1,sträng2){
    
        
         return sträng1 + sträng2;
    
    }
        let sträng1= "Hello";
        let sträng2= "World";
    konkateneraSträngar(sträng1,sträng2);
    
    
    //3.
    
    function ärJämntal(tal){
    
      return  tal % 2===0 ;
    
    }
    console.log(ärJämntal(4));
    console.log(ärJämntal(5));
    
    
    //4.
    
    function räknaVokaler(sträng){
    
        let vokaler = "aeiou";
        let count = 0;
        
        
        for(var i = 0; i < sträng.length; i++){
        if(vokaler.indexOf(sträng[i]) > -1){
    
           count++;
        }
            
        }
    
        return count; 
    }
    
    let testSträng="underbar dag idag";
    console.log(räknaVokaler(testSträng));
    
    
    //5.
    
    function genereraMuliplikationstabell(tal){
    
        for( let i = 1; i <=10 ; i++ ){
    
             let summa = tal * i;
    
             console.log( tal + " * " + i + " = " + summa);
    
        }
    }
    
    genereraMuliplikationstabell(3);
    
    
    //6.
    
    
    function bedömBetyg(grade){
    
    if( grade >=90) {
        return "A";
    } else if(grade >= 80 && grade <=89){
        return "B";
    } else if( grade >=70 && grade <= 79){
        return "C";
    } else if( grade >= 60 && grade <= 69){
        return "D";
    } else {
        return "F";
    }
    }
    
    let grade = 50;
    console.log( "Betyg"  +  bedömBetyg(grade));
    
    
    
    
    //7.
    
    
    
    
    
    
    
    
    
    //8.
    
    function hittaStörsta(array){
    
        let största = array[0];
    
        for( let i = 0; i < array.length; i++){
    
            if(array[i] > största){
                största = array[i]
            }
    
         }
     
         return största;
    }
    
    let talet = [16,7,8,1,55,20];
    console.log("Största element är" + hittaStörsta(talet));
    
    //9.
    
    
    
    
    
    
    
    
    
    
    
    
    //10.
    
    function beräknaMedelvärde(array){
    
        let värde = 0 ;
    
        for( let i = 0; i < array.length; i++){
    
        värde = värde + array[i];
    }
    
        let medelvärde = värde / array.length;
    
        return medelvärde;
    
    }
    
    let num = [10,20,30,40,50,60];
    console.log("Medelvärdet är" + beräknaMedelvärde(num));
    








































