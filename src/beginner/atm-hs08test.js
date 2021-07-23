const entradas = require('../shared/entradas')
const vezes = entradas.recebeNumRodadas()

const saldoFinal = (saque, saldoAtual) => {
    const multiploDeCinco = saque%5 == 0;
    const saldoSuficiente = (saque + 0.5) <= saldoAtual

    if(multiploDeCinco && saldoSuficiente) {
        return (saldoAtual - (saque + 0.5)).toFixed(2)
    }

    return saldoAtual.toFixed(2)
}

for(let i = 0; i < vezes; i++) {
    let valorSaque = parseFloat(entradas.recebeNumero('saque'))
    let valorSaldo = parseFloat(entradas.recebeNumero('saldo'))
    console.log(`Saldo final: R$ ${saldoFinal(valorSaque, valorSaldo)}`)
}

