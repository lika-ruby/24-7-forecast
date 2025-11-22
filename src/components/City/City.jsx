import {
  Item,
  Top,
  Places,
  Place,
  Dates,
  Date,
  Line,
  Time,
  Center,
  Img,
  Temp,
  Buttons,
  Button,
  Down,
  Icon,
  IconH,
  More,
} from "./City.js";

import avatar from "../../images/avatar.webp";

export const City = () => {
  return (
    <Item>
      <Top>
        <Places>
          <Place>Prague</Place>
          <Place>Czech Republic</Place>
        </Places>
        <Dates>
          <Date>13.10.2023</Date>
          <Line />
          <Date>Friday</Date>
        </Dates>
        <Time>14:00</Time>
      </Top>
      <Center>
        <Img src={avatar} alt="" />
        <Temp>22℃</Temp>
      </Center>
      <Buttons>
        <Button>Hourly forecast</Button>
        <Button>Weekly forecast</Button>
      </Buttons>
      <Down>
        <Icon>
          <use href="/icon.svg#round-arrow"></use>
        </Icon>
        <IconH>
          <use href="/icon.svg#heart"></use>
        </IconH>
        <More>See more</More>
        <Icon>
          <use href="/icon.svg#trashbin"></use>
        </Icon>
      </Down>
    </Item>
  );
};
