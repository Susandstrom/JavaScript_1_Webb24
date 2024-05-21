//ÖVNINGSUPPGIFTER Funktioner variabler loops ifs:

//1.

function beräknaSumma(array){

    let sum = 0;
    
    for(let i = 0; i < array.length; i++){
     
        sum = sum + array [i];
        //sum += array[i];
    
    }
    
    return sum;
    
    }
    
    let array = [1,2,3,4,5];
    console.log(beräknaSumma(array));
    
    
    //2.
    
    function konkateneraSträngar( sträng1,sträng2){
    
        
         return sträng1 + sträng2;
    
    }
        let sträng1= "Hello";
        let sträng2= "World";
    console.log(konkateneraSträngar(sträng1,sträng2));
    
    
    //3.
    
    function ärJämntal(tal){
    
      return  tal % 2===0 ;
    
    }
    console.log(ärJämntal(4));
    console.log(ärJämntal(5));
    
    
    //4.
    
    function räknaVokaler(sträng){
    
        let vokaler = "aeiou";
        let count = 0;
        
        
        for(var i = 0; i < sträng.length; i++){
        
            if(vokaler.indexOf(sträng[i]) > -1){
    
           count++;
        }
            
        }
    
        return count; 
    }
    
    let testSträng="underbar dag idag";
    console.log(räknaVokaler(testSträng));
    
    
    //5.
    
    function genereraMuliplikationstabell(tal){
    
        for( let i = 1; i <=10 ; i++ ){
    
             let summa = tal * i;
    
             console.log( tal + " * " + i + " = " + summa);
    
        }
    }
    
    genereraMuliplikationstabell(3);
    
    
    //6.
    
    
    function bedömBetyg(grade){
    
    if( grade >=90) {
        return "A";
    } else if(grade >= 80 && grade <=89){
        return "B";
    } else if( grade >=70 && grade <= 79){
        return "C";
    } else if( grade >= 60 && grade <= 69){
        return "D";
    } else {
        return "F";
    }
    }
    
    let grade = 50;
    console.log( "Betyg"  +  bedömBetyg(grade));
    
    
    
    
    //7.
    function räknaFörekomst(array,element){

        let count= [];
    
        for( let i = 0; i < array.length; i++){
            if( array[i]=== element){
                count++;
    
           }
        }
        return count;
    }
    let minArr =["a","a","a","b","c","d"];
    let minElement = "a";
    
    console.log(räknaFörekomst(minArr,minElement));
    
    
    
    
    //8.
    
    function hittaStörsta(array){
    
        let största = array[0];
    
        for( let i = 0; i < array.length; i++){
    
            if(array[i] > största){
                största = array[i]
            }
    
         }
     
         return största;
    }
    
    let talet = [16,7,8,1,55,20];
    console.log("Största element är" + hittaStörsta(talet));
    
    //9.
    
    function kombineraArray(a1,a2){

        return [ ...a1,...a2];
    }
    
    
    let a1 = ["a","a","a"];
    let a2 = ["b","b","b"];
    
    console.log(kombineraArray(a1,a2));
    
    
    //10.
    
    function beräknaMedelvärde(array){
    
        let värde = 0 ;
    
        for( let i = 0; i < array.length; i++){
    
        värde = värde + array[i];
    }
    
        let medelvärde = värde / array.length;
    
        return medelvärde;
    
    }
    
    let num = [10,20,30,40,50,60];
    console.log("Medelvärdet är" + beräknaMedelvärde(num));
    
    
    
    
    //Övningar Array och Operationer:
    
    //1.
    
    function summeraArray(array){
    
       let summ = 0;
    
       for( let i = 0; i < array.length; i++){
    
        summ = summ + array[i];
       }
    
       return summ ;
    }
    
    let array2 = [10,20,30,40,50,60,70,80,90];
    console.log( " summan av array är " + summeraArray(array2));
    
    
    //2.
    
    
    function hittaStörstaTal(array){
    
        let störstatal = array[0];
    
        for( let i = 0 ; i < array.length; i++){
    
            if( array[i] > störstatal){
                störstatal= array[i]
            }
        }
    
        return störstatal;
    
    }
    let tal=[5,9,20,30,50,60];
    console.log( " Det största talet är " + hittaStörstaTal(tal));
    
    
    //3.
    
    function filtreraPositiva(arrayTal){
    
        let positivaTal = [];
    
        for(let i = 0; i < arrayTal.length; i++){
    
            if( arrayTal[i] > 0){
                positivaTal.push(arrayTal[i]);
            }
        }
            return positivaTal;
    }
    let talen = [-9,3,-4,6,-7,8,-11,12,14];
    console.log(filtreraPositiva(talen));
    
    //4.
    
    function ärAllajämnatal(array){
    
    
        for ( let i = 0; i < array.length; i++){
    
            if( array[i] % 2 !==0 ){
              
                return false;
            }
        }
         
        return true;
      
      }
      let talen1 =[4,6,8,10];
      let talen2 =[5,6,7,8,9];
      console.log(ärAllajämnatal(talen1));
      console.log(ärAllajämnatal(talen2));
      
    
    //5.
    
    function dubblaArray(array){
    
        let dubbelarr = [];
    
        for( let i = 0; i < array.length; i++){
    
            dubbelarr.push(array[i] * 2);
        }
    
        return dubbelarr;
    }
    let arr1 = [2,4,6,8,10];
    console.log(dubblaArray(arr1));
    
    //6.
    
    function filtreraOrdLängd(arrayOrd, längd){
        let ord = [];
    
        for(let i = 0; i < arrayOrd.length; i++){
            if(arrayOrd[i].length===längd){
                ord.push(arrayOrd[i]);
            }
        }
         return ord;
    }
    let a = ["träd","fågel","insekt","mus","hus","blomma"];
    console.log(filtreraOrdLängd(a,3));
    
    //7.
     function räknaFörekomster(array,element){
    
        let count = [];
    
        for( let i = 0; i < array.length; i++){
    
            if(array[i] === element){
    
                count++;
            }
        }
        return count;
     }
    
     let myArray = [10,20,30,40,30,50,30,60,30];
     let myElement = 30;
     console.log(räknaFörekomster(myArray,myElement));
    
     //8.   
    
     function taBortDuplicerade(arr){
    
        for(let i = 0; i < array.length -1; i++){
    
           for(let j = i+1; j < arr.length; j++){

            console.log(`${i} - ${j}`);
            if (arr[i] === arr[j]){
                console.log(i + ":" + arr[i] + "---" + j + ":" + arr[j]);
                arr.splice(j,1);
            }
            console.log(arr);
           }
        }
        return arr;
     }
    let testArray = [1,2,3,4,5,6,2,2,4,8];
    console.log(testArray);
    console.log(taBortDuplicerade(testArray));




    
    //9.
    
    function kombineraArrayer(array1,array11){
    
        return [...array1,...array11];        /*spread-operatören(...) för att
                                               sammanslå de två arrayerna
                                               till en ny array.*/
    }
    
    let array1 = [1,1,1];
    let array11 = [2,2,2];
    
    console.log(kombineraArrayer(array1,array11));
    
    
    //10.
    
    
    
    
    
    
    
    
    
    
    
    
    
    








