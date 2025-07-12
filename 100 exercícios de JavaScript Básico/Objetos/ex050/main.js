// Crie um objeto com métodos e use this.

const pessoa = {
    nome: "Gabriel",
    idade: 18,
    cidade: "São Paulo",
    saudacao: function () {
        console.log(`Olá ${this.nome}`)
    }
}

pessoa.saudacao()