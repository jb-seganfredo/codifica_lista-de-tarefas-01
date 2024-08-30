// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

function menu(){
    const prompt = require('prompt-sync')();

    let option;
    
    while (option != 4){
        console.log("Escolha uma opção:");
        console.log("1 - Veja o cenário 1.");
        console.log("2 - Veja o cenário 2.");
        console.log("3 - Veja o cenário 3.");
        console.log("4 - Sair.");

        option = parseInt(prompt("Digite o número da opção desejada: "));

        switch(option){
            case 1:
                console.log("Cenário 1: O usuário escolheu a opção 1.");
                break;
            case 2:
                console.log("Cenário 2: O usuário escolheu a opção 2.");
                break;
            case 3:
                console.log("Cenário 3: O usuário escolheu a opção 3.");
                break;
            case 4:
                console.log("Saindo do menu...");
                break;
            default:
                console.log("Opção inválida.");
        };
    }
}

menu();


