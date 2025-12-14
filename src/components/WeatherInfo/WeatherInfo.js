import styled from "styled-components";

export const Sect = styled.div`
  padding: 80px 0;
  display: none;

  @media (min-width: 808px) {
    padding: 96px 0;
  }
  @media (min-width: 1240px) {
    padding: 112px 0;
  }
`;

export const Cont = styled.div`
padding: 32px;
    background-color: var(--bg-color);


  @media (min-width: 808px) {
    padding: 48px;

  }
  @media (min-width: 1240px) {
    padding: 64px;

  }`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
    gap: 24px;

  @media (min-width: 808px) {
    gap: 20px;
  }
  @media (min-width: 1240px) {
        gap: 32px;

  }
`;

export const Item = styled.li`
       padding: 32px;
       width: 100%;
  background-color: var(--additional-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;


  @media (min-width: 808px) {
       max-width: 210px;
  gap: 0;

       padding: 24px;
height: 240px;

       

  }
  @media (min-width: 1240px) {
       padding: 32px;
    max-width: 336px;
height: 260px;

  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;

  @media (min-width: 808px) {
    gap: 8px;
  }
  @media (min-width: 1240px) {
    gap: 4px;
  }
`;

export const Name = styled.p`
  font-family: "Besley", sans-serif;
font-weight: 500;
font-size: 12px;
text-align: center;
color: var(--second-accent-color);

  @media (min-width: 808px) {
    font-size: 16px;
  }
  @media (min-width: 1240px) {
    font-size: 20px;
  }
`;

export const Data = styled.p`
font-family: "Fraunces", sans-serif;
font-weight: 400;
font-size: 32px;
  color: var(--second-text-color);

  @media (min-width: 808px) {
font-size: 36px;

  }
  @media (min-width: 1240px) {
   font-size: 40px;


  }
`;