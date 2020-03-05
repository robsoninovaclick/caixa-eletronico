function Saque(valor){

	if (valor < 5){
		return "nao eh possivel sacar menos que 5";
	}

	var cedTotal;
	var resto;

	while (valor != 0){
		resto = valor % 2;
		if (resto == 1){
			cedTotal = cedTotal + " + 5";
			valor = valor - 5; 
		}
		if (valor >= 100){
			cedTotal = cedTotal + " + 100";
			valor = valor - 100;
		}
		else if (valor >= 50){
			cedTotal = cedTotal + " + 50";
			valor = valor - 50;
		}
		else if (valor >= 20){
			cedTotal = cedTotal + " + 20";
			valor = valor - 20;
		}
		else if (valor >= 10){
			cedTotal = cedTotal + " + 10";
			valor = valor - 10;
		}
		else if (valor >= 2){
			cedTotal = cedTotal + " + 2";
			valor = valor - 2;
		}

	}

	return cedTotal.substring(12);
}


var valor = 120;

console.log(Saque(valor));
