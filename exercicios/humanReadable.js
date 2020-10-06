function humanReadable(seconds) {
    var horas = ("0" + Math.floor(seconds/3600));
    var minutos = ("0" +Math.floor((seconds%3600)/60));
    var segundos =("0"+ seconds%(60));
    return (horas.substring(horas.length-2,horas.length)+':'+minutos.substring(minutos.length-2,minutos.length)+':'+segundos.substring(segundos.length-2,segundos.length));
}

console.log(humanReadable(0))