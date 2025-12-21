import styled from "styled-components";

export const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    z - index: 4;

    &.is-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
}
`;

export const Modal = styled.div`
    width: calc(100% - 30px);
    max-width: 340px;
    background-color: var(--additional-color);
    position: relative;
    top: 50%;
    left: 50%;
    padding: 32px;
    z - index: 5;
    transform: translate(-50%, -50%);

    @media (min-width: 808px) {
        width: 100%;
        max-width: 473px;
    padding: 36px;


    }
    @media (min-width: 1240px) {
        max-width: 592px;
    padding: 48px;

    }
`;

export const Form = styled.form`
`;


export const Title = styled.h2`
    font-family: "Fraunces", sans-serif;
    font-weight: 400;
    font-size: 32px;
    color: var(--first-text-color);
    margin-bottom: 20px;

    @media (min-width: 808px) {
font-weight: 400;
    margin-bottom: 24px;
font-size: 40px;


    }
    @media (min-width: 1240px) {
font-size: 48px;
    margin-bottom: 32px;
    }
`;

export const Wrap = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;

    @media (min-width: 808px) {
    gap: 8px;
    }

    @media (min-width: 1240px) {
    gap: 12px;
    }
`;

export const Label = styled.label`
`;

export const Input = styled.input`
    font-family: "Fraunces", sans-serif;
font-weight: 400;
font-size: 12px;
color: var(--first-text-color);
padding: 12px 16px;
width: 100%;
max-width: 246px;
background-color: var(--second-bg-color);
border: none;

    @media (min-width: 808px) {
font-size: 14px;
padding: 16px 20px;
max-width: 401px;

    }
    @media (min-width: 1240px) {
    font-size: 16px;
padding: 20px 24px;
max-width: 496px;
    }

    &::placeholder{
    color: #8263b6;
}
`;
export const Cont = styled.div`
    width: 200px;
    margin: auto;
    margin-top: 20px;

    flex-direction: column;
    @media (min-width: 808px) {
    margin-top: 24px;
    width: 300px;

    }
    @media (min-width: 1240px) {
    margin-top: 32px;
    }
`;
export const Button = styled.button`
    font-family: "Fraunces", sans-serif;
font-weight: 400;
font-size: 14px;
color: #fff;
background: #077066;
padding: 8px 32px;
    margin-bottom: 4px;

    @media (min-width: 808px) {
font-size: 16px;
padding: 12px 36px;
    margin-bottom: 8px;
    }

    @media (min-width: 1240px) {
font-size: 20px;
padding: 12px 48px;
    margin-bottom: 12px;
    }
`;
export const Text = styled.button`
    font-family: "Besley", sans-serif;
font-weight: 500;
font-size: 8px;
color: #341355;
background: transparent;

    @media (min-width: 808px) {
        font-size: 10px;
    }
    @media (min-width: 1240px) {
        font-size: 12px;
    }
`;

export const CLose = styled.button`
font-family: "Besley", sans-serif;
font-weight: 500;
font-size: 24px;
text-align: right;
color: #341355;
background: transparent;
position: absolute;
right: 16px;
top: 16px;

    @media (min-width: 808px) {
font-size: 28px;
right: 20px;
top: 20px;
    }
    @media (min-width: 1240px) {
font-size: 32px;
right: 24px;
top: 24px;
    }
`;

// .is - hidden {
//     opacity: 0;
//     pointer - events: none;
//     visibility: hidden;
// }

// .no - scroll {
//     overflow: hidden;
// }