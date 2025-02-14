/*7. Crie uma função que receba uma string e retorne a string invertida. */

function inverterString(palavra) {
    return palavra.split("").reverse().join("");
}
let palavra = prompt("Digite uma palavra:");
alert(`A palavra "${palavra}" invertida é "${inverterString(palavra)}".`);