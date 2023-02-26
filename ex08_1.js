/*
8. O minimercado Ferreirinha necessita de um programa que leia o total de uma compra.
Exiba como resposta o nº máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela.
Considere as seguintes condições:
a) cada parcela deve ser de, no mínimo, R$ 20,00;
b) o número máximo de parcelas permitido é 6.
*/

const prompt = require('prompt-sync')()

const totalCompra = Number(prompt('Qual valor total da compra? '))

const formatarMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol'
});

function parcelamentoCompra(totalCompra) {

    if (isNaN(totalCompra) || totalCompra == 0) {

        console.log(`Não foi digitado um número`)

    } else {

        const valorMinimoParcela = 20
        const numMaxParcela = 6

        let qntParcelas = (totalCompra / valorMinimoParcela).toFixed(0)

        // Se o total da compra dividido pelo numero maximo de parcelas
        // for maior ou igual o valor minimo da parcela. Assim posso dividir 0 até o pelo maximo de parcelas
        if ((totalCompra / numMaxParcela) >= valorMinimoParcela) {

            const valorParcela = totalCompra / numMaxParcela
            console.log(`Pode parcelar em até ${numMaxParcela} vezes de ${formatarMoeda.format(valorParcela)}`);

        }

        // Se o total da compra for menor que a duas parcelas do valor minimo parcelado
        // então o pagamento tem que ser a vista
        else if (totalCompra < (2 * valorMinimoParcela)) {

            console.log(`Pagamento à vista no valor de ${formatarMoeda.format(totalCompra)}`);

        }

        // Se a parcela não alcança o valor minimo de parcela
        else if ((totalCompra / qntParcelas) < valorMinimoParcela) {

            qntParcelas = qntParcelas - 1
            const valorParcela = totalCompra / qntParcelas

            console.log(`Pode parcelar em até ${qntParcelas} vezes de ${formatarMoeda.format(valorParcela)}`);

        }

        // Se o valor da compra pode ser parcelado em 2x mas não pode ser parcelado no maximo
        else {

            const valorParcela = totalCompra / qntParcelas

            console.log(`Pode parcelar em até ${qntParcelas} vezes de ${formatarMoeda.format(valorParcela)}`);

        }

    }

}

parcelamentoCompra(totalCompra)