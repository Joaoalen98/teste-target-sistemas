import promptSync from 'prompt-sync';
const prompt = promptSync()

function fibonacci (numero) {
    let fibonacciArray = [];

    fibonacciArray[0] = 0;
    fibonacciArray[1] = 1;

    for(let i = 2; i <= numero; i ++) {
        fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1]
    }

    const numeroFibonacci = fibonacciArray.find(numFib => {
        return numFib == numero
    })

    if (numeroFibonacci) {
        console.log(`O número ${numero} pertence a sequência fibonacci: `, '\n', fibonacciArray)
    } else {
        console.log(`O número ${numero} não pertence a sequência fibonacci: `, '\n', fibonacciArray)
    }
}

const numero = prompt('Digite um numero: ')

console.log(fibonacci(numero))
