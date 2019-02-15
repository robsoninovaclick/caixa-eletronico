console.log('Super Aplicação de Caixa Eletrônico do Hidz em Node.js');

saqueCaixaEletronico(process.argv[2]);

function saqueCaixaEletronico(valor){

	if(valor < 0) {
		console.log("Você deseja fazer um saque ou depósito?");
		return;
	}

	valorTotal = valor;

	imparMaiorQueQuatro = valor > 4 && valor % 2 != 0;

	if(imparMaiorQueQuatro)
		valor -= 5;

	valor = processaValorNota(valor, 100);
	valor = processaValorNota(valor, 50);
	valor = processaValorNota(valor, 20);
	valor = processaValorNota(valor, 10);

	if(imparMaiorQueQuatro) { //Tratamento para valores ímpares maiores que 4
		console.log ('5 x 1')
	}
	else 
		valor = processaValorNota(valor, 5);
	
	valor = processaValorNota(valor, 2);

	valorSacado = valorTotal - valor;

	if(valor > 0)
		console.log('Devido as notas disponíveis, não foi possível sacar o valor completo.'); 
	console.log('O valor sacado foi de: R$' + valorSacado);
}

function processaValorNota(valor, nota) {
	if(valor >= nota) {
		n = (valor / nota) | 0;
		console.log (nota + ' x ' + n);
	}
	return valor %= nota;
}