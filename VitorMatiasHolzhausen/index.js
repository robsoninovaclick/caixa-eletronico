const sacarDInheiro =  function (valorASerSacado) {

    let cedulasARetornar = {'100' : 0.0, '50' : 0.0, '20' : 0.0, '10' : 0.0, '5' : 0.0, '2' : 0.0};
    let valor = valorASerSacado;

    const cedulasValidas = [100.0, 50.0, 20.0, 10.0, 5.0];

    for (i = 0; i < cedulasValidas.length; i += 1) {

        let quantidadeCedulas = parseInt(valor / cedulasValidas[i]);
        if (quantidadeCedulas >= 1) {
            valor = valor - cedulasValidas[i]*quantidadeCedulas;
            cedulasARetornar[cedulasValidas[i]] = quantidadeCedulas;
        }
    }
    console.log(cedulasARetornar);
}