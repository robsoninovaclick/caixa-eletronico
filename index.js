console.log('Super Aplicação de Caixa Eletrônico do Hidz em Node.js');

saqueCaixaEletronico(process.argv[2]);

function saqueCaixaEletronico(valor){
	valorTotal = valor;
	valor = processaValorNota(valor, 100);
	valor = processaValorNota(valor, 50);
	valor = processaValorNota(valor, 20);
	valor = processaValorNota(valor, 10);
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