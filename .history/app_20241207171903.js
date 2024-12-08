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
                if(todo.completed === true){
                    Card.innerHTML = `<div class="flex justify-between">
                    <h2 class="text-md font-bold">Todo#${todo.id}</h2>
                    <?xml version="1.0" encoding="utf-8"?><svg class="h-5 -mr-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.879px" height="122.879px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#6BBE66" d="M48,0c26.51,0,48,21.49,48,48S74.51,96,48,96S0,74.51,0,48 S21.49,0,48,0L48,0z M26.764,49.277c0.644-3.734,4.906-5.813,8.269-3.79c0.305,0.182,0.596,0.398,0.867,0.646l0.026,0.025 c1.509,1.446,3.2,2.951,4.876,4.443l1.438,1.291l17.063-17.898c1.019-1.067,1.764-1.757,3.293-2.101 c5.235-1.155,8.916,5.244,5.206,9.155L46.536,63.366c-2.003,2.137-5.583,2.332-7.736,0.291c-1.234-1.146-2.576-2.312-3.933-3.489 c-2.35-2.042-4.747-4.125-6.701-6.187C26.993,52.809,26.487,50.89,26.764,49.277L26.764,49.277z"/></g></svg>
                </div>
                <p class="mt-5 mb-2">${todo.todo}</p>
            `;
                }
                else{

                }
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
    

        