const pesoInput = document.querySelector('#Peso');
const alturaInput = document.querySelector('#Altura');

function calcularIMC() {
  // Obtendo os valores dos inputs e convertendo para números
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  // Verificando se os valores são válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert('Por favor, insira valores válidos para peso e altura.');
    return;
  }

  // Calculando o IMC
  const imc = peso / (altura * altura);

  // Exibindo o resultado
  if (imc <= 18.5) {
    alert('Abaixo do peso');
  } else if (imc >= 18.5 && imc <= 24.9) {
    alert('Peso normal');
  } else if (imc >= 25 && imc <= 29.9) {
    alert('Sobrepeso');
  } else if (imc >= 30 && imc <= 34.9) {
    alert('Obesidade grau 1');
  } else if (imc >= 35 && imc <= 39.9) {
    alert('Obesidade grau 2');
  } else {
    alert('Obesidade grau 3');
  }
}