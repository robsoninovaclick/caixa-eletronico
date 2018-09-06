const caixa = require('./caixa');

try{
    const valorInformado = () => process.argv[2];
    //caixa.verbose = true;
    const notas = caixa.iniciarContagemNotas(valorInformado());

    console.log(notas);
}catch(Err){
    console.log(Err);
}
