const Material = require('./models/Material'); 

class SistemaGestao {
    constructor() {
        this.materiais = []; 
    }

    
    adicionarMaterial(material) {
        if (material instanceof Material) {
            this.materiais.push(material);
            console.log(`Material "${material.titulo}" adicionado com sucesso.`);
        } else {
            console.log('Erro: O material precisa ser uma instância da classe Material ou suas subclasses.');
        }
    }

    
    removerMaterial(titulo) {
        const index = this.materiais.findIndex(material => material.titulo === titulo);
        if (index !== -1) {
            this.materiais.splice(index, 1);
            console.log(`Material "${titulo}" removido com sucesso.`);
        } else {
            console.log(`Material "${titulo}" não encontrado.`);
        }
    }

    
    listarMateriais() {
        if (this.materiais.length === 0) {
            console.log('Nenhum material encontrado.');
            return;
        }
        console.log('Lista de Materiais:');
        this.materiais.forEach(material => material.exibirDetalhes());
    }

    
    buscarMaterial(titulo) {
        const material = this.materiais.find(material => material.titulo === titulo);
        if (material) {
            console.log(`Material encontrado:`);
            material.exibirDetalhes();
            return material;
        } else {
            console.log(`Material "${titulo}" não encontrado.`);
            return null;
        }
    }
}

module.exports = SistemaGestao; 
