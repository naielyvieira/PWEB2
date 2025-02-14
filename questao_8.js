/* 8. Crie um programa que receba três números e determine qual é o maior.*/

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const numero3 = parseFloat(prompt("Digite o terceiro número:"));

let maior = numero1;

if (numero2 > maior) {
    maior = numero2;
}
if (numero3 > maior) {
    maior = numero3;
}

alert(`O maior número é: ${maior}`);