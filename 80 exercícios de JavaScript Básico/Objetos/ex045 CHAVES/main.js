// Faça um loop for...in para mostrar as chaves do objeto.

const pessoa = {
    nome: "Gabriel",
    idade: 18,
    cidade: "São Paulo"
}

for (let chave in pessoa) {
    console.log(chave)
}