const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');
document.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            accept: 'application/json',
        },

    }

    fetch('https://icanhazdadjoke.com', config).then((response) => response.json()).then((data) => {
        jokeEl.innerHTML = data.joke;
    })

}