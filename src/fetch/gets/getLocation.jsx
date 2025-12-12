import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

export const getLocation = async (city, limit) => {
  const response = await axios.get(
    "https://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: city,
        limit,
        appid: API_KEY,
      },
    }
  );

  return response.data;
};
