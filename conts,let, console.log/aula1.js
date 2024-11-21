// mostrar na tela em console em inspecionar
console.log
('Meu nome é "Marcelo". Estou aprendendo Javascript ás', 17, 'da tarde do dia 17/11/24' )

/* Trabalahndo com variáveis*/
let nome = 'Marcelo';
let nome1 = 'amenic';
var idade = '31';
const país = 'Brasil';

console.log('Me chamo', nome, 'tenho', idade, 'anos', 'e moro no', país)
console.log('eu conheço o', nome1, 'da internet')
console.log(país, 'é um dos países maravilhosos do mundo.')

/* trabalhando com const */ 

const p = 8;
const s = 12;
const resultado = p + s;

console.log( resultado)

const nome2 = 'joão';
const adicao = 8;
console.log(typeof nome2)
console.log(typeof adicao)

/*exercício de variável*/

const nome3 = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade1 = 30;
const peso = 93;
const altura = 1.75;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade1;

console.log(nome3, sobrenome, 'tem', idade1, 'anos pesa', peso, 'kg tem', altura, 'de altura e seu IMC é de', imc, 'seu ano de nascimento é', anoNascimento)

/* exercício de variável */
const nomee = 'Marcelo';
const sobreNome = 'Pereira';
let n1 = 5;
let n2 = 8;
let soma = n1 + n2 / 2;

const notamedia = 60;

if(soma >=(n1 + n2)){
    console.log(nomee, sobreNome, 'foi aprovado na faculdade!');
}else{
    console.log(nomee, sobreNome, 'Não foi aprovado na faculdade!');
}

let a = 5;
let b = a;
console.log(a, b);

b = 10;
console.log(a, b);
/* novo exercício */
let varA = 'A';
let varB = 'B';
let varC = 'C';

/* modo antigo 
const temp = varA;
varA = varB;
varB = varC;
varC = temp; */

/* modo novo*/
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);