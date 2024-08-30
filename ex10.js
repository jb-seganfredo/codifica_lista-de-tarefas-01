// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

function printTenTimes(num){
    if(typeof num  !== "number"){
        return undefined;
    } else {
        for(let i = 0; i < 10; i++){
            console.log(num);
        }
    }
    
    return null;
};

// Teste

function main(){

    const prompt = require('prompt-sync')();

    const num = parseInt(prompt("Digite um número inteiro: "));

    if(isNaN(num)){
        console.log("Erro: o valor informado não é válido");
        return;
    };

    printTenTimes(num);
};

main();