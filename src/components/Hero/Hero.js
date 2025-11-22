import styled from "styled-components";
import heroPhoto from "../../images/hero-photo.webp";

export const HeroS = styled.div`
  padding: 158px 0;
  background-image: radial-gradient(
      circle,
      rgba(24, 2, 51, 0.5) 68%,
      rgba(24, 2, 51, 0.45) 82%,
      rgba(24, 2, 51, 0.3) 100%
    ),
    url(${heroPhoto});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 808px) {
    padding: 187px 0;
  }
  @media (min-width: 1240px) {
    padding: 209px 0;
  }
`;

export const Title = styled.h1`
  font-family: "Fraunces", sans-serif;
  font-weight: 400;
  font-size: 48px;
  text-align: center;
  color: var(--additional-color);
  margin-bottom: 24px;

  @media (min-width: 808px) {
    font-size: 72px;
    margin-bottom: 28px;
  }
  @media (min-width: 1240px) {
    font-size: 96px;
    margin-bottom: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  @media (min-width: 808px) {
    flex-direction: row;
    gap: 32px;
  }
  @media (min-width: 1240px) {
    gap: 40px;
  }
`;

export const TextL = styled.p`
  font-family: "Besley", sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: var(--additional-color);
  width: 228px;

  @media (min-width: 808px) {
    font-size: 16px;
    text-align: right;
    width: 232px;
  }
  @media (min-width: 1240px) {
    font-size: 20px;
    width: 296px;
  }
`;

export const TextR = styled.p`
  font-family: "Besley", sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: var(--additional-color);
  width: 94px;

  @media (min-width: 808px) {
    font-size: 16px;
    text-align: left;
    width: 107px;
  }
  @media (min-width: 1240px) {
    font-size: 20px;
    width: 134px;
  }
`;

export const Line = styled.div`
  width: 254px;
  height: 2px;
  background-color: var(--additional-color);

  @media (min-width: 808px) {
    width: 2px;
    height: 109px;
  }
  @media (min-width: 1240px) {
    width: 3px;
    height: 141px;
  }
`;
