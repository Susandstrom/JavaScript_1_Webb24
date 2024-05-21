
//Övning funktioner - writeName
writeName("So");

function writeName (name){
    console.log(name);
}


//area & height
console.log(writeArea (2,5));

function writeArea (width, height){
    let area = "Arean av en rektangel är:" + width * height + "m^2"
    return area;

}

//beräkna summan av ett tal
function sum(a,b){
    return a+b;
}

let results = sum(2,3);
console.log("Summan är:",results);

//celsius till farenheit 

let celcToFahr = (c) => {
    return (c*9/5) + 32

}
console.log(celcToFahr(35));

let fahrToCelc = (f) =>{
    return ((f-32) *5/9);
}

console.log(fahrToCelc(-32));

//hitta max
let hittaMax = (listOfNumbers) => {
    let temp = listOfNumbers[0];
    for (let i=1; i < listOfNumbers.length; i++) {
        console.log("temp value:" + temp)
        if(listOfNumbers[i] > temp) {
            console.log("current value:" + listOfNumbers[i]+">" + temp)
            temp = listOfNumbers[i];
        }else{
            console.log("current value:" + listOfNumbers[i]+"<=" + temp)
        }
    }
    return temp;
};

let randomList = [214,3425,25676,246354758,7865,543645]
hittaMax(randomList);

//create randomlist - funktion/arrow, Math.floor(gör att talen blir heltal)
let createRandomList = (listLength, maxValue) => {
    let outList = [];
    for (let i = 0; i < listLength; i++){
        let rand = Math.floor(Math.random()*25);
        outList.push(rand);
    }
    return outList;
}
console.log(createRandomList(10,25));

//?
function add2(a){
    return a+2;
}
function multiply5(a){
    return a *5;
}

let result = multiply5(add2(10));

console.log(result);

//??
let text = "This is a text".toUpperCase();
let textReplace = text.replace("this","that");
let textReverse = textReplace.concat("New text added");
console.log(textReverse);

let text2 = "This is another text".toUpperCase().replace("THIS","THAT")

//SYNC
//let apiResponse = simpleFetch("https://catfact.ninja/fact");
//console.log(apiResponse);

//fetch - bild 
function simpleFetch(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Något gick fel -' + Response.status);

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
        })
}

//SYNC & API - bild

function showData(){
    let apiResponse = simpleFetch("https://dog.ceo/api/breeds/image/random");
}

function getUrl(){
    let url = document.getElementById("url").value;
    let apiResponse = simpleFetch("url");
}