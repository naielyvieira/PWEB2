/*5. Crie um programa que receba três números do usuário e imprima-os em ordem crescente. */

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const numero3 = parseFloat(prompt("Digite o terceiro número:"));

const numeros = [numero1, numero2, numero3];
numeros.sort((a, b) => a - b);

alert(numeros.join(", "));

