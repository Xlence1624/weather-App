const apiKey = "590c659c03cffcfc33e29cea3e843ca4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.getElementById("search-input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
let error = document.querySelector(".error");
let weather = document.querySelector(".weather");

async function getWeather(city) {
    
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        error.style.display = "block";
        weather.style.display = "none";
    }

    else{

        const data = await response.json();
        
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "flex";
        document.querySelector(".error").style.display = "none";
     
}

    }
        
      

searchBtn.addEventListener("click", () => {
    if (searchBox.value) {
        getWeather(searchBox.value);
    } else {
        alert("Please enter a city name");
    }
});


getWeather()
