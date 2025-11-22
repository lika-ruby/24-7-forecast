import { Container } from "../Container/Container.jsx";
import { HeroS, Title, Wrapper, TextL, TextR, Line } from "./Hero.js";

export const Hero = () => {
  return (
    <HeroS>
      <Container>
        <Title>Weather dashboard</Title>
        <Wrapper>
          <TextL>
            Create your personal list of favorite cities and always be aware of
            the weather.
          </TextL>
          <Line></Line>
          <TextR>October 2023 Friday, 13th</TextR>
        </Wrapper>
      </Container>
    </HeroS>
  );
};
