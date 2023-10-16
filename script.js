document.getElementById('getWeather').addEventListener('click', function() {
    var city = document.getElementById('cityInput').value;
    if (city.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    // var apiKey ='';

    // Make an API call to fetch weather data for the specified city
    // Replace the API call with your preferred weather API

    // For example:
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Update the weather data in your HTML
            var weatherData = document.querySelector('.weather');
            weatherData.querySelector('.temp').textContent = (data.main.temp - 273.15).toFixed(2) + "°C";
            weatherData.querySelector('.city').textContent = data.name;
            weatherData.querySelector('.humidity').textContent = data.main.humidity + "%";
            weatherData.querySelector('.wind').textContent = data.wind.speed + " km/h";
        })
        .catch(error => console.error('Error:', error));
});
