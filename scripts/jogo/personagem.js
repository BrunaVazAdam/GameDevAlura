class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.contaPulo = 0; // eu crie essa variavel 
    this.gravidade = 5;
    this.alturaDoPulo = -50;
    this.invencivel = false;
  }
  pula(cb) {
    if(this.contaPulo<2){
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.contaPulo++;
      cb();
    }
  }

  aplicarGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.contaPulo = 0;
    }
  }
  ficaInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000);
  }
  estaColidindo(inimigo) {

    if(this.invencivel){
      return false; 
    }

    const precisao = .7;
    const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao,
      inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
      return colisao;
  }
}
