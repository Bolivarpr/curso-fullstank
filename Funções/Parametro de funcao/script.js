function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade, 'anos');
   
    
}

let obj = {nome: 'Lucas', sobrenome: 'Silva', idade: 25};
funcao(obj)/

function pessoa ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade, 'anos');

}

let cpf = {nome: 'Nayana', sobrenome: 'Santos', idade: 14}

funcao(cpf);