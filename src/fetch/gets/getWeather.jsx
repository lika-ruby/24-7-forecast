import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

export const getWeather = async (lat, lon) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat: lat,
        lon: lon,
        appid: API_KEY,
      },
    }
  );

  return response.data;
};
