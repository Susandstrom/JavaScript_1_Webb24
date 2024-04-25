runALL();
function runALL(){

    myName(); //function executes
    sayName("Bob Rob zob");

    let message = "functions are exciting";
    let modifiedMessage = saySomething(message);
    console.log(modifiedMessage);

    //console.log(saySomething("functions are exciting")); ---- mer kompact för koden där uppe

    //create simple function with paramete & default parameter value
    function myName(){
    let name = "Jovana";
    console.log(name);
    }

    //create simple function
    function sayName(name="No name"){
    console.log(name);
    }

    //create simple function
    function sayName(name){
    console.log(name);
    }

    //create simle funtion
    function saySomething(txt){
    let newTxt = "user said that: " + txt;
    return newTxt;
    //return "user said that: + txt;"
    }

    //övning 
    writeName();
    area();

    function writeName(){
        let name= "JoviElvira";
        console.log(name);
    }
    
    function area(width, height){
        let newArea = "Area of the rectangel: " + width*height;
        return newArea;
        
    }
    console.log(area(10, 20));
}

