//weather-forecast
const weatherForecast = document.querySelector("#weather-forecast");
const currentWeather = document.querySelector("#current-weather");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");




//Current-Weather

const myKey = "a1f7ba4a4ff40229283f47a862f7b090";
const lat = "-27.45";
const lon = "58.98";
const url = `//api.openweathermap.org/data/2.5/`;
const cnt = 3;





async function displayWeather() {
    const currentWeather = await getCurrentWeather();
    const forecast = await getForeCast();
    const description = currentWeather.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
    const huimidity = document.createElement("p");
    const windSpeed = document.createElement("p");
    const location = document.createElement("p");
    const desc = document.createElement("p");
    const imgIcon = document.createElement("img");
    imgIcon.setAttribute("src", iconsrc);
    imgIcon.setAttribute("alt", description);
    desc.textContent = description;
    huimidity.textContent = `Humidity: ${currentWeather.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${currentWeather.wind.speed} km/h`;
    location.textContent = `Location: ${currentWeather.name}, ${currentWeather.sys.country}`;
    weatherIcon.appendChild(imgIcon);
    currentTemp.appendChild(desc);
    currentTemp.appendChild(location);
    currentTemp.appendChild(huimidity);
    currentTemp.appendChild(windSpeed);



    forecast.

    weatherForecast.appendChild();
    
}


async function getCurrentWeather() {
    try {
        const response = await fetch(`${url}/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            return data;
        }else {
            throw Error(new Error(await response.text()));
        }
    } catch (error) {
        console.log(error);
        return {};
    }
}

async function getForeCast(){
    try {
        const response = await fetch(`${url}/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${myKey}&units=metric`);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            return data;
        }else {
            throw Error(new Error(await response.text()));
        }
    } catch (error) {
        console.log(error);
        return {};
    }
}


displayWeather();