import { Container } from "../Container/Container.jsx";
import { Sect, Title, List } from "./WeekForecast.js";
import { WeekForecastItem } from "../WeekForecastItem/WeekForecastItem.jsx";
import { WeathersContext } from "../../contexts/WeatherContext.jsx";
import { useContext } from "react";

export const WeekForecast = () => {
  const { weeklyWeather } = useContext(WeathersContext);
  return (
    <Sect id="weekly">
      <Container>
        <Title>Weather dashboard</Title>
        <List>
          {weeklyWeather.map((wez, index) => (
            <WeekForecastItem
              key={index}
              id={index}
              time={wez.dt_txt}
              maxTemp={wez.main.temp_max}
              minTemp={wez.main.temp_min}
              iconType={wez.weather[0].main}
              desc={wez.weather[0].description}
            />
          ))}
        </List>
      </Container>
    </Sect>
  );
};
