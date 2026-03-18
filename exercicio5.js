const prompt = require("prompt-sync")();

// Implemente um programa que leia o valor de uma fatura e a taxa de juros mensal. O programa deve calcular o valor final
// da fatura após o acréscimo dos juros (juros simples) usando a fórmula.

let valorFatura = Number(prompt("Valor da fatura: "));
let taxaJuros = Number(prompt("Taxa de juros: "));

// Fórmula para calcular os juros = valorFatura * (taxaJuros / 100)
let juros = valorFatura * (taxaJuros / 100);

// Fórmula para calcular valorFinal = valorFatura + juros
let valorFinal = valorFatura + juros;

console.log(`Valor total da sua fatura com juros:  ${valorFinal.toFixed(2)}`);