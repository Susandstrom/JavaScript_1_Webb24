//create class


class Plane{

 constructor(nbrSeats,flyesFrom,flyesTo){

    this.numberOfSeats = nbrSeats;
    this.flyesFrom = flyesFrom;
    this.flyesTo =flyesTo;
    this.pilots = ["John", "Maria", "Henry"];
    
    }

    addPilot(pilot){
    this.getPilotesCount.push(pilot);
    };

    removeLastPilot(){
    this.pilots.pop();
    }

    getPilotesCount(){

    return this.pilots.length;
    };
 

};

let bigPlane= new Plane(100,"Dubai", "Mexico City");
let smallPlane= new Plane(25, "Malmö", "Landskrona");


console.log(bigPlane);
bigPlane.removeLastPilot();
console.log(bigPlane);


//Övningar Objekt och Klasser:

//1.

function Produkt(namn,pris,lagerstatus){
    this.namn=namn;
    this.pris=pris;
    this.lagerstatus=lagerstatus;
};

let produkt1 = new Produkt("C-paste",100 +"kr", 5 + "st");
let produkt2= new Produkt("Queenie", 150 + "kr", 10 + "st");
let produkt3 = new Produkt("Frizzy logic", 200 + "kr", 8 + "st");
console.log(produkt1);
console.log(produkt2);
console.log(produkt3);

//2.

class Användare{
    constructor(namn,ålder,epostadress){
    this.namn=namn;
    this.ålder=ålder;
    this.epostadress=epostadress;
    }
    func(){
        return `Användar information; ${this.namn} : ${this.ålder} : ${this.epostadress}.`;
    }
}

let användare1= new Användare("Alice",40 + "år","Alice@hotmail.com");
console.log(användare1.func());

let användare2= new Användare ("Tim", 20 + "år","Tim@hotmail.com");
console.log(användare2.func());

//3.











//4.

class Bankkonto{
    constructor(kontonummer,saldo,namn){
    this.kontonummer= kontonummer;
    this.saldo=saldo;
    this.namn=namn;
    }

    sättIn(pengar){
        this.saldo += pengar;
    }
    
    taUt(pengar){
        if (pengar <= this.saldo){
            this.saldo-= pengar;
        }else{
            console.log("otillräckligt saldo");
        }
     }

     visaInfo(){
        console.log(`Kontonummer: ${this.kontonummer}, Saldo: ${this.saldo}, Ägare: ${this.namn}`);
        }
    }
    
let konto = new Bankkonto("111222", 5000,"Alice Ljung");
konto.sättIn(1500);
konto.taUt(600);
konto.visaInfo();

//5.

class Student{
    constructor(namn, ålder){
        this.namn = namn;
        this.ålder = ålder;
        this.kurser = [] ;
    }

    kursLäggTill(kurs){
        this.kurser.push(kurs);
    }

    visaInfo(){
        console.log(` Namn: ${this.namn}, Ålder: ${ this.ålder}, Kurser: ${this.kurser.join(",")}`);
    }
}

let databas = [];

function läggTillStudent(namn,ålder){
    let nyStudent = new Student(namn,ålder);
    databas.push(nyStudent);
}

function läggTillKursFörStunent(studentIndex,kurs){

    if (studentIndex >= 0 && studentIndex < databas.length){
    databas[studentIndex].kursLäggTill(kurs);
    }else{
    console.log("Ogiltig studentindex.");
    }
}

function visaStudentInfo(studentIndex){
    if( studentIndex >= 0 && studentIndex < databas.length){
        databas[studentIndex].visaInfo();
    }else{
        console.log("ogiltig studentindex");
    }
    }

läggTillStudent("Celina", 20);
läggTillStudent("Leila", 22);
läggTillStudent("leon",31);
läggTillStudent("Edmond",37);
läggTillKursFörStunent(0,"Mattematik");
läggTillKursFörStunent(0, "Biologi");
läggTillKursFörStunent(1,"Språk");
läggTillKursFörStunent(2,"Fysik");
läggTillKursFörStunent(3,"Mattematik");
läggTillKursFörStunent(3,"Biologi");
visaStudentInfo(0);
visaStudentInfo(1);
visaStudentInfo(2);
visaStudentInfo(3);

//6.
/*
class Film {
    constructor(titel,regissör,år){
        this.titel=titel;
        this.regissör=regissör;
        this.år=år;
        
        this.läggTillFilm = function(filmlista,titel,regissör,år){
            var film = new Film ( titel,regissör,år);
            filmlista.push(film);
        };

        this.sökEfterRegissör = function(regissör){
            var filmerMedRegissör=[];
            for( let i = 0 ; i < this.length; i++){
                if( this[i].regissör=== regissör){
                    filmerMedRegissör.push(this[i]);
                }
            }
        
            return filmerMedRegissör;
        };

        this.visaHelaFilmlistan = function(){
            for ( var i = 0 ; i < this.length; i++){
                var film = this[i];
                console.log("Titel:" + film.titel + ", Regissör:" + film.regissör + ", År : " + film.år);
            }
        };
    }

    class Filmlista(){

    }this.filmer = []
        
}   
*/

