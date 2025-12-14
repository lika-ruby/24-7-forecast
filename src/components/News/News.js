import styled from "styled-components";

export const NewsS = styled.div`
  padding: 80px 0;
  background-color: var(--bg-color);
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

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 808px) {
    gap: 20px;
  }
`;

export const Button = styled.button`
  font-family: "Besley", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: var(--additional-color);
  background: var(--first-text-color);
  padding: 12px 44px;
  width: 100%;
  margin-top: 32px;

  @media (min-width: 808px) {
    font-size: 16px;
    padding: 8px 44px;
    width: auto;
  margin-top: 28px;
  }
  @media (min-width: 1240px) {
    font-size: 20px;
  margin-top: 56px;
    padding: 12px 48px;
  }
`;
