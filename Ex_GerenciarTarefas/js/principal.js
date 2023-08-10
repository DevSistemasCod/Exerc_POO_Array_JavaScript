import {Tarefa} from './tarefa.js'; // Importa a classe Tarefa
import {Tarefas} from './tarefas.js'; // Importa a classe Tarefas

let tarefas; // Variável para armazenar a instância de Tarefas

// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
    let criticidade = document.getElementById("criticidadeInput").value;
    let descricao = document.getElementById("descricaoInput").value;
    let prazo = document.getElementById("prazoInput").value;
    tarefas = new Tarefas(); // Cria uma nova instância de Tarefas
    
    let novaTarefa = new Tarefa(criticidade, descricao, prazo); // Cria uma nova instância de Tarefa
    tarefas.adicionarTarefa(novaTarefa); // Adiciona a tarefa à lista de tarefas

    // Habilita o botão de Listar quando uma tarefa for adicionada
    document.getElementById("btnListar").disabled = false;

    document.getElementById("mensagem").innerText = "Tarefa adicionada com sucesso!";
}

// Função para listar as tarefas na interface
function listarTarefas() {
    let listaUl = document.getElementById("listaTarefas");
    listaUl.innerHTML = ""; // Limpa o conteúdo anterior

    tarefas.listarTarefas(); // Chama o método listarTarefas da instância de Tarefas

    // Habilita o botão de Limpar quando tiver itens na lista
    document.getElementById("btnLimpar").disabled = false;
}

// Função para limpar a lista de tarefas e a interface
function limparTarefas() {
    let listaUl = document.getElementById("listaTarefas");
    listaUl.innerHTML = ""; // Limpa o conteúdo anterior

    tarefas.limparLista(); // Chama o método limparLista da instância de Tarefas

    // Desabilita o botão de Listar novamente
    document.getElementById("btnListar").disabled = true;

    // Desabilita o botão de Limpar novamente
    document.getElementById("btnLimpar").disabled = true;
}

// Função para iniciar a aplicação após o carregamento do DOM
function iniciarAplicacao() {
    tarefas = new Tarefas(); // Cria uma instância de Tarefas

    let btnAdicionar = document.getElementById("btnAdicionar");
    let btnListar = document.getElementById("btnListar");
    let btnLimpar = document.getElementById("btnLimpar"); // Novo botão

    btnAdicionar.addEventListener("click", adicionarTarefa);
    btnListar.addEventListener("click", listarTarefas);
    btnLimpar.addEventListener("click", limparTarefas); // Adiciona evento ao botão Limpar

    // Desabilita o botão de Listar inicialmente
    btnListar.disabled = true;
    // Desabilita o botão de Limpar inicialmente
    btnLimpar.disabled = true;
}

// Adiciona evento para iniciar a aplicação após o carregamento do DOM
document.addEventListener("DOMContentLoaded", iniciarAplicacao);
