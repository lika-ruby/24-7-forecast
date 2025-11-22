import styled from "styled-components";

export const CitiesS = styled.div`
  padding: 80px 0;

  @media (min-width: 808px) {
    padding: 96px 0;
  }
  @media (min-width: 1240px) {
    padding: 112px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 48px;

  @media (min-width: 808px) {
    gap: 8px;
    margin-bottom: 52px;
    flex-direction: row;
  }
  @media (min-width: 1240px) {
    margin-bottom: 64px;
    gap: 12px;
  }
`;

export const Input = styled.input`
  font-family: "Besley", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: var(--first-text-color);
  padding: 10px 24px;
  background: var(--bg-color);
  border: none;
  width: 100%;

  @media (min-width: 808px) {
    padding: 12px 32px;
    max-width: 369px;
  }
  @media (min-width: 1240px) {
    font-size: 20px;
    padding: 16px 36px;
    max-width: 463px;
  }

  &::placeholder {
    color: var(--first-accent-color);
  }
`;

export const Search = styled.button`
  font-family: "Besley", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: var(--additional-color);
  padding: 10px 72px;
  width: 100%;
  background: var(--second-text-color);

  @media (min-width: 808px) {
    font-size: 16px;
    width: auto;
    padding: 12px 32px;
  }
  @media (min-width: 1240px) {
    font-size: 20px;
    padding: 16px 36px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media (min-width: 808px) {
    gap: 20px;
  }
`;
