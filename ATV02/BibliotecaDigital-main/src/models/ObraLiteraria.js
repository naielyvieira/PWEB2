const Material = require('./Material.js');

class ObraLiteraria extends Material {
    constructor(titulo, autor, dataPublicacao, editora, edicao) {
        super(titulo, autor, dataPublicacao, 'Obra Literária');
        this.editora = editora;
        this.edicao = edicao;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Editora: ${this.editora}, Edição: ${this.edicao}`);
    }
}
module.exports = ObraLiteraria;
