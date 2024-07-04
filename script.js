document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location.');
    }
});

document.getElementById('currentLocationButton').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherByCoordinates(lat, lon);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

function getWeather(location) {
    const apiKey = `4612bcf1704f4444a94165517241606`; // Replace with your API key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=4612bcf1704f4444a94165517241606&q=pakistan&aqi=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => console.log(data) )
            // if (data.cod === 200) {
            //     displayWeather(data);
            // } else {
            //     alert('Location not found. Please try again.');
            // }
    
//         .catch(error => {
//             console.error('Error fetching the weather data:', error);
//             alert('Failed to fetch weather data. Please try again.');
//         });
}

function getWeatherByCoordinates(lat, lon) {
    const apiKey = `4612bcf1704f4444a94165517241606`; // Replace with your API key
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=4612bcf1704f4444a94165517241606&q=pakistan&aqi=no`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
}

function displayWeather(data) {
    const location = data.name;
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('location').textContent = `Weather in ${location}`;
    document.getElementById('description').textContent = `Conditions: ${description}`;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    document.getElementById('wind').textContent = `Wind Speed: ${windSpeed} m/s`;
}
