import { Container } from "../Container/Container.jsx";
import { Sect, Cont, List, Item, Wrapper, Name, Data } from "./WeatherInfo.js";
import { CiTempHigh } from "react-icons/ci";
import { BsCloudRain } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { LuWind } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { WeathersContext } from "../../contexts/WeatherContext.jsx";
import { useContext } from "react";

export const WeatherInfo = () => {
  const { weatherById } = useContext(WeathersContext);
  console.log(weatherById);

  return (
    <Sect id="info">
      <Container>
        <Cont>
          <List>
            <Item>
              <Wrapper>
                <Name>Feels like</Name>
                <Data>
                  {weatherById === null ? "" : weatherById.main.feels_like}℃
                </Data>
              </Wrapper>
              <CiTempHigh size={80} fill=" var(--first-text-color)" />
            </Item>
            <Item>
              <Wrapper>
                <Name>Min ℃</Name>
                <Data>
                  {weatherById === null ? "" : weatherById.main.temp_min}℃
                </Data>
              </Wrapper>
              <Wrapper>
                <Name>Max ℃</Name>
                <Data>
                  {weatherById === null ? "" : weatherById.main.temp_max}℃
                </Data>
              </Wrapper>
            </Item>
            <Item>
              <Wrapper>
                <Name>Humidity</Name>
                <Data>
                  {weatherById === null ? "" : weatherById.main.humidity}%
                </Data>
              </Wrapper>
              <BsCloudRain size={80} fill=" var(--first-text-color)" />
            </Item>
            <Item>
              <Wrapper>
                <Name>Pressure</Name>
                <Data>
                  {weatherById === null ? "" : weatherById.main.pressure} Pa
                </Data>
              </Wrapper>
              <BsSpeedometer2 size={80} fill=" var(--first-text-color)" />
            </Item>
            <Item>
              <Wrapper>
                <Name>Wind speed</Name>
                <Data>
                  {weatherById === null ? "" : weatherById.wind.speed} m/s
                </Data>
              </Wrapper>
              <LuWind size={80} stroke=" var(--first-text-color)" />
            </Item>
            <Item>
              <Wrapper>
                <Name>Visibility</Name>
                <Data>
                  {weatherById === null ? "" : weatherById.visibility}
                </Data>
              </Wrapper>
              <LuEye size={80} stroke=" var(--first-text-color)" />
            </Item>
          </List>
        </Cont>
      </Container>
    </Sect>
  );
};
