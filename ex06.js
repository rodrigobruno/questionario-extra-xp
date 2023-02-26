/*
6. A entrada para um clube de pesca custa R$20,00 por pessoa e cada pessoa tem direito a levar um peixe. Peixes extras custam R$12,00.
Elabore um programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria.
Informe o total pago pela família.
*/

const prompt = require('prompt-sync')()

const pessoasFamilia = Number(prompt('Quantas pessoas na família? '))
const numeroPeixes = Number(prompt('Quantos peixes pescados? '))

const formatarMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol'
});

function totalPagoFamilia(pessoasFamilia, numeroPeixes) {
    const custoEntrada = 20
    const custoPorPeixe = 12

    if (isNaN(pessoasFamilia) || isNaN(numeroPeixes)) {
        console.log(`Não foi digitado um número`)
    } else if (!Number.isInteger(pessoasFamilia) || !Number.isInteger(numeroPeixes)) {
        console.log(`Não foi digitado um número inteiro`)
    }
    else {
        const totalEntrada = pessoasFamilia * custoEntrada
        const totalPeixes = (numeroPeixes - pessoasFamilia) * custoPorPeixe
        const totalPagar = totalEntrada + totalPeixes

        console.log(`O total a pagar pela família é de ${formatarMoeda.format(totalPagar)}.`);
    }
}

totalPagoFamilia(pessoasFamilia, numeroPeixes)