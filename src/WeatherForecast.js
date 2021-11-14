import React, { useState } from "react";  
import "./WeatherForecast.css"; 
import axios from "axios"; //Add import axios line 
import WeatherForecastDay from "./WeatherForecastDay"; //8. Import WeatherForecastDay 

export default function WeatherForecast(props){//Send coordinates as props  
    let [loaded, setLoaded] = useState(false); //2. Create State to define loaded
    let [forecast, setForecast] = useState(null);//3. Create this b/c response parameter of handleResponse doesn't work outside of function
    
    function handleResponse(response){  
        console.log(response.data);
        setForecast(response.data.daily); //4. This is to help store the API path as variable forecast 
        setLoaded(true); //5. Changes state of loaded from false to true and now forecast will show on app
    }
    
    if (loaded) {//9. Add <WeatherForecastDay data={forecast[0]}/> (data sent as props) under <div className="col"> //10. Cut/paste the original weather JSX (max/min temp and date/time) and move to WFD.js  
        return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) { //1. Use map to loop through each day of the array //2. Move <WFD data={}/> into return function of #1 //3. Change data={forecast[0]} to {dailyForecast} to show all 8 days instead of the first day 8x
                    if (index < 5) { //4. Use if statement to hide indexes greater than 5 = only show 5-days
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />     
                            </div>
                        );
                    }
                })}   
            </div>
        </div>
    );

} else{
    let apiKey = "ab6da5069e5bc23122a387b3e99bd05b"; //C/P apiKey from Weather.js
    let longitude = props.coordinates.lon; //Store API path of object as longitude/latitude variables 
    let latitude = props.coordinates.lat; //Store API path of object as longitude/latitude variables
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`; //2. Store API call in variable, set units to metric  //5. Interpolate #3 & #4 into apiUrl

    axios.get(apiUrl).then(handleResponse);//Make axios call and call function

    return null;    
    }   
}