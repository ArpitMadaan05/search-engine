
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchHistoryList = document.getElementById('search-history');
const clearHistoryButton = document.getElementById('clear-history');


document.addEventListener('DOMContentLoaded', loadSearchHistory);


searchButton.addEventListener('click', handleSearch);
clearHistoryButton.addEventListener('click', clearSearchHistory);


function handleSearch() {
    const query = searchInput.value.trim();
    if (query === '') {
        alert('Please enter a search term.');
        return;
    }

    
    console.log(`Searching for: ${query}`);

    
    addToSearchHistory(query);

    
    searchInput.value = '';
}


function addToSearchHistory(query) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    
    if (!history.includes(query)) {
        history.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(history));
        appendToHistoryList(query);
    }
}


function loadSearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history.forEach(query => appendToHistoryList(query));
}


function appendToHistoryList(query) {
    const li = document.createElement('li');
    li.textContent = query;
    searchHistoryList.appendChild(li);
}


function clearSearchHistory() {
    if (confirm('Are you sure you want to clear your search history?')) {
        localStorage.removeItem('searchHistory');
        searchHistoryList.innerHTML = '';
    }
}
