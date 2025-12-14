import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENWEATHER_KEY;

export const getWeeklyForecast = async (lat, lon) => {
  const res = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        lat,
        lon,
        units: "metric",
        appid: API_KEY,
      },
    }
  );

  const list = res.data.list;

  const dailyData = () => {
    const daily = {};

    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!daily[date]) {
        daily[date] = item;
      }
    });

    return Object.values(daily);
  };

  return dailyData();
};
