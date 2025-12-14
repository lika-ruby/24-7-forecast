import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

export const getLocationById = async (id) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        id: id,
        appid: API_KEY,
      },
    }
  );

  return response.data;
};
