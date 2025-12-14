import styled from "styled-components";

export const SliderS = styled.div`
  padding: 80px 0;
  @media (min-width: 808px) {
    padding: 96px 0;
  }
  @media (min-width: 1240px) {
    padding: 112px 0;
  }
`;

export const Title = styled.h2`
  font-family: "Fraunces", sans-serif;
  font-weight: 400;
  font-size: 32px;
  color: var(--first-text-color);
  margin-bottom: 48px;
  text-align: center;
  @media (min-width: 808px) {
    margin-bottom: 72px;
  text-align: left;
    font-size: 40px;
  }
  @media (min-width: 1240px) {
    margin-bottom: 96px;
    font-size: 48px;
  }
`;

export const Wrapper = styled.div``;
