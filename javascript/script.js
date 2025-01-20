const elementos = [
    {tag: 'p', texto: 'essas são as frases:'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i ++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    //tagCriada.innerText = texto;
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
