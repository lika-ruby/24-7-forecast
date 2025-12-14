import styled from "styled-components";

export const Item = styled.div`
  padding: 12px 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:var(--second-bg-color);
  @media (min-width: 808px) {
      padding: 16px 48px;

  }
  @media (min-width: 1240px) {
      padding: 20px 56px;

  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (min-width: 808px) {
    gap: 16px;
  }
  @media (min-width: 1240px) {
    gap: 18px;
  }
`;

export const Data = styled.div`
  font-family: "Fraunces", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: var(--first-accent-color);
  @media (min-width: 808px) {
    font-size: 16px;
  }
  @media (min-width: 1240px) {
    font-size: 20px;
  }
`;
