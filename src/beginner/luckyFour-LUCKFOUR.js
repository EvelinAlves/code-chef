const entradas = require('../shared/entradas')

const vezes = entradas.recebeNumRodadas();

const verificaQuantidadeDeQuatros = num => {
    let qtdd = 0;
    for(let i = 0; i < num.length; i++) {
        if(num[i] == '4') qtdd++

    }
    return qtdd
}

for(let i = 0; i < vezes; i++) {
    let num = entradas.recebeNumero('N')
    console.log(`${num}: Tem ${verificaQuantidadeDeQuatros(num)} quatro(s)`)
}

/*
447474
228
6664
40
81

Output:
4
0
1
1
0
*/