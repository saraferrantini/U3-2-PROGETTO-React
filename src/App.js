import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//css
import "./Components/style.css";
//navbar
import MyNavbar from "./Components/MyNavbar";
//footer
import MyFooter from "./Components/MyFooter";
//citycard
import CityCard from "./Components/CityCard";
//detail
import CityDetailCard from "./Components/CityDetailCard";
import React, { useState } from "react";

//☑️useState per definire lo stato selectedCity, che tiene traccia della città selezionata dall'utente. Inizialmente, il valore di selectedCity è null.
function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  //☑️funzione handleCityClick, che prende il nome della città come argomento e imposta il valore di selectedCity su quel nome di città quando un utente clicca su una delle card della città.
  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
  };
  //☑️funzione handleBackButtonClick, che reimposta il valore di selectedCity su null quando un utente clicca sul pulsante "Back
  const handleBackButtonClick = () => {
    setSelectedCity(null);
  };

  //☑️Definiamo una variabile cities che contiene un array di oggetti, ognuno rappresentante una città con il suo nome e un'immagine.
  const cities = [
    {
      name: "Roma",
      image: "https://wips.plug.it/cips/initalia.virgilio.it/cms/2020/11/photo_roma.jpg?w=800&h=450&a=c",
    },
    {
      name: "Milano",
      image:
        "https://www.hotelsempione.it/sites/www.hotelsempione.it/files/styles/testata/public/images/HSM_Milano_03.jpg?itok=WAD-WNbi",
    },
    {
      name: "Bologna",
      image: "https://hips.hearstapps.com/hmg-prod/images/bologna-01-1531212414.jpg",
    },
    {
      name: "Firenze",
      image:
        "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2015/06/duomo-Firenze-iStock-161857514-min-1080x720.jpg?v=1688645813",
    },
    {
      name: "Napoli",
      image:
        "https://tourismmedia.italia.it/is/image/mitur/20220125123714-vista-panoramica-di-napoli-e-del-golfo-con-il-vesuvio-sullo-sfondo-cam-Qgd1KskbXF?wid=400&hei=470&fit=vfit,1&fmt=webp",
    },
    {
      name: "Torino",
      image:
        "https://a.cdn-hotels.com/gdcs/production163/d784/ead812ae-029e-422c-b658-b69e115e3f78.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    },
    {
      name: "Venezia",
      image:
        "https://www.italia.it/content/dam/tdh/it/site1/getty-temp-image/category-nuove/venezia/1600X900_venezia_san_marco_gabbiano.jpg",
    },
    {
      name: "Palermo",
      image:
        "https://tourismmedia.italia.it/is/image/mitur/1600X1000_cosa_vedere_a_palermo_hero-1?wid=1080&hei=660&fit=constrain,1&fmt=webp",
    },

    {
      name: "Genova",
      image:
        "https://a.cdn-hotels.com/gdcs/production101/d1850/bc1d168f-5b49-4ed5-847c-63a5441825d1.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    },
    {
      name: "Verona",
      image: "https://www.cuddlynest.com/blog/wp-content/uploads/2022/07/things-to-do-in-verona-juliets-house.jpg",
    },
    {
      name: "Bari",
      image:
        "https://www.itabus.it/on/demandware.static/-/Sites-ITABUS-Library/default/dwb7a3ebbc/Destinazioni/Puglia/Bari/Vista-panoramica-sul-lungomare-di-Bari.jpg",
    },
    {
      name: "Catania",
      image: "https://wyandottedaily.com/wp-content/uploads/2024/01/Catania.jpg",
    },
    {
      name: "Padua",
      image: "https://www.christophorus.at/wp-content/uploads/2019/10/Padua-e1571901032831.jpg",
    },
    {
      name: "Trieste",
      image:
        "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2023/05/iStock-1347134153-715x476.jpg?v=1684316398",
    },
    {
      name: "Perugia",
      image: "https://www.dovedormire.info/wp-content/uploads/sites/119/perugia-hd.jpg",
    },
    {
      name: "Brescia",
      image:
        "https://www.italia.it/content/dam/tdh/it/interests/lombardia/cosa-vedere-a-brescia-in-un-giorno/media/1600X1000_cosa_vedere_a_brescia_in_un_giorno_hero.jpg",
    },
    {
      name: "Cagliari",
      image: "https://www.dovedormire.info/wp-content/uploads/sites/119/cagliari-hd.jpg",
    },
    {
      name: "Bergamo",
      image: "https://www.scopriremilano.com/f/italia/milan/guia/bergamo-m.jpg",
    },
    {
      name: "Trento",
      image: "https://www.osservatoriopums.it/wp-content/uploads/2018/09/Trento0.png",
    },
    {
      name: "Reggio Calabria",
      image: "https://www.costadeglidei.it/wp-content/uploads/2018/01/scilla-escursioni.jpg",
    },
    {
      name: "Ancona",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Ancona_veduta_14.jpg",
    },
    {
      name: "Pisa",
      image:
        "https://services.meteored.com/img/article/torre-pisa-raddrizza-perche-inclinata-geologia-rischio-crollo-1673439781746_768.jpg",
    },
    {
      name: "Livorno",
      image: "https://www.toscana.info/wp-content/uploads/sites/123/livorno-costa-hd.jpg",
    },
    {
      name: "Livorno",
      image: "https://www.toscana.info/wp-content/uploads/sites/123/livorno-costa-hd.jpg",
    },
    {
      name: "Modena",
      image:
        "https://tourismmedia.italia.it/is/image/mitur/1600X1000_storia_e_curiosita_su_modena_1?wid=800&hei=500&fit=constrain,1&fmt=webp",
    },
    {
      name: "Ferrara",
      image: "https://siviaggia.it/wp-content/uploads/sites/2/2021/09/Ferrara.jpg",
    },
    {
      name: "Ravenna",
      image: "https://images.placesonline.com/photos/110395_ravenna_ravenna.jpg",
    },
    {
      name: "Udine",
      image: "https://image.dnevnik.hr/media/images/920x695/Apr2022/62283514-udine-italija.jpg",
    },
    {
      name: "Taranto",
      image: "https://whext-travelblog.com/wp-content/uploads/2020/05/Cose-da-vedere-a-Taranto-00004.jpg",
    },
    {
      name: "Sassari",
      image: "https://tourismmedia.italia.it/is/image/mitur/image2-48?wid=1240&hei=500&fit=constrain,1&fmt=webp",
    },
    {
      name: "Messina",
      image: "https://www.nauticareport.it/resizer/picscache/720x420c50/d67e8d71754b053997d076e8db58237f.jpg",
    },
    {
      name: "Como",
      image:
        "https://a.cdn-hotels.com/gdcs/production163/d1616/24e46678-07e1-4f27-93d3-9eb979c2ae5e.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    },
    {
      name: "Lecce",
      image: "https://turismo.puglia.it/wp-content/uploads/sites/124/lecce-duomo-teatro-romano-hd.jpg",
    },
    {
      name: "Rimini",
      image:
        "https://a.cdn-hotels.com/gdcs/production162/d1386/52ac47d0-a527-11e8-bc7c-0242ac110002.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    },
    {
      name: "Siena",
      image:
        "https://tourismmedia.italia.it/is/image/mitur/20210311182031-enit-siena?wid=800&hei=500&fit=constrain,1&fmt=webp",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <MyNavbar />

      {/* City Cards */}
      {/* //Se selectedCity è null, vengono visualizzate le card delle città nella griglia. Se selectedCity ha un valore, viene visualizzata solo la card della città selezionata insieme al pulsante "Back". */}

      <div className="container">
        {!selectedCity ? (
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {" "}
            {/* //Se selectedCity è null, viene mappato l'array cities per creare e visualizzare le card delle città utilizzando il componente CityCard */}
            {/* Se selectedCity ha un valore, viene visualizzata la card della città selezionata utilizzando il componente CityDetailCard e un pulsante "Back" che permette all'utente di tornare alla lista delle città */}
            {cities.map((city, index) => (
              <div key={index} className="col">
                {" "}
                <CityCard cityName={city.name} cityImage={city.image} onCityClick={handleCityClick} />
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <button className="btn btn-primary" onClick={handleBackButtonClick}>
                Back
              </button>
              <CityDetailCard cityName={selectedCity} />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <MyFooter />
    </div>
  );
}

export default App;
