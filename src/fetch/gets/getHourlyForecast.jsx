import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

export const getHourlyForecast = async (lat, lon) => {
  const res = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        lat: lat,
        lon: lon,
        units: "metric",
        appid: API_KEY,
      },
    }
  );

  return res.data.list.slice(0, 8);
};
