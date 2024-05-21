// Uppgift 2: Konkatenera Strängar
// Skriv en funktion konkateneraSträngar som tar emot två strängar som argument och returnerar en ny sträng som är en konkatenation av de två inmatade strängarna.

function konkateneraSträngar(sträng1, sträng2){
    let konkateneraSträngar = sträng1 + sträng2;
    return konkateneraSträngar;
}

console.log(konkateneraSträngar("hello ","world"));

//Uppgift 3: Kontrollera Om Ett Tal är Jämnt eller Udda
//Skriv en funktion ärJämntal som tar emot ett tal som argument och returnerar true om talet är jämnt, annars false.

function ärJämntal(tal){
    if (tal %2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(ärJämntal(3));
console.log(ärJämntal(6));

//Uppgift 4: Räkna Antalet Vokaler i en Sträng !!
//Skriv en funktion räknaVokaler som tar emot en sträng som argument och returnerar antalet vokaler (a, e, i, o, u) i strängen.

function räknaVokaler(sträng){
    let vokaler = ['a', 'e', 'i', 'o', 'u'];
    let antalVokaler = 0;
    for (let i = 0; i < sträng.length; i++) {
        for (let j = 0; j < vokaler.length; j++) {
            if (sträng[i] === vokaler[j]) {
                antalVokaler++;
            }
        }
    }
    return antalVokaler;
}

console.log(räknaVokaler("Lorem ipsum dolor sit amet consectetur adipisicing."));



//Uppgift 5: Generera en Multiplikationstabell !!
//Skriv en funktion genereraMultiplikationstabell som tar emot ett heltal som argument och skriver ut multiplikationstabellen för detta tal upp till 10.

function genereraMultiplikationstabell(heltal){
    let numbers = 10;
    for (let i = 0; i <= numbers; i++) {
        console.log(heltal * i);
    }
}

genereraMultiplikationstabell(3);

//Uppgift 6: Bedöm Betyg Utifrån Poäng !!
//Skriv en funktion bedömBetyg som tar emot en poäng (heltal) som argument och returnerar betyget enligt följande skala:
//90 eller högre: "A";
//80-89: "B";
//70-79: "C";
//60-69: "D";
//Under 60: "F";

function bedömBetyg(poäng){
    if (poäng >= 90) {
        return "A";
    } else if (poäng >= 80 && poäng < 90) {
        return "B";
    } else if (poäng >= 70 && poäng < 80) {
        return "C";
    } else if (poäng >= 60 && poäng < 70) {
        return "D";
    } else if (poäng <= 60) {
        return "F";
    }
}
console.log(bedömBetyg(94));
console.log(bedömBetyg(83));
console.log(bedömBetyg(79));
console.log(bedömBetyg(65));
console.log(bedömBetyg(44));

//Uppgift 7: Kontrollera Om Ett Ord är Palindrom !!
//Skriv en funktion ärPalindrom som tar emot en sträng som argument och returnerar true om strängen är ett palindrom (läsbar framåt och bakåt), annars false.

function ärPalindrom(sträng){
    let ord = sträng;
    let ordReverse = "";
    for (let i = ord.length -1; i >= 0; i--) {
        ordReverse = ordReverse + ord[i];
              
    }
    for (let i = 0; i < ordReverse.length; i++) {
        if (ord[i]!== ordReverse[i]) {
            return false;
        }
    }
    return true;
}

console.log(ärPalindrom("sträng"));
console.log(ärPalindrom("anna"));



//Uppgift 10: Beräkna Medelvärdet av Tal i en Array !!
//Skriv en funktion beräknaMedelvärde som tar emot en array av tal som argument och
//returnerar medelvärdet av talen i arrayen.

// uppgift 1
function sumArray(numbers) {
    let results = 0;
    for (let i = 0; i < numbers.length; i++) {
        results += numbers[i];
    }
    return results;
}

console.log(sumArray([1,3,4,5,8]));

// uppgift 2
function hittaStörsta(array){
    let biggestNumber = Math.max(...array);
    return biggestNumber;
}

console.log(hittaStörsta([20,25,67,93,54,29]));

//uppgift 3
function filteraPositiva(numbers1){
    let positivNum = numbers1.filter(num => num > 0);
    return positivNum;
}

console.log(filteraPositiva([-2,-7,3,1,9,-5]));

// Övning 4: Kontrollera Om Alla Element är Jämna !!
// Skriv en funktion ärAllaJämna som tar emot en array av tal som argument och returnerar true om alla element i arrayen är jämna, annars false.
function arAllaJamna(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] %2 === 0) {
            console.log(arr[i] +" true");
        }
        else{
            console.log( arr[i]+" false");
        }
    }
}

arAllaJamna([1,5,3,8,2,6]);

// uppgift 5
function dubblaArray(arr){
    let dubbleNum = arr.map(num => num * 2);
    return dubbleNum;
}

console.log(dubblaArray([1,6,26,8]));

// uppgift 6
function filtreraOrdLängd(sträng, längd){
    let ordLängd = sträng.filter(ord => ord.length === längd);
    return ordLängd;
}

console.log(filtreraOrdLängd(["Volvo","BMW","Ford","Audi","Nissan"],4));

//Övning 7: Räkna Förekomster av Ett Element !!
//Skriv en funktion räknaFörekomster som tar emot en array och ett element som argument, och returnerar antalet förekomster av elementet i arrayen.

function räknaFörekomster(array, element){
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            num++;
        }
    }
    return num;
}
console.log(räknaFörekomster([3,5,7,1,7,7,7],4));
console.log(räknaFörekomster([3,5,7,1,7,7,7],7));

//Övning 8: Ta Bort Duplicerade Element
//Skriv en funktion taBortDuplicerade som tar emot en array som argument och returnerar en ny array där alla duplicerade element har tagits bort.

function taBortDuplicerade(arr){
    let returnArr = [];
    for (let i = arr.length-1; i > 0; i--) {
        for (let j = i-1; j >=0 ; j--) {
            console.log(`${i} - ${j}`);
            if (arr[i] === arr[j]) {
                console.log("same value");
                arr.splice(j,1);
            }
        }
    }
    return returnArr;
}

let testArray = [1,2,4,5,2,3,3,41,41,5,6,2,4];
console.log(testArray);
console.log(taBortDuplicerade(testArray));

//Övning 10: Sortera Array i Stigande Ordning
//Skriv en funktion sorteraStigande som tar emot en array av tal som argument och returnerar en ny array med talen sorterade i stigande ordning.

function sorteraStigande(array){

}

