const prompt = require("prompt-sync")();

// Programa para converter de graus Celsius para Fahrenheit. 

// Calculando de Celsius para Fahrenheit.
let calculo1 = Number(prompt("Quantos graus Celsius você quer converter para Fahrenheit? "));
// Formula para calcular de Celsius para Fahrenheit (celsius * 9/5) + 32
let fahrenheit = (calculo1 * 9 / 5) + 32;
console.log(`Resultado: ${fahrenheit} Graus Fahrenheit.`);


// Calculando de Fahrenheit para Celsius.
let calculo2 = Number(prompt("Quantos graus Fahrenheit você quer converter para Celsius? "));
// Formula para carlular de Fahrenheit para Celsius (fahrenheit - 32) * (5 / 9)
let celsius = (calculo2 - 32) * (5 / 9);
console.log(`Resultao: ${celsius.toFixed(2)} Graus Celsius.`);