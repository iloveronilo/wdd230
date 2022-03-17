const speed = document.querySelector('#windSpeed');
const temp = document.querySelector('#tempDegree');
const tempName = document.querySelector('#tempName');
const feel = document.querySelector('#feelsLike');
const apiUrl = `Https://api.openweathermap.org/data/2.5/weather?q=Mariveles&units=metric&appid=74c61ba8b2eb2d3a5e68d1d12fb57c7e`;

fetch(apiUrl)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const iconsrc=`https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#weatherIcon').setAttribute('src', iconsrc);
        document.querySelector('#weatherIcon').setAttribute('alt', desc);

        feel.innerHTML = `Feels Like : ${jsObject.main.feels_like}&deg;C`
        temp.textContent = `${jsObject.main.temp}`;
        speed.textContent =` Wind Speed : ${jsObject.wind.speed}`;
        tempName.textContent = desc;

});

