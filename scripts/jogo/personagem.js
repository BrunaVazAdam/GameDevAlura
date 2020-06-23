class Personagem {
  constructor(imagem){
    this.imagem = imagem;
    this.frameAtual = 0
    this.matriz = [];
    let index = 0;
    for(let i = 0;i<4;i++){
      for(let j = 0; j<4;j++){
        this.matriz[index++] = [j * 220, i * 270];
      }
    } 
  }  
  exibe(){
    image(this.imagem, 0, height - 135, 110, 135, 
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1], 220, 270);
     
     this.anima();
         
   }
  anima(){
    this.frameAtual++;
    
    if(this.frameAtual >= this.matriz.length - 1){
      this.frameAtual = 0;
    }
  }
}





