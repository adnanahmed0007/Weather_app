import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [fvalue, setValue] = useState("");
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [temp, setTemp] = useState(0);
  const [lon, setLon] = useState(0);
  const [lat, setLat] = useState(0);
  const [name, setName] = useState("");
  const [wind, setWind] = useState(0);
  const [windD, setWindD] = useState(0);
  const [weather, setWeather] = useState([]);
  const [main, setMian] = useState(" ");
  const [des, setDEs] = useState(" ");
  const [pres, setPres] = useState(" ");
  const [hum, setHum] = useState(" ");
  useEffect(() => {
    if (click) {
      async function fetchData() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${fvalue}&appid=41fb06be4bf1c417adba2b21f6b60856`;
        const response = await fetch(url);
        const data = await response.json();
        const temp1 = data.main.temp - 273.15;
        const lon1 = data.coord.lon;
        const name1 = data.name;
        const wind1 = data.wind.speed;
        const pressure1 = data.main.pressure;
        const lat1 = data.coord.lat;
        const degree = data.wind.deg;
        const weather1 = data.weather;
        const humidiy1 = data.main.humidity;
        setLat(lat1);
        setTemp(temp1);
        setLon(lon1);
        setName(name1);
        setWind(wind1);
        setWindD(degree);
        setWeather(weather1);
        setPres(pressure1);
        setHum(humidiy1);
        console.log(data);

        const k = weather1.map((items) => {
          setMian(items.main);
          setDEs(items.description);
        });
      }
      fetchData();
      setClick(false);
      setValue(" ");
    }
  }, [click]);
  useEffect(() => {
    if (click2) {
      setLat(" ");
      setTemp(" ");
      setLon(" ");
      setName(" ");
      setWind(" ");
      setWindD(" ");
      setWeather(" ");
      setMian(" ");
      setDEs(" ");
    }
  }, [click2]);
  return (
    <div className="App">
      <div className="header">
        <input
          className="header"
          type="text"
          placeholder="Enter the city name"
          onChange={(e) => setValue(e.target.value)}
          value={fvalue}
        />
        <button
          className="header"
          onClick={() => {
            setClick((prev) => {
              return !prev;
            });
          }}
        >
          Search
        </button>
      </div>
      <div className="main">
        {temp && !click2 ? (
          <div>
            <h3>
              The temperature of {name} is {temp} `C
            </h3>
          </div>
        ) : (
          <h3> The temperature of is `C</h3>
        )}
        {pres && !click2 ? (
          <div>
            <h3>
              The pressure of air in {name} is {pres} pascal
            </h3>
          </div>
        ) : (
          <h3>The pressure of air in is pascal</h3>
        )}
        {hum && !click2 ? (
          <div>
            <h3>
              The humidity in air in {name} is {hum}
            </h3>
          </div>
        ) : (
          <h3>The humidity air in is pascal</h3>
        )}
        {lon && !click2 ? (
          <div>
            <h3>
              The longitude of {name} is {lon} degree
            </h3>
          </div>
        ) : (
          <h3> The longitude of is degree</h3>
        )}
        {lat && !click2 ? (
          <div>
            <h3>
              The latitude of {name} is {lat} degree
            </h3>
          </div>
        ) : (
          <h3>The latitude of is degree</h3>
        )}
        {wind && !click2 ? (
          <div>
            <h3>
              The speed of air in {name} is {wind} m/s
            </h3>
          </div>
        ) : (
          <h3>The speed of air in is m/s</h3>
        )}

        {main && !click2 && name ? (
          <div>
            <h3>
              {name} is {main}
            </h3>
          </div>
        ) : (
          <h3>is</h3>
        )}
      </div>
      <button
        className="reset"
        onClick={() => {
          setClick2((prev) => {
            return !prev;
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}
