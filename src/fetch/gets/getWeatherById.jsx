import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

export const getWeatherById = async (id) => {
  console.log(API_KEY);
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        id: id,
        appid: API_KEY,
        units: "metric",
        lang: "en",
      },
    }
  );

  return response.data;
};
