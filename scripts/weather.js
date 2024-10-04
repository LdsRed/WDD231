//Variables for the URL 
const myKey = "a1f7ba4a4ff40229283f47a862f7b090";
const lat = "49.75";
const lon = "6.63";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figcaption = document.querySelector("figcaption");
const card = document.querySelector(".card");




function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    const huimidity = document.createElement("p");
    const windSpeed = document.createElement("p");
    const location = document.createElement("p");
    weatherIcon.setAttribute("src", iconsrc);
    figcaption.textContent = desc;
    currentTemp.innerHTML = `${data.main.temp}°C`;
    huimidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} km/h`;
    location.textContent = `Location: ${data.name}, ${data.sys.country}`;
    card.appendChild(location);
    card.appendChild(huimidity);
    card.appendChild(windSpeed);
}



async function apiFetch(){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else {
            throw Error(await response.text());
        }
    }
    catch(error){
        console.log(error);
    }
};



apiFetch();