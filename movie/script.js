let inpBox = document.getElementById('inp');
let subButton = document.getElementById('btn');
let moviesdet = document.getElementById('movies');

subButton.addEventListener('click', () => {
    let inpValue = inpBox.value.toLowerCase();

    moviesdet.innerHTML = '';

    if (inpValue.trim() !== '') {
        fetch(`https://imdb.iamidiotareyoutoo.com/justwatch?q='${inpValue}'`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            let filteredMovies = data.description.filter(movie => 
                movie.title.toLowerCase().includes(inpValue) 
            );
            filteredMovies.forEach((movie) => {
                let imgURl = movie.photo_url;
                console.log(imgURl);
                let card = document.createElement('div');
                let img = document.createElement('img');
                let title = document.createElement('h2');
                img.classList.add('img');
                card.classList.add('card');
                img.src = imgURl[0];
                title.innerText = movie.title;
                card.appendChild(img);
                card.appendChild(title);
                moviesdet.appendChild(card);
            });
        });
    }
});