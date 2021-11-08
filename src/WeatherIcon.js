import React from "react";
import ReactAnimatedWeather from 'react-animated-weather'; //9. install in server and then add import line

export default function WeatherIcon(props){//6. Send props as parameter 
    const codeMapping = { //13. Create codeMapping (object) and map the OW codes to RAW codes
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "PARTLY_CLOUDY_DAY",
        "03n": "PARTLY_CLOUDY_NIGHT",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG"
    }
    
    return (//11. copy/paste code from npm.js - 14. Set icon={codeMapping[props.code]} to display icons - change color, size, animation below
        <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="pink"
            size={props.size}
            animate={true}
        />
    );
}