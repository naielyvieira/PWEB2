const ObraLiteraria = require('./models/ObraLiteraria.js');
const Artigo = require('./models/Artigo.js');
const TrabalhoAcademico = require('./models/TrabalhoAcademico.js');
const Periodico = require('./models/Periodico.js');
const SistemaGestao = require('./models/SistemaGestao');

const livro = new ObraLiteraria('Dom Casmurro', 'Machado de Assis', '1899', 'Editora Garnier', '1ª');
livro.exibirDetalhes();

const artigo = new Artigo('Inteligência Artificial', 'Alan Turing', '1950', 'Revista Científica');
artigo.exibirDetalhes();

const trabalho = new TrabalhoAcademico('TCC em Engenharia', 'João Silva', '2023', 'USP', 'Prof. Carlos Lima');
trabalho.exibirDetalhes();

const periodico = new Periodico('Revista Brasileira', 'Diversos', '2024', 'Edição 45');
periodico.adicionarArtigo(artigo);
periodico.exibirDetalhes();

sistema.adicionarMaterial(livro);
sistema.adicionarMaterial(artigo);
sistema.adicionarMaterial(trabalho);
sistema.adicionarMaterial(periodico);


sistema.listarMateriais();
sistema.buscarMaterial('Dom Casmurro');
sistema.removerMaterial('Inteligência Artificial');
sistema.listarMateriais();