let targetUnit = 'celsius';

function setTargetUnit(unit) {
    targetUnit = unit;
}

function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const sourceUnit = document.querySelector('input[name="unit"]:checked').value;
    let convertedTemperature;
    let convertedUnit;

    if (sourceUnit === "celsius") {
        if (targetUnit === "fahrenheit") {
            convertedTemperature = (temperatureInput * 9 / 5) + 32;
            convertedUnit = "Fahrenheit";
        } else if (targetUnit === "kelvin") {
            convertedTemperature = parseFloat(temperatureInput) + 273.15;
            convertedUnit = "Kelvin";
        } else {
            convertedTemperature = parseFloat(temperatureInput);
            convertedUnit = "Celsius";
        }
    } else if (sourceUnit === "fahrenheit") {
        if (targetUnit === "celsius") {
            convertedTemperature = (temperatureInput - 32) * 5 / 9;
            convertedUnit = "Celsius";
        } else if (targetUnit === "kelvin") {
            convertedTemperature = (temperatureInput - 32) * 5 / 9 + 273.15;
            convertedUnit = "Kelvin";
        } else {
            convertedTemperature = parseFloat(temperatureInput);
            convertedUnit = "Fahrenheit";
        }
    } else if (sourceUnit === "kelvin") {
        if (targetUnit === "celsius") {
            convertedTemperature = temperatureInput - 273.15;
            convertedUnit = "Celsius";
        } else if (targetUnit === "fahrenheit") {
            convertedTemperature = (temperatureInput - 273.15) * 9 / 5 + 32;
            convertedUnit = "Fahrenheit";
        } else {
            convertedTemperature = parseFloat(temperatureInput);
            convertedUnit = "Kelvin";
        }
    }

    document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
