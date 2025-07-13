// Altere o texto de um elemento <h1> com JS.

document.querySelector('h1').innerHTML = "Oi"


// Mude a cor de fundo com style.backgroundColor.

document.querySelector('h1').style.backgroundColor = "#d3d3d3"


// Crie um botão que exibe um alert() ao clicar.

const button = document.createElement('button')

document.body.appendChild(button)

button.addEventListener('click', function () {
    alert('Oi')
})


// Adicione um item a uma lista <ul> com JS.

const ul = document.createElement('ul')
document.body.appendChild(ul)

const li = document.createElement('li')
ul.appendChild(li)

li.textContent = "Banana"
