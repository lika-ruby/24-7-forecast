import { Container } from "../Container/Container.jsx";
import { WeathersContext } from "../../contexts/WeatherContext.jsx";
import { useContext, useEffect } from "react";
import { CitiesS, Form, Input, Search, List } from "./Cities.js";
import { City } from "../City/City.jsx";
import { useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

export const Cities = () => {
  const [city, setCity] = useState("");
  const { filter, getArrayWeather, setNewFilter } = useContext(WeathersContext);
  const [weatherList, setWeatherList] = useState([]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewFilter(city);
    setCity("");
  };

  useEffect(() => {
    (async () => {
      const data = await getArrayWeather();
      setWeatherList(data);
    })();
  }, [filter]);

  return (
    <CitiesS>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Search location..."
            type="text"
            value={city}
            onChange={handleChange}
            required
            name="name"
          />
          <Search>Search</Search>
        </Form>
        {filter === "" ? (
          <p>A</p>
        ) : (
          <List>
            {console.log(weatherList)}
            {weatherList.map((wez) => (
              <City
                key={wez.id}
                id={wez.id}
                city={wez.name}
                country={countries.getName(wez.sys.country, "en")}
                temp={Math.round(wez.main.temp - 273.15)}
                iconType={wez.weather[0].main}
                timezone={wez.timezone}
              />
            ))}
          </List>
        )}
      </Container>
    </CitiesS>
  );
};
