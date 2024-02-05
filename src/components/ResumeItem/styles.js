// ResumeItem/styles.js

// Import styled-components library
import styled from "styled-components";

// Styled component Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;
  
  @media (max-width: 750px) {
    width: 20%;
    
    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`;

// Styled component Header
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;
  

  svg {
    width: 25px;
    height: 25px;
  }
`;

// Styled component HeaderTitle
export const HeaderTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

// Styled component Total
export const Total = styled.span`
  font-size: 30px;
  font-family: 'Arvo', serif;
  font-family: 'Oswald', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-family: 'Protest Revolution', sans-serif;
   
`;
