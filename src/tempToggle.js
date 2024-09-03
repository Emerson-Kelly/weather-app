import { handleAPI } from "./apiHandler";

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Use the debounce function to limit how often handleAPI is called
const debouncedHandleAPI = debounce(handleAPI, 250);

export function toggleTemp() {
    const dayContainer = document.querySelectorAll('.day-container');
    dayContainer.forEach((el) => {
        el.remove();
    });
    
    const tempToggle = document.getElementById("tempToggle");
    let metric = tempToggle.checked ? "us" : "metric";

    tempToggle.addEventListener("change", function () {
        metric = this.checked ? "us" : "metric";
        console.log(this.checked ? "Fahrenheit is selected." : "Celsius is selected.");

        const searchField = document.getElementById("searchField");
        debouncedHandleAPI(searchField.value);

        return metric;
    });

    return metric;
}


export function replaceMetric(tempToggle) {
    let metricSymbol = tempToggle.checked ? "°F" : "°C";

    // Update metric symbols in the UI
    const tempElements = document.querySelectorAll(".metric-symbol");
    tempElements.forEach((el) => {
        el.textContent = metricSymbol;
    });

    return metricSymbol;
}
