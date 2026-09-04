class GerenciadorTarefas {
    static #tarefas = [1, 131, 1313]
    static get tarefaslist() {
        return GerenciadorTarefas.#tarefas
    }
    static add(value) { this.tarefaslist.push(value); console.log('tarefa adicionada') }
    static find(value) {
        try {
            const t = this.tarefaslist
            for (let index = 0; index < t.length; index++) {
                if (t[index] === value) { return t[index] }
            }
        } catch (e) { console.error('valor não achado') }
    }
    static update(index, value) { try { this.tarefaslist[index] = value } catch (e) { console.error('indice não achado') } }
    static delete(index) {
        try {
            let l = this.tarefaslist;
            console.error(l.splice(index, 1))
            this.update()
            this.#tarefas = l
            console.log('deletado')
        } catch (e) { console.error(e) }
    }
    static list() {
        console.error('ttt', this.tarefaslist.length)
        for (let i = 0; this.tarefaslist.length > i; i++) {
             console.log('oi',this.tarefaslist[i])
        }
    }
    static how() { return this.tarefaslist.length }
} console.clear()
GerenciadorTarefas.list()
GerenciadorTarefas.add(44)
console.error('achado', GerenciadorTarefas.find(1))
GerenciadorTarefas.update(2, 'aiaiai')
GerenciadorTarefas.delete(0)
console.error('tamanho', GerenciadorTarefas.how(1))
GerenciadorTarefas.list()