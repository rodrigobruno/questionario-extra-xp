// 3. Crie uma função que dada a idade de um usuário indique se ele pode ou não realizar a compra de um game.
// Considere: pessoas com idade superior a 16 anos podem efetuar a compra

const prompt = require('prompt-sync')()
const idade = Number(prompt('Qual sua idade? '))

function podeComprar(idade) {
    console.log(idade > 16 ? 'Pode comprar' : 'Não pode comprar')
}

podeComprar(idade)