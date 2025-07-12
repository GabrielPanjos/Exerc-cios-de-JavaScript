// Crie uma pirâmide de asteriscos com for.

let linhas = 5;

for (let i = 1; i <= linhas; i++) {
    let espacos = ' '.repeat(linhas - i);
    let asteriscos = '*'.repeat(2 * i - 1);
    console.log(espacos + asteriscos);
}
