function arrayDiff(arrayA, arrayB) {
  var arrayItemA = [];  
  var arrayItemB = [];  
  var arrayFinal = [];
  arrayA.forEach(function(item){
    arrayItemA.push(item);
  });
  arrayB.forEach(function(item) {
      arrayItemB.push(item);
  });
  arrayItemA.forEach(function(itemA){
    if(arrayItemB.indexOf(itemA) == -1){
        arrayFinal.push(itemA)
    }else{

    }
  });
  return arrayFinal
}

console.log(arrayDiff([3,4], [3]));