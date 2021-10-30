import React, {useState} from "react"; //10. Import useState
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false}); //21. Create single useState that will have object w/ all data
    
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({ //22. Call object w/ all data for setWeatherData and set to API path
            ready: true, //28. Add ready: true so that if(weatherData.ready) runs
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            date: "Sunday, October 30",
            icon: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
            description: response.data.weather[0].description
        });
    }

    if (weatherData.ready) { //16. CR - if (weatherData.ready), then return HTML code w/ all data else call API and return "Laoding...";
        return (
            <div className="Weather">
                <form className="mb-3">
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Type a city.."
                                className="form-control"
                                autoComplete="off"
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
                <div className="overview">
                    <h1>{weatherData.city}</h1>
                    <ul>
                        <li>Last updated: {weatherData.date}</li>
                        <li>{weatherData.description}</li>   
                    </ul>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="clearfix weather-temperature">
                            <img
                                src={weatherData.icon}
                                alt=""
                                className="float-left"
                            />
                            <div className="float-left">
                                <strong>{Math.round(weatherData.temperature)}</strong> 
                                <span className="units">
                                    <a href="/">°C</a> | <a href="/">°F</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 80%</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind}km/h</li>
                        </ul>
                    </div>
                    <div className="weather-forecast">
                        <div className="row">
                            <div className="col-2">
                                <div className="weather-forecast-date">
                                    Thu
                                </div>
                                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" width="42" />
                                <div className="weather-forecast-temperatures">
                                    <span className="weather-forecast-temperature-max">
                                        18°C
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="weather-forecast">
                        <div className="row">
                            <div className="col-2">
                                <div className="weather-forecast-date">
                                    Fri
                                </div>
                                <img src="http://openweathermap.org/img/wn/09d@2x.png" alt="" width="42" />
                                <div className="weather-forecast-temperatures">
                                    <span className="weather-forecast-temperature-max">
                                        24°C
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="weather-forecast">
                        <div className="row">
                            <div className="col-2">
                                <div className="weather-forecast-date">
                                    Sat
                                </div>
                                <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="" width="42" />
                                <div className="weather-forecast-temperatures">
                                    <span className="weather-forecast-temperature-max">
                                        20°C
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="weather-forecast">
                        <div className="row">
                            <div className="col-2">
                                <div className="weather-forecast-date">
                                    Sun
                                </div>
                                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" width="42" />
                                <div className="weather-forecast-temperatures">
                                    <span className="weather-forecast-temperature-max">
                                        22°C
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="weather-forecast">
                        <div className="row">
                            <div className="col-2">
                                <div className="weather-forecast-date">
                                    Mon
                                </div>
                                <img src="http://openweathermap.org/img/wn/11d@2x.png" alt="" width="42" />
                                <div className="weather-forecast-temperatures">
                                    <span className="weather-forecast-temperature-max">
                                        15°C
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <small>
                        Project coded by Nastasia Pollas and is{" "}
                        <a
                            href="https://github.com/550tealeaves/sc-weather-react-app"
                            target="blank"
                        >
                            open-source code on Github
                        </a>{" "}
                        and{" "}
                        <a href="https://affectionate-easley-dbc23c.netlify.app/" target="blank">
                            hosted by Netlify
                        </a>
                    </small>
                </div>
            </div>
        );
    } else {
        const apiKey ="ab6da5069e5bc23122a387b3e99bd05b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
        return "Loading...";
    }  
}
