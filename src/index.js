let now = new Date();
let h4 = document.querySelector("h4");
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h4.innerHTML = `${day} ${hours}:${minutes}`;

let apiKey = "9f2c0da21f5930df107119b385ec4c75";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

function showTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#temp");
  let description = document.querySelector("#des");

  tempElement.innerHTML = `${temp}C°`;
  description.innerHTML = response.data.weather[0].description;
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-City");
  let city = searchInput.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;

  axios
    .get(`${apiUrl}?q=${city}&ctn=6&units=metric&appid=${apiKey}`)
    .then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
