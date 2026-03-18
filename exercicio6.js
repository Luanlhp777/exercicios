const prompt = require("prompt-sync")();

// Este exercicio vamos utilizar o switch/case. Vamos utilizar todos os outros exercicios de exemplo.

console.log("MENU DE OPÇÕES");

console.log("1 - Conversão de Graus Celsius para Fahrenheit.");
console.log("2 - Cálculo de desconto no produto.");
console.log("3 - Cálculo de notas e média final.");
console.log("4 - Cálculo de IMC.");
console.log("5 - Cálculo juros.");

let opcao = Number(prompt("Escolha uma opção: "));

switch (opcao) {
    case 1:
        let calculo1 = Number(prompt("Quantos graus Celsius você quer converter para Fahrenheit? "));
        let fahrenheit = (calculo1 * 9 / 5) + 32;

        console.log(`Resultado: ${fahrenheit} Graus Fahrenheit.`);

        let calculo2 = Number(prompt("Quantos graus Fahrenheit você quer converter para Celsius? "));

        let celsius = (calculo2 - 32) * (5 / 9);

        console.log(`Resultao: ${celsius.toFixed(1)} Graus Celsius.`);

        break;

    case 2:
        let precoFeijao = Number(prompt("Preço do produto: "));
        let percentualDesconto = Number(prompt("Percentual de desconto: "));

        let desconto = (precoFeijao * percentualDesconto) / 100;

        let precoFinal = precoFeijao - desconto;

        console.log(`O produto vai custar ${precoFinal}`);

        break;

    case 3:
        let nota1 = Number(prompt("Digite a primeira nota: "));
        let nota2 = Number(prompt("Digite a segunda nota: "));
        let nota3 = Number(prompt("Digite a terceira nota: "));
        let nota4 = Number(prompt("Digite a quarta nota: "));

        let media = (nota1 + nota2 + nota3 + nota4) / 4;

        if (media >= 6) {
            console.log("Aprovado.");
        } else {
            console.log("Reprovado.");
        };

        break;

    case 4:
        let peso = Number(prompt("Digite o peso: "));
        let altura = Number(prompt("Digita a altura: "));

        let imc = peso / (altura * altura);

        if (imc < 18.5) {
            console.log("Abaixo do peso.");

        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log("Peso normal.");

        } else if (imc >= 25 && imc <= 29.9) {
            console.log("Sobrepeso.");

        } else if (imc >= 30 && imc <= 34.9) {
            console.log("Obsesidade grau 1.");

        } else if (imc >= 35 && imc <= 39.9) {
            console.log("Obesidade grau 2.");

        } else {
            console.log("Obesidade grau 3.");

        };

        break;

    case 5:
        let valorFatura = Number(prompt("Valor da fatura: "));
        let taxaJuros = Number(prompt("Taxa de juros: "));

        let juros = valorFatura * (taxaJuros / 100);

        let valorFinal = valorFatura + juros;

        console.log(`Valor total da sua fatura com juros:  ${valorFinal.toFixed(2)}`);

        break;

    default:
        break;
}