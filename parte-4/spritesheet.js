function Spritesheet(context, imagem, linhas, colunas) {
    this.context = context;
    this.imagem = imagem;
    this.numLinhas = linhas;
    this.numColunas = colunas;
    this.intervalo = 0;
    this.linha = 0;
    this.colunas = 0;
}
Spritesheet.prototype = {
    proximoQuadro: function() {
        // momento atual
        var agora = new Date().getTime();

        //se ainda não tem Ultimo tempo medido
        if (! this.ultimoTempo) this.ultimoTempo = agora;

        // já é hora de mudar de coluna?
        if (agora - this.ultimoTempo < this.intervalo) return;

        if (this.coluna < this.numColunas - 1)
            this.coluna++;
        else
            this.coluna = 0;
        // guardar o ultimo tempo
        this.ultimoTempo = agora;
    },
    desenhar: function(x, y) {
        var larguraQuadro = this.imagem.width / this.numColunas;
        var alturaQuadro = this.imagem.height / this.numLinhas;

        this.context.drawImage(
            this.imagem,
            larguraQuadro * this.coluna,
            alturaQuadro * this.linha,
            largura,
            altura,
            x,
            y,
            largura,
            altura
        );
    }
}