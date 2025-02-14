/*2. Criar um array de números e escrever uma função que retorne a soma de todos os elementos do array.*/

const numeros = [1, 2, 3, 4, 5];

function somaArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

console.log(somaArray(numeros)); 