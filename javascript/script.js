
// try - significa tentar
// throw - usar para por a mensagem de erro 

try {
   console.log(naoExisto);
} catch(err) {
   console.log('naoExite não existe .');
}

function soma(x, y) {
   if (
      typeof x !== 'number' ||
       typeof y !== 'number'
      ) {
      throw('x e y precisam ser números.'); // O throw é utilizado para lançar um erro em JavaScript. 
   }

   return x + y;
}

// O bloco try...catch é usado para capturar e exibir esse erro de maneira controlada, sem interromper a execução do restante do código.
// se não houver erro no try não ativa o cath mas se tiver erro irá ativar o try 

try {
console.log(soma(5,8));
console.log(soma('1', 2));
} catch(error) {
   console.log('alguma coisa boa ao usuário'); // no cath pode arrumar o erro
}