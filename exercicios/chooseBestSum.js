function chooseBestSum (t, k, ls) {
    var arrayResult = new Array();
    var combination = ((factorialize(ls.length))/(factorialize(k)*factorialize(ls.length-k)));
    console.log(combination);
    if( k >= 1 && ls.length > k){
        var cidades = k -1;
        var sum = 0;
        var array = ls;
        var arrayRemovidos = [];
        var arrayCombinations = [];
        while(combination > 0){
            var random = Math.floor(Math.floor(Math.random() * (array.length)));
            if(array[random] > 0 && arrayCombinations.indexOf(random) == -1 && array[random] != undefined){
                arrayCombinations.push(random);
                arrayRemovidos.push(array[random]);
                array.slice(random);
                sum = sum + array[random];
                if(cidades == 0){
                    if(arrayResult.indexOf(sum) == -1){
                        combination--;
                        if(sum <= t){
                            arrayResult.push(sum);
                        }
                    }
                    sum = 0;
                    cidades = k;
                    array = array.concat(arrayRemovidos).filter((elem, index) =>  array.indexOf(elem) === index);
                    arrayRemovidos = [];
                    arrayCombinations = [];
                }
                cidades--;
            }

        }
        arrayResult.sort()     
        return arrayResult[arrayResult.length-1];
    }else{
        return null
    }
        
 }
 function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
var ts =[91, 74, 73, 85, 73, 81, 87];
console.log(chooseBestSum(230, 3, ts));