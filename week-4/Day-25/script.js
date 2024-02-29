async function getWeather() {
    const apiKey = "94c62defed0ca7c0537ef0d3e57b06e3";
    const cityInput = document.getElementById("cityInput").value;
    const errorMessageElement = document.getElementById("errorMessage");
    const weatherInfoElement = document.getElementById("weatherInfo");

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            const temperatureElement = document.getElementById("temperature");
            const weatherConditionElement = document.getElementById("weatherCondition");
            const otherDetailsElement = document.getElementById("otherDetails");

            temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
            weatherConditionElement.textContent = `Weather Condition: ${data.weather[0].description}`;
            otherDetailsElement.textContent = `Humidity: ${data.main.humidity}% | Wind Speed: ${data.wind.speed} m/s`;

            weatherInfoElement.classList.remove("hidden");
            errorMessageElement.classList.add("hidden");
        } else {
            throw new Error(data.message || "Something went wrong");
        }
    } catch (error) {
        errorMessageElement.textContent = `Error: ${error.message}`;
        errorMessageElement.classList.remove("hidden");
        weatherInfoElement.classList.add("hidden");
    }
}
