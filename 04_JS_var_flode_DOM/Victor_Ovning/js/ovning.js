for (let row = 1; row <= 5; row++) {
    let cell = "";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "| \t";
    }
    console.log(cell);
}


let size = 5;

for (let row = 1; row < size; row++) {
    let cell = "";
    for (let col = 1; col < size; col++) {
        cell = cell + "|" + row*col + "| \t";

    }
    console.log("|" + row * col + "|")
}

let start = 0;
let finish = 100;
let sum = 0;

for (let index = 0; index < 100; index++) {

    if (index%2 !==0) {
        sum = sum + index;
    }

}
console.log(`The sum of odd numbers between ${start} and ${finish} is ${sum}`)
