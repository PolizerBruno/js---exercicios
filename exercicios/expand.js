function expand(expression) {
    let expr = expression.split('(').join('').split(')').join('').split('^');
    let exponencial = expr[1];
    if(exponencial == 0){
        return 1
    }else{
        let retorno = [];
        expr.forEach(element => {
            if(element.includes('+')){
                valores = element.split('+');
                console.log(valores);
                for(let i= 0; i <= exponencial; i++){
                    retorno.push((combination(exponencial,i)+ '' + valores[0] + '^' + (exponencial - i) + ' * ' + valores[1] + '^' + (i)));
                }
                console.log(retorno);
            }else{
                expr = expression.split('-');
            }      
        });
    }
}

function combination(a,b){
    return ((factorialize(a))/(factorialize(b)*factorialize(a-b)));
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


  console.log(expand("(x+y)^0"));