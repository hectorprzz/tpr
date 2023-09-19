
document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';


    const items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

    items.forEach(item => {
        if (item.toLowerCase().includes(query)) {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            resultsContainer.appendChild(listItem);
        }
    });
});