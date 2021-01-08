import React, { useState, useEffect } from "react";

export function Main() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    async function loadWeather() {
      const url = `api.openweathermap.org/data/2.5/weather?q=clearwater&appid=46911f906cadc2dcfe25045b2f3726ef`;

      const response = await fetch(url);
      const json = response.json();
      console.log(json);
    }
    loadWeather();
  }, [city]);

  return (
    <main>
      <div>
        <h1>Search Weather condition by city</h1>
        <form>
          <input
            type="text"
            value={city}
            onChange={(event) => event.target.value}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
