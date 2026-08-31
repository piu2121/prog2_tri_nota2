const meuarray = [1, 2, 36, 7, 47, 7, 4, 6, 9,-212121,1212121212121]
const Maior = (array) => {
    let maior=array[0];
    let anterior
    let proximo
    for (let index = 0; index < array.length; index++) {
        if (array[index] > maior) {
            maior = array[index]
        }
    }
    return console.log('maior: ',maior)
}
const Menor = (array) => {
    let menor=array[0];
    let anterior
    let proximo
    for (let index = 0; index < array.length; index++) {
        if (array[index] < menor) {
            menor = array[index]
        }
    }
    return console.log('menor: ',menor)
}
const media = (array) => {
    let media = 0
    const arrayTamanho = array.length
    for (let index = 0; index < arrayTamanho; index++) {
        media = media + array[index]
    }
    return console.log('media: ', media / arrayTamanho)
}
const pares = (array) => {
    let pares = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares++
        }
    }
    return console.log('pares: ', pares)
}
const impares = (array) => {
    let impares = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            impares++
        }
    }
    return console.log('impares: ', impares)
}
Maior(meuarray)
Menor(meuarray)
media(meuarray)
pares(meuarray)
impares(meuarray)