import React from "react"; 
import WeatherIcon from "./WeatherIcon"; 
import "./WeatherForecast.css"; 
import axios from "axios"; //8. Add import axios line 

export default function WeatherForecast(props){ //11. Send coordinates as props
    function handleResponse(response){ //7. Define function from axios call 
        console.log(response.data);
    }
    
    let apiKey = "ab6da5069e5bc23122a387b3e99bd05b"; //3. c/p apiKey from Weather.js
    let longitude = props.coordinates.lon; //12. Store API path of object as longitude/latitude variables 
    let latitude = props.coordinates.lat; //12. Store API path of object as longitude/latitude variables
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`; //2. Store API call in variable, set units to metric  //5. Interpolate #3 & #4 into apiUrl

    axios.get(apiUrl).then(handleResponse);//6. Make axios call and call function
    
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