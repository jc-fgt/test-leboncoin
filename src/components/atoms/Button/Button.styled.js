"use strict";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 20px;
  color: #fff;
  font-weight: 400;
  font-size: 14pt;
  padding: 5px 10px;
  cursor: pointer;
  margin: 0 auto;
`;

export const OrangeButton = styled(Button)`
  background: rgb(244, 96, 7);
`;

export const GreenButton = styled(Button)`
  background: rgb(77, 132, 81);
`;

export const GreyButton = styled(Button)`
  background: rgb(150, 150, 150);
  cursor: not-allowed;
`;