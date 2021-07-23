const entradas = require('../shared/entradas')
const vezes = entradas.recebeNumRodadas()

const num = new Array(vezes)
for(let i = 0; i < vezes; i++) {
    num[i] = entradas.recebeNumero('N')
}

const bubbleSort = () => {
    let j = 0;
    while(j < num.length - 1) {
        for(let i = 0; i < vezes-1; i++) {
            if(num[i] > num[i+1]) {
                const aux = num[i]
                num[i] = num[i+1]
                num[i+1] = aux
            }
        }
        j++;
    }
    return num;
}

const selectSort = () => {
}

const insertSort = () => {
}




// const metodo = prompt(`Escolha uma das opções
//                         1: bubbleSort
//                     `)

switch(metodo) {
    case('1'):
        console.log(bubbleSort())
        break
    case('2'):
        console.log(selectSort())
        break;
    case('3'):
        console.log(insertSort())
        break;
}