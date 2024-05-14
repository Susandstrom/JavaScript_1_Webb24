/*
Övning 8: Ta Bort Duplicerade Element
Skriv en funktion taBortDuplicerade som tar emot en array som argument 
och returnerar en ny array där alla duplicerade element har tagits bort.
*/

/*
for loop must go from the end of the list. 
Every time something is deleted from the list indices move
to the left, since the list length has changed. 
if we look att index values from the beginning and delete an index
one value is going to be ommited.
Ex: we delete something at index 1 and move for loop to index 2.
since weve deleted something, the value that was att index 2 moved to index one.
and we have missed it. 
*/
function taBortDuplicerade(arr){
  arr.sort();
  for (let i = arr.length-1; i > 0; i--) {
    //algorithm to pick up unique values from the list
    for (let j = i-1; j >= 0; j--) {
      //0 - 1, 0 - 2, 1 - 2,
      console.log(`${i} - ${j}`);
      if(arr[i] === arr[j]){
        console.log(i + ": " + arr[i] + "---" + j +": "+arr[j]);
        //splice(start, deleteCount) 
        //console.log("same value");
        arr.splice(j,1);
        
      }
      console.log(arr);
    }
  }
  return arr;
}

let testArray = [1,2,3,4,5,6,2,2,2,4,8];
console.log(testArray);
console.log(taBortDuplicerade(testArray));
