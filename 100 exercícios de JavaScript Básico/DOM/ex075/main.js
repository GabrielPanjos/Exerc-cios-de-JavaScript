// Crie um formulário e capture os dados com JS.

const formulario = document.getElementById('formulario')
const nome = document.getElementById('nome')
const idade = document.getElementById('idade')
const cidade = document.getElementById('cidade')


formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if (nome.value == "" || idade.value == "" || cidade.value == "") {
        alert('Não deixe nenhum campo em branco');
    } else {
        document.getElementById('res').innerHTML = `
            Nome: ${nome.value}<br>
            Idade: ${idade.value}<br>
            Cidade: ${cidade.value}
        `;
    }
});