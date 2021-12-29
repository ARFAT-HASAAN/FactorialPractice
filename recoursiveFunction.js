
function getFactirial(N){
    if(N === 1){
        return 1;
    }
    return N * (N-1);

}


const fact = getFactirial(6)
console.log(fact);