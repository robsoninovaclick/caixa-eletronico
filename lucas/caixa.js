'use strict';

const CaixaEletronico = {};
CaixaEletronico.verbose = false;

const notas = [100, 50, 20, 10, 5, 2];
let valorRestante = 0;

const validaValorInformado = (valor) => {
    if (!valor)
        throw "Parâmetro de valor não informado"

    if(valor == 1)
        throw "Valor de R$ 1 não pode ser sacado. :)";

    if(valor % 1 != 0)
        throw "Aqui não é caixa de mendigo, não temos moedas!"

    return valor;
}


const contarNotas = (valor, notaAtual) => {    
    let totalNotas = 0;
    let resultado = valor / notaAtual;
    totalNotas = parseInt(resultado);
    let novoValor = valor % notaAtual;

    if(novoValor === 1){
        totalNotas = totalNotas - 1;
        novoValor = notaAtual + 1;
    }

    if(novoValor === 3){
        totalNotas = totalNotas - 1;
        novoValor = notaAtual + 3;
    }

    return {
        nota: notaAtual,
        totalNotas: totalNotas,
        valorRestante: novoValor
    };
}

const contagemNotas = (listaNotas, notaAtual) => {

    let obj = contarNotas(valorRestante, notaAtual);
    valorRestante = obj.valorRestante;

    listaNotas.push(obj);

    return listaNotas;
};

const iniciarContagemNotas = (valor) => {
    valorRestante = valor;
    validaValorInformado(valor);

    let notasRetornadas = notas.reduce(contagemNotas, []);    
    return (CaixaEletronico.verbose) ? notasRetornadas : notasRetornadas.filter((notaRetornada) => notaRetornada.totalNotas > 0)
}

CaixaEletronico.iniciarContagemNotas = iniciarContagemNotas;

module.exports = CaixaEletronico;

