//weather-forecast
const weatherForecast = document.querySelector("#weather-forecast");
const currentWeather = document.querySelector("#current-weather");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherForecastDays = document.querySelector("#weather-forecast-days");

//Current-Weather

const myKey = "36a1b80d1632c52e00d74ac3e92c50f7";
const lat = "-27.45";
const lon = "-58.98";
//const cnt = 3;
const url = `https://api.openweathermap.org/data/2.5/`;


async function displayWeather() {
    const currentWeather = await getCurrentWeather();
    const forecast = await getForeCast();
    const currentDate = new Date().getDate();
    const description = currentWeather.weather[0].description;
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const iconsrc = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
    const humidity = document.createElement("p");
    const windSpeed = document.createElement("p");
    const location = document.createElement("p");
    const desc = document.createElement("p");
    const imgIcon = document.createElement("img");

    const tomorrowsWeather = document.createElement("p");
    const nextDayWeather = document.createElement("p");
    const todaysWeather = document.createElement("p");
    imgIcon.setAttribute("src", iconsrc);
    imgIcon.setAttribute("alt", description);
    desc.textContent = description;
    humidity.textContent = `Humidity: ${currentWeather.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${currentWeather.wind.speed} km/h`;
    location.textContent = `Location: ${currentWeather.name}, ${currentWeather.sys.country}`;
    weatherIcon.appendChild(imgIcon);
    currentTemp.appendChild(desc);
    currentTemp.appendChild(location);
    currentTemp.appendChild(humidity);
    currentTemp.appendChild(windSpeed);


    forecast.list = forecast.list.reduce((acc, cur) => {
		return (
			cur.dt == acc[acc.length -1].dt + 86400 &&
			new Date(cur.dt * 1000).getDate() > currentDate
		) ? [...acc, cur] : [...acc]
	}, [forecast.list[0]])
    
    tomorrowsWeather.innerHTML = `${weekDays[new Date(forecast.list[0].dt * 1000).getDay()]}: <b>${Math.round(forecast.list[0].main.temp)}C°</b>`;
    nextDayWeather.innerHTML = `${weekDays[new Date(forecast.list[1].dt * 1000).getDay()]}: <b>${Math.round(forecast.list[1].main.temp)}C°</b>`;
    todaysWeather.innerHTML = `Today: <b>${Math.round(currentWeather.main.temp)}C°</b>`;




	// const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
	// const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })

    weatherForecastDays.appendChild(tomorrowsWeather);
    weatherForecastDays.appendChild(nextDayWeather);
    weatherForecastDays.appendChild(todaysWeather);
}



async function getCurrentWeather() {
    try {
        const response = await fetch(`${url}/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`);
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error);
        return {};
    }
}

async function getForeCast(){
    try {
        const response = await fetch(`${url}/forecast/?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`);
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error);
        return {};
    }
}


displayWeather();