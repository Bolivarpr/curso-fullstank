// Array de objetos contendo as tags HTML e os textos correspondentes
const elementos = [
    {tag: 'p', texto: 'frase 1'},    // Parágrafo com o texto "frase 1"
    {tag: 'div', texto: 'frase 2'},  // Div com o texto "frase 2"
    {tag: 'footer', texto: 'frase 3'}, // Rodapé com o texto "frase 3"
    {tag: 'section', texto: 'frase 4'} // Seção com o texto "frase 4"
];

// Seleciona o elemento com a classe "container" no DOM
const container = document.querySelector('.container');

// Cria um elemento <div> que será usado para agrupar os novos elementos
const div = document.createElement('div');

// Loop para iterar sobre o array de objetos
for (let i = 0; i < elementos.length; i++) {
    // Desestruturação do objeto para obter as propriedades "tag" e "texto"
    let {tag, texto} = elementos[i];

    // Cria um elemento HTML com a tag especificada no objeto
    let tagCriada = document.createElement(tag);

    // Define o conteúdo de texto do elemento criado
    tagCriada.innerHTML = texto;

    // Adiciona o elemento criado como filho da <div> agrupadora
    div.appendChild(tagCriada);
}

// Adiciona a <div> contendo os novos elementos ao container selecionado
container.appendChild(div);
