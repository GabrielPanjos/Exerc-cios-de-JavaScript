// Conte quantos múltiplos de 3 há entre 1 e 50.

let contador = 0

for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        contador++
    }
}

console.log(contador)