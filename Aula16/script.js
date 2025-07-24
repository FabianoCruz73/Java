// Pega os elementos html
document.addEventListener('DOMContentLoaded', () => {
    const inputTarefa = document.getElementById('inputTarefa');
    const btnAdicionarTarefa = document.getElementById('btnAdicionarTarefa');
    const listaDeTarefas = document.getElementById('listaDeTarefas');

    let tarefas = []; // Array para armazenar as tarefas

    // --- Funções de Persistência ---

    // Carrega as tarefas do Local Storage
    function carregarTarefas() {
        const tarefasArmazenadas = localStorage.getItem('tarefas');
        if (tarefasArmazenadas) {
            tarefas = JSON.parse(tarefasArmazenadas);
            renderizarTarefas(); // Renderiza as tarefas carregadas
        }
    }