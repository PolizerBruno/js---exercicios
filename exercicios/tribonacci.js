function tribonacci(signature,n){
    var loop = 0;
    var sum = 0;
    var tam = n;
    var init = signature.length
    var array = [];
    if(n == 0 || n < 0 || n == null){
        return array = [];
    }if(n == 1){
        return  signature[0];    
    }else{
        while(tam > 0){
            signature.forEach(function(value){   
                var limit = loop + init;
                sum = 0;
                for(var i = loop; i < limit; i++){
                    sum = sum + signature[i];
                }
                tam = tam - 1;
                loop++;
                if(signature.length < n){
                    signature.push(sum);
                }else{
    
                }
            });
        }
        
    }
    return signature;
    
  }

  console.log(tribonacci([1,1,1],1))