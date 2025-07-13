// Escreva um código que determine o maior de três números.

const numeroMaior = function (...numeros) {
    return Math.max(...numeros);
}

console.log(numeroMaior(1, 5, 2))