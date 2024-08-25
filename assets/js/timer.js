const html = document.querySelector('html');

// BTNs
const btnsApp = document.querySelectorAll('.app__card-button');
const startPauseBtn = document.querySelector('#btn__play-pause');
const iniciarOuPausarBtn = document.querySelector('#btn__play-pause span');
const resetBtn = document.querySelector('#btn__reset');
// const playIcon = document.querySelector('#start-pause img');

// Tempo na Tela
const tempoNaTela = document.querySelector('#timer');

// Tempo
let tempoDecorridoEmSegundos = 1800;
let intervaloId = null;
const duracaoFoco = 1500;

// Function para adicionar os elementos que ficariam repetidos nos Event Listeners.
function alterarContexto(contexto) {
  mostrarTempo();
  html.setAttribute('data-contexto', contexto);
}

// Function para a contagem regressiva
const contagemRegressiva = () => {
  if (tempoDecorridoEmSegundos <= 0) {
    zerar();
    return;
  }
  tempoDecorridoEmSegundos -= 1;
  mostrarTempo();
};

startPauseBtn.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    zerar();
    return;
  }
  intervaloId = setInterval(contagemRegressiva, 1000);
  iniciarOuPausarBtn.textContent = 'Pause';
  // playIcon.setAttribute('src', '/imagens/pause.png');
}

function zerar() {
  clearInterval(intervaloId);
  // playIcon.setAttribute('src', '/imagens/play_arrow.png');
  iniciarOuPausarBtn.textContent = 'Drive';
  intervaloId = null;
}

// Function para mostrar tempo
function mostrarTempo() {
  const tempo = new Date(tempoDecorridoEmSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-br', {
    minute: '2-digit',
    second: '2-digit',
  });
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}

resetBtn.addEventListener('click', mostrarTempo);

mostrarTempo();
