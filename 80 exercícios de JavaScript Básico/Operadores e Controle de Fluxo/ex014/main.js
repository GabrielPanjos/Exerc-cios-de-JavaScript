// Faça um programa que calcule média e diga se o aluno passou.

const aprovarAluno = function (...notas) {

    const somaNotas = notas.reduce((total, nota) => { return total = total + nota }, 0)
    const media = somaNotas / (notas.length)

    if (media >= 6) {
        console.log(`aluno aprovado com ${media} de media`)
    } else {
        console.log(`aluno reprovado com ${media} de media`)
    }
}

aprovarAluno(10, 6, 2)