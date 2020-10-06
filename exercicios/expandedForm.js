function expandedForm(num) {
    var numero = String(num);
    var expandedForm = ''
    var zero = '0'
    var size = ((numero.length) - 1);
        if(numero > 0){
            for(var i = 0; i <= size; i++){
                if(numero[i] != 0 ){
                    expandedForm = expandedForm.concat(numero[i]).concat(zero.repeat(size-i));
                }
                if(numero[i+1] != 0  && numero[i+1] != undefined){
                    expandedForm = expandedForm.concat(' + ')
                }
               
            }
        }else{
            return null
        }

    
    return expandedForm;
}

console.log(expandedForm(70304));