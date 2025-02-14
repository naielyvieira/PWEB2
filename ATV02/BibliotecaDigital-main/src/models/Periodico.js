const Material = require('./Material.js');

class Periodico extends Material {
    constructor(titulo, autor, dataPublicacao, edicao, artigos) {
        super(titulo, autor, dataPublicacao, 'Periódico');
        this.edicao = edicao;
        this.artigos = artigos || [];
    }

    adicionarArtigo(artigo) {
        this.artigos.push(artigo);
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Edição: ${this.edicao}, Artigos: ${this.artigos.length}`);
    }
}
module.exports = Periodico;