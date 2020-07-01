class BotaoGerenciador{
    constructor(texto, x, y){
        this.texto = texto;
        this.x = x;
        this.y = y;
        this.botao = createButton(this.texto);
        this.botao.mousePressed(() => this._altereCena()); 
        this.botao.addClass('botao-tela-inicial');
    }
    draw(){
        this.botao.position(this.x, this.y);
        this.botao.center('horizontal');        
    }

    _altereCena(){
        this.botao.remove();
        cenaAtual = 'jogo';
    }
}