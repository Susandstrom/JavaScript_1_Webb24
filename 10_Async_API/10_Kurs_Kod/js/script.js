//website with free API https://apipheny.io/free-api/


//function
function subNumbers(nbr1, nbr2){
  return nbr1-nbr2;
}

//annonymous function
let sumNumber = function(nbr1, nbr2){
  return nbr1 + nbr2;
};

//arow function
let productNumbers = (nbr1, nbr2) =>{
  return nbr1*nbr2;
};



function simpleFetch(url){
  fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Något gick fel - ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data hämtad:', data);
        let img = document.getElementById("dog");
        img.setAttribute("src", data["message"]);
        return data;
    })
    .catch(error => {
        console.error('Fetch-fel:', error);
    });
}


function advancedFetch(url){
  fetch(url, {
    method: 'POST',  // HTTP-metod (GET, POST, PUT, DELETE, etc.)
    headers: {
        'Content-Type': 'application/json',  // Typ av data som skickas (JSON, text, etc.)
        'Authorization': 'Bearer TOKEN'       // Autentiseringsheader, om nödvändigt
    },
    body: JSON.stringify(data)  // Data som ska skickas (endast för POST, PUT, etc.)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Fetch-fel:', error));
}

//////////////////

//not synchronised example
//let notSyncResp = fetch("https://catfact.ninja/fact");
//console.log(notSyncResp);


//synchronised example

let apiResponse = simpleFetch("https://catfact.ninja/fact");
console.log(apiResponse);




let celcToFarh = (c) => {
  return (c * 9/5) + 32;
};

console.log(celcToFarh(35));

let farhToCelc = (f) => {
  return ((f-32) *5)/9;
}
console.log(farhToCelc(95));

let hittaMax = (listOfNbrs) => {
  console.log(listOfNbrs);
  let temp = listOfNbrs[0];
  for (let i = 1; i < listOfNbrs.length; i++) {
    console.log("temp value= "+temp);
    if(listOfNbrs[i] > temp){
      console.log("current value "+ listOfNbrs[i]+" > " + temp);
      temp = listOfNbrs[i];
    }else{
      console.log("current value "+ listOfNbrs[i]+" <= " + temp);
    }
  }
  return temp;
};
let randomList = [321,432,6,43,21,5,65,325,5,743,2432,632,45,43,766,236,43,6432,6,43];
hittaMax(randomList);

let createRandomList = (listLength, maxValue) => {
  let outList = [];
  for (let i = 0; i < listLength; i++) {
    let rand = Math.floor(Math.random()*maxValue);
    outList.push(rand);
  }
  return outList;
}
console.log(createRandomList(10,50));


function add2(a){
  return a+2;
}
function multiply5(a){
  return a *5;
}

let result = multiply5(add2(10));
 
console.log(result);

let text = "this is a text".toUpperCase();
let textReplace = text.replace("THIS", "that");
let textReverse = textReplace.concat("new text added");
console.log(textReverse);

let text2 = "this is another text".toUpperCase().replace("THIS", "that").concat("new text added");
console.log(text2);



function showData(){
  let url = document.getElementById("url").value;
  let apiResponse = simpleFetch(url);

  //console.log(document.getElementById("text").value);
}