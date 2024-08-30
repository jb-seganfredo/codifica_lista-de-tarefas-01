// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

function sumFiveNumbers(){
    const prompt = require('prompt-sync')();

    let sum = 0;

    for(let i = 1; i <= 5; i++){
        const number = parseFloat(prompt(`Digite o ${i}º número: `));
        sum += number;
    };

    console.log(`A soma total dos números é: ${sum}.`);
};

sumFiveNumbers();
