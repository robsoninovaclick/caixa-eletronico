function sacar(valor) { //algoritmo

  if (valor <= 0) {
     console.log("Valor inválido!");
  }

  var valorTotal = valor;
  var ValorDaCedula = 100;
  var totalDeCedulas = 0;

  while (true) {
    if (valorTotal >= ValorDaCedula) {
      valorTotal -= ValorDaCedula;
      totalDeCedulas += 1;
    }
    if (totalDeCedulas > 0) {
      console.log(`- ${totalDeCedulas} cédula(s) de R$ ${ValorDaCedula}`)
    }

    if (valorTotal < ValorDaCedula && ValorDaCedula == 100) {
      ValorDaCedula = 50;
    } else
      if (valorTotal < ValorDaCedula && ValorDaCedula == 50) {
        ValorDaCedula = 20;
      } else
        if (valorTotal < ValorDaCedula && ValorDaCedula == 20) {
          ValorDaCedula = 10;
        } else
          if (valorTotal < ValorDaCedula && ValorDaCedula == 10) {
            ValorDaCedula = 5;
          } else
            if (valorTotal < ValorDaCedula && ValorDaCedula == 5) {
              ValorDaCedula = 2;
            } else
            if(valorTotal < ValorDaCedula && valorTotal <= 1){
              break;
            }
    totalDeCedulas = 0; //zerando var no final do loop
  }
}

// usando a dependencia do express para fazer o GET atraves do insomnia.
const express = require('express');

const server = express();

server.use(express.text());

server.listen(3300);

server.get('/saque/:valor', (req, res) => {

  let valor = req.params.valor;

  let resultado =  sacar(valor);

  return res.json(resultado);
})