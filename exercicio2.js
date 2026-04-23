const prompt = require("prompt-sync")();

// Programa que leia o preço de um produto e o percentual de desconto oferecido, e calcule o preço final com o desconto aplicado.

let preco = Number(prompt("Preço do produto: "));
let percentualDesconto = Number(prompt("Percentual de desconto: "));
// Formula para calcular o desconto é: desconto = (preço * percentual) / 100
let desconto = (preco * percentualDesconto) / 100;
// Formula para calcular o valor final: preçoFinal = preço - desconto
let precoFinal = preco - desconto;
console.log(`O produto vai custar ${precoFinal}`);