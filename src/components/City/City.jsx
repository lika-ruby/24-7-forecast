import {
  Item,
  Top,
  Places,
  Place,
  Dates,
  DateS,
  Line,
  Time,
  Center,
  Temp,
  Buttons,
  Button,
  Down,
  More,
} from "./City.js";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiRainMix,
  WiThunderstorm,
  WiSnowWind,
  WiSmoke,
  WiDust,
  WiFog,
  WiSandstorm,
  WiVolcano,
  WiStrongWind,
  WiTornado,
} from "react-icons/wi";
import { RiMistFill } from "react-icons/ri";
import { BsCloudHaze2 } from "react-icons/bs";
import { PiQuestionMarkBold } from "react-icons/pi";
import { TbHeartMinus } from "react-icons/tb";
import { TbHeartPlus } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
import { useContext } from "react";
import { WeathersContext } from "../../contexts/WeatherContext.jsx";

export const City = ({ id, city, country, temp, iconType, timezone }) => {
  const { getWeatherByIdObj, getHourlyWeather, getWeeklyWeather } =
    useContext(WeathersContext);
  const now = new Date().getTime();
  const nowTimezone = new Date(now + timezone * 1000);

  const year = nowTimezone.getFullYear();
  const month = String(nowTimezone.getMonth() + 1).padStart(2, "0");
  const day = String(nowTimezone.getDate() + 1).padStart(2, "0");
  const hours = String(nowTimezone.getHours() + 1).padStart(2, "0");
  const mins = String(nowTimezone.getMinutes() + 1).padStart(2, "0");

  return (
    <Item id={id}>
      <Top>
        <Places>
          <Place>{city}</Place>
          <Place>{country}</Place>
        </Places>
        <Dates>
          <DateS>
            {day}.{month}.{year}
          </DateS>
          <Line />
          <DateS>Friday</DateS>
        </Dates>
        <Time>
          {hours}:{mins}
        </Time>
      </Top>
      <Center>
        {iconType === "Clear" ? (
          <WiDaySunny size={172} fill="#341355" />
        ) : iconType === "Clouds" ? (
          <WiCloudy size={172} fill="#341355" />
        ) : iconType === "Rain" ? (
          <WiRain size={172} fill="#341355" />
        ) : iconType === "Drizzle" ? (
          <WiRainMix size={172} fill="#341355" />
        ) : iconType === "Thunderstorm" ? (
          <WiThunderstorm size={172} fill="#341355" />
        ) : iconType === "Snow" ? (
          <WiSnowWind size={172} fill="#341355" />
        ) : iconType === "Mist" ? (
          <RiMistFill size={172} fill="#341355" />
        ) : iconType === "Smoke" ? (
          <WiSmoke size={172} fill="#341355" />
        ) : iconType === "Haze" ? (
          <BsCloudHaze2 size={172} fill="#341355" />
        ) : iconType === "Dust" ? (
          <WiDust size={172} fill="#341355" />
        ) : iconType === "Fog" ? (
          <WiFog size={172} fill="#341355" />
        ) : iconType === "Sand" ? (
          <WiSandstorm size={172} fill="#341355" />
        ) : iconType === "Ash" ? (
          <WiVolcano size={172} fill="#341355" />
        ) : iconType === "Squall" ? (
          <WiStrongWind size={172} fill="#341355" />
        ) : iconType === "Tornado" ? (
          <WiTornado size={172} fill="#341355" />
        ) : (
          <PiQuestionMarkBold size={172} fill="#341355" />
        )}
        <Temp>{temp}℃</Temp>
      </Center>
      <Buttons>
        <Button onClick={() => getHourlyWeather(id)}>Hourly forecast</Button>
        <Button onClick={() => getWeeklyWeather(id)}>Weekly forecast</Button>
      </Buttons>
      <Down>
        <TbHeartPlus size={36} stroke="#341355" />
        <TbHeartMinus size={36} stroke="#341355" />
        <More onClick={() => getWeatherByIdObj(id)}>See more</More>
        <FaArrowsRotate size={36} fill="#077066" />
      </Down>
    </Item>
  );
};
