function numeroDeNotas(valorSacado){
    let duzentos=0, cem=0, cinquenta=0, vinte=0, dez=0, cinco=0, dois=0;
    
        do{
            if(valorSacado%2 == 1){
                valorSacado-=5;
                cinco+=1;
            }
            while(valorSacado >= 200)
            {
                valorSacado -=200;
                duzentos++;
            }
    
            while(valorSacado >= 100)
            {
                valorSacado -=100;
                cem+=1;
            }
    
            while(valorSacado >= 50)
            {
                valorSacado -=50;
                cinquenta+=1;
            }
    
            while(valorSacado >= 20)
            {
                valorSacado -=20;
                vinte+=1;
            }
    
            while(valorSacado >= 10)
            {
                valorSacado -=10;
                dez+=1;
            }
    
            while(valorSacado >= 5  && valorSacado!=6 && valorSacado!=8)
            {
                valorSacado -=5;
                cinco+=1;
            }
    
            while(valorSacado >= 2)
            {
                valorSacado -=2;
                dois+=1;
            }
        } while(valorSacado!=0);
        console.log('Notas de duzentos', duzentos);
        console.log('Notas de cem', cem);
        console.log('Notas de cinquenta', cinquenta);
        console.log('Notas de vinte', vinte);
        console.log('Notas de dez', dez);
        console.log('Notas de cinco', cinco);
        console.log('Notas de dois', dois);
        return 0;
    }
    
    numeroDeNotas(process.argv[2]);
    