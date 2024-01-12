"use strict";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  z-index:10;
`;

export const Container = styled.div`
  display: grid;
  margin: 15vh auto;
  width: 20rem;
  height: 20rem;
  background: #FFF;
  border-radius: 10px;
`;

export const ContainerBody = styled.div`
  display: grid;
  gap: 70px;
  text-align: center;
`;

export const TitleContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  font-weight: 600;
`;

export const Select = styled.select`
  border-radius: 20px;
`;

export const Close = styled.div`
  border-radius: 20px;
  background: rgba(200,200,200,.8);
  position: relative;
  top: 10px;
  left: 290px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:after {
    padding: 4px;
    content: "X";
  }
`;