/*
4. Você foi convidado para criar o algoritmo de cálculo do custo de frete do e-commerce Missouri para uma determinada cidade brasileira.
Para cada bairro existirá um valor para a entrega das encomendas.
Desenvolva uma função que dado o nome do bairro imprime no console, do terminal, o custo do frete associado.
*/

const prompt = require('prompt-sync')()

console.log('Vamos calcular seu frete.');
const bairro = prompt('Qual seu bairro em São Paulo - SP: ')

function custoDeFrete(bairro) {
    switch (bairro) {
        case 'Pinheiros':
            console.log(`O frete para ${bairro} é R$ 10,50.`);
            break;

        case 'Moóca':
            console.log(`O frete para ${bairro} é R$ 20,17.`);
            break;

        case 'Morumbi':
            console.log(`O frete para ${bairro} é R$ 24,22.`);
            break;

        default:
            console.log('Bairro não encontrado');
            break;
    }
}

custoDeFrete(bairro)