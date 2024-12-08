let container = document.getElementById('container');
let api = "https://dummyjson.com/todos";
const searchInput = document.getElementById('searchInput');
let todos = [];


async function fetchTodos() {
    try {
        actressesContainer.innerHTML = '<div>Loading todos...</div>';
        const response = await fetch(api);
        
        if (!response.ok) {
            throw new Error('Failed to fetch actresses');
        }

        const data = await response.json();
        allActresses = data; 
        renderActresses(allActresses);
    } catch (error) {
        console.error('Error fetching actresses:', error);
        actressesContainer.innerHTML = `
            <div class="error">
                Failed to load actresses. 
                <br>Please check your internet connection and try again.
            </div>
        `;
    }
}
































































        // Function to render actress cards
        function renderActresses(actresses) {
            actressesContainer.innerHTML = '';
            
            if (actresses.length === 0) {
                actressesContainer.innerHTML = '<div class="error">No actresses found.</div>';
                return;
            }

            actresses.forEach(actress => {
                const actressCard = document.createElement('div');
                actressCard.classList.add('actress-card');
                
                actressCard.innerHTML = `
                    <img src="${actress.image}" alt="${actress.name}" class="actress-image">
                    <div class="actress-name">${actress.name}</div>
                    <div class="actress-name">${actress.awards}</div>
                    <div class="actress-name">${actress.birth_year}</div>
                `;
                
                actressesContainer.appendChild(actressCard);
            });
        }

        // Search functionality
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            const filteredActresses = allActresses.filter(actress => 
                actress.name.toLowerCase().includes(searchTerm)
            );
            
            renderActresses(filteredActresses);
        });

        // Fetch actresses when page loads
        fetchActresses();
    

        