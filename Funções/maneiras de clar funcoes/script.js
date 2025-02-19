function falaOi() {
    console.log('Oi');
}
falaOi(); // Oi

function aula(nome) {
    return nome;
}
console.log(aula('Matemática')); // Matemática

const alunos = {
    aula() {
        console.log(
            'Pedro Martins',
            'Maria Eduarda'
        );
    }
}
alunos.aula(); // Pedro Martins Maria Eduarda
