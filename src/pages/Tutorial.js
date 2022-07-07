import styled from "styled-components";
import Navbar from "../components/Navbar.js";
import Title from "../components/Title.js";
import Description from "../components/Description.js";
import LittleSubtitle from "../components/LittleSubtitle.js";
import Button from "../components/Button.js";

import narsil from "../assets/images/narsil.png";

const GlobalContainer = styled.section`
  padding: 40px 100px;
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
  margin-bottom: 32px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 16px;
`;

function Tutorial() {
  return (
    <div>
      <Navbar connectWallet />
      <GlobalContainer color={"fff"}>
        <StyledTitle>
          <ColorSpan>Congrats adventurer, you're in!</ColorSpan>
        </StyledTitle>
        <Description color={"707C96"}>
          Start your Web3 gaming adventure by following this tutorial!
        </Description>
      </GlobalContainer>
      <SectionContainer color={"CDDCFA"}>
        <BigCard>
          <StyledLittleSubtitle>
            Level 1<GrayColorSpan> - Create your wallet</GrayColorSpan>
          </StyledLittleSubtitle>
          <Description color={"707C96"}>
            Follow those few steps to create you key to all NFT games! Your
            wallet is used to store your assets. Those you earn, create, buy, or
            are transfered to you.
          </Description>
          <Button primary>Watch the video!</Button>
        </BigCard>
        <BigCard>
          <StyledLittleSubtitle>
            Level 2<GrayColorSpan> - Mint your first NFT</GrayColorSpan>
          </StyledLittleSubtitle>
          <Description color={"707C96"}>
            “Minting” an NFT means uniquely publishing your asset on the
            blockchain to make it purchasable. You will trully own it.
          </Description>
          <Image src={narsil}></Image>
          <Button>Mint the NFT!</Button>
        </BigCard>
        <BigCard>
          <StyledLittleSubtitle>
            Level 3<GrayColorSpan> - Transfer it to a friend</GrayColorSpan>
          </StyledLittleSubtitle>
          <Description color={"707C96"}>
            Owning your digital asset means that you can use it in another game,
            give it to someone or even sell it, even if the original game or
            version doesn’t exist anymore!Owning your digital asset means that
            you can use it in another game, give it to someone or even sell it,
            even if the original game or version doesn’t exist anymore!
          </Description>
          <Button>Watch the video!</Button>
        </BigCard>
      </SectionContainer>
    </div>
  );
}

export default Tutorial;
