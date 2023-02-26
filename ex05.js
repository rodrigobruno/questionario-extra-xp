/*
5. Elaborar um programa para uma concessionária de veículos.
O programa deve ler modelo e preço do veículo.
Apresentar como resposta o valor da entrada (30%) e o saldo em 12x.
*/

const prompt = require('prompt-sync')()

const modeloVeiculo = prompt('Qual é o modelo do veículo? ')
const precoVeiculo = Number(prompt('Qual é o preço do veículo? '))

const formatarMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

function calculaEntradaParcelas(precoVeiculo, modeloVeiculo) {

    if (isNaN(precoVeiculo)) {
        console.log(`Não foi digitado um número`)
    } else {

        const entrada = precoVeiculo * 0.3
        const parcela = (precoVeiculo - entrada) / 12

        console.log(`O valor da entrada para ${modeloVeiculo} de 30% é R$ ${formatarMoeda.format(entrada)} e 12 parcelas de R$ ${formatarMoeda.format(parcela)}`);

    }
}

calculaEntradaParcelas(precoVeiculo, modeloVeiculo)