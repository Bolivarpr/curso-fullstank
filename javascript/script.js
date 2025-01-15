const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i ++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);

const lista = [
    {tag: 'a', texto: 'Fernandão'},
    {tag: 'b', texto:  'Dalessandro'},
    {tag: 'c', texto:  'indio'},
    {tag: 'b', texto:  'Nilmar'},
];

const teste = document.querySelector('.teste');
const di = document.createElement('div');

for (let i = 0; i < lista.length; i ++){
    let {tag, texto} = lista[i];
    let criada = document.createElement(tag);
    criada.innerHTML = texto;
    di.appendChild(criada);
}

teste.appendChild(di);