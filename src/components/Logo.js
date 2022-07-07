import styled from "styled-components";
import "../css/typography.css";
import logo from "../assets/images/the-shire-logo.png";

const StyledLogoTitle = styled.h1`
  font-size: 36px;
  font-family: "Recoleta";
  margin-top: 20px;
  margin-left: 8px;
`;

const ImageContainer = styled.div`
  height: 80px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <ImageContainer>
        <Image src={logo} alt=""></Image>
      </ImageContainer>
      <StyledLogoTitle>The Shire</StyledLogoTitle>
    </LogoContainer>
  );
};

export default Logo;
