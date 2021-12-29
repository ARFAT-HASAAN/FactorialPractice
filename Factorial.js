
/*
let factorial = 1;
for(i = 1; i <=7 ; i++){
    factorial *= i;
    
    console.log(factorial);
}


let factorial = 1;
let i = 1;
while(i <= 11){
   factorial *= i;
   i++;
   console.log(factorial);

}


let factorial = 1;
for(i = 5; i >=1 ; i--){
    factorial *= i;
    
    console.log(factorial);
}


let factorial = 1;
let i = 10;
while(i >= 1){
   factorial *= i;
   i--;
   console.log(factorial);

}


function GetFactorial(num){
    var factorial = 1;
    for(i = 1; i <= num; i++){
        factorial *= i;

    }
    return factorial;
}

const factorial = GetFactorial(7);
console.log(factorial);

*/

function getFactirial(numb) {
    var i = numb;
    let factorial = 1;
    while(i>= 1){
        factorial *= i;
        i--
        
    }
   
 return factorial;

}
const factorial = getFactirial(5)
console.log(factorial);