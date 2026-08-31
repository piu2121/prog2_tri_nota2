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
    static delete(index) { try { this.tarefaslist.splice(index, 1); console.log('deletado') } catch (e) { console.error(e) } }
    static list() { for (let i = 0; this.tarefaslist.length > i; i++) { console.log(this.tarefaslist[i]) } }
    static how() { return this.tarefaslist.length }
}
GerenciadorTarefas.list()
GerenciadorTarefas.add(1)
GerenciadorTarefas.find(1)
GerenciadorTarefas.update(1)
GerenciadorTarefas.delete(1)
GerenciadorTarefas.how(1)