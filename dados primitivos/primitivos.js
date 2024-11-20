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

/* ex null e false/true */

const nulo = null;
const aprovado = false;
const aprovado1 = true;

console.log('essa prova recebe', nulo)
console.log('5 é maior que 8',aprovado)
console.log('3 é menor que 4', aprovado1)

/*----------------*/