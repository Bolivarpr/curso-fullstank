/*
 primitivos (imutáveis) - string, number, boolen, undefined, null(bigint, symbo)
 
 referência (mutável) - array, object, function
 */

 // primitivos
 let nome = 'nicoly';
 nome[0] = 'n';
 console.log(nome[0]);

 let a = 'A';
 let b = a;
 console.log(a, b );

 //referência 

 let c = [1, 2 , 3];
 let d = c;
 console.log(c, d);

 c.push(4);
 console.log(c, d);

 c.pop();
 console.log(d);

 const e = {
    nome: 'luiz',
    sobrenome: 'pereira'
 };

 const f = {...e};

 e.nome = 'joão';
 console.log(f);
 