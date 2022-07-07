import styled from "styled-components";
import "../css/typography.css";

const StyledTitle = styled.h1`
  font-size: 48px;
  font-family: "Archivo Bold";
  text-align: left;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
