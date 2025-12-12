import axios from "axios";

export const getLocation = async (city, limit) => {
  const response = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: city,
        limit,
        appid: "366259874904f9faa4c4a5c3c3a6deab",
      },
    }
  );

  return response.data;
};
