//const data = new Date(0 + treshoras - umDia);
// const data = new date('2024-12-26 18:56:10');
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

//const data = new Date('2024-12-26 18:56:10'); // ano, mes, dia,hora, min, segund, mile.seg

function formataData(data) {
const dia = zeroAEsquerda(data.getDate());
const mes = zeroAEsquerda(data.getMonth() + 1);
const ano = zeroAEsquerda(data.getFullYear(2024));
const hora = zeroAEsquerda(data.getHours() + 1);
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)