class Material {
    constructor(titulo, autor, dataPublicacao, categoria) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
        this.categoria = categoria;
    }

    exibirDetalhes() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Data: ${this.dataPublicacao}, Categoria: ${this.categoria}`);
    }
}
module.exports = Material;