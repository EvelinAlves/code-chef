const entradas = require('../shared/entradas')
const vezes = entradas.recebeNumRodadas();

const inverterNum = num => {
    let numInvertido = '';

    for(let i = num.length-1; i >= 0; i--) {
        numInvertido += num[i]
    }
    return numInvertido
}

for(let i = 0; i < vezes; i++) {
    const num = entradas.recebeNumero('N')
    console.log(`${num}: ${inverterNum(num)}`);
}

/*
12345
31203
2123
2300
Output
54321
30213
3212
32
*/