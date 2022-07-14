import promptSync from 'prompt-sync';
const prompt = promptSync()

function inverterString(string) {
    const letras = string.split('');
    let letrasInvertidas = [];

    
    for (let i = letras.length - 1; i >= 0; i--) {
        letrasInvertidas.push(letras[i])
    }
    
    let stringInvertida = ''.concat(letrasInvertidas);

    return stringInvertida.replaceAll(',', '')
}

const string = prompt('Digite uma uma palavra (que não seja arara): ');

console.log(inverterString(string))

