import React from "react";
import WeatherIcon from "./WeatherIcon"; //12. Import WeatherIcon component

export default function WeatherForecastDay(props){ //9. Send data of the first item in array's weather as props
    function maxTemperature(){ //13. Create function maxTemp - set variable temp = rounded API path and return that temp variable 
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() { //13. Create function minTemp - set variable temp = rounded API path and return that temp variable 
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day(){ //15. Create day function 
        let date = new Date(props.data.dt * 1000); //15a. Set date variable - (API path*1000) to get correct day 
        let day = date.getDay(); //15b. this will get the correct day but as # in array

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; //16. To display day name, create array
        
        return days[day]; //17. This will display the day name based on # item in array ex: 6=Sat
    }

    return ( //10. Wrap JSX from WF.js in <div className="WeatherForecastDay"></div> //11. Change each forecast[0]to props.data.
        <div className="WeatherForecastDay">
            <div className="WeatherForecast-day">
                {day()}
            </div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperatures-max ms-2">
                    {maxTemperature()}
                </span>
                <span className="WeatherForecast-temperatures-min ms-2">
                    {minTemperature()}
                </span>
            </div>
        </div>
    );
}