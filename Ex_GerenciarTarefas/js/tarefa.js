export class Tarefa {
    // Atributos privados da classe Tarefa
    #criticidade;
    #descricao;
    #prazo;

    // Construtor da classe Tarefa
    constructor(criticidade, descricao, prazo) {
        this.#criticidade = criticidade; 
        this.#descricao = descricao;     
        this.#prazo = prazo;             
    }

    // Método getter para obter a criticidade da tarefa
    get getCriticidade() {
        return this.#criticidade;
    }

    // Métodos getters
    get getDescricao() {
        return this.#descricao;
    }

    get getPrazo() {
        return this.#prazo;
    }

    // Métodos setters
    set setCriticidade(valor) {
        this.#criticidade = valor;
    }

    set setDescricao(valor) {
        this.#descricao = valor;
    }

    set setPrazo(valor) {
        this.#prazo = valor;
    }

    // Método para retornar uma representação em texto da tarefa
    toString() {
        return `Criticidade: ${this.#criticidade}, Descrição: ${this.#descricao}, Prazo: ${this.#prazo}`;
    }
}
