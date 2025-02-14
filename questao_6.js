/*6. Crie um programa que receba um número inteiro e mostre uma contagem regressiva até zero no console.*/

const numero = parseInt(prompt("Digite um número inteiro:"));

if (!isNaN(numero)) {
    for (let i = numero; i >= 0; i--) {
        alert(i);
    }
}
