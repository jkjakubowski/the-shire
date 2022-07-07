import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import Title from "../components/Title.js";
import Description from "../components/Description.js";
import LittleSubtitle from "../components/LittleSubtitle.js";
import Button from "../components/Button.js";

import comethlogo from "../assets/images/cometh-logo.png";
import thetanlogo from "../assets/images/thetan-logo.png";
import gulogo from "../assets/images/gu-logo.png";

const GlobalContainer = styled.section`
  padding: 40px 296px;
  background-color: ${({ color }) => color && `#${color}`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SectionContainer = styled.section`
  padding: 40px 414px;
  background-color: ${({ color }) => color && `#${color}`};
`;

const StyledTitle = styled(Title)`
  text-align: center;
  background: red;
`;

const ColorSpan = styled.span`
  color: #074ee8;
`;

const GrayColorSpan = styled.span`
  color: #707c96;
`;

const BigCard = styled.div`
  background: #fff;
  padding: 24px 24px;
  border: 1px solid #acb9d2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const StyledLittleSubtitle = styled(LittleSubtitle)`
  text-align: left;
`;

const StyledDescription = styled(Description)`
  margin-bottom: 32px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 50px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-left: 32px;
`;

function Tutorial() {
  return (
    <div>
      <Navbar connectWallet />
      <GlobalContainer color={"fff"}>
        <StyledTitle>
          <ColorSpan>
            Here you are! Now it's time to earn your first assets!
          </ColorSpan>
        </StyledTitle>
        <Description color={"707C96"}>
          Try new games, play without spending a dime and achieve your quest!
        </Description>
      </GlobalContainer>
      <SectionContainer color={"CDDCFA"}>
        <BigCard>
          <StyledTitleContainer>
            <StyledLittleSubtitle>
              Cometh Battle<GrayColorSpan> - Tactical card game</GrayColorSpan>
            </StyledLittleSubtitle>
            <ImageContainer>
              <Image src={comethlogo} />
            </ImageContainer>
          </StyledTitleContainer>
          <StyledDescription color={"707C96"}>
            Welcome to Cometh Battle, the galactic tactical card game. Build
            your deck according to your strategies and playstyle and face
            thousands of players in intense 1vs1 space battles and tournaments !
          </StyledDescription>
          <Button primary>I wanna play!</Button>
        </BigCard>
        <BigCard>
          <StyledTitleContainer>
            <StyledLittleSubtitle>
              Thetan Arena<GrayColorSpan> -MOBA Survival</GrayColorSpan>
            </StyledLittleSubtitle>
            <ImageContainer>
              <Image src={thetanlogo} />
            </ImageContainer>
          </StyledTitleContainer>
          <StyledDescription color={"707C96"}>
            Similar to Brawl Stars, Thetan Arena is a MOBA where you can gather
            your friends, form a team, battle with others and earn money with
            just your skills.
          </StyledDescription>
          <Button primary>I wanna play!</Button>
        </BigCard>
        <BigCard>
          <StyledTitleContainer>
            <StyledLittleSubtitle>
              Gods Unchained<GrayColorSpan> - Tactical card game</GrayColorSpan>
            </StyledLittleSubtitle>
            <ImageContainer>
              <Image src={gulogo} />
            </ImageContainer>
          </StyledTitleContainer>
          <StyledDescription color={"707C96"}>
            Unlike other free-to-play games, Gods Unchained gives you complete
            ownership over your in-game items. Collect rare cards, build your
            deck and sell cards to other players.
          </StyledDescription>
          <Button primary>I wanna play!</Button>
        </BigCard>
      </SectionContainer>
    </div>
  );
}

export default Tutorial;
