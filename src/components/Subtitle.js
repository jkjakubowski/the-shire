import styled from "styled-components";
import "../css/typography.css";

const StyledSubtitle = styled.h2`
  font-size: 36px;
  font-family: "Archivo Bold";
  text-align: left;
`;

const Subtitle = (props) => {
  return <StyledSubtitle>{props.children}</StyledSubtitle>;
};

export default Subtitle;
