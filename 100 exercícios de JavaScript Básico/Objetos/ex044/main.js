// Remova uma propriedade com delete.

const pessoa = {
    nome: "Gabriel",
    idade: 18,
    cidade: "São Paulo"
}

delete(pessoa.cidade)

console.log(pessoa)