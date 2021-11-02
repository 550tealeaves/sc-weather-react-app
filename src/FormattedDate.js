import React from "react"; //3. Create FormattedDate component

export default function FormattedDate(props){ 
    let days = [ //7. Create list of days as array to be used in day variable 
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[props.date.getDay()]; //8. Add days variable to statement so app shows day as word instead of #

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    let year = props.date.getFullYear();

    let hours = props.date.getHours();
    if (hours < 10) { //10. Fixes hours bug by adding 0 in front of single hours (0-9)
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) { //9. This fixes bug by adding a 0 in front of single (0-9) minutes
        minutes = `0${minutes}`;
    }
    
    return( //6. if using <div> then using JSX = don't need $ when interpolating, just {}
        <div>
            {day} {month} {date}, {year} {hours}:{minutes}
        </div>
    );
}