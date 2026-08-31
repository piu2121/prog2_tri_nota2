const novousuario = { nome: 'bola', senha: 'adadadad', email: 'adad', idade: 41 }
const novousuario2 = { nome: null, senha: 'adadadad', email: 'adad', idade: 21 }
const novousuario3 = { nome: null, senha: 'ad', email: 'adad', idade: 21 }
const novousuario4 = { nome: null, senha: 'adadadd', email: 'adad', idade: 2113 }
const verificarNome = (nome) => {
    if (!nome) {
        console.error('o nome não pode ser vazio ou indefinido')
        return false
    }
    return true
}
const verificarIdade = (idade) => {
    if (idade > 13 && idade < 121) { return true }
    else {
        console.error('a idade precisa estar entre 14 a 120')
        return false
    }
}
const verificarSenha = (senha) => {
    if (senha.length > 7) { return true }
    console.error('sua senha:', senha.length, ' a senha deve ter mais de 7 caracteres')
    return false
}

const Cadastrar_ = (usuario) => {
    if (verificarIdade(usuario.idade) && verificarNome(usuario.nome) && verificarSenha(usuario.senha)) {
        console.log('usuário dacastrado com sucesso')
    }
    else { console.error('\nocorreu um erro') }
}
Cadastrar_(novousuario)
Cadastrar_(novousuario2)
Cadastrar_(novousuario3)
Cadastrar_(novousuario4)
