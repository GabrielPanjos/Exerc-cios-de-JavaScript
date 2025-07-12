// Verifique se uma propriedade existe com hasOwnProperty().

const pessoa = {
    nome: "Gabriel",
    idade: 18,
}

console.log(pessoa.hasOwnProperty('nome'))
console.log(pessoa.hasOwnProperty("cidade"));