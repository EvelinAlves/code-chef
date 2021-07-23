const entradas = require('../shared/entradas')
const vezes = entradas.recebeNumRodadas()

const sum = (a, b) => {
    return parseInt(a) + parseInt(b)
}

for(let i = 0; i < vezes; i++) {
    let a = entradas.recebeNumero('A')
    let b = entradas.recebeNumero('B')
    console.log(sum(a, b))
}
