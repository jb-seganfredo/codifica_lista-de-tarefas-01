/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

function isValidTriangle(A, B, C) {

    if (typeof A !== "number" || typeof B !== "number" || typeof C !== "number"){
        return undefined;
    };

    return (A < B + C) && (B < A + C) && (C < A + B);
};

function getTriangleType(A, B, C) {
    if (A === B && B === C) {
        return "Triângulo equilátero";
    } else if (A === B || A === C || B === C) {
        return "Triângulo isósceles";
    } else {
        return "Triângulo escaleno";
    };
};

function checkAndDescribeTriangle(A, B, C) {
    if (isValidTriangle(A, B, C)) {
        return getTriangleType(A, B, C);
    } else {
        return "Os lados fornecidos não formam um triângulo";
    };
};

// Teste

function main() {    

    const prompt = require('prompt-sync')();

    const A = parseFloat(prompt("Digite o primeiro número: "));
    const B = parseFloat(prompt("Digite o segundo número: "));
    const C = parseFloat(prompt("Digite o terceiro número: "));

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        
        console.log("Erro: ao menos um dos valores não é um número.");
        return;
    };

    const result = checkAndDescribeTriangle(A, B, C);

    console.log(`Resultado das operações sobre os números ${A}, ${B} e ${C}: ${result}.`);
};

main();