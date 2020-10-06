function pigIt(str){
    var palavras = String(str).split(" ");
    var frase = [];
    palavras.forEach(function(palavra){
        if(palavra.length == 1 && palavra == palavras[palavras.length-1]){
            frase.push(palavra);
        }else{
            palavraAlterada = String(palavra).substring(1,palavra.length).concat(palavra.substring(0,1)+'ay');
            frase.push(palavraAlterada);
        }
    });
    return frase.join(" "); 
}


console.log(pigIt('Pig latin is cool'));