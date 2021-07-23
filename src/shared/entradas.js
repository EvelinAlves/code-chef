export function recebeNumRodadas() {
    let rodadas = prompt("Informe a quantidade de testes: ")
    while (1 > rodadas || rodadas > 1000) {
        rodadas = prompt("Informe a quantidade de testes: ")
    }
    return rodadas
}

export function recebeNumero(valor = '') {
    let n = prompt(`Valor para ${valor}:`)
    while(1 > n || n > 1000000)
        n = prompt(`Valor para ${valor}:`)
    return n
}