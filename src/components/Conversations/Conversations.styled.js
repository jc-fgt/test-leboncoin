import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  width: 50vh;
`

export const Tile = styled(Link)`
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px grey;
  margin: 5px;
  width: 100%;
  display:flex;
  padding: 10px 2px;
  gap: 10%;
`;

export const LeftSideTile = styled.div`
  padding-top: 3px;
`;

export const RightSideTile = styled.div`
`;

export const Persona = styled.div`
  margin: 0 10px 0;
  border-radius: 20px;
  height: 30px;
  width: 30px;
  background-color: ${props => props.color.value};
  &:after {
    line-height: 33px;
    padding: 0 10px;
    content: "${props => props.color.character}";
  }
`
