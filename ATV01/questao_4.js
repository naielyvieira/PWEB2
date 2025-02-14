/*4. Crie uma função que recebe uma string como parâmetro e retorna a quantidade de vogais (a, e, i, o, u) na string.*/ 

function contarVogais(palavra) {
    return (palavra.match(/[aeiou]/gi) || []).length;
}

let palavra = prompt("Digite uma palavra:");
alert(`A palavra "${palavra}" tem ${contarVogais(palavra)} vogais.`);