export class Tarefas {
    #listaTarefas;
    
    // Construtor da classe
    constructor() {
        this.#listaTarefas = []; // Inicializa a lista de tarefas vazia
    }

    // Método para adicionar uma nova tarefa à lista
    adicionarTarefa(tarefa) {
        this.#listaTarefas.push(tarefa); // Adiciona a tarefa à lista

        // Limpa os campos de entrada após adicionar a tarefa
        document.getElementById("criticidadeInput").value = "";
        document.getElementById("descricaoInput").value = "";
        document.getElementById("prazoInput").value = "";
    }

    // Método para remover uma tarefa da lista pelo índice
    removerTarefa(indice) {
        if ((indice >= 0) && (indice < this.#listaTarefas.length)) {
            this.#listaTarefas.splice(indice, 1); // Remove a tarefa da lista pelo índice
        }
    }

    // Método para listar as tarefas na página
    listarTarefas() {
        let listaDeTarefas = document.getElementById("listaTarefas");
        /* O firstChild é uma propriedade do objeto DOM que retorna o primeiro nó filho de um elemento.
            No contexto do nosso código, listaDeTarefas.firstChild se refere ao primeiro nó filho do elemento com o ID "listaTarefas"
            o qual obtemos usando document.getElementById("listaTarefas") 
        */
        while (listaDeTarefas.firstChild) {
            listaDeTarefas.removeChild(listaDeTarefas.firstChild); // Remove todos os elementos filhos da lista
        }
        
        // Função para criar elementos de lista para cada tarefa
        function criarElementoTarefa(tarefa, indice) {
            let itemTarefa = document.createElement("li");
            itemTarefa.textContent = `Tarefa ${indice + 1}: ${tarefa.toString()}`;
            listaDeTarefas.appendChild( itemTarefa); // Adiciona o elemento de tarefa à lista
        }
        
        //listaTarefas.forEach é utilizado para iterar sobre os elementos contidos na lista de tarefas 
        this.#listaTarefas.forEach(criarElementoTarefa); // Para cada tarefa, cria um elemento de lista
    }

    // Método para alterar os dados de uma tarefa pelo índice
    alterarTarefa(indice, novoDescricao, novoPrazo) {
        if ((indice >= 0) && (indice < this.#listaTarefas.length)) {
            // Altera a descrição e prazo da tarefa no índice especificado
            this.#listaTarefas[indice].descricao = novoDescricao;
            this.#listaTarefas[indice].prazo = novoPrazo;
        }
    }

    // Método para limpar a lista
    limparLista() {
        this.#listaTarefas = []; // Limpa a lista de tarefas
    }
}
