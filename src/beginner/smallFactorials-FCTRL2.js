const entradas = require('../shared/entradas')
const vezes = entradas.recebeNumRodadas()

const fatora = num => {
    for(let i = num-1; i > 0; i--) {
        num *= i;
    }
    return num
}

for(let i = 0; i < vezes; i++) {
    let num = parseInt(entradas.recebeNumero('N'))
    console.log(`fatoração de ${num}: ${fatora(num)}`)
}