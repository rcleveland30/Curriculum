const jokeBtn = document.querySelector('.joke-button')
const result = document.querySelector('.joke-container')
const likes = document.querySelector('.likes-counter')
const hate = document.querySelector('.hate-counter')
const likeButton = document.querySelector('.like-button')
const hateButton = document.querySelector('.hate-button')
let countLikes = 0;
let countHate = 0;

const getJokes = async () =>  {
    const apiData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    const jsonData = await apiData.json()
    const joke = jsonData.joke;
    result.innerText = joke;
}

likeButton.addEventListener('click', function() {
    countLikes++;
    likes.innerText = `${countLikes}`
})

hateButton.addEventListener('click', function() {
    countHate++;
    hate.innerText = `${countHate}`
})

jokeBtn.addEventListener('click', getJokes)

//Add - When vote is casted, reveal emojis, picture, etc.