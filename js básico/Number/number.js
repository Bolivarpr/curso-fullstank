let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;
num1 = parseFloat(num1.toFixed(2)); // pode usar Number no lugar do parseFloat
console.log(num1); // faz com que nr decimal se torna inteiro

console.log(num1.toFixed(2)); // faz quantas casas decimais irá aparecer

console.log(Number.isInteger(num1)); // mostrar qual tipo é a variável

let temp = num1 * '5';
console.log(Number.isNaN(temp));  //verificar se é verdadeiro ou falso uma string

console.log(num1.toString() + num2);
num1 = num1.toString() // converte string o número