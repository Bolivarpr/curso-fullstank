const pessoal = {
    nome: 'marcelo',
    sobrenome: 'pereira',
    idade: 25,

    Fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi .....`);
    }
};

pessoal.Fala();



function criarPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoal1 = criarPessoa('maria', 'silva', 30);
console.log(pessoal1); 
