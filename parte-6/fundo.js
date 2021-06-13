function Fundo(context, imagem) {
    this.context = context;
    this.imagem = imagem;
    this.velocidade = 0;
    this.posicaoEmenda = 0;
}
Fundo.prototype = {
    atualizar: function() {

        this.posicaoEmenda += this.velocidade;

         if (this.posicaoEmenda > this.imagem.height)
         this.posicaoEmenda = 0;
    },
    desenhar: function() {
        var img = this.imagem; // para facilitar a escrita hehe!

        // primeira cópia
        var posicaoY = this.posicaoEmenda - img.height;
        this.context.drawImage(img, 0, posicaoY, img.width, img.height);

        // segunda cópia
        posicaoY = this.posicaoEmenda;
        this.context.drawImage(img, 0, posicaoY, img.width, img.height);
    }
}