import styled from "styled-components";

export const Item = styled.li`
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

export const Top = styled.div`
`;

export const Places = styled.div`
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

export const Place = styled.p`
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

export const Dates = styled.div`
display: flex;
gap:10px;
align-items: center;
justify-content: center;
margin-bottom: 4px;
@media (min-width: 808px) {
gap:12px;
margin-bottom: 6px;

  }
  @media (min-width: 1240px) {
gap:16px;
margin-bottom: 8px;

  }
`;

export const DateS = styled.p`
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

export const Line = styled.div`
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

export const Time = styled.p`
  font-family: "Fraunces", sans-serif;
font-weight: 400;
font-size: 18px;
color: var(--first-text-color);

  @media (min-width: 808px) {
   font-size: 20px;
  }
  @media (min-width: 1240px) {
    font-size: 24px;
  }
`;

export const Center = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap :12px;

 @media (min-width: 808px) {
   gap: 16px;
  }
`;

export const Img = styled.svg`
width: 108px;
height: 108px;
  @media (min-width: 808px) {
   width: 124px;
height: 124px;
  }
  @media (min-width: 1240px) {
   width: 158px;
height: 158px;
  }
`;

export const Temp = styled.p`
font-family: "Fraunces", sans-serif;
font-weight: 600;
font-size: 32px;
color: var(--first-text-color);
  @media (min-width: 808px) {
    font-size: 36px;
  }
  @media (min-width: 1240px) {
   font-size: 40px;
  }
`;

export const Buttons = styled.div`
 display: flex;
 justify-content: space-between;
`;

export const Button = styled.button`
font-family: "Besley", sans-serif;
font-weight: 500;
font-size: 10px;
text-align: right;
color:var(--additional-color);
padding: 6px 20px;
background: var(--second-accent-color);

@media (min-width: 808px) {
    font-size: 12px;
    padding: 8px 16px;
  }
  @media (min-width: 1240px) {
   font-size: 14px;
   padding: 8px 20px;
  }
`;

export const Down = styled.div`
display:flex;
 justify-content: space-between;
align-items: center;
`;

export const More = styled.button`
  font-family: "Besley", sans-serif;
font-weight: 500;
font-size: 12px;
text-align: right;
color: var(--additional-color);
padding: 6px 20px;
background: var(--first-text-color);

 @media (min-width: 808px) {
    font-size: 14px;
    padding: 10px 20px;
  }
  @media (min-width: 1240px) {
  font-size: 16px;
  padding: 12px 24px;
  }
`;
