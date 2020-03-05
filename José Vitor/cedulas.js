function calc(quant){
    var notas = [0,0,0,0,0,0];
    var y = quant;
    if(y > 0){
        while(y > 1){
            if(100 <= y){
                notas[0] = notas[0] + 1;
                y = y - 100;
            }
            else if(50 <= y){
                notas[1] = notas[1] + 1;
                y = y -50;
            }
            else if(20 <= y){
                notas[2] = notas[2] + 1;
                y = y - 20
            }
            else if(10 <= y){
                notas[3] = notas[3] + 1;
                y = y - 10;
            }
            else if(5 <= y){
                notas[4] = notas[4] + 1;notas
                y = y - 5;
            }
            else if(2 <= y){
                notas[5] = notas[5] + 1;
                y = y - 2;
            }
        }
        if(notas[0] != 0){
            console.log(notas[0] + ' Notas de R$100,00');
        }
        if(notas[1] != 0){
            console.log(notas[1] + ' Notas de R$50,00');
        }
        if(notas[2] != 0){
            console.log(notas[2] + ' Notas de R$20,00');
        }
        if(notas[3] != 0){
            console.log(notas[3] + ' Notas de R$10,00');
        }
        if(notas[4] != 0){
            console.log(notas[4] + ' Notas de R$5,00');
        }
        if(notas[5] != 0){
            console.log(notas[5] + ' Notas de R$2,00');
        }
    }
    else
        console.log('Quantia inválida!');
}

calc(process.argv[2]);
