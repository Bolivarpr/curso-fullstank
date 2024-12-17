const lista = [
    'maria', 
    'pedro',
    'marcelo',
    'nicole',
];

console.log(lista [2]); // criar lista de alunos e escolhendo o aluno com indice

lista[4] = 'gabriel';
console.log(lista); // adicionar aluno alterando o indice 

lista[1] = 'rogerio';
console.log(lista); // alterando aluno mas matendo o indice

lista[lista.length] = 'mariana'; // adiciona no final do array

lista.push('isadora');
lista.push('fabio');// adicionar no final do array também

lista.unshift('roberto'); // adicionar no começo do array

lista.pop('fabio'); // remove do final do array



console.log(lista.slice(0, 2)); // fatiamento mostrando alunos 

console.log(lista[50]); // mostrará underfined, pois não tem indice com nr 50 