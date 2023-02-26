/*
4. Você foi convidado para criar o algoritmo de cálculo do custo de frete do e-commerce Missouri para uma determinada cidade brasileira.
Para cada bairro existirá um valor para a entrega das encomendas.
Desenvolva uma função que dado o nome do bairro imprime no console, do terminal, o custo do frete associado.
*/

const prompt = require('prompt-sync')()

console.log('Vamos calcular seu frete.');
const bairroInformado = prompt('Qual seu bairro em São Paulo - SP: ')

const bairros = [
    { nome: 'Alto de Pinheiros', valor: '13,8' },
    { nome: 'Anhanguera', valor: '7,13' },
    { nome: 'Aricanduva', valor: '18,25' },
    { nome: 'Artur Alvim', valor: '28,8' },
    { nome: 'Barra Funda', valor: '10,13' },
    { nome: 'Belém', valor: '5,10' },
    { nome: 'Bom Retiro', valor: '26,13' },
    { nome: 'Brás', valor: '10,12' },
    { nome: 'Brasilândia', valor: '15,7' },
    { nome: 'Butantã', valor: '9,25' },
    { nome: 'Cachoeirinha', valor: '30,11' },
    { nome: 'Cambuci', valor: '5,20' },
    { nome: 'Campo Belo', valor: '18,6' },
    { nome: 'Campo Grande', valor: '5,15' },
    { nome: 'Campo Limpo', valor: '9,5' },
    { nome: 'Cangaíba', valor: '25,12' },
    { nome: 'Capão Redondo', valor: '8,7' },
    { nome: 'Capela do Socorro Cidade Dutra', valor: '17,25' },
    { nome: 'Carrão', valor: '24,11' },
    { nome: 'Casa Verde', valor: '13,10' },
    { nome: 'Cidade Ademar', valor: '29,7' },
    { nome: 'Cidade Líder', valor: '19,27' },
    { nome: 'Cidade Tiradentes', valor: '10,14' },
    { nome: 'Consolação', valor: '10,14' },
    { nome: 'Ermelino Matarazzo', valor: '14,19' },
    { nome: 'Freguesia do Ó', valor: '21,8' },
    { nome: 'Grajaú', valor: '14,23' },
    { nome: 'Guaianases', valor: '18,17' },
    { nome: 'Ipiranga', valor: '21,26' },
    { nome: 'Itaim Bibi', valor: '30,18' },
    { nome: 'Itaim Paulista', valor: '6,21' },
    { nome: 'Itaquera', valor: '16,5' },
    { nome: 'Jabaquara', valor: '22,21' },
    { nome: 'Jaguara', valor: '11,18' },
    { nome: 'Jaguaré', valor: '15,19' },
    { nome: 'Jaraguá', valor: '7,15' },
    { nome: 'Jardim Ângela', valor: '20,30' },
    { nome: 'Jardim Helena', valor: '20,28' },
    { nome: 'Jardim Paulista', valor: '20,28' },
    { nome: 'Jardim São Luís', valor: '30,23' },
    { nome: 'Jaçanã', valor: '25,29' },
    { nome: 'José Bonifácio', valor: '22,16' },
    { nome: 'Lajeado', valor: '7,10' },
    { nome: 'Lapa', valor: '28,30' },
    { nome: 'Liberdade', valor: '8,18' },
    { nome: 'Limão', valor: '15,23' },
    { nome: 'M\'Boi Mirim', valor: '7,25' },
    { nome: 'Mandaqui', valor: '21,20' },
    { nome: 'Marsilac', valor: '13,17' },
    { nome: 'Moema', valor: '17,22' },
    { nome: 'Moóca', valor: '20,17' },
    { nome: 'Mooca Água Rasa', valor: '8,15' },
    { nome: 'Morumbi', valor: '24,22' },
    { nome: 'Parelheiros', valor: '26,14' },
    { nome: 'Pari', valor: '24,14' },
    { nome: 'Parque do Carmo', valor: '19,13' },
    { nome: 'Pedreira', valor: '10,7' },
    { nome: 'Penha', valor: '10,22' },
    { nome: 'Perdizes', valor: '27,24' },
    { nome: 'Perus', valor: '21,27' },
    { nome: 'Pinheiros', valor: '6,6' },
    { nome: 'Pirituba', valor: '29,15' },
    { nome: 'Ponte Rasa', valor: '18,20' },
    { nome: 'Raposo Tavares', valor: '21,18' },
    { nome: 'República', valor: '23,8' },
    { nome: 'Rio Pequeno', valor: '21,21' },
    { nome: 'Sacomã', valor: '15,8' },
    { nome: 'Santa Cecília', valor: '15,19' },
    { nome: 'Santana', valor: '22,15' },
    { nome: 'Santo Amaro', valor: '28,5' },
    { nome: 'São Domingos', valor: '6,6' },
    { nome: 'São Lucas', valor: '6,21' },
    { nome: 'São Mateus', valor: '20,28' },
    { nome: 'São Miguel ', valor: '19,18' },
    { nome: 'São Rafael', valor: '18,30' },
    { nome: 'Sapopemba', valor: '12,23' },
    { nome: 'Saúde', valor: '30,14' },
    { nome: 'Sé', valor: '9,29' },
    { nome: 'Sé Bela Vista', valor: '23,19' },
    { nome: 'Socorro', valor: '29,20' },
    { nome: 'Tatuapé', valor: '7,18' },
    { nome: 'Tremembé', valor: '8,7' },
    { nome: 'Tucuruvi', valor: '17,6' },
    { nome: 'Vila Andrade', valor: '8,14' },
    { nome: 'Vila Curuçá', valor: '10,16' },
    { nome: 'Vila Formosa', valor: '18,25' },
    { nome: 'Vila Guilherme', valor: '25,30' },
    { nome: 'Vila Jacuí', valor: '7,6' },
    { nome: 'Vila Leopoldina', valor: '5,15' },
    { nome: 'Vila Maria', valor: '26,26' },
    { nome: 'Vila Mariana', valor: '18,26' },
    { nome: 'Vila Matilde', valor: '21,20' },
    { nome: 'Vila Medeiros', valor: '20,27' },
    { nome: 'Vila Prudente', valor: '20,16' },
    { nome: 'Vila Sônia', valor: '28,25' }
]

function custoDeFrete(bairroInformado) {
    const custoDeFrete = bairros.filter(bairro => bairro.nome == bairroInformado)

    if (!Array.isArray(custoDeFrete) || !custoDeFrete.length) {
        console.log('Bairro não encontrado');
    }

    custoDeFrete.forEach(bairro => console.log(`O frete para ${bairro.nome} é R$ ${bairro.valor}.`))
}

custoDeFrete(bairroInformado)