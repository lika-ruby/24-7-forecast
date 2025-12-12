import { useState } from "react";
import { createContext } from "react";
import { getLocation } from "../fetch/gets/getLocation";
import { getWeather } from "../fetch/gets/getWeather";

export const WeathersContext = createContext(null);

export const WeatherProvider = ({ children }) => {
  const [weathers, setWeathers] = useState(null);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

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
      }}
    >
      {children}
    </WeathersContext.Provider>
  );
};
