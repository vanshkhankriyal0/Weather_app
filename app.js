let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.getElementById('description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
let main = document.querySelector('main');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(valueSearch.value != ''){
        searchWeather();
    }
})
let id = 'e57f67dbc40037b2571c40eb22590f78';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src= 'https://flagsapi.com/'+data.sys.country+'/shiny/32.png';

            temperature.querySelector('img').src = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            temperature.querySelector('figcaption span').innerText = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerText = data.clouds.all + '%';
            humidity.innerText = data.main.humidity + '%';
            pressure.innerText = data.main.pressure + 'hPa';
        }else{
            //false
            main.classList.add('error');
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        }

        valueSearch.value = '';

    })
}
const initApp = () => {
    valueSearch.value = 'Dehradun';
    searchWeather();
}
initApp();