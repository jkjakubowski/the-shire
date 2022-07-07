import styled from "styled-components";
import "./App.css";
import Title from "./components/Title.js";
import Subtitle from "./components/Subtitle.js";
import LittleSubtitle from "./components/LittleSubtitle.js";
import Button from "./components/Button.js";
import Description from "./components/Description.js";
import BigDescription from "./components/BigDescription.js";
import Navbar from "./components/Navbar.js";
import "./css/typography.css";
import gods_unchained from "./assets/images/gods_unchained_image.png";

const GlobalContainer = styled.section`
  padding: 40px 100px;
  background-color: ${({ color }) => color && `#${color}`};
`;

const SectionContainer = styled.section`
  padding: 0 194px 88px 194px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 16px;
`;

const ImageContainer = styled.div`
  width: 438px;
`;

const TextContainer = styled.div`
  flex-basis: 50%;
`;

const ColorSpan = styled.span`
  color: #074ee8;
`;

const StyledTitle = styled(Title)`
  display: inline-block;
`;

const CardContainer = styled.div`
  display: flex;
  column-gap: 64px;
  margin-top: 32px;
`;

const Card = styled.div`
  background: #fff;
  padding: 24px 16px;
  border: 1px solid #acb9d2;
  border-radius: 8px;
  flex: 1;
`;

const StudioContainer = styled.div`
  display: initial;
`;

const StyledWrapper = styled(SectionContainer)`
  margin-top: 56px;
`;

function Home() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SectionContainer>
        <FlexContainer>
          <TextContainer>
            <StyledTitle>
              Discover a <ColorSpan>new way of gaming</ColorSpan>
            </StyledTitle>
            <Description color={"707C96"}>
              You will really own your digital assets. You will learn what are
              exactly NFTs and how they will change the way you play games.
            </Description>
            <Button primary>Explore the Shire</Button>
          </TextContainer>
          <ImageContainer>
            <Image src={gods_unchained}></Image>
            <Description color={"074EE8"}>
              Playing Gods Unchained, your cards will truly be yours!
            </Description>
          </ImageContainer>
        </FlexContainer>
      </SectionContainer>

      <GlobalContainer color={"e6edfd"}>
        <Subtitle>How does it works?</Subtitle>
        <CardContainer>
          <Card>
            <LittleSubtitle>1. Explore new games</LittleSubtitle>
            <Description>
              Each month, you will discover a selection of the best
              play-and-earn games out there.
            </Description>
          </Card>
          <Card>
            <LittleSubtitle>2. Test it for free</LittleSubtitle>
            <Description>
              Our gaming partners will let you test it for free. No more fake
              free-to-play games!
            </Description>
          </Card>
          <Card>
            <LittleSubtitle>3. Earn assets</LittleSubtitle>
            <Description>
              Earn assets by testing the games and achieving quests. You will be
              able to play without spending a dime!
            </Description>
          </Card>
        </CardContainer>
      </GlobalContainer>

      <StudioContainer>
        <StyledWrapper>
          <Subtitle>
            <ColorSpan>Are you a gaming studio?</ColorSpan>
          </Subtitle>
          <BigDescription>
            Submit your game and find new users! Let’s onboard the new wave that
            will take the most of NFTs’ power.
          </BigDescription>
          <Button>Submit your game</Button>
        </StyledWrapper>
      </StudioContainer>
    </div>
  );
}

export default Home;
