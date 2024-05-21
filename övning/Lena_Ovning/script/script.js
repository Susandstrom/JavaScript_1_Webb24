// creat objekt
let car = {
    wheelsCount:4,
    doorCount:2,
    regNumber:"abc123",
    items: ["groceries", "spare wheel", "jack", "blanket"]
}

// get data with dot (objektNamn.värde)

console.log(car.wheelsCount);


//Övning 1

//Skapa ett objekt användare som innehåller information om flera användare. Varje användare ska representeras av ett objekt med följande egenskaper:
//id: Unikt id för användaren (nummer).
//namn: Namnet på användaren (sträng).
//ålder: Åldern på användaren (nummer).
//aktiviteter: En array som innehåller namnen på olika aktiviteter som användaren utför (array av strängar).

let användare = {
    användareCount : 4,  
    användare01 : {
        id:930,
        namn: "Lara",
        ålder: 22,
        aktiviteter: ["Baka", "Dansa", "Ha teparty", "måla"],
    },
    användare02 : {
        id:802,
        namn: "Tara",
        ålder: 35,
        aktiviteter: ["Laga mat", "Läsa böcker", "Ha picknic", "Lär sig ett nytt språk"],
    },
    användare03 : {
        id:452,
        namn: "Mara",
        ålder: 51,
        aktiviteter: ["Läsa böcker", "Odla", "Lös korsord/sudoku", "Läsa tidningar"],
    },
    användare04 : {
        id:328,
        namn: "Dara",
        ålder: 31,
        aktiviteter: ["Odla", "Ha hemmaspa", "Gym", "Umgås med kompisar"],
    }
}

//Övning 2

//Implementera följande funktioner för att hantera användarinformation:
//läggTillAnvändare(id, namn, ålder): En funktion som skapar ett nytt användarobjekt med angivet id, namn och ålder, och lägger till det i användareobjektet.
//läggTillAktivitet(userId, aktivitet): En funktion som lägger till en ny aktivitet för en given användare (genom att lägga till aktivitetsnamnet i användarens aktiviteter-array). userId är användarens id. 
//visaAnvändarInfo(userId): En funktion som loggar informationen om en given användare (namn, ålder och vilka aktiviteter de utför).

function läggTillAnvändare(användarenum, id, namn, ålder){
    användare.användareCount = användare.användareCount +1;
    användare[användarenum] = {
        id : id,
        namn : namn,
        ålder : ålder,
    }
    return användare;

}
console.log(läggTillAnvändare("användare05",234 ,"Nara", 17));
console.log(läggTillAnvändare("användare06",476,"Para", 69));

function läggTillAktivitet(userId, aktivitet){
    for (let i = 0; i <= användare.användareCount; i++) {
        if(användare["användare0"+ i] != undefined){
            if (användare["användare0"+i].id === userId) {
                användare["användare0"+i].aktiviteter.push(aktivitet);
                return användare["användare0"+i];
            }
        }
    }
    
}

console.log(läggTillAktivitet(328,"Simma"));

