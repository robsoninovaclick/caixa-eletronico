function CaixaEletronico(k){
    var cedula_atual = 200
    var count_ced = 0

    while (k >= 0){

        if (k >= cedula_atual){
            k -= cedula_atual
            count_ced++
        }

        else{

            if(count_ced > 0){
                console.log("Total de cédulas: " + count_ced + " de valor " + cedula_atual)
                count_ced = 0
            }

            if (k == 0)
                break
            
            switch (cedula_atual){
                
                case 200:
                    cedula_atual = 100
                    break
                
                case 100:
                    cedula_atual = 50
                    break
                
                case 50:
                    cedula_atual = 20
                    break
                
                case 20:
                    cedula_atual = 10
                    break
                
                case 10:
                    cedula_atual = 5
                    break
                
                case 5:
                    cedula_atual = 2
                    break
            
            }
        }
    } 
}

CaixaEletronico(process.argv[2]);
