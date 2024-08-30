// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

function isEven(num){

    if(num%2 == 0){

        console.log("O número é par.");
     } else {

        console.log("O número é ímpar.");
    }
    
};

// Teste

function main(){

    const prompt = require('prompt-sync')();

    const num = parseFloat(prompt("Digite um número inteiro: "));

    if(isNaN(num) || !Number.isInteger(num)){

        console.log("Erro: o valor informado não é um número inteiro.");

    } else {

        isEven(num);
    };
}   

main();