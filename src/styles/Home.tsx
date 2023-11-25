import styled from "styled-components";
import { maxWidth, textColor } from ".";

export const HomeStyle = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    margin-top: 5%;
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
    background-color: "#630b86";
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