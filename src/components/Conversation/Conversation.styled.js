import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 80vh;
  @media(min-width: 600px) {
    width: 50%;
  }
`;

export const TopBar = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%; 
  background-color: rgba(200, 200, 200, .8);
  border-top: 4px solid rgb(150, 150, 150);
`;

export const Flow = styled.div`
  overflow: auto;
  height: 100%;
`;

export const InputWrapper = styled.div`
  border-top: 1px solid rgba(220, 220, 220, .8);
  padding: 10px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 20px;
  box-shadow: 0px 1px 3px rgba(220, 220, 220, .5);
  width: 100%;
  padding: 10px;
`;
