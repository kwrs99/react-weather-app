import React from "react";

export default function ForecstDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  function description() {
    let description = props.data.weather[0].description;
    return `${description}`;
  }

  return (
    <div>
      <h4>{day()}</h4>
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt="icon"
        width="100px"
      />
      <p>
        {maxTemp()}|{minTemp()}
      </p>
      <p id="forecast-description">{description()}</p>
    </div>
  );
}
