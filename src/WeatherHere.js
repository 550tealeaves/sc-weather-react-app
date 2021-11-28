import React from "react";

export default function WeatherHere(props){
    return (
        <div className="WeatherHere">
            <button className="btn btn-success shadow-sm w-100"
            onClick={props.getCurrentLocation}>Current</button>
        </div>
    );
}