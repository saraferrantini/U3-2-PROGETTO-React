//import
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faCloudRain, faSnowflake } from "@fortawesome/free-solid-svg-icons";

//☑️Il componente CityCard accetta tre prop: cityName, cityImage, e onCityClick
const CityCard = ({ cityName, cityImage, onCityClick }) => {
  //1☑️)variabile di stato locale chiamata cityWeather e una funzione chiamata setCityWeather per aggiornare il valore di questa variabile di stato.il valore iniziale di cityWeather sarà null.

  //(all'inizio, quando il componente viene montato per la prima volta, non abbiamo ancora ricevuto i dati sul meteo della città. In seguito, dopo che la chiamata API per ottenere i dati sul meteo
  //è completata con successo, utilizzeremo la funzione setCityWeather per aggiornare il valore di cityWeather con i dati effettivi)

  //2)☑️variabile di stato locale chiamata showDetails e una funzione chiamata setShowDetails per aggiornare il valore di questa variabile di stato.il valore iniziale di showDetails sarà false
  //solo quando l'utente farà  clic sul pulsante "Today", viene chiamata la funzione handleDetailClick, che inverte lo stato di showDetails. Se showDetails è false, viene impostato su true, e viceversa.
  const [cityWeather, setCityWeather] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Nascondi i dettagli quando si torna indietro
  const handleBackButtonClick = () => {
    setShowDetails(false);
  };

  //3)☑️hook useEffect:chiamata API per ottenere le informazioni sul meteo della città, chiamata api che viene eseguita solo quando cambia il valore della prop cityName.
  useEffect(() => {
    const fetchCityWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a4585c914ef2ebde38b60ae1dfae4163&units=metric`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch city weather");
        }
        const weatherData = await response.json();
        setCityWeather({
          name: weatherData.name,
          weather: weatherData.weather[0].description,
          temperature: weatherData.main.temp,
          nextDays: "Not implemented yet",
          icon: weatherData.weather[0].icon,
        });
      } catch (error) {
        console.error("Error fetching city weather:", error);
      }
    };

    fetchCityWeather();
    //array di dipendenze. L'effetto dipenderà da cityName, quindi  verrà eseguito solo quando cityName cambia.
  }, [cityName]);

  //4)☑️funzione handleDetailClick:viene chiamata quando si fa clic sul pulsante "Today",inverte lo stato di showDetails, che determina se i dettagli del meteo della città devono essere mostrati o meno.
  const handleDetailClick = () => {
    setShowDetails(!showDetails);
  };

  //5)☑️Rendering del componente:Se showDetails è true e sono disponibili le informazioni sul meteo della città (cityWeather), vengono mostrati i dettagli del meteo.

  const weatherIcons = {
    "01d": faSun,
    "02d": faCloud,
    "03d": faCloud,
    "04d": faCloud,
    "09d": faCloudRain,
    "10d": faCloudRain,
    "11d": faCloudRain,
    "13d": faSnowflake,
    "50d": faCloud,
  };

  return (
    <div className="card h-100 border-primary shadow">
      <img src={cityImage} className="card-img-top" alt={cityName} />
      <div className="card-body">
        <h5 className="card-title">{cityName}</h5>
        {showDetails && cityWeather && (
          <div>
            <p className="card-text">
              Weather: {cityWeather.weather} <FontAwesomeIcon icon={weatherIcons[cityWeather.icon]} />
            </p>
            <p className="card-text">Temperature: {cityWeather.temperature}</p>
          </div>
        )}
      </div>
      <div className="card-footer bg-transparent">
        {showDetails ? (
          <button
            className="btn btn-primary custom-button"
            onClick={handleBackButtonClick}
            style={{ backgroundColor: "rgb(255, 210, 15)", color: "rgb(16, 14, 28)" }}
          >
            Back
          </button>
        ) : (
          <button
            className="btn btn-primary custom-button"
            onClick={handleDetailClick}
            style={{ backgroundColor: "rgb(255, 210, 15)", color: "rgb(16, 14, 28)" }}
          >
            Today
          </button>
        )}
      </div>
    </div>
  );
};

//export
export default CityCard;
