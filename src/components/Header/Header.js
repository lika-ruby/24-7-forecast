import styled from "styled-components";

export const HeaderS = styled.header`
  padding: 12px 0;

  @media (min-width: 808px) {
    padding: 20px 0;
  }
  @media (min-width: 1240px) {
    padding: 16px 0;
  }
`;

export const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoA = styled.a`
`;

export const LogoS = styled.svg`
  width: 84px;
  height: 84px;

  @media (min-width: 808px) {
    width: 66px;
    height: 66px;
  }
  @media (min-width: 1240px) {
    width: 86px;
    height: 86px;
  }
`;

export const Nav = styled.nav`
`;

export const List = styled.ul`
  display: none;

  @media (min-width: 808px) {
    display: flex;
    gap: 24px;
    align-items: center;
  }
  @media (min-width: 1240px) {
    gap: 32px;
  }
`;

export const Item = styled.li`
`;

export const Link = styled.a`
  @media (min-width: 808px) {
    font-family: "Besley", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--first-text-color);
  }
  @media (min-width: 1240px) {
    font-size: 16px;
  }
`;

export const Right = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (min-width: 808px) {
    gap: 32px;
  }
  @media (min-width: 1240px) {
    gap: 52px;
  }
`;

export const Buttons = styled.ul`
  display: none;

  @media (min-width: 808px) {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  @media (min-width: 1240px) {
    gap: 24px;
  }
`;

export const Button = styled.li`
`;

export const Btn1 = styled.button`
  @media (min-width: 808px) {
    font-family: "Fraunces", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: right;
    color: #fff;
    padding: 10px 28px;
    background: var(--second-accent-color);
  }
  @media (min-width: 1240px) {
    font-size: 18px;
    padding: 12px 32px;
  }
`;

export const Btn2 = styled.button`
  @media (min-width: 808px) {
    font-family: "Fraunces", sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: right;
    color: #fff;
    padding: 10px 28px;
    background: var(--first-accent-color);
  }
  @media (min-width: 1240px) {
    font-size: 18px;
    padding: 12px 32px;
  }
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;

  @media (min-width: 808px) {
    width: 48px;
    height: 48px;
  }
  @media (min-width: 1240px) {
    width: 60px;
    height: 60px;
  }
`;

export const ButtonB = styled.button`
  background-color: transparent;
  padding: 0;
`;

export const Burger = styled.svg`
  fill: var(--first-text-color);
  width: 44px;
  height: 44px;
  @media (min-width: 808px) {
    display: none;
  }
`;
