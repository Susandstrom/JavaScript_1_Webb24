

for (let row = 1; row <= 5; row++) {
    let cell ="";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "|";
    }
    console.log(cell);
}