// Use uma função como callback de outra.

function dizerOla(nome, callback) {
    console.log("Olá, " + nome);
    callback(); // chama a função que foi passada como argumento
}

dizerOla("Gabriel", function () {
    console.log("Seja bem-vindo!");
});

dizerOla("Gabriel", function () {
    console.log("Voltei Já!");
});