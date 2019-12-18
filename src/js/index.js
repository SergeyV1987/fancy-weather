import { getWeatherToday } from "./weather-today";
import { forecast } from "./forecast";
import { clearInput } from "./clear-input";
import { appKey } from "./token";
import { showOutPut, hideOutPut } from "./show-hide";
import {showMap, rewriteMap} from "./map";

let setTemp = document.getElementById("set-temp");
document.querySelector("#searchForm").addEventListener("submit", getWeather);
document.querySelector("#change-back").addEventListener("click", setBackgroundImage);
document.querySelector("#set-temp").addEventListener("click", changeUnits);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showInitial, showInitialErr);
} else {
  alert('geolocation is not available.');
}

function showInitial(pos) {
  let geoLat = pos.coords.latitude.toFixed(5);
  let geoLng = pos.coords.longitude.toFixed(5);
  setBackgroundImage();

  getWeatherByCoords(geoLat, geoLng);

  showMap(geoLat, geoLng);
}

function showInitialErr(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case err.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case err.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    default:
      alert("An unknown error occurred.");
  }
}

function getWeatherByCoords(geoLat, geoLng) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoLat}&lon=${geoLng}&APPID=${appKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            getWeatherToday(data);
            forecast(data);
        })
        .catch(err => console.log(err));
}

function getWeather(e) {

  const city = document.querySelector("#cityInput").value;
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${appKey}`;
  hideOutPut();

  fetch(url)
    .then(response => response.json())
    .then(data => {
      setBackgroundImage(city);
      rewriteMap(data.city.coord.lat, data.city.coord.lon);
      getWeatherToday(data);
      forecast(data);
      console.log('new', data);
        setInterval(function() {
            showOutPut()
        }, 500);
    })
    .catch(err => console.log(err));
  clearInput();
  e.preventDefault();
}

function setBackgroundImage(city) {
  const url = `https://api.unsplash.com/photos/random?query=town,${city}&client_id=949d309a09bedbc642b2a762c9aa8c50bd9e64125b0d961bfc2ab6c3b5f81318`;
  fetch(url)
      .then(res => res.json())
      .then(data => {
        document.getElementsByClassName('main')[0].style.backgroundImage = `url(${data.urls.regular})`;
      });
}

function changeUnits() {
    let fUnit = document.querySelectorAll(".f-temp");
    let cUnit = document.querySelectorAll(".c-temp");

    if (setTemp.checked === true) {
        fUnit.forEach(u => u.classList.add('disabled'));
        cUnit.forEach(u => u.classList.remove('disabled'));
    } else {
        fUnit.forEach(u => u.classList.remove('disabled'));
        cUnit.forEach(u => u.classList.add('disabled'));
    }
}






