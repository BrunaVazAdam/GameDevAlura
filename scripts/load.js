function preload() {

    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemTroll = loadImage('imagens/inimigos/troll.png');
    imagemGotinhaVoadora = loadImage("imagens/inimigos/gotinhaVoadora.png");
    imagemGameOver = loadImage("imagens/acao/gameOver.png");
    imagemVida = loadImage("imagens/acao/coracao.png")
    imagemTelaInicial = loadImage("imagens/acao/telaInicial.png");
    fita = loadJSON("fita/fita.json");
    fonteTelaInicial = loadFont("imagens/assets/fonteTelaInicial.otf");
  
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3')
  }
  