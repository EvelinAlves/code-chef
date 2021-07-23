const entradas = require('../shared/entradas')
const vezes = entradas.recebeNumRodadas()

const resto = (a, b) => {
    return parseInt(a)%parseInt(b)
}

for(let i = 0; i < vezes; i++) {
    let a = entradas.recebeNumero('A')
    let b = entradas.recebeNumero('B')
    console.log(`Na divisão ${a}/${b}, o resto é ${resto(a,b)}`)
}