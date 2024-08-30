// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

function multiplicationTable(){
    const prompt = require('prompt-sync')();

    const choosedNumber = parseFloat(prompt("Digite um número para exibir a tabuada: "));

    if (isNaN(choosedNumber) || !Number.isInteger(choosedNumber) || choosedNumber < 0) {
        console.log("Erro: o valor informado não é válido.");
        return;
    } else {
        for(let i = 1; i <= 10; i++){
            console.log(`${choosedNumber} x ${i} = ${choosedNumber * i}`);
        };
    };
};

multiplicationTable();