//7.

class Varukorg{
    constructor(){
        this.produkter = [];
        
    }

   läggTillProdukt(produkt){
    this.produkter.push(produkt);
   }

    taBortProdukt(index){
        if(index >= 0 && index < this.produkter.length){
            this.produkter.splice(index,1);
        }
    }

    beräknaTotalKostnad(){
        let totalKostnad = 0;
        for (let i = 0; i < this.produkter.length; i++){
            totalKostnad += this.produkter[i].pris;
        }
        return totalKostnad;
    }
}

let varukorg = new Varukorg();

varukorg.läggTillProdukt({namn: "Mjölk", pris: 18 + "kr"});
varukorg.läggTillProdukt({namn: "Bröd", pris: 34 + "kr"});
varukorg.läggTillProdukt({namn: "Röda Linser", pris: 32 + "kr"});
varukorg.läggTillProdukt({namn: "Halstabletter", pris: 26 + "kr"});

let totalKostnad = varukorg.beräknaTotalKostnad();
console.log(" Total kostnaden för varukorgen är : " + totalKostnad );

varukorg.taBortProdukt(1);

let uppdateradTotalKostnad = varukorg.beräknaTotalKostnad();
console.log(" uppdaterad total kostnad efter borttagning av bröd:" + uppdateradTotalKostnad + "kr");


//8.

class Kontaktbok {
    constructor(){
        this.kontakter = [];
    }

    läggTillKontakt(namn, telefonnummer, epost){
        let kontakt = {
            namn: namn , 
            telefonnummer: telefonnummer,
             epost: epost
            };
            this.kontakter.push(kontakt);
        }

        uppdateraKontakt(namn, nyTelefonnummer, nyEpost){
            let kontaktIndex = this.kontakter.findIndex(kontakt => kontakt.namn === namn);
            if (kontaktIndex !== -1){
                this.kontakter[kontaktIndex].telefonnummer = nyTelefonnummer;
                this.kontakter[kontaktIndex].epost = nyEpost;
                console.log( `Kontaktinformation för ${namn} har uppdaterats.`);
            }else{
                console.log(`Kontakten ${namn} kunde inta hittas.`);
            }
            }
        sökKontakt(namn){
            return this.kontakter.find(kontakt => kontakt.namn === namn);
        }    
        }
    
        let kontaktbok = new Kontaktbok();
        kontaktbok.läggTillKontakt("Alice", "0708666444", "alice@hotmail.com");
        kontaktbok.läggTillKontakt("Tom", "070111222", "tom@hotmail.com");

        kontaktbok.uppdateraKontakt("Alice", "0707333444", "lis@hotmail.com");

        let kontakt = kontaktbok.sökKontakt("Tom");
        if(kontakt){
        console.log("Kontakt hittad:");
        console.log("Namn:" + kontakt.namn);
        console.log("Telefonnummer:" + kontakt.telefonnummer);
        console.log("E-post:" + kontakt.epost);
        }else{
            console.log(" Kontakten kunde inte hittas.");

        }

        //9.

        function Händelse( titel, datum, beskrivning){
            this.titel = titel;
            this.datum = datum;
            this.beskrivning = beskrivning;
        }

        function Kalender(){
            this.händelser = [];

            this.läggTillHändelse = function(titel, datum, beskrivning){
                let händelse = new Händelse(titel,datum, beskrivning);
                this.händelser.push(händelse);
            };


            this.visaHändelserFörDatum = function(datum){
                let händelserFörDatum = this.händelser.filter(function(händelse){
                    return händelse.datum === datum;
                });
                if ( händelserFörDatum.length > 0){
                    console.log("Händelser för" + datum + ":");
                    händelserFörDatum.forEach(function(händelse){
                        console.log("-" + händelse.titel + ":" + händelse.beskrivning);
                    });
                }else{
                    console.log("Inga händelser hittades för " + datum + ".");
                }
            };


            this.tabortHändelserFörDatum = function(datum){
                this.händelser = this.händelser.filter(function(händelse){
                    return händelse.datum !==datum;
                });
                console.log(" alla händelser för" + datum + "har tagits bort.");
            };
        }

        let kalender = new Kalender();
        kalender.läggTillHändelse("Möte" , "2024-05-15", "Möte med Stiffe");
        kalender.läggTillHändelse("Födelsedag", "2024-05-20", "Fira Eli på hennes födelsedag");
        kalender.läggTillHändelse("Resa", "2024-06-28", " Resa till Prespa");

        kalender.visaHändelserFörDatum("2024-05-15");
        kalender.visaHändelserFörDatum("2024-05-20");
        kalender.visaHändelserFörDatum("2024-06-28");

        kalender.tabortHändelserFörDatum("2024-05-15");

        



        
        



















