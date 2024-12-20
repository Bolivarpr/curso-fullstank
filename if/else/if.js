// IF pode ser usado sozinho
//Sempre que utilizo a palavra else, preciso de um if antes
//Eu posso ter vários else ifs na checagem
//Só posso ter um selse na checagem
//podemos usar condições sem else if, utilizando apenas if e else

const hora = 11;

if(hora <= 12) {
    console.log('Bom dia!');
} else if (hora >= 13 && hora <= 17){
    console.log('Boa tarde!');
} else  {
    console.log('Boa Noite!')
}

const idade = 20;

if (idade >=7 && idade <= 13){
    console.log('ele(a) é uma criança!');
} else if (idade >= 14 && idade <= 17) {
    console.log('ele(a) é um(a) adolescente!');
} else {
    console.log('ele(a) é um(a) adulta!');
}