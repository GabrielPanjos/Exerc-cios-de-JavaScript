// Faça uma função que retorne o fatorial de um número.

const fatorial = function (numero) {
    let fatorial = numero

    for (let i = 1; i < numero; i++){
        fatorial = fatorial * i
    }

    return fatorial
}

console.log(fatorial(5))