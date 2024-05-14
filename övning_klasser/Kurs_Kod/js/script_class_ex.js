//create class

class Plane{

  constructor(nbrSeats, flyesFrom, flyesTo){
    this.numberOfSeats = nbrSeats;
    this.flyesFrom = flyesFrom;
    this.flyesTo = flyesTo;
    this.pilotes = ["John", "Maria", "Henry"];
  }

  addPilot(pilot){
    this.pilotes.push(pilot);
  };
  /* this removes last pilot from the pilot list */
  removeLastPilot(){
    this.pilotes.pop();
  };
  getPilotsCount(){
    return this.pilotes.length;
  };
};

let bigPlane = new Plane(100, "Dubai", "Mexico City");
let smallPlane = new Plane(25, "Malmo", "Landskrona");

console.log(bigPlane.pilotes);
bigPlane.removeLastPilot();
console.log(bigPlane.pilotes);

/////////////// products excercise
let allProducts = {
  productsList : [],

  addProduct : function(produkt){
    this.productsList.push(produkt);
  },

  showProducts: function (){
    for (let i = 0; i < this.productsList.length; i++) {
      console.log(this.productsList[i]);
    }
  }
}
class Product{
  constructor(id, name){
    this.id =id,
    this.name = name;
  }
}
//add new product allPoducts
allProducts.addProduct(new Product(1, "bread"));
allProducts.addProduct(new Product(4, "cheese"));
allProducts.addProduct(new Product(10, "flower"));
allProducts.showProducts();
