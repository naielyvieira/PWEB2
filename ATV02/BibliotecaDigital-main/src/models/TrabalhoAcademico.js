const Material = require('./Material.js');

class TrabalhoAcademico extends Material {
    constructor(titulo, autor, dataPublicacao, instituicao, orientador) {
        super(titulo, autor, dataPublicacao, 'Trabalho Acadêmico');
        this.instituicao = instituicao;
        this.orientador = orientador;
    }

    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Instituição: ${this.instituicao}, Orientador: ${this.orientador}`);
    }
}
module.exports = TrabalhoAcademico;