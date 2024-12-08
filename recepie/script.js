let inpBox = document.getElementById('inp');
let moviesdet = document.getElementById('recipes');
let allRecipes = [];
function displayRecipes(recipes) {
    moviesdet.innerHTML = ''; 
    recipes.forEach(recipe => {
        let recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        let inghead = document.createElement('h4');
        inghead.innerText = "Ingredients";
        let img = document.createElement('img');
        img.src = recipe.image;
        img.alt = recipe.title; 
        let title = document.createElement('h3');
        title.textContent = recipe.name;
        let ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            let listItem = document.createElement('li');
            listItem.textContent = ingredient; 
            ingredientsList.appendChild(listItem); 
        });
        recipeDiv.appendChild(title);
        recipeDiv.appendChild(img);
        recipeDiv.appendChild(inghead);
        recipeDiv.appendChild(ingredientsList);
        moviesdet.appendChild(recipeDiv);
    });
}

fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => {
        allRecipes = data.recipes; 
        displayRecipes(allRecipes);
    });

inpBox.addEventListener('input', () => {
    let inpValue = inpBox.value.toLowerCase(); 
    if (inpValue.trim() !== '') {
        let filteredRecipes = allRecipes.filter(recipe => 
            recipe.name.toLowerCase().includes(inpValue)
        );
        displayRecipes(filteredRecipes); 
    } else {
        displayRecipes(allRecipes);
    }
});