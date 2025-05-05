// Adiciona novos itens à timeline via formulário
document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const year = this.elements[0].value;
    const title = this.elements[1].value;
    const description = this.elements[2].value;
    const imageUrl = this.elements[3].value;

    const timeline = document.querySelector('.timeline');
    
    const newItem = document.createElement('div');
    newItem.className = 'timeline-item';
    newItem.innerHTML = `
        <div class="timeline-date">${year}</div>
        <div class="timeline-content">
            <h3>${title}</h3>
            ${imageUrl ? `<img src="${imageUrl}" alt="${title}">` : ''}
            <p>${description}</p>
            <a href="#" class="btn">Saiba mais</a>
        </div>
    `;
    
    timeline.appendChild(newItem);
    this.reset();
});