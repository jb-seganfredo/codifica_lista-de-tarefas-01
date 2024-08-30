// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

function decimalAverage() {
    const prompt = require('prompt-sync')();
    
    let sum = 0;
    let count = 0;
    let number;
    
    while (true) {
        number = parseFloat(prompt("Digite um número decimal (ou 0 para terminar): "));
        
        if (isNaN(number)) {
            console.log("Erro: o valor informado não é um número.");
            continue;
        }
        
        if (number === 0) {
            break;
        }
        
        if (!Number.isInteger(number)) {
            sum += number;
            count++;
        } else {
            console.log("Erro: o valor informado não é um número decimal.");
        }
    }
    
    if (count === 0) {
        console.log("Nenhum número decimal válido foi informado.");
    } else {
        const average = sum / count;
        console.log(`A média aritmética dos números informados é: ${average}.`);
    }
}

decimalAverage();