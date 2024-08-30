// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

function factorial(){
    const prompt = require('prompt-sync')();

    const choosedNumber = parseInt(prompt("Digite um número para o cálculo do fatorial: "));

    let result = 1;

    if (choosedNumber < 0 || isNaN(choosedNumber)) {
        console.log("Erro: o número informado não é válido.");
        return;
    } else {

        for(let i = choosedNumber; i > 0; i--){
            result *= i;
        };
    };

    console.log(`O fatorial de ${choosedNumber} é: ${result}.`);
}

factorial();

