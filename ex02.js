// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else. 

function ageCategory(age){

    if (age >= 0 && age <= 12){

        console.log("A idade é classificada como: criança.");
    } else if (age >= 13 && age <= 18){

        console.log("A idade é classificada como: adolescente.");
    } else if (age >=19 && age < 60){

        console.log("A idade é classificada como: adulto.");
    } else if (age >= 60 && age <= 120){

        console.log("A idade é classificada como: idoso.");
    } else {
        
        console.log("Erro: o valor informado não é uma idade válida.");
    }
}

// Teste

function main(){
    
        const prompt = require('prompt-sync')();
    
        const age = prompt("Digite a idade: ");
    
        ageCategory(age);
}

main();