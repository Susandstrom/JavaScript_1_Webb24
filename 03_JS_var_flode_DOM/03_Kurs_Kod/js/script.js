
/*
if statement exercise:
Övning: Skriv en if-sats enligt följande:​
Deklarera variabler:​
bobAge = 30​
robAge = 25​
zobAge = 35​
Skriv villkor med if, else if och else för att avgöra och skriva till konsolen vem som är äldst baserat på följande villkor:​
Om Bob är äldre än både Rob och Zob, skriv: "Bob är äldst."​
Om Rob är äldre än både Bob och Zob, skriv: "Rob är äldst."​
Om Zob är äldre än både Bob och Rob, skriv: "Zob är äldst."​
Om två personer har samma ålder men är äldre än den tredje, skriv: "Det är lika mellan vissa personer."​
Om alla har samma ålder, skriv: "De har alla samma ålder."​
Använd logiska operatorer (&&, ||, ===, !==, <, >) för att implementera dessa villkor.
*/

let bobAge = 30;
let robAge = 30;
let zobAge = 30;

if(bobAge > robAge && bobAge > zobAge){
    console.log("Bob är äldst.");
}else if(robAge > bobAge && robAge > zobAge){
    console.log("Rob är äldst.");
}else if(zobAge > robAge && zobAge > bobAge){
    console.log("Zob är äldst.");
}


//OR conditions will evaluate to true when everyone has the same age. This is not what wh whant.
//for this reason just by changing order of condition evaluation, placing AND before OR
//we can check if everyone has the same age and later with OR if someone has the same age.
//Effectively, we are creating a XOR - exclusive OR.
if(bobAge===robAge && bobAge===zobAge && robAge === zobAge){
    console.log("De har alla samma ålder.");
}else if(bobAge===robAge || bobAge===zobAge || robAge === zobAge){
    console.log("Det är lika mellan vissa personer.");
}



/*
 Basic for loop declaration include (variable declaration; loop run condition; increment)  
 */

// +1 increment
console.log(`
        for (let index = 0; index < 10; index++) { //<- index ++ is the same as i = i + 1;
            console.log("index = " + index);
        }
        `);
console.log("Starting loop from 0 to 9 with +1 increment");

for (let index = 0; index < 10; index = index + 3) { //<- index ++ is the same as i = i + 1;
    console.log("index = " + index);
}
console.log("Stoping loop index = 10");



console.log("----------------------------------------------------------------------------------------");



// -1 increment
console.log(`
        for (let index = 10; index > 0; index--) { //<- index -- is the same as i = i - 1;
            console.log("index = " + index);
        }
        `);
console.log("Starting loop from 10 to 1 with -1 increment");

for (let index = 10; index > 0; index--) { //<- index -- is the same as i = i - 1;
    console.log("index = " + index);
}
console.log("Stoping loop index = 0");



console.log("----------------------------------------------------------------------------------------");



// -1 increment
console.log(`
for (let index = 10; index < 400; index = index*2) { 
    console.log("index = " + index);
    if(index > 100){
        console.log("Half way done!");
    }
}
        `);
console.log("Starting loop from 0 to 400 with *2 increment");

for (let index = 10; index < 400; index = index*2) { 
    console.log("index = " + index);
    if(index > 100){
        console.log("Half way done!");
    }
}




console.log("----------------------------------------------------------------------------------------");



// modulus 5
console.log(`
for (let index = 1; index < 100; index++) { 

    console.log(index + "%5 = " + (index%5) );

}
        `);
console.log("Starting loop from 0 to 400 with *2 increment");

for (let index = 1; index < 100; index++) { 

        console.log(index + "%5 = " + (index%5) );
    
}
console.log("----------------------------------------------------------------------------------------");



// modulus 5
console.log(`
for (let index = 0; index < 50; index++) { 

    if(index%2 === 0){
        console.log(index);
    }
}
        `);
console.log("logg even numbers");

for (let index = 0; index < 50; index++) { 
        if(index%2 === 0){
            console.log(index);
        }
}


// nested loops
console.log(`
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                console.log("i = " + i + " : j = " + j);
            }
        }
    `);


for (let row = 0; row < 10; row++) {
    let cell ="";
    for (let col = 0; col < 10; col++) {
        cell += "|" + row + " " + col + "|";
    }
    console.log(cell);
}




console.log("----------------------------------------------------------------------------------------");



// complex loop
console.log(`
        for (let i = 0; i < 10; i++) {
            let printString = "";
            for (let j = i; j >= 0; j--) {
                printString = printString + "*";
            }
            console.log(printString);
        }
    `);

for (let i = 0; i < 10; i++) {
    let center = 4;
    let printString = "";
    for (let j = 0; j < 10; j++) {
        if(j >= center+(i*-1) && j <= center+i){
            printString = printString + "*";
        }else{
            printString = printString + " ";
        }

    }
    console.log(printString);
}
console.log("----------------------------------------------------------------------------------------");



// complex loop xmas tree
console.log(`
        for (let i = 0; i < 10; i++) {
            let printString = "";
            for (let j = i; j >= 0; j--) {
                printString = printString + "*";
            }
            console.log(printString);
        }
    `);

for (let i = 0; i < 10; i++) {
    let printString = "";
    for (let j = (i/2)*-1; j < 10; j++) {
          printString = printString + "*";  
        
    }
    console.log(printString);
}


//DOM-----------------------------------------------------------

let h1 = document.getElementById("h1");


for (let index = 0; index < 10; index++) {
    let p = document.createElement("p");
    p.textContent = index;
    h1.appendChild(p);
}
