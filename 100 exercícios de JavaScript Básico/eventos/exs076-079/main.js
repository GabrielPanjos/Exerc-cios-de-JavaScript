// Detecte o clique em um botão.

const button = document.createElement('button')
button.style.width = "80px"
button.style.height = "40px"
document.body.appendChild(button)

button.addEventListener('click', function () {
    button.innerHTML = "clicou!"
    setInterval(() => {
        button.innerHTML = ""
    }, 2000);
})


// Capture a tecla pressionada no teclado.

document.body.addEventListener('keydown', function(event){
    alert(`Tecla ${event.key} foi pressionada`)
})


// Altere o conteúdo ao passar o mouse sobre um elemento.

button.addEventListener('mouseover', function(){
    document.body.style.backgroundColor = "#D3D3D3"
})

button.addEventListener('mouseout', function(){
    document.body.style.backgroundColor = "#fff"
})


// Mude a imagem ao clicar nela.

// NÃO VOU FAZER