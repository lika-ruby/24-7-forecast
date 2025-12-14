import { useState } from "react";
import { createContext } from "react";
import { getLocation } from "../fetch/gets/getLocation";
import { getWeather } from "../fetch/gets/getWeather";
import { getWeatherById } from "../fetch/gets/getWeatherById";
import { getLocationById } from "../fetch/gets/getLocationById";
import { getHourlyForecast } from "../fetch/gets/getHourlyForecast";
import { getWeeklyForecast } from "../fetch/gets/getWeeklyForecast";

export const WeathersContext = createContext(null);

export const WeatherProvider = ({ children }) => {
  const [weathers, setWeathers] = useState(null);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherById, setWeatherById] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [weeklyWeather, setWeeklyWeather] = useState([]);

  const filterWeathers = () => {
    return weathers.filter((weather) =>
      weather.name.toLowerCase().includes(filter)
    );
  };

  const getArrayWeather = async () => {
    try {
      if (!filter) return [];
      const locs = await getLocation(filter, 5);

      if (!locs.length) return [];
      const weathers = await Promise.all(
        locs.map((loc) => getWeather(loc.lat, loc.lon))
      );

      return weathers;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const setNewFilter = (value) => {
    setFilter(value);
  };

  const getWeatherByIdObj = (id) => {
    getWeatherById(id).then((data) => {
      setWeatherById(data);
      document.querySelector("#hourly").style.display = "none";
      document.querySelector("#weekly").style.display = "none";
      document.querySelector("#info").style.display = "flex";
    });
  };

  const getHourlyWeather = async (id) => {
    getLocationById(id).then((loc) => {
      getHourlyForecast(loc.coord.lat, loc.coord.lon).then((weather) => {
        setHourlyWeather(weather);
        document.querySelector("#hourly").style.display = "flex";
        document.querySelector("#weekly").style.display = "none";
        document.querySelector("#info").style.display = "none";
      });
    });
  };

  const getWeeklyWeather = async (id) => {
    getLocationById(id).then((loc) => {
      getWeeklyForecast(loc.coord.lat, loc.coord.lon).then((weather) => {
        console.log(weather);
        setWeeklyWeather(weather);
        document.querySelector("#hourly").style.display = "none";
        document.querySelector("#weekly").style.display = "flex";
        document.querySelector("#info").style.display = "none";
      });
    });
  };

  return (
    <WeathersContext.Provider
      value={{
        weathers,
        filter,
        filterWeathers,
        setNewFilter,
        loading,
        setLoading,
        setWeathers,
        getArrayWeather,
        getWeatherByIdObj,
        weatherById,
        getHourlyWeather,
        hourlyWeather,
        getWeeklyWeather,
        weeklyWeather,
      }}
    >
      {children}
    </WeathersContext.Provider>
  );
};
