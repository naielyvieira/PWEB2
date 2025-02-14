/*3. Crie uma calculadora simples que pergunte ao usuário dois números e, em seguida, a 
operação que ele deseja realizar (soma, subtração, multiplicação ou divisão). 
O programa deve imprimir o resultado da operação.*/

const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação que deseja realizar (soma, subtração, multiplicação ou divisão):");
let resultado 

if(operacao === "soma"){
    resultado = numero1 + numero2;

}else if(operacao === "subtração"){
    resultado = numero1 - numero2;

}else if(operacao === "multiplicação"){
    resultado = numero1 * numero2;
    
}else if(operacao === divisão){
    resultado = numero1 / numero2;}
else{
    alert("Operação inválida")
}

alert("O resultado é: " + resultado);

