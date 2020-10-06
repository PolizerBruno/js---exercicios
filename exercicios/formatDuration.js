function formatDuration (seconds) {
    if(seconds <= 0){
        return 'now';
    }else{
        var retorno = "";
        var array = [];
        var anos = Math.floor(seconds/31536000)
        var dias = Math.floor((seconds%31536000)/86400);
        var horas = Math.floor(((seconds%31536000)%86400)/3600);
        var minutos = Math.floor((((seconds%31536000)%86400)%3600)/60);
        var segundos = (seconds%(60));
        if(anos > 0){
            array.push(anos + ' year');
        }
        if(dias > 0){
            array.push(dias + ' day');
        }
        if(horas > 0){
            array.push(horas + ' hour');
        }
        if(minutos > 0){
            array.push(minutos + ' minute');
        }
        if(segundos >0){
            array.push(segundos + ' second');
        }
        for(var i = 0; i < array.length; i++){
            var number = array[i].split(" ")
            if(number[0] > 1){
                array[i] = array[i].concat('s');
    
            }
        };
        if(array.length == 1){
            retorno = array.join();
        }else{
            for(var i = 0; i < array.length;i++){
                if(i == (array.length -1)){
                    retorno = retorno.concat('and ' + array[i]);
                }else if(i == (array.length -2)){
                    retorno = retorno.concat(array[i] + ' ');
                }else{
                    retorno = retorno.concat(array[i] + ', ');
                }
            }
        }
    
        return retorno
    }
  
}    
console.log(formatDuration(15731080));