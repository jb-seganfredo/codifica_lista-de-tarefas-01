// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

function calculateApplePurchaseValue(appleAmount) {

    if(typeof appleAmount !== 'number'){
        return undefined;
    };

    if(appleAmount < 12){
        return appleAmount*0.3;
    };
    
    return appleAmount*0.25;
};

// Teste

function main() {

    const prompt = require('prompt-sync')();

    const appleAmount = parseFloat(prompt("Digite quantas maçãs você deseja comprar: "));

    if (isNaN(appleAmount) || appleAmount < 0 || !Number.isInteger(appleAmount)) {
        console.log("Erro: o valor informado não é válido.");
        return;
    };

    const totalPurchaseValue = calculateApplePurchaseValue(appleAmount);

    console.log(`O valor total da compra é R$ ${totalPurchaseValue.toFixed(2)}.`);
};

main();