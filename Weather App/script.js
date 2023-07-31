
key = "f802b30202a44e659e4180102233107"

const inputEl = document.querySelector("#cityName");
const searchBtn = document.querySelector("#search-btn");
let city = 'patna';
searchBtn.addEventListener('click',()=>{
     city = inputEl.value
     checkWeather();
},false)

const temp = document.querySelector('[data-temp]');
const CityName = document.querySelector('[data-city-name]');
const humidity = document.querySelector('[data-humidity]');
const wind = document.querySelector('[data-wind-speed]');
const iconImage = document.getElementById('iconImage');
var container = document.getElementById('#container');

async function checkWeather(){
    url = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${key}`
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    temp.innerHTML = data.current.temp_c + ' °C'
    CityName.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity + '%';
    wind.innerHTML = data.current.wind_kph + ' kmph';
    iconImage.src = data.current.condition.icon

}

