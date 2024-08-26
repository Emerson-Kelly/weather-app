class distributeAPIData {
    constructor(resolvedAddress, datetime, temp, tempmin, tempmax, conditions, icon) {
        this.resolvedAddress = resolvedAddress || "Unknown Location";
        this.datetime = datetime || "Unknown Date";
        this.temp = temp !== undefined ? temp : "N/A";
        this.tempmin = tempmin !== undefined ? tempmin : "N/A";
        this.tempmax = tempmax !== undefined ? tempmax : "N/A";
        this.conditions = conditions || "N/A";
        this.icon = icon || "default-icon"; // Set a default icon if it's missing
    }

    renderCurrentWeather() {
        const iconPath = require(`./icons/${this.icon}.png`);
        const currentWeatherContainer = document.getElementById('current-weather');
        currentWeatherContainer.innerHTML = `
            <h2 class="text-2xl font-bold">${this.resolvedAddress}</h2>
            <p class="text-xl">${this.temp}°F</p>
            <p>${this.tempmin}°F / ${this.tempmax}°F</p>
            <p>${this.conditions}</p>
            <img src="${iconPath}" alt="${this.conditions}">
        `;
    }

    renderForecast(dayContainer) {
        const iconPath = require(`./icons/${this.icon}.png`);
        dayContainer.innerHTML = `
            <div class="forecast-day bg-blue-200 p-2 min-h-52 rounded-lg text-center">
                <center><img src="${iconPath}" alt="${this.conditions}"></center>
                <h3>${this.datetime}</h3>
                <p>${this.tempmin}°F / ${this.tempmax}°F</p>
                <p>${this.conditions}</p>
            </div>
        `;
    }
}

export function filterAPIData(data) {
    try {
        if (data) {
            console.log('Data is being passed through:', data);
            let days = data.days;

            // Extract min/max temp from the first day in the forecast if not available in current conditions
            const todayForecast = days[0];
            const currentTempMin = data.currentConditions.tempmin !== undefined ? data.currentConditions.tempmin : todayForecast.tempmin;
            const currentTempMax = data.currentConditions.tempmax !== undefined ? data.currentConditions.tempmax : todayForecast.tempmax;

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
            currentWeatherData.renderCurrentWeather();

            // Render 6-day forecast
            const forecastContainer = document.getElementById('forecast');
            days.slice(1, 7).forEach(day => {
                const dayData = new distributeAPIData(
                    data.resolvedAddress,
                    day.datetime,
                    day.temp,
                    day.tempmin,
                    day.tempmax,
                    day.conditions,
                    day.icon
                );
                const dayContainer = document.createElement('div');
                forecastContainer.appendChild(dayContainer);
                dayData.renderForecast(dayContainer);
            });

        } else {
            console.log('Data is NOT being passed through');
        }
    } catch (error) {
        console.log('Data Parameter is NOT being received', error);
    }
}
