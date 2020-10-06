function nextBigger(number) {
    let nextNumber = number + 1;
    let resultado = testNexyBigger(nextNumber,number);
    let i = 1000;
    while ( i > 0 && resultado == false){
       resultado = testNexyBigger(nextNumber++,number);
       i--;
    }
    return resultado;
}

function testNexyBigger(nextNumber, number) {
    let resultado = nextNumber;
    if(String(nextNumber).length > String(number).length){
        return -1;
    }
    for(let i = 0 ; i < String(number).length; i++){
        if(String(nextNumber).includes(String(number).charAt(i))){
            nextNumber = String(nextNumber).replace(String(number).charAt(i),'');
        }else{
            return false;
        }
    }    
    return resultado;
}

console.log(nextBigger(2017));