let cenario;
let personagem;
let inimigo;
let troll;
let vida;
let gotinhaVoadora;
let pontuacao;
let fonteTelaInicial;
let jogo; 
let fita;

let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let botaoGerenciador;


let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemTroll;
let imagemGotinhaVoadora;
let imagemVida;
let imagemGameOver;
let imagemTelaInicial;



let somDoJogo;
let somDoPulo;

const matrizPersonagem = gerarMatriz(4, 4, 220, 270);
const matrizInimigo = gerarMatriz(7, 4, 105, 105);
const matrizTroll = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizGotinhaVoadora = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const inimigos = [];