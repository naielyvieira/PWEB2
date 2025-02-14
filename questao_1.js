/*1 . Criar um programa em JavaScript que pergunta o nome e a idade do usuário e 
imprime uma mensagem de saudação com base na idade (maior ou menor de idade).*/

const nome = prompt("Qual é o seu nome?");
const idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
  alert(`Olá, ${nome}! Você é maior de idade!`);
} else { 
  alert(`Olá, ${nome}! Você é menor de idade!`);
}