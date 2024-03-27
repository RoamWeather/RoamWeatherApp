function rendorWeather (weather){
    console.log(weather);
 var resultsContainer = document.querySelector("#weather-results")
// h2 for name
var city = document.createElement("h2");
city.textContent = weather.name;
resultsContainer.append(city);
// p for city and humidity, wind, desc, temp
 
var temp = document.createElement("p");
temp.textContent = "temp: " + weather.main.temp + "°C";
resultsContainer.append(temp);

var wind = document.createElement("p");
wind.textContent = "wind: " + weather.wind.deg + "°"+ " speed "+weather.wind.speed + " kmph";
resultsContainer.append(wind);

var humidity = document.createElement("p");
humidity.textContent = "humidity: " + weather.main.humidity + " C";
resultsContainer.append(humidity);

}
//fetch weather for city
async function fetchWeather(query){
var url ="https://api.openweathermap.org/data/2.5/weather?q=Cape+Town&units=metric&appid=b5b5939911ec3002b5d157e6767a849e"

const response = await fetch(url);
const data = await response.json();
rendorWeather(data);
}

fetchWeather();
