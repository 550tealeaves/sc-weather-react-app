import react from "react";
import "./Weather.css";

export default function Weather(){
    let weatherData = {
        city: "Miami",
        temperature: 83,
        date: "Wednesday, September 23, 2021",
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
        description: "Humid",
        humidity: 76,
        wind: 5
    };

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
                            src={weatherData.imgUrl}
                            alt={weatherData.description}
                            className="float-left"
                        />
                        <div className="float-left">
                            <strong>{weatherData.temperature}</strong>
                            <span className="units">
                                <a href="/">°C</a> | <a href="/">°F</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
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
            </div>
        </div>
    );
}
