let car = {
    wheelscount: 4,
    doorcount: 2,
    regNumber: "abc123",
    items: ["groceries", "spare wheel", "jack", "blanket"],
    driver: {name:"Adam", driversLicense: ["A","B","C"]}
}

// Get data with dot    objektNamn.värde
console.log(car.wheelscount);

// Get data with []  -  objektName["värde"]
console.log(car["regNumber"]);

// add value to an object
console.log(car);
car["fueltype"] = "bensin";
console.log(car);

// change property value 
car["fueltype"] = "diesel";
console.log(car);

// typo error, creates new property instead of changing property
car["doorCount"] = 4;
console.log(car);

// Go through a list
for (let i = 0; i < car.items.length; i++) {
    console.log(car.items[i]);
}

// Get inner objects value
console.log(car.driver.name);
console.log(car["driver"]["driversLicense"][0]);
console.log(car.driver.driversLicense[1]);

// functions with objects
function getDriver(objekt){
    return objekt.driver;
}

// Getting driver property from car object
console.log(getDriver(car));

// Getting a list from an object
let objektItems = car.items;
console.log(objektItems)