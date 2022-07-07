import styled from "styled-components";
import "../css/typography.css";

const StyledSubtitle = styled.h3`
  font-size: 24px;
  font-family: "Archivo Bold";
  color: #074ee8;
`;

const LittleSubtitle = ({ children, className }) => {
  return <StyledSubtitle className={className}>{children}</StyledSubtitle>;
};

export default LittleSubtitle;
