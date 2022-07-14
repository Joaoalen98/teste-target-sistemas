function calcularPercentual (faturamentos) {

    const distribuidoras = Object.keys(faturamentos);
    let faturamentoTotal = 0;

    Object.values(faturamentos).forEach(faturamento => {
        faturamentoTotal += faturamento
    })

    let porcentagens = [];

    Object.values(faturamentos).forEach(faturamento => {
        const porcentagem = (faturamento / faturamentoTotal) * 100
        porcentagens.push(porcentagem)
    })

    let faturamentosPorDistribuidora = {};

    let i = 0
    distribuidoras.forEach(distribuidora => {
        faturamentosPorDistribuidora[distribuidora] = `${porcentagens[i].toFixed(2)}%`
        i ++
    })

    return faturamentosPorDistribuidora

}

const faturamentoMensal = {
    sp: 67836.43,
    rj: 36678.66,
    mg: 29229.98,
    es: 27165.48,
    outros: 19849.53
}

console.log(calcularPercentual(faturamentoMensal))

