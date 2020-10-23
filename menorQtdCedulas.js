const menorQtdCedula = (valor) => {
    let i = valor;
    let quantidadeCedulas = 0;
    while(i > 0) {
        /*Caso considere a nota de 200 reais nova
        if(i >= 200) {
            quantidadeCedulas++;
            i -= 200;
        }
        else */if(i >= 100) {
            quantidadeCedulas++;
            i -= 100;
        } else if (i >= 50) {
            quantidadeCedulas++;
            i -= 50;
        } else if (i >= 20) {
            quantidadeCedulas++;
            i -= 20;
        } else if (i >= 10) {
            quantidadeCedulas++;
            i -= 10;
        } else if (i >= 5) {
            quantidadeCedulas++;
            i -= 5;
        } else if (i >= 2) {
            quantidadeCedulas ++;
            i -= 2;
        } else {                    //Considerando que existe nota de um real.
            quantidadeCedulas++;
            i -= 1;
        }
    }
    // Teste para ver se estava retornando certo.
    // console.log(quantidadeCedulas);
    return quantidadeCedulas;
}


// menorQtdCedula(100);
// menorQtdCedula(120);
// menorQtdCedula(150);
// menorQtdCedula(223);
// menorQtdCedula(179);
// menorQtdCedula(1003);
// menorQtdCedula(5713);