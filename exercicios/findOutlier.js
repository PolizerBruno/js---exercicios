function findOutlier(integers){
    arrayImpares = [];
    arrayPares = [];
    integers.forEach(function(num){
        if( num%2 == 1 || num%2 == -1 ) {
            arrayImpares.push(num);
        }else{
            arrayPares.push(num);
        }
       
    });
    console.log('Pares =>' + arrayPares);
    console.log('Impares => ' + arrayImpares);
    if(arrayPares.length == 1){
        return arrayPares[0];
    }else{
        return arrayImpares[0];
    }
  }

  console.log(findOutlier([ 2, 6, 8, 2, -66, 34, -35, 66, 700, 1002, -84, 10, 4 ]));