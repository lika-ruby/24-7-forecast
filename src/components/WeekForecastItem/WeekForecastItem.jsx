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
import { Item, Wrap, Data } from "./WeekForecastItem";

export const WeekForecastItem = ({
  id,
  time,
  maxTemp,
  minTemp,
  iconType,
  desc,
}) => {
  return (
    <Item id={id}>
      <Data>
        {new Date(time).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </Data>
      <Wrap>
        {iconType === "Clear" ? (
          <WiDaySunny size={96} fill="#341355" />
        ) : iconType === "Clouds" ? (
          <WiCloudy size={96} fill="#341355" />
        ) : iconType === "Rain" ? (
          <WiRain size={96} fill="#341355" />
        ) : iconType === "Drizzle" ? (
          <WiRainMix size={96} fill="#341355" />
        ) : iconType === "Thunderstorm" ? (
          <WiThunderstorm size={96} fill="#341355" />
        ) : iconType === "Snow" ? (
          <WiSnowWind size={96} fill="#341355" />
        ) : iconType === "Mist" ? (
          <RiMistFill size={96} fill="#341355" />
        ) : iconType === "Smoke" ? (
          <WiSmoke size={96} fill="#341355" />
        ) : iconType === "Haze" ? (
          <BsCloudHaze2 size={96} fill="#341355" />
        ) : iconType === "Dust" ? (
          <WiDust size={96} fill="#341355" />
        ) : iconType === "Fog" ? (
          <WiFog size={96} fill="#341355" />
        ) : iconType === "Sand" ? (
          <WiSandstorm size={96} fill="#341355" />
        ) : iconType === "Ash" ? (
          <WiVolcano size={96} fill="#341355" />
        ) : iconType === "Squall" ? (
          <WiStrongWind size={96} fill="#341355" />
        ) : iconType === "Tornado" ? (
          <WiTornado size={96} fill="#341355" />
        ) : (
          <PiQuestionMarkBold size={96} fill="#341355" />
        )}
        <Data>
          {maxTemp}/{minTemp}℃
        </Data>
      </Wrap>
      <Data>{desc}</Data>
    </Item>
  );
};
