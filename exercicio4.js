const prompt = require("prompt-sync")();

// Programa que leia o peso e a altura de uma pessoa e calcule o índice de massa corporal(IMC).
// Após calcular, exiba a categoria de acordo com o IMC:
// Menor que 18.5: Abaixo do peso.
// Entre 18.5 e 24.9: Peso normal.
// Entre 25 e 29.9: Sobrepeso.
// Entre 30 e 34.9: Obesidade grau 1.
// Entre 35 e 39.9: Obesidade grau 2.
// Maior que 40: Obesidade grau 3.

let peso = Number(prompt("Digite o peso: "));
let altura = Number(prompt("Digita a altura: "));

// Formula para calcular IMC é: IMC = peso / (altura * largura).
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso.");

} else if (imc >= 18.5 && imc <= 24.9) {        // Nota-se que começamos a usar o operador && que significa conjunção.
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