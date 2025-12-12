import { Container } from "../Container/Container.jsx";

export const WeatherInfo = () => {
  return (
    <Sect>
      <Container>
        <Cont>
          <List>
            <Item>
              <Name>Feels like</Name>
              <Data></Data>
            </Item>
            <Item>
              <Wrapper>
                <Name>Min ℃</Name>
                <Data></Data>
              </Wrapper>
              <Wrappere>
                <Name>Max ℃</Name>
                <Data></Data>
              </Wrappere>
            </Item>
            <Item>
              <Name>Humidity</Name>
              <Data></Data>
            </Item>
            <Item>
              <Name>Pressure</Name>
              <Data></Data>
            </Item>
            <Item>
              <Name>Wind speed</Name>
              <Data></Data>
            </Item>
            <Item>
              <Name>Visibility</Name>
              <Data></Data>
            </Item>
          </List>
        </Cont>
      </Container>
    </Sect>
  );
};
