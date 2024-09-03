import { handleAPI } from "./apiHandler";
import { replaceMetric } from "./tempToggle";
import { getDayOfWeek } from "./getDayOfWeek";

export class distributeAPIData {
  constructor(
    resolvedAddress,
    datetime,
    temp,
    tempmin,
    tempmax,
    conditions,
    icon
  ) {
    this.resolvedAddress = resolvedAddress || "Unknown Location";
    this.datetime = datetime || "Unknown Date";
    this.temp = temp !== undefined ? temp : "N/A";
    this.tempmin = tempmin !== undefined ? tempmin : "N/A";
    this.tempmax = tempmax !== undefined ? tempmax : "N/A";
    this.conditions = conditions || "N/A";
    this.icon = icon || "default-icon";
  }

  renderCurrentWeather(metricSymbol) {
    const iconPath = require(`./icons/${this.icon}.png`);
    const currentWeatherContainer = document.getElementById("current-weather");
    currentWeatherContainer.innerHTML = `
            <h2 class="text-2xl font-bold">${this.resolvedAddress}</h2>
            <p class="text-xl temp" data-original-temp="${this.temp}">${this.temp}${metricSymbol}</p>
            <p class="tempmin" data-original-temp="${this.tempmin}">${this.tempmin}${metricSymbol} / 
            <span class="tempmax" data-original-temp="${this.tempmax}">${this.tempmax}${metricSymbol}</span></p>
            <p>${this.conditions}</p>
            <img class="-ml-6" src="${iconPath}" alt="${this.conditions}">
        `;
  }

  renderForecast(dayContainer, metricSymbol) {
    const iconPath = require(`./icons/${this.icon}.png`);
    const dayOfWeek = getDayOfWeek(this.datetime);
    dayContainer.innerHTML = `
            <div class="forecast-day bg-neutral pb-4 min-h-52 rounded-lg text-center flex flex-col justify-center w-64">
                <center><img src="${iconPath}" alt="${this.conditions}"></center>
                <h3>${dayOfWeek}</h3>
                <p class="tempmin text-white" data-original-temp="${this.tempmin}">${this.tempmin}${metricSymbol} <span class="text-gray-400">/</span> 
                <span class="tempmax" data-original-temp="${this.tempmax}">${this.tempmax}${metricSymbol}</span></p>
                <p>${this.conditions}</p>
            </div>
        `;
  }
}

export function filterAPIData(data) {
  try {
    if (data) {
      console.log("Data is being passed through:", data);

      let days = data.days;

      // Extract min/max temp from the first day in the forecast if not available in current conditions
      const todayForecast = days[0];
      const currentTempMin =
        data.currentConditions.tempmin !== undefined
          ? data.currentConditions.tempmin
          : todayForecast.tempmin;
      const currentTempMax =
        data.currentConditions.tempmax !== undefined
          ? data.currentConditions.tempmax
          : todayForecast.tempmax;

      // Get metric symbol based on the selected temperature unit
      const metricSymbol = replaceMetric(document.getElementById("tempToggle"));

      // Render current weather
      const currentWeatherData = new distributeAPIData(
        data.resolvedAddress,
        data.currentConditions.datetime,
        data.currentConditions.temp,
        currentTempMin,
        currentTempMax,
        data.currentConditions.conditions,
        data.currentConditions.icon
      );
      currentWeatherData.renderCurrentWeather(metricSymbol);

      // Render 6-day forecast
      const forecastContainer = document.getElementById("forecast");
      days.slice(1, 7).forEach((day) => {
        const dayData = new distributeAPIData(
          data.resolvedAddress,
          day.datetime,
          day.temp,
          day.tempmin,
          day.tempmax,
          day.conditions,
          day.icon
        );

        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day-container");
        dayContainer.classList.add("carousel-item");
        forecastContainer.appendChild(dayContainer);
        dayData.renderForecast(dayContainer, metricSymbol);
      });
    } else {
      console.log("Data is NOT being passed through");
    }
  } catch (error) {
    console.log("Data Parameter is NOT being received", error);
  }
}
