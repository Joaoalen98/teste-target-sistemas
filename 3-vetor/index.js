import fetch from 'node-fetch';

async function getDados () {
    const url = 'http://localhost:3000/dados/';

    const dados = await fetch(url)

    return await dados.json()
}

function menorFaturamento (dados) {
    let menorValor = 0;

    dados.forEach(dado => {
        if (menorValor > dado.valor || menorValor === 0) {
            menorValor = dado.valor
        }
    })

    return `O menor faturamento foi de: ${menorValor}`
}

function maiorFaturamento (dados) {
    let maiorValor = 0;

    dados.forEach(dado => {
        if (maiorValor < dado.valor) {
            maiorValor = dado.valor
        }
    })

    return `O maior faturamento foi de: ${maiorValor}`
}

function diasAcimaDaMedia (dados) {
    let valores = []

    dados.forEach(dado => {
        if (dado.valor !== 0) {
            valores.push(dado.valor)
        }
    })

    let valorTotal = 0

    valores.forEach(valor => {
        valorTotal += valor
    })

    const media = valorTotal / valores.length

    let diasAcimaDaMedia = 0;

    valores.forEach(valor => {
        if (valor > media) {
            diasAcimaDaMedia ++
        }
    })

    return `Neste mês, tiveram ${diasAcimaDaMedia} dia(s) acima da média.`
}


const menorFaturamentoRes = menorFaturamento(await getDados());
const maiorFaturamentoRes = maiorFaturamento(await getDados());
const diasAcimaDaMediaRes = diasAcimaDaMedia(await getDados());

console.log(
    menorFaturamentoRes, 
    '\n', 
    maiorFaturamentoRes,
    '\n',
    diasAcimaDaMediaRes
)