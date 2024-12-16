function meuEscopo() {
const form = document.querySelector('.form'); // puxa o formulário
const resultado = document.querySelector('.resultado'); // puxa a div resultado
/*form.onsubmit = function (evento) {
    evento.preventDefault(); // preservar a mensagem usada na tela
    alert(1);
    console.log('foi enviado');
    };*/

    const pessoas = [];

    function recebeEventoform (evento) { // puxa as classe dos objetos
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ // puxa o array com os dados
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        }); 

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
        `${peso.value} ${altura.value} </p> `; //escreve no html
    }


    form.addEventListener('submit', recebeEventoform);

}
meuEscopo();