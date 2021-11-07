import React, { useState } from "react"; //3. Import useState to react line

export default function WeatherTemperature(props){ //2. Paste original HTML text from weatherinfo and change props.data.temperature to props.celsius
    const [unit, setUnit] = useState("celsius"); //4. Create new variables that will update state when called 
    
    if (unit === "celsius") {
        return( 
        <div className="WeatherTemperature">
            <strong>{Math.round(props.celsius)}</strong>
            <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
            </span>
        </div>   
        );
    } else {
        return "F";
    } 
}