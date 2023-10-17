const getWeather = async () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const weatherData = document.getElementById('weatherData');

        if (data.cod === 200) {
            weatherData.innerHTML = `
                <h2>Weather in ${data.name}, ${data.sys.country}:</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            weatherData.innerHTML = `<p>City not found. Please try again.</p>`;
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

document.getElementById('getWeather').addEventListener('click', getWeather);
  

// dark mode
const darkmode = async()=>{
    var ele = document.getElementById('body');
    var att = ele.getAttribute('class');
    if(att==='light'){
        ele.removeAttribute('class');
        ele.setAttribute('class','darkmode');
    }
    else{
        ele.removeAttribute('class');
        ele.setAttribute('class','light');
    }
    var Boxelement = document.getElementById('container');
    var Boxatt = Boxelement.getAttribute('class');
    if(Boxatt==='lightBox'){
        Boxelement.removeAttribute('class');
        Boxelement.setAttribute('class','darkBox');
    }
    else{
        Boxelement.removeAttribute('class');
        Boxelement.setAttribute('class','lightBox');
    }
}
document.getElementById('dark').addEventListener('click',darkmode);