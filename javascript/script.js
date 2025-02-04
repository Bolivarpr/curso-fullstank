function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
         timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    
    iniciar.addEventListener('click', function (event) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio()
    });
    
    pausar.addEventListener('click', function (event) {
        clearInterval(timer);
        relogio.classList.add('pausado');
    });
    
    zerar.addEventListener('click', function (event) {
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        segundos = 0;
    });
};

relogio();

// outro meio de fazer 

/* let tempo = 0;
let cronometroAtivo = false;
let intervalo;

 // Função para formatar o tempo
 function formatarTempo(segundos) {
    const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const segundosRestantes = String(segundos % 60).padStart(2, '0');
    return `${horas}:${minutos}:${segundosRestantes}`;
}

 // Função para iniciar o cronômetro
 iniciar.addEventListener('click', function() {
    if (!cronometroAtivo) {
        cronometroAtivo = true;
        intervalo = setInterval(function() {
            tempo++;
            relogio.textContent = formatarTempo(tempo);
        }, 1000);
        iniciar.textContent = 'Pausar'; // Muda o texto para "Pausar"
    } else {
        cronometroAtivo = false;
        clearInterval(intervalo);
        iniciar.textContent = 'Iniciar'; // Muda o texto para "Iniciar"
    }
});

 // Função para reiniciar o cronômetro
 reiniciar.addEventListener('click', function() {
    if (cronometroAtivo) {
        clearInterval(intervalo);
    }
    tempo = 0;
    relogio.textContent = formatarTempo(tempo);
    iniciar.textContent = 'Iniciar';
    cronometroAtivo = false;
});

// Função para zerar o cronômetro
zerar.addEventListener('click', function() {
    if (cronometroAtivo) {
        clearInterval(intervalo);
    }
    tempo = 0;
    relogio.textContent = formatarTempo(tempo);
    iniciar.textContent = 'Iniciar';
    cronometroAtivo = false;
}); */




