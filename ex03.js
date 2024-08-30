// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

function gradingSystem(grade){
    if (grade >= 0 && grade <= 10){ 

        if (grade >= 7){
            
            console.log("Aprovado.");
        } else if (grade >= 5 && grade < 7){

            console.log("Recuperação.");
        } else {

            console.log("Reprovado.");
        }

    } else {

        console.log("Erro: o valor informado não é uma nota válida.");
    }
}

// Teste    

function main(){
        
    const prompt = require('prompt-sync')();
        
    const grade = parseFloat(prompt("Digite a nota: "));
        
    gradingSystem(grade);
}

main()