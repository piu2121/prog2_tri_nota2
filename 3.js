const cli=process.env
const soma = (a, b) => {
    return a + b
}
const subtracao = (a, b) => {
    return a - b
}
const multiplicacao = (a, b) => { return a * b }
const divisao = (a, b) => { return a / b }
const potencia = (a, b) => { return a ** b }
const restoDivisao = (a, b) => { return a % b }
function a() {
    console.log('está calculadora possui 6 funções para usa-las digite\nsoma\nsubtraçao\nmultiplicação')
    console.log('divisão\npotência\nresto da divisão\n')
    console.log('após a função passe 2 números,dessa forma : 2,4 ')
    console.log('soma: a + b\nsubtraçao: a - b\nmultiplicação: axb')
    console.log('divisão: a/b\npotência: a^b\nresto da divisão a/b')
}
console.log(soma(2, 4))
console.log(subtracao(2, 4))
console.log(multiplicacao(2, 4))
console.log(divisao(2, 4))
console.log(potencia(2, 4))
console.log(restoDivisao(2, 4))
a()