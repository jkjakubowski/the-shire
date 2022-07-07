import styled from "styled-components";
import "../css/typography.css";

const StyledBigDescription = styled.p`
  font-size: 32px;
  text-align: left;
  font-family: "Archivo";
  margin-top: 32px;
  margin-bottom: 16px;
`;

const BigDescription = ({ children, color }) => {
  return <StyledBigDescription>{children}</StyledBigDescription>;
};

export default BigDescription;
