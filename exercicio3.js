const prompt = require("prompt-sync")();

// Programa que leia quatro notas de um aluno, calcule a média e informe se ele foi aprovado ou reprovado. Considere a média mínima para aprovação é 6.

let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let nota4 = Number(prompt("Digite a quarta nota: "));

// Formula para calcula a media.
let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 6) {
    console.log("Aprovado.");
} else {
    console.log("Reprovado.");
};