import {celsius, fahrenheit} from "./convert-temp";
import {selectIcon} from "./select-icon";

function forecast(data) {
  let arrDate = [];
  const arrayForecast = [0, 8, 16, 24];

  arrayForecast.forEach(i => {
    let date = data.list[i].dt_txt
      .slice(5, 10)
      .split("-")
      .reverse()
      .join("/");

    arrDate.push(date);
  });

  document.querySelector("#outPutForecast").innerHTML = `
        <div class="box">
          <h3>Date</h3>
          <h3>Temp</h3>
        </div>
        <div class="box" id="day-0">
          <h4>${arrDate[0]}</h4>
          <p class="f-temp">${fahrenheit(data.list[0].main.temp)}°F</p>
          <p class="c-temp disabled">${celsius(data.list[0].main.temp)}°C</p>
          <img class="icon ${selectIcon(data.list[0].weather[0].icon)}" src="" alt=""> 
        </div>
        <div class="box" id="day-1">
          <h4>${arrDate[1]}</h4>
          <p class="f-temp">${fahrenheit(data.list[8].main.temp)}°F</p>
          <p class="c-temp disabled">${celsius(data.list[8].main.temp)}°C</p>
          <img class="icon ${selectIcon(data.list[8].weather[0].icon)}" src="" alt=""> 
        </div>
        <div class="box" id="day-2">
          <h4>${arrDate[2]}</h4>
          <p class="f-temp">${fahrenheit(data.list[16].main.temp)}°F</p>
          <p class="c-temp disabled">${celsius(data.list[16].main.temp)}°C</p>
          <img class="icon ${selectIcon(data.list[16].weather[0].icon)}" src="" alt=""> 
        </div>
        <div class="box-end" id="day-3">
          <h4>${arrDate[3]}</h4>
          <p class="f-temp">${fahrenheit(data.list[24].main.temp)}°F</p>
          <p class="c-temp disabled">${celsius(data.list[24].main.temp)}°C</p>
          <img class="icon ${selectIcon(data.list[24].weather[0].icon)}" src="" alt=""> 
        </div>
        `;
}

export { forecast };
