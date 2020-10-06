function productFib(prod){
    var array = [0,1];
    var loop = 0;
    var produto = 0;
    while(prod > produto){
        let sum = array[loop] + array[loop +1];
        array.push(sum);
        produto = array[loop] * array[loop +1];
        if(produto == prod){
            return [array[loop],array[loop +1],true]
        }if(produto > prod){
            return [array[loop],array[loop +1],false]
        }
        loop++;     
    }
  }

  console.log(productFib(4895)); 