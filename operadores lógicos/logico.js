/*
operadores lógicos
&& -> AND -> E -> todas as expressões precisam ser verdadeiras para retornar true 
|| -> OR -> OU -> retorna falso só se todas as expressões forem false
! -> NOT -> NÃO -> inverte o valor

*/

const exp = false && true;
console.log(exp);

const exps = true || false; 
console.log(exps);

const usuario = 'luiz';
const senha = '123456';

//                    true                 false
const logar = usuario === 'luiz' && senha === '123456'; 

console.log(logar);


console.log(!false); 