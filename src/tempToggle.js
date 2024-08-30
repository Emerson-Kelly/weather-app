const tempToggle = document.getElementById('tempToggle');

export function toggleTemp() {
    let metric = tempToggle.checked ? "us" : "metric";
    
    tempToggle.addEventListener('change', function() {
        metric = this.checked ? "us" : "metric";
        console.log(this.checked ? "Fahrenheit is selected." : "Celsius is selected.");
        
        // Recalculate temperatures and update UI
        const allTempElements = document.querySelectorAll('.temp, .tempmin, .tempmax');
        let toggleCounter = 0;
        allTempElements.forEach(el => {
            const originalTemp = parseFloat(el.dataset.originalTemp);
            if (this.checked) {
                // Convert to Fahrenheit
               // el.textContent = `${(originalTemp * 9/5 + 32).toFixed(1)}°F`;
                el.textContent = `${originalTemp.toFixed(1)}°F`;
                toggleCounter++;
            } else if (metric === "metric"){
                // Convert to Celsius
                el.textContent = `${((originalTemp - 32) * 5/9).toFixed(1)}°C`;
            }
            else if (toggleCounter > 0) {
                el.textContent = `${originalTemp.toFixed(1)}°C`;
            }
        });

        // Update the metric symbols
        replaceMetric(this);
    });

    return metric;
}

export function replaceMetric(tempToggle) {
    let metricSymbol = tempToggle.checked ? "°F" : "°C";

    // Update metric symbols in the UI
    const tempElements = document.querySelectorAll('.metric-symbol');
    tempElements.forEach(el => {
        el.textContent = metricSymbol;
    });

    return metricSymbol;
}
