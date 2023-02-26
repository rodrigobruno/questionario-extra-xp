/*
7. Elaborar um programa para uma veterinária.
Que leia o peso de uma ração em Kg e o quanto um cachorro consome por dia da ração, em gramas.
Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).
*/

const prompt = require('prompt-sync')()

const pesoRacaoKg = Number(prompt('Quantas quilos tem a ração? '))
const consumoCachorroG = Number(prompt('Quantos gramas por dia o cachorro consome? '))

function calculaDuracaoRacao(pesoRacaoKg, consumoCachorroG) {

    if (isNaN(pesoRacaoKg) || isNaN(consumoCachorroG)) {
        console.log(`Não foi digitado um número`)
    } else {
        const pesoRacaoG = (pesoRacaoKg * 1000)
        const duracao = pesoRacaoG / consumoCachorroG
        let sobra = consumoCachorroG / pesoRacaoG

        if (!Number.isInteger(sobra)) {
            sobra = sobra.toFixed(1)

            if (sobra == 0.0) {
                sobra = 0
            }
        }

        console.log(`A ração ira durar ${duracao.toFixed(0)} ${duracao.toFixed(0) != 1 ? 'dias' : 'dia'} e ira sobrar ${sobra} g.`);

    }
}

calculaDuracaoRacao(pesoRacaoKg, consumoCachorroG)