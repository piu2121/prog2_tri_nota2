let fila = []
let contador = 1
const aguardando = () => {
    console.log('aguarando ser chamados: ', fila.length)
}
const mostrarfila = () => {
    fila.forEach((element, index) => {
        console.log(index + 1, element.nome,'senha: ' ,element.numerodasenha ,'horaio de chegada: ', element.horariodeentrada)

    });
}
const addpessoa = (nome) => {
    const t = new Date()
    fila.push({ nome: nome, numerodasenha: contador, horariodeentrada: t.toLocaleTimeString() })
    contador++
}
const proximo = () => { console.error('proximo', fila[0].nome) }
const chamar = () => {
    console.error('está sendo chamado', fila[0].nome)
    fila.splice(0, 1)
}
console.clear()
addpessoa('jose')
addpessoa('maria')
addpessoa('paulo')
aguardando()
mostrarfila()
chamar()
aguardando()
mostrarfila()
proximo()