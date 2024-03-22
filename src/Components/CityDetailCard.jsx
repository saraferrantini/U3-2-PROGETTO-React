import React from "react";

//☑️COMPONENTE CityDetailCard che accetta una prop chiamata cityWeather, che contiene informazioni sul meteo della città.

//utilizziamo le proprietà dell'oggetto cityWeather per mostrare informazioni come il nome della città (cityWeather.name), il meteo attuale (cityWeather.weather), la temperatura (cityWeather.temperature)
const CityDetailCard = ({ cityWeather }) => {
  return (
    <div className="card h-100 border-primary shadow">
      <div className="card-body">
        <h5 className="card-title">{cityWeather.name}</h5>
        <p className="card-text">Weather: {cityWeather.weather}</p>

        <p className="card-text">Temperature: {cityWeather.temperature}</p>
        <p className="card-text">Next Days: {cityWeather.nextDays}</p>
      </div>
    </div>
  );
};

export default CityDetailCard;
