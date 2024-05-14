//create object

let car = {
  driversCount:3,
  wheelsCount: 4,
  doorCount: 2,
  regNumber: "abc123",
  items: ["groceries", "spare wheel", "jack", "blanket"],
  driver: {name:"luk", driversLicense: ["A","B","C"]},
  driver01: {name:"luk", driversLicense: ["A","B","C"]},
  driver02: {name:"lena", driversLicense: ["A","B","C"]}
}

//get data with dot -   objektNamn.värde
console.log(car.wheelsCount); //writes 4 to console

//get data with [] - objektName["värde"]
console.log(car["regNumber"]); //writes abc123 to console

//add value to an object
console.log(car);
car["fuelType"] = "bensin";
console.log(car);

car["driver03"] = {name:"lena", driversLicense: ["A","B","C"]};
car.driversCount = car.driversCount + 1

//change property value 
car["fuelType"] = "El";
console.log(car);

// typo error creating property not changing value bug 
car["doorcount"] = 4;
console.log(car);

//go through a list
for (let i = 0; i < car.items.length; i++) {
  console.log(car.items[i]);
}

//get inner objects values 
console.log(car.driver.name);

console.log(car["driver"]["driversLicense"][0]);
console.log(car.driver.driversLicense[0]);

//functions with objects

function getDriver(objekt){
  return objekt.driver;
}
//getting driver property from car object
console.log(getDriver(car));

//getting a list from an object
let objektItems = car.items;
console.log(objektItems);

//retun index of
console.log(car.items.indexOf("bag",0));
console.log(car.items.indexOf("jack",0));

//go through every property
for (let i = 0; i <= car.driversCount; i++) {
  if(car["driver0"+i] != undefined){  
    if(car["driver0"+i].name === "lena"){
      console.log("its lena " + car["driver0"+i]);
      console.log(car["driver0"+i]);
    }
  }
}