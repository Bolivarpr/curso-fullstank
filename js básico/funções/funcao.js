function saudacao(nome) {
    return `bom dia ${nome} !`;
}

const num = saudacao ('Marcelo');
console.log(num);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

const raiz1 = (n) => n ** 0.5; // arrow function

console.log(raiz1(16));