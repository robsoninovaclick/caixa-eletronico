const menorQtdCedula = valor => {
    let i = valor;
    const valorEQuantidadeCedulas = {}
    while(i > 0) {
        /*Caso considere a nota de 200 reais nova
        if(i >= 200) {
            if(!!valorEQuantidadeCedulas["200"])
                valorEQuantidadeCedulas["200"]++;
            else
                valorEQuantidadeCedulas["200"] = 1;
            i -= 200;
        }
        /*else */if(i >= 100) {
            if(!!valorEQuantidadeCedulas["100"])
                valorEQuantidadeCedulas["100"]++;
            else
                valorEQuantidadeCedulas["100"] = 1;     
            i -= 100;
        } else if (i >= 50) {
            if(!!valorEQuantidadeCedulas["50"])
                valorEQuantidadeCedulas["50"]++;
            else
                valorEQuantidadeCedulas["50"] = 1;
            i -= 50;
        } else if (i >= 20) {
            if(!!valorEQuantidadeCedulas["20"])
                valorEQuantidadeCedulas["20"]++;
            else
                valorEQuantidadeCedulas["20"] = 1;
            i -= 20;
        } else if (i >= 10) {
            if(!!valorEQuantidadeCedulas["10"])
                valorEQuantidadeCedulas["10"]++;
            else
                valorEQuantidadeCedulas["10"] = 1;
            i -= 10;
        } else if (i >= 5) {
            if(!!valorEQuantidadeCedulas["5"])
                valorEQuantidadeCedulas["5"]++;
            else
                valorEQuantidadeCedulas["5"] = 1;
            i -= 5;
        } else if (i >= 2) {
            if(!!valorEQuantidadeCedulas["2"])
                valorEQuantidadeCedulas["2"]++;
            else
                valorEQuantidadeCedulas["2"] = 1;
            i -= 2;
        } else {                    //Considerando que existe nota de um real.
            if(!!valorEQuantidadeCedulas["1"])
                valorEQuantidadeCedulas["1"]++;
            else
                valorEQuantidadeCedulas["1"] = 1;
            i -= 1;
        }
    }
    // Printa no console a quantidade 
    // console.log(valorEQuantidadeCedulas)
    return valorEQuantidadeCedulas;
}


// menorQtdCedula(100);
// menorQtdCedula(120);
// menorQtdCedula(150);
// menorQtdCedula(223);
// menorQtdCedula(179);
// menorQtdCedula(1003);
// menorQtdCedula(5713);
