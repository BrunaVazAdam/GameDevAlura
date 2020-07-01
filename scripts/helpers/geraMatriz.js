function gerarMatriz(linhas, colunas, largura, altura ) {
    let index = 0;
    let matriz = [];
    for (let i = 0; i < linhas; i++) {   //linha
        for (let j = 0; j < colunas; j++) { //coluna
            matriz[index++] = [j * largura, i * altura];
        }
    }
    return matriz;
}