const nome = prompt('Digite seu nome completo:');
const cpf =  prompt('Digite seu cpf:');
const time = prompt('Digite seu time favorito:');
const cidade = prompt('Digite sua cidade:');
const jogo = prompt('Digite seu jogo favorito');

document.body.innerHTML += `o seu nome é: <strong>${nome} <br />`;
document.body.innerHTML += `qual seu cpf: <strong>${cpf} <br />`;
document.body.innerHTML += `qual seu time favorito: ${time} <br />`;
document.body.innerHTML += `qual sua cidade: ${cidade} <br />`;
document.body.innerHTML += `qual jogo favorito: ${jogo} <br />`;