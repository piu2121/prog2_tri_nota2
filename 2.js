const novousuario = { nome: 'bola', senha: 'adadadad', email: 'bumbum@gmail.com', idade: 41 }
const novousuario2 = { nome: null, senha: 'adadadad', email: 'bumbumgmail.com', idade: 21 }
const novousuario3 = { nome: null, senha: 'ad', email: 'adad.com', idade: 21 }
const novousuario4 = { nome: null, senha: 'adadadd', email: '@gmai.com', idade: 2113 }
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
const verificarEmail=(email)=>{
    const a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(a===false){console.error('email: ',email,' invalido')}
    return  a
}
const Cadastrar_ = (usuario) => {
    if (verificarIdade(usuario.idade) && verificarNome(usuario.nome) && verificarSenha(usuario.senha),verificarEmail(usuario.email)) {
        console.log('usuário dacastrado com sucesso')
    }
    else { console.error('\nocorreu um erro') }
}
console.clear()
Cadastrar_(novousuario)
Cadastrar_(novousuario2)
Cadastrar_(novousuario3)
Cadastrar_(novousuario4)
