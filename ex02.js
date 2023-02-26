/* Crie uma função que receba dois números e imprime no console do terminal
a soma, subtração, multiplicação, divisão e o resto da divisão entre entre eles.
Milha extra: caso o resultado da divisão seja um número decimal formate a saída para uma determinada quantidade de casas decimais. */

const prompt = require('prompt-sync')()

console.log('Digite dois números inteiros que deseja saber a soma, subtração, multiplicação, divisão e o resto da divisão.');

console.log('');
const x = Number(prompt('Digite o primeiro número: '))
const y = Number(prompt('Digite o segundo número: '))

const operacoesMatematicasBasicas = (x, y) => {

    if (isNaN(x) || isNaN(y)) {
        console.log(`Não foi digitado um número`)
    } else if (!Number.isInteger(x) || !Number.isInteger(y)) {
        console.log(`Não foi digitado um número inteiro`)
    } else {
        const soma = x + y;
        const subtracao = x - y;
        const multiplicacao = x * y;
        const divisao = x / y;
        const resto = x % y;

        const divisaoIsInteger = Number.isInteger(divisao) ? divisao : divisao.toFixed(2)

        console.log('');
        console.log(`Números digitados ${x} e ${y}\nSoma ${x} + ${y} = ${soma}\nSubtração ${x} - ${y} = ${subtracao}\nMultiplicação ${x} * ${y} = ${multiplicacao}\nDivisão ${x} / ${y} = ${divisaoIsInteger}\nresto ${x} % ${y} = ${resto}\n`);
    }

}

operacoesMatematicasBasicas(x, y)