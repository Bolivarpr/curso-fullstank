
// try - significa tentar
// throw - usar para por a mensagem de erro 

try {
// executa quando não há erro
console.log(a);
console.log('abri um arquivo');
console.log('manipulei um arquivo');
} catch(i) {
// executa quando há erro
console.log('tratando');
} finally {
// sempre será executado
console.log('sempre executado');
}
