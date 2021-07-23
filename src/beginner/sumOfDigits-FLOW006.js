const entradas = require('../shared/entradas')
const vezes = entradas.recebeNumRodadas()

const sumNumbers = (num) => {
    let sum = 0;
    for(let i = 0; i < num.length; i++ ) {
        sum += parseInt(num[i])
    }
    return sum
}

for(let i = 0; i < vezes; i++) {
    let num = entradas.recebeNumero('N')
    console.log(sumNumbers(num))
}