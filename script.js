document.getElementById('getWeather').addEventListener('click', function() {
    var city = document.getElementById('cityInput').value;
    if (city.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    // Make an API call to fetch weather data for the specified city
    // Replace the API call with your preferred weather API

    // For example:
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=YOUR_API_KEY')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Use the data to display weather information
    //         var weatherData = document.getElementById('weatherData');
    //         weatherData.innerHTML = `
    //             <h2>Weather in ${city}</h2>
    //             <p>Temperature: ${data.main.temp} K</p>
    //             <p>Description: ${data.weather[0].description}</p>
    //         `;
    //     })
    //     .catch(error => console.error('Error:', error));

    // Sample code for switching between Celsius and Fahrenheit
    var weatherData = document.getElementById('weatherData');
    var isCelsius = true; // Set default unit to Celsius

    document.getElementById('weatherData').addEventListener('click', function() {
        var temperatureInKelvin = 300; // Replace with actual temperature in Kelvin from API
        var temperature = isCelsius ? (temperatureInKelvin - 273.15).toFixed(2) + " °C" : ((temperatureInKelvin * 9/5) - 459.67).toFixed(2) + " °F";
        isCelsius = !isCelsius; // Toggle between Celsius and Fahrenheit

        weatherData.innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${temperature}</p>
            <p>Description: Sample Weather Description</p>
            <p>Click to switch between Celsius and Fahrenheit</p>
        `;
    });
});
