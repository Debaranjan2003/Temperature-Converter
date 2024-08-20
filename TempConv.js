        let celsius = document.getElementById('celsius');
        let fahrenheit = document.getElementById('fahrenheit');
        let kelvin = document.getElementById('kelvin');

        function convertFromCelsius() {
            let celsiusValue = parseFloat(celsius.value) || 0;
            let f = (celsiusValue * 9) / 5 + 32;
            fahrenheit.value = f.toFixed(2);

            let k = celsiusValue + 273.15;
            kelvin.value = k.toFixed(2);
        }

        function convertFromFahrenheit() {
            let fahrenheitValue = parseFloat(fahrenheit.value) || 0;
            let c = ((fahrenheitValue - 32) * 5) / 9;
            celsius.value = c.toFixed(2);

            let k = ((fahrenheitValue - 32) * 5 / 9) + 273.15;
            kelvin.value = k.toFixed(2);
        }

        function convertFromKelvin() {
            let kelvinValue = parseFloat(kelvin.value) || 0;
            let f = (kelvinValue - 273.15) * 9 / 5 + 32;
            fahrenheit.value = f.toFixed(2);

            let c = kelvinValue - 273.15;
            celsius.value = c.toFixed(2);
        }

        celsius.addEventListener('input', convertFromCelsius);
        fahrenheit.addEventListener('input', convertFromFahrenheit);
        kelvin.addEventListener('input', convertFromKelvin);
