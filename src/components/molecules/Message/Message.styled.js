"use strict";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${props => props.isOwner ? 'start' : 'end'};
  align-items: center;
  width: 90%;
`

export const Tile = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px grey;
  margin: 20px 5px;
  width: 100%;
  display:flex;
  padding: 10px 2px;
  gap: 10%;
  background-color: ${props => props.color};
  &:before {
    position: static;
    width: 0;
    margin-top: -30px;
    content: "${props => props.author}";
    color: lightgrey;
  }
`;
