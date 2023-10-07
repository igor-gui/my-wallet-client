import styled from "styled-components";
import { maxWidth, textColor } from ".";

export const HomeStyle = styled.main`
  width: 100%;
  height: 100%;
  min-height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;

    align-items: center;
    justify-content: center;
    h1 {
      color: ${() => textColor};
      font-family: "Raleway";
      ${maxWidth}
      width: 80%;
      text-align: left;
      font-weight: 700;
      font-size: 26px;
    }
  }
`;