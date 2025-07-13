// Faça uma função que diga se o número é par ou ímpar.

const impoPar = function (n) {
    if (n % 2 == 0){
        return "par"
    } else {
        return "impar"
    }
}

console.log(impoPar(2))