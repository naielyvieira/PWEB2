const Material = require('./Material.js');

class Artigo extends Material {
    constructor(titulo, autor, dataPublicacao, fonte) {
        super(titulo, autor, dataPublicacao, 'Artigo');
        this.fonte = fonte;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Fonte: ${this.fonte}`);
    }
}
module.exports = Artigo;

