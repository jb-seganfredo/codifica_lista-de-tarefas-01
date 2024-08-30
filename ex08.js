// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

function ascendingNumbers (num1, num2){

    let pair = [];

    if (num1 < num2) {
        pair.push(num1);
        pair.push(num2);
    } else {
        pair.push(num2);
        pair.push(num1);
    }

    return pair;
};

// Teste

function main(){

    const prompt = require('prompt-sync')();

    const num1 = parseFloat(prompt("Digite o primeiro número: "));
    const num2 = parseFloat(prompt("Digite o segundo número: "));

    if(isNaN(num1) || isNaN(num2) || num1 === num2){
        console.log("Erro: ao menos um dos valores não é um número ou os valores são iguais.");
        return;
    };

    const pair = ascendingNumbers(num1, num2);

    console.log(`Os números em ordem crescente são: ${pair[0]} e ${pair[1]}.`);
};

main();