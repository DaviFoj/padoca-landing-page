// script.js

// Função para atualizar o ano no rodapé
document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

console.log("Padaria Lopes e Souza - Site Carregado!");