
function inicial() {
    console.clear()
    console.error('está calculadora possui 6 funções para usa-las digite\nsoma\nsubtraçao\nmultiplicação')
    console.error('divisão\npotência\nresto da divisão\n')
    console.log('após a função passe 2 números,dessa forma : 2,4 ')
    console.log('soma: a + b\nsubtraçao: a - b\nmultiplicação: axb')
    console.log('divisão: a/b\npotência: a^b\nresto da divisão a/b')
    const resposta = prompt('digite a função desejada')
    if (resposta === 'soma') {
        const a = parseFloat(prompt('digite o primeiro número'))
        const b = parseFloat(prompt('digite o segundo número'))
        return soma(a, b)
    } else if (resposta === 'subtração') {
        const a = parseFloat(prompt('digite o primeiro número'))
        const b = parseFloat(prompt('digite o segundo número'))
        return subtracao(a, b)
    } else if (resposta === 'multiplicação') {
        const a = parseFloat(prompt('digite o primeiro número'))
        const b = parseFloat(prompt('digite o segundo número'))
        return multiplicacao(a, b)
    } else if (resposta === 'divisão') {
        const a = parseFloat(prompt('digite o primeiro número'))
        const b = parseFloat(prompt('digite o segundo número'))
        return divisao(a, b)
    } else if (resposta === 'potência') {
        const a = parseFloat(prompt('digite o primeiro número'))
        const b = parseFloat(prompt('digite o segundo número'))
        return potencia(a, b)
    } else if (resposta === 'resto da divisão') {
        const a = parseFloat(prompt('digite o primeiro número'))
        const b = parseFloat(prompt('digite o segundo número'))
        return restoDivisao(a, b)
    } else {
         console.error('função não encontrada')
         const a=prompt('quer usar outra função?')
         if(a==='s'){return inicial()}else if(a==='n'){return console.error('programa encerrado')}
         else{console.error('comando não esperado')}
     }
}
const menu = () => {
    const bola = prompt('\t\tbem vindo a  calculadora\ndigite s pra acessa-la e n para encerar ')
    if (bola === 's') {
        return inicial()
    } else { return console.error('programa encerrado') }
}
const soma = (a, b) => {
    console.log(a + b)
    const resp = prompt('deseja continuar? s/n')
    if (resp === 's') {
        return inicial()
    } else {
        return console.error('programa encerrado')
    }
}
const subtracao = (a, b) => {
    console.log(a - b)
    const resp = prompt('deseja continuar? s/n')
    if (resp === 's') {
        return inicial()
    } else {
        return console.error('programa encerrado')
    }
}
const multiplicacao = (a, b) => {
    console.log(a * b)
    const resp = prompt('deseja continuar? s/n')
    if (resp === 's') {
        return inicial()
    } else {
        return console.error('programa encerrado')
    }
}
const divisao = (a, b) => {
    console.log(a / b)
    const resp = prompt('deseja continuar? s/n')
    if (resp === 's') {
        return inicial()
    } else {
        return console.error('programa encerrado')
    }
}
const potencia = (a, b) => {
    console.log(Math.pow(a, b))
    const resp = prompt('deseja continuar? s/n')
    if (resp === 's') {
        return inicial()
    } else {
        return console.error('programa encerrado')
    }
}
const restoDivisao = (a, b) => {
    console.log(a % b)
    const resp = prompt('deseja continuar? s/n')
    if (resp === 's') {
        return inicial()
    } else {
        return console.error('programa encerrado')
    }
}
menu()