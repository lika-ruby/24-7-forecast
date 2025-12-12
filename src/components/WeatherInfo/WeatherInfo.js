import styled from "styled-components";

export const Sect = styled.div`
  padding: 24px;
  background-color: var(--second-bg-color);
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 808px) {
    max-width: 374px;
    gap: 24px;
  }
  @media (min-width: 1240px) {
    max-width: 386px;
    gap: 28px;
  }
`;

export const Cont = styled.div`
padding: 24px;
  background-color: var(--second-bg-color);
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 808px) {
    max-width: 374px;
    gap: 24px;
  }
  @media (min-width: 1240px) {
    max-width: 386px;
    gap: 28px;
  }`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  @media (min-width: 808px) {
    margin-bottom: 12px;
  }
  @media (min-width: 1240px) {
    margin-bottom: 16px;
  }
`;

export const Item = styled.li`
  font-family: "Besley", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: var(--first-accent-color);

  @media (min-width: 808px) {
    font-size: 14px;
  }
  @media (min-width: 1240px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  @media (min-width: 808px) {
    gap: 12px;
    margin-bottom: 6px;
  }
  @media (min-width: 1240px) {
    gap: 16px;
    margin-bottom: 8px;
  }
`;

export const Name = styled.p`
  font-family: "Besley", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: var(--first-text-color);

  @media (min-width: 808px) {
    font-size: 14px;
  }
  @media (min-width: 1240px) {
    font-size: 16px;
  }
`;

export const Data = styled.p`
  width: 1px;
  height: 12px;
  background-color: var(--first-text-color);

  @media (min-width: 808px) {
    height: 17px;
  }
  @media (min-width: 1240px) {
    height: 21px;
  }
`;