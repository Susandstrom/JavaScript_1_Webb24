/*
Uppgift 1: Hantera Produkter med Objekt och Listor

Beskrivning: Skapa ett program för att hantera information om produkter. Använd
objekt för att representera varje produkt med egenskaper som namn, pris och
lagerstatus. Implementera funktioner för att lägga till nya produkter, uppdatera pris,
och visa information om produkter.
*/


let allProduct = {
    addNewProduct(id, name, price, inStock){
        this[id] = new Product(name, price, inStock);
    },
    showProduct(product){
        this[id]
    },
}
class Product{
    constructor(id, name, price, inStock){
        this.id = id
        this.name = name;
        this.price = price;
        this.inStock = inStock;
    }
    updatePrice(newPrice){
        this.price = newPrice;
    }
    
}

// allProduct["antal"] = 100

allProduct.addNewProduct("302", "Pen", 13.20 , true);
allProduct.addNewProduct("209", "Headphones", 200.33 , true);

allProduct["209"].updatePrice(150.99);

let product1 = new Product("Book", 10.99, true);
let product2 = new Product("Pencil", 3.50, false);
let product3 = new Product("Bag", 100.99, true);

product1.updatePrice(12.99);

console.log(allProduct);


/*
Uppgift 2: Skapa en Klass för Att Hantera Användarinformation

Beskrivning: Definiera en klass Användare som har egenskaper för namn, ålder och
e-postadress. Implementera metoder för att uppdatera användarinformation och
hämta användaruppgifter.
*/

class Users{
    constructor(name, age, ePost){
        this.name = name;
        this.age = age;
        this.ePost = ePost; 
    }
    apdateInfo(){

    }
    getUserInfo(){

    }
}

let user1 = new Users("Robin", 32, "robin.robin@gmail.com");
let user2 = new Users("Mary", 24, "mary.mary@gmail.com");
let user3 = new Users("Laila", 32, "laila.laila@gmail.com");

/*Uppgift 3: Skapa en To-Do Lista med Objekt och Funktioner

Beskrivning: Implementera en to-do lista där varje aktivitet representeras av ett
objekt med egenskaper som beskrivning och status (avklarad eller ej). Skriv
funktioner för att lägga till nya aktiviteter, markera aktiviteter som avklarade och visa
lista över aktiviteter.*/


class Activity {
    constructor(info , status){
        this.info = info;
        this.status = status;
    }
}
class ToDoList {
    constructor(){
        this.allActivity= [];
    }
    addNewActivity(activity){
        this.allActivity.push(activity);
    }
    showActivities(){
        for (let i = 0; i < this.allActivity.length; i++) {
            console.log(this.allActivity[i]);
        }
    }
}

let activity1 = new Activity("Do HomeWork", "Done");
let activity2 = new Activity("Walk the dog", "Not yet");
let activity3 = new Activity("Call friends", "Done");

let activityList = new ToDoList();
activityList.addNewActivity(new Activity("walk",true));
activityList.addNewActivity(activity1);
activityList.addNewActivity(activity2);
activityList.addNewActivity(activity3);

activityList.showActivities();

/*
Uppgift 4: Skapa en Klass för Att Hantera Bankkonton

Beskrivning: Definiera en klass Bankkonto med egenskaper för kontonummer, saldo
och ägarens namn. Implementera metoder för att sätta in pengar, ta ut pengar och
visa kontoinformation.
*/

class AllBankkonto {
    constructor(){
        this.bankkonto = [];
    }
    visaInfo(){
        for (let i = 0; i < this.bankkonto.length; i++) {
            console.log(this.bankkonto[i]);
        }
    }
    laggTill(nyKonto){
        this.bankkonto.push(nyKonto);
    }
}
class Bankkonto {
    constructor(kontonummer, saldo, agare) {
        this.kontonummer = kontonummer;
        this.saldo = saldo;
        this.agare = agare;
    }

    sattInPengar(belopp){
        let nySaldo = this.saldo = saldo + belopp;
        return nySaldo;
    }

    taUtPangar(uttag){
        let saldoEfterUttag = this.saldo = saldo - uttag;
        return saldoEfterUttag;
    }
}

let bankkonto1 = new Bankkonto("2047", 1037, "Johan");
let bankkonto2 = new Bankkonto("5725", 3024, "Mary");
let bankkonto3 = new Bankkonto("8726", 4028, "Susane");

let kontoList = new AllBankkonto();
kontoList.laggTill(bankkonto1);
kontoList.laggTill(bankkonto2);
kontoList.laggTill(bankkonto3);

console.log(kontoList); 


/* 
Uppgift 5: Hantera Skoldatabas med Objekt och Listor

Beskrivning: Skapa ett program för att hantera information om studenter och deras
kurser. Använd objekt för att representera varje student med egenskaper som namn,
ålder och kurslista. Implementera funktioner för att lägga till nya studenter, lägga till
kurser för studenter och visa studentinformation.
*/

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.courses = [];
    }
  
    addNewStudent(name, age, courses){
        name = this.name;
        age = this.age;
        courses= this.courses;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}

 
let student1 = new Student("SS", "21");
let student2 = new Student("MM", "19");
let student3 = new Student("FF", "22");
let newStudent = new Student();
newStudent.addNewStudent("ww", "18", "Information och Kommunikation");

student1.addCourse("Matematik , Svenska , Marknadsföring");
console.log(newStudent);





