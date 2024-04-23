

for (let row = 1; row <= 5; row++) {
    let cell ="";
    for (let col = 1; col <= 5; col++) {
        cell += "|" + row * col + "|";
    }
    console.log(cell);
}


let size=5; 

for (let row = 1; row <=size; row++) {
    let rowdata="";
    for (let col = 1; col < size + 1; col++) {
        rowdata =rowdata + "|" + row * col + "| \t";
    }
    console.log(rowdata);
}





