import React from "react";
import FormattedDate from "./FormattedDate"; 
import WeatherIcon from "./WeatherIcon"; 
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){ 
    return ( 
        <div className="WeatherInfo">
            <div className="overview">
                <h1>{props.data.city}</h1>
                <ul>
                    <li>Last updated: <FormattedDate date={props.data.date} /></li>
                    <li>{props.data.description}</li>
                </ul>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix weather-temperature">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} />
                        </div>
                        <div className="float-left">
                            <WeatherTemperature celsius={props.data.temperature} size={50} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)}mph</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}