// Use break para sair de um loop ao encontrar um número.

let contador = 0

while (true) {
    if (contador == 1000){
        console.log(1000)
        break
    } else {
        console.log(contador)
        contador++
    }
}