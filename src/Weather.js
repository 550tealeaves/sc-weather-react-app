import React, {useState} from "react";  
import WeatherInfo from "./WeatherInfo"; 
import WeatherForecast from "./WeatherForecast"; //1. Import WeatherForecast.js
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false}); 
    const [city, setCity] = useState(props.defaultCity); 
     
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({ //9. Store coord API path as variable 
            ready: true, 
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),  
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description
        });
    }

    function search(){ //15. Create search function and move API data inside it. 16. Move API code inside search function
        const apiKey = "ab6da5069e5bc23122a387b3e99bd05b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); //12. change ${props.defaultCity} to ${city} - from useState
    }
    
    function handleSubmit(event) { //8. Create handleSubmit function that will stop pg from reloading & then call search function
        event.preventDefault();
        search(); //14. Call search function to make API call only when you submit entry into form
    }

    function handleCityChange(event){ //10. Create handleCityChange function & this will take data entered into search form 
        setCity(event.target.value); //13. Updates setCity state for when you type entry in search form
    }

    if (weatherData.ready) { //7. Create onSubmit={handleSubmit} eventListener in <form> 9. add onChange={handleCityChange} in <input type="search>"
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit} className="mb-3">
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Type a city.."
                                className="form-control"
                                autoComplete="off"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary w-100"
                            />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        );
    } else {
        search(); //17. Call search function so that it shows weather info instead of return "Loading..."
        return "Loading...";
    }  
}
