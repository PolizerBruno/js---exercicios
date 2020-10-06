function sumOfDivided(lst) {
    let resultado = [];
    limite = Math.max.apply(Math, lst);
    if (limite < 0) {
        limite = Math.abs(Math.min.apply(Math, lst));
    } else {
        limite = Math.max.apply(Math, lst);
    }
    if (limite > 8000) {
        limite = 8000;
    }
    for (let i = 2; i <= limite; i++) {
        if (verificarPrimo(i)) {
            let sum = 0;
            let add = 0
            lst.forEach(element => {
                if (element % i == 0) {
                    sum = sum + element;
                    add++;
                }
            });
            if (add > 0) {
                resultado.push([i, sum]);
            }
        }
    }
    return resultado
}

function verificarPrimo(number) {

    var numeroPrimo = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            numeroPrimo = false;
        }
    }
    if (numeroPrimo == true) {
        return true;
    }

}
console.log(sumOfDivided([ -7,
    1,
    66,
    150,
    193,
    128,
    180,
    139,
    -19,
    93,
    133,
    100,
    -70,
    11,
    -97,
    135,
    -2,
    68 ]));