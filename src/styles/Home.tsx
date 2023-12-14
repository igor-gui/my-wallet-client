import styled from "styled-components";
import { textColor } from ".";

export const HomeStyle = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const Container = styled.div`
    
      margin-top: 5%;
      display: flex;
      height: 100%;
      flex-direction: column;
      width: 80%;
      background-color: "#630b86";
      align-items: center;
      justify-content: center;
      div {
        display: flex;
        width: 80%;
        justify-content: space-between;
      h1 {
        color: ${() => textColor};
        font-family: "Raleway";
        font-weight: 700;
        font-size: 26px;
      }
      h2 {
        color: ${() => textColor};
        font-family: "Raleway";
        font-weight: 700;
        font-size: 26px;
        cursor: pointer;
      }
    }
    
  
`;