const entradas = require('../shared/entradas')
const vezes = entradas.recebeNumRodadas()

const sum = (a, b) => {
    return parseInt(a) + parseInt(b)
}

for(let i = 0; i < vezes; i++) {
    const num = entradas.recebeNumero('N')
    console.log(`A valor de ${num[0]} + ${num[num.length-1]} = ${sum(num[0], num[num.length-1])}`)
}