import React, { useState, useEffect } from "react"; //1. Add useEffect to import line
import "./WeatherForecast.css"; 
import axios from "axios"; 
import WeatherForecastDay from "./WeatherForecastDay";  

export default function WeatherForecast(props){//Send coordinates as props  
    let [loaded, setLoaded] = useState(false); 
    let [forecast, setForecast] = useState(null);


    useEffect(() => { //2. useEffect lets you run additional code after component rendered if something changes
        setLoaded(false); //3a. code to run after component rendered - this will make API call (after city search)
    }, [props.coordinates]); //3b. - condition required to run 2a - when the coordinates change (after city search)

    
    function handleResponse(response){  
        console.log(response.data);
        setForecast(response.data.daily); 
        setLoaded(true); 
    }

    function load(){ //4. Improve readability by storing API/geo data as function 
        let apiKey = "ab6da5069e5bc23122a387b3e99bd05b"; //C/P apiKey from Weather.js
        let longitude = props.coordinates.lon; //Store API path of object as longitude/latitude variables 
        let latitude = props.coordinates.lat; //Store API path of object as longitude/latitude variables
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`; //Store API call in variable, set units to metric  //5. Interpolate #3 & #4 into apiUrl

        axios.get(apiUrl).then(handleResponse);//Make axios call and call function
    }
    
    if (loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) { 
                    if (index < 5) { 
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />     
                            </div>
                        );
                    } else { //1. forecast.map(function) must return something if first condition (index <5) is NOT met
                        return null;
                    }
                })}   
            </div>
        </div>
    );

} else{ //4. Return load function as ELSE statement, will make the API call  
    load();
    
    return null;    
    }   
}