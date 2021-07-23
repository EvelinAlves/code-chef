const number = () => {
    n = prompt("Digite um valor para n:")
    if(n >= 0 && n <= Math.pow(10, 5))
        console.log(n) 
}

number()