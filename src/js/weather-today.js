import { celsius, fahrenheit } from "./convert-temp";
import { getDateHour } from "./convert-hour-date";
import { selectIcon } from "./select-icon";
import { cityCase } from "./city-case";

let icon = document.querySelector("#icon-div");
let details = document.querySelector("#details-div");

function getWeatherToday(data) {


  icon.innerHTML = `
        <i class="icon ${selectIcon(data.list[0].weather[0].icon)}"/>
        <h2 class="active" id="fahrenheit">
          ${fahrenheit(data.list[0].main.temp)}°F | 
          ${celsius(data.list[0].main.temp)}°C
        </h2>
        <br>
        <h3>
            Wind: ${data.list[0].wind.speed} mph
            <br>
            Humidity: ${data.list[0].main.humidity}%
        </h3>
        <br>
      `;

  details.innerHTML = `
          <h2 >${data.city.name}, ${data.city.country}</h2>
           <section class="details-coord">
            <h3>Lat:${data.city.coord.lat}</h3>
            <h3>Lon:${data.city.coord.lon}</h3>
          </section>
          <section>
            <h3>${getDateHour()}</h3>
            <h3>${cityCase(data.list[0].weather[0].description)}</h3>
          </section>
          `;
}

export { getWeatherToday };
