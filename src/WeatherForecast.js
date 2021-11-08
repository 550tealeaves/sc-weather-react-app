import React from "react"; //2. Create WeatherForecast
import WeatherIcon from "./WeatherIcon"; //4. Import WeatherIcon 
import "./WeatherForecast.css"; //5. Import WeatherForecast.css 

export default function WeatherForecast(){ //(4) Add WeatherIcon component (8) size as props
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                      Thu  
                    </div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-max">
                         19°
                        </span>
                        <span className="WeatherForecast-temperatures-min">
                          10°
                        </span> 
                    </div>
                </div>
            </div>
        </div>
    );
}