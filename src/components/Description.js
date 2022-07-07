import styled from "styled-components";
import "../css/typography.css";

const StyledDescription = styled.p`
  font-size: 16px;
  color: ${({ color }) => color && `#${color}`};
  text-align: left;
  font-family: "Archivo";
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Description = ({ children, color, className }) => {
  return (
    <StyledDescription className={className} color={color}>
      {children}
    </StyledDescription>
  );
};

export default Description;
