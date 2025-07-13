// Crie uma função que receba idade e retorne se é maior de idade.

const maiorDeIdade = function (idade){
    if (idade >= 18){
        return "Maior de idade"
    } else {
        return `Menor de idade`
    }
}

console.log(maiorDeIdade(17))