// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

function bmiCalculator(weight, height){

    const bmi = weight/(height**2);

    if (bmi > 0 || bmi < 18.5){
        console.log("Baixo peso.");
    } else if (bmi >= 18.5 && bmi < 24.9){
        console.log("Peso normal.");
    } else if (bmi >= 25 && bmi < 29.9){
        console.log("Sobrepeso.");
    } else if (bmi >= 30){ 
        console.log("Obesidade.");
    } else {
        console.log("Erro: o valor informado não é válido.");
    }
}

// Teste

function main(){
    const prompt = require('prompt-sync')();

    const weight = parseFloat(prompt("Digite o peso (kg): "));
    const height = parseFloat(prompt("Digite a altura (m): "));

    if (weight <= 0 || height <= 0) {

        console.log("Erro: Peso e altura não podem ser valores negativos.");
    } else {
        
        bmiCalculator(weight, height);
    }
}

main();