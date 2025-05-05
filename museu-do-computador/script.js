// Função para abrir seções (exemplo: ao clicar em um card)
function openSection(sectionName) {
    alert(`Você selecionou: ${sectionName}`);
    // Aqui você pode redirecionar para outra página ou exibir conteúdo dinâmico
}

// Efeito de scroll suave para links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});