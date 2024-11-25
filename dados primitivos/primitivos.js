const nome = 'Marcelo';
const sobreNome = 'Pereira';
let n1 = 5;
let n2 = 8;
let soma = n1 + n2 / 2;

const notamedia = 60;

if(soma >=(n1 + n2)){
    console.log(nome, sobreNome, 'foi aprovado na faculdade!');
}else{
    console.log(nome, sobreNome, 'Não foi aprovado na faculdade!');
}

let a = 5;
let b = a;
console.log(a, b);

b = 10;
console.log(a, b);

/* ex null e false/true 

const nullo = null;
const aprovado = false;
const aprovado1 = true;

console.log('essa prova recebe', nulo)
console.log('5 é maior que 8',aprovado)
console.log('3 é menor que 4', aprovado1)
*/

/*exercício de dados primitivos*/
const nulo = null;
const p = true;
const m = false;
let n = 5;

if(n >= 10 ) {
    console.log('O número é maior ou igual a 10.', p);
} else if (n >= 4 ) {
   console.log('O número é menor ou igual a 4.', m);
} else{
    console.log('O número não se encaixa nas condições anteriores.', nulo);
}

/* ----------------- */