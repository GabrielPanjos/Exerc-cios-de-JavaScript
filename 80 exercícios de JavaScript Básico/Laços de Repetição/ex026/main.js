// Use do...while para pedir senha até digitar “1234”.

let senha;

do {
    senha = prompt("Digite a senha:");
} while (senha !== "1234");

console.log("Senha correta!");
