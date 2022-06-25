const button = document.querySelector('.btn')
const city = document.querySelector(".city-name")
const temp = document.querySelector('.temp')
const input = document.querySelector('.zip-input')

//API Call using .n=then()
// const getWeather = () => {
//     const userZip = input.value
//     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=a46bbf33de8d69a14e962a8defa32faa&units=imperial`)
//     .then(response => response.json())
//     .then(data => {
//         const CityName = data.name
//         city.innerText = CityName
//         const currentTemp = data.main.temp
//         temp.innerText = currentTemp
//     })
// }

const getWeather = async () => {
    const userZip = input.value;

    const rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${userZip},us&appid=a46bbf33de8d69a14e962a8defa32faa&units=imperial`)
    const data = await rawData.json()

    const CityName = data.name
    city.innerText = CityName
    const currentTemp = data.main.temp
    temp.innerText = currentTemp
}

button.addEventListener('click', getWeather)