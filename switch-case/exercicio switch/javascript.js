/*const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        break;
        case 1:
            return diaSemanaTexto = 'Segunda-Feira';
        break;
        case 2:
            return diaSemanaTexto = 'Terça-Feira';
        break;
        case 3:
            return diaSemanaTexto = 'Quarta-Feira';
        break;
        case 4:
            return diaSemanaTexto = 'Quinta-Feira';
        break;
        case 5:
            return diaSemanaTexto = 'Sexta-feira';
        break;
        case 6:
            return diaSemanaTexto = 'Sabado';
        break;
        default:
             diaSemanaTexto = '';
    }
}

function getNomeMes(numeroMes) {
    let nomeMes;

switch (numeroMes) {
    case 0:
        nomeMes = 'Janeiro';
        return nomeMes;
    break;
    case 1:
        nomeMes = 'Fevereiro';
        return nomeMes;
    break;
    case 2:
        nomeMes = 'Março';
        return nomeMes;
    break;
    case 3:
        nomeMes = 'Abril';
        return nomeMes;
    break;
    case 4:
        nomeMes = 'Maio';
        return nomeMes;
    break;
    case 5:
        nomeMes = 'Junho';
        return nomeMes;
    break;
    case 6:
        nomeMes = 'Julho';
        return nomeMes;
    break;
    case 7:
        nomeMes = 'Agosto';
        return nomeMes;
    break;
    case 8:
        nomeMes = 'Setembro';
        return nomeMes;
    break;
    case 9:
        nomeMes = 'Outubro';
        return nomeMes;
    break;
    case 10:
        nomeMes = 'Novembro';
        return nomeMes;
    break;
    case 11:
        nomeMes = 'Dezembro';
        return nomeMes;
    break;
    default:
        nomeMes = '';
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()}` +
    ` ás ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
    
}

h1.innerHTML = criaData(data);*/

const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full', // Formatação completa da data
    timeStyle: 'short' // Formatação curta do horário
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);