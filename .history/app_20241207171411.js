let container = document.getElementById('container');
let api = "https://dummyjson.com/todos";
const searchInput = document.getElementById('searchInput');
let allTodos = [];


async function fetchTodos() {
    try {
        container.innerHTML = '<div >Loading todos...</div>';
        const response = await fetch(api);
        
        if (!response.ok) {
            throw new Error('Failed to fetch Todos');
        }

        const data = await response.json();
        allTodos = data; 
        renderTodos(allTodos);
    } catch (error) {
        console.error('Error fetching Todos:', error);
        container.innerHTML = `
            <div class="text-red font-bold p-5 border-2 rounded-md">
                Failed to load Todos. 
                <br>Please check your internet connection and try again.
            </div>
        `;
    }
}
    
    function renderTodos(todos) {
        container.innerHTML = '';
        
        if (todos.length === 0) {
            container.innerHTML = '<div class="text-red font-bold p-5 border-2 rounded-md">No tasks found.</div>';
            return;
        }
    
        allTodos.forEach(todo => {
            const Card = document.createElement('div');
            Card.classList.add('w-[450px] inline-block p-5 border-2 rounded-lg');
            
            Card.innerHTML = `<h2 class="text-md font-bold">Todo#${todo.id}</h2>
                <div class="actress-name">${actress.name}</div>
                <p class="mt-5 mb-2">${todo.}</p>
            `;
            
            container.appendChild(Card);
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
    

        