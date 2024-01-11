"use strict";
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
  display:flex;
  top: 50px;
  left: 0;
  width: 100%; 
  background-color: rgba(200, 200, 200, .8);
  border-top: 4px solid rgb(150, 150, 150);
  font-weight: 600;
  >div:first-child {
    flex: 1;
  }
  >div:last-child {
    flex: 1;
    display: none;
    @media(min-width: 600px) {
      display: block;
    }
  }
`;

export const Flow = styled.div`
  overflow: auto;
  height: 100%;
`;

export const BottomMessage = styled.div``;
