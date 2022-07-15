
function printMenorNumCedulas(valorSaque) {
    var numCelulas100 = 0;
    var numCelulas20 = 0;

    if (valorSaque < 20) {
        console.log('\nO valor R$' + valorSaque.toFixed(2) +
            ' não pôde ser sacado com cédulas de 20 e 100.\n');
    }
    else {
        while (valorSaque >= 20) {
            if (valorSaque >= 100) {
                valorSaque -= 100;
                numCelulas100++;
            }
            else if (valorSaque >= 20) {
                valorSaque -= 20;
                numCelulas20++;
            }
        }

        console.log('número de células R$100,00: ' + numCelulas100);
        console.log('número de células R$20,00: ' + numCelulas20);

        if (valorSaque != 0) {
            console.log('\nO valor restante R$' + valorSaque.toFixed(2) +
                ' não pôde ser sacado com cédulas de 20 e 100.\n');
        }
    }
}

function main() {
    var commandLineArg = Number(process.argv.slice(2)[0]);
    printMenorNumCedulas(commandLineArg);
}

main();
