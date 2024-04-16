

let bobAge = 30
let robAge = 25
let zobAge = 35

if (bobAge > robAge && bobAge > zobAge) {

    console.log ("Bob is oldest");

}else if (robAge > bobAge && robAge > zobAge) {

    console.log ("Rob is oldest");

}else if (zobAge > bobAge && zobAge > robAge) {

    console.log("Zob is oldest");

}else if (bobAge === robAge || bobAge === zobAge || robAge === zobAge) {

    cosole.log("It´s same between some people");

}else if (bobAge === robAge && robAge === zobAge && bobAge === zobAge) {
    
    console.log("Everyone is the same older");
}
