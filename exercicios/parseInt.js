function parseInt(string) {
    var array = [];
    var sum = 0;
    partes = string.split(' ');
    for(var i = 0; i < partes.length; i++){
        var multCentenas = true;
        var multMilhares = true;
        if(verificarNumeros(partes[i])){
            numero = verificarNumeros(partes[i]);
            for(var j = i; j < partes.length; j++){
                if(verificarMilhares(partes[j]) && multMilhares == true){
                    numero = numero*1000
                    multMilhares = false;
                    multCentenas = false;
                }
                if(verificarCentenas(partes[j]) && multCentenas == true){
                    numero = numero*100;
                    multCentenas = false;
                }
                if(verificarMilhoes(partes[j])){
                    numero = numero * 1000000;
                    multMilhares = false;
                }
            }
            array.push(numero);
        }
        if(verificarDezenas(partes[i])){
            dezena = verificarDezenas(partes[i]);
            for(var j = i; j < partes.length; j++){
                if(verificarMilhares(partes[j]) && multMilhares == true){
                    dezena = dezena*1000
                    multMilhares = false;
                    multCentenas = false;
                }
                if(verificarCentenas(partes[j]) && multCentenas == true){
                    dezena = dezena*100;
                    multCentenas = false;
                    multMilhares = false;
                }
            }
            array.push(dezena);
        }
    }    
    array.forEach(element => {
        sum = sum + element
    });
    return Number(sum);
}

function verificarNumeros(string){
    var numeros = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    if(numeros.includes(string)){
        return  numeros.indexOf(string);
    }
    return false;
}
function verificarDezenas(string){
   
    var dezenas = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    var retorno = 0;
    if(String(string).includes('-') && string != undefined){
        partesDezenas = string.split('-');
        partesDezenas.forEach(element => {
            if(verificarDezenas(element)){
                retorno = retorno + verificarDezenas(element);
            }
            if(verificarNumeros(element)){
                retorno = retorno + verificarNumeros(element);
            }
        });
        return retorno;
    }else{
        if(dezenas.includes(string)){
            return (dezenas.indexOf(string)*10 +20)
        }else{
            return false;
        }
    }


}
function verificarCentenas(string){
    var centenas = ['hundred'];
   if(centenas.includes(string)){
       return true;
   }else{
       return false;
   }
}
function verificarMilhares(string){
    var milhares = ['thousand'];
    if(milhares.includes(string)){
        return true;
    }else{
        return false;
    }  
}
function verificarMilhoes(string){
    var milhoes = ['million'];
    if(milhoes.includes(string)){
        return true;
    }else{
        return false;
    }  
}        



console.log(parseInt('one hundred and seventy-one thousand six hundred twelve'));