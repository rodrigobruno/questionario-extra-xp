// 1. Crie uma função que imprime no console do terminal o seu nome.

const prompt = require('prompt-sync')()

const nomeCompleto = prompt("Digite seu nome completo: ")

console.log(`O seu nome é ${nomeCompleto}`)