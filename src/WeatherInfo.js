import React from "react";
import FormattedDate from "./FormattedDate"; 
import WeatherIcon from "./WeatherIcon"; 
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){ 
    return ( 
        <div className="WeatherInfo">
            <div className="overview">
                <h1 className="fw-bolder mb-2">{props.data.city}</h1>
                <ul>
                    <li>Last updated: <FormattedDate date={props.data.date} /></li>
                    <li>{props.data.description}</li>
                </ul>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="clearfix weather-temperature d-flex justify-content-evenly mt-3">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} />
                        </div>
                        <div className="float-left mb-5">
                            <WeatherTemperature celsius={props.data.temperature} size={50} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mt-3 d-flex justify-content-around">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)}m/s</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}