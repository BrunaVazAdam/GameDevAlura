class Inimigo extends Animacao{
    constructor(matriz, imagem, x, varicaoY, largura, altura, larguraSprite, alturaSprite, 
        velocidade){
        super(matriz, imagem, x,varicaoY, largura, altura, larguraSprite, alturaSprite);

        this.velocidade = velocidade;
        this.x = width;
    }
    move(){
        this.x = this.x - this.velocidade;
    }

    reaparecer(){
        this.x = width;
    }
}