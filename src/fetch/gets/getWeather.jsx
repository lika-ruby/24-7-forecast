import axios from "axios";

export const getWeather = async (lat, lon) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat: lat,
        lon: lon,
        appid: "366259874904f9faa4c4a5c3c3a6deab",
      },
    }
  );

  return response.data;
};
