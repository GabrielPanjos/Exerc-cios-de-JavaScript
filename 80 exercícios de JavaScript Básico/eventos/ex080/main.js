// Impeça o envio de um formulário usando preventDefault().

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  if (nome === "" || email === "") {
    alert("Preencha todos os campos.");
  } else {
    document.getElementById("resposta").innerHTML =
      `Nome: ${nome} <br>Email: ${email}`;
  }
});
