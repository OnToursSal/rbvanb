function getWeather() {
  const apiKey = "a51ab2915e927e0e72fcf17efe46a798";
  // const city = document.getElementById("city").value;
  const city = "santa maria,cv";
  if (!city) {
    alert("Please enter a city");
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=nl`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=nl`;

  https: fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching current weather data:", error);
      alert("Error fetching current weather data. Please try again.");
    });
}
getWeather();
setInterval(getWeather, 3600000);

function displayWeather(data) {
  console.log(data);
  const tempDivInfo = document.getElementById("temp-div");
  const weatherIcon = document.getElementById("weather-icon");
  const humDivInfo = document.getElementById("hum-div");
  const cityDivInfo = document.getElementById("city-div");
  const descriptionInfo = document.getElementById("description-div");

  if (data.cod === "404") {
    weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  } else {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    humDivInfo.innerHTML = `hum:${humidity}%`;
    tempDivInfo.innerHTML = `${temperature}°C`;
    cityDivInfo.innerHTML = `${cityName}`;
    descriptionInfo.innerHTML = `${description}`;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;
    showImage();
  }
}

function showImage() {
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.style.display = "block"; // Make the image visible once it's loaded
}
