var lastDigit = function(str1, str2){
console.log(str1);
console.log(str2);
   var periodoUnico = [0,1,5,6];
   var periodoQuarto = [2,3,7,8];
   var periodoDuplo = [4,9];
   var casasDecimais = parseInt(String(str2).substring(String(str2).length-2))
   var digito = parseInt(String(str1).substring(String(str1).length-1));
   if(digito == 0 && casasDecimais != 0){
       return 0;
   }
   
   if(casasDecimais == 0){
       return 1;
   }
    if(periodoUnico.includes(digito)){
       return digito
    }
    if(periodoQuarto.includes(digito)){
        if(casasDecimais % 4 == 0){
            var resultado = Math.pow(digito,4);
            return parseInt(String(resultado).substring(String(resultado).length -1));
        }else{
            var resultado = Math.pow(digito,(casasDecimais%4));
            return parseInt(String(resultado).substring(String(resultado).length -1));
        }
       
    }
    if(periodoDuplo.includes(digito)){
        if(casasDecimais % 2 == 0){
            var resultado = Math.pow(digito,2);
            return parseInt(String(resultado).substring(String(resultado).length -1));
        }else{
            var resultado = Math.pow(digito,(casasDecimais%2));
            return parseInt(String(resultado).substring(String(resultado).length -1));
        }
    }
    
}

console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"));
    

//0,1,5,6 > periodo = 1
//2,3,7,8 > pediodo = 4
//4,9 > periodo = 2    