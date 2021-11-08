import React, { useState } from "react"; //3. Import useState to react line

export default function WeatherTemperature(props){ //2. Paste original HTML text from weatherinfo and change props.data.temperature to props.celsius
    const [unit, setUnit] = useState("celsius"); //4. Create new variables that will update state when called 
    
    function showFahrenheit(event){ //7. Define showFahrenheit, update useState setUnit("fahrenheit")
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){ //9. Define function showCelsius, update useState setUnit("celsius")
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit(){ //12. Define function fahrenheit and return celsius value * conversion rate
        return (props.celsius * 9) / 5 + 32;
    }

    if (unit === "celsius") { //5. Conditional rendering - if (unit is celsius, then showFahrenheit if you click F link) else show celsius 
        return( //6. Add onClick{showFahrenheit} to F 
        <div className="WeatherTemperature">
            <strong>{Math.round(props.celsius)}</strong>
            <span className="units">
                °C | <a href="/" onClick={showFahrenheit}>°F</a>
            </span>
        </div>   
        );
    } else { //(8) Repeat code above. (9) Add onClick{showCelsius} to C
        return ( //13. replace props.celsius and call fahrenheit() function 
            <div className="WeatherTemperature">
                <strong>{Math.round(fahrenheit())}</strong>
                <span className="units">
                    <a href="/" onClick={showCelsius}>°C</a> | °F
                </span>
            </div>
        );
    } 
}