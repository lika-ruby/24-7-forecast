import styled from "styled-components";

export const Item = styled.li`
  width: 320px;
  @media (min-width: 808px) {
    width: 242px;
  }
  @media (min-width: 1240px) {
    width: 285px;
`;

export const Img = styled.img`
  width: 320px;
  height: 211px;
  @media (min-width: 808px) {
    width: 242px;
    height: 162px;
  }
  @media (min-width: 1240px) {
    width: 285px;
    height: 190px;
  }
`;

export const Down = styled.div`
  padding: 24px;
  background-color: var(--additional-color);

  @media (min-width: 808px) {
    padding: 18px;
  }
  @media (min-width: 1240px) {
    padding: 24px;
  }
`;

export const Title = styled.h3`
  font-family: "Fraunces", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: var(--first-text-color);
  margin-bottom: 16px;
  text-align: left;
  @media (min-width: 808px) {
    font-size: 16px;
  }
  @media (min-width: 1240px) {
    font-family: "Fraunces", sans-serif;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const Link = styled.a`
  padding: 8px 24px;
  width: 100%;
  font-family: "Besley", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color:  var(--additional-color);
  display: block;
  background: var(--second-text-color);

  @media (min-width: 808px) {
    font-size: 14px;
    padding: 6px 24px;
  }
  @media (min-width: 1240px) {
    font-size: 16px;
    padding: 8px 24px;
  }
`;
