import styled from "styled-components";
import Button from "./Button.js";
import Logo from "./Logo.js";

const StyledNav = styled.nav`
  top: 0;
  height: 104px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px;
  margin-bottom: 104px;
`;

const Navbar = ({ connectWallet }) => {
  return (
    <div>
      <StyledNav>
        <div>
          <Logo></Logo>
        </div>

        <Button primary>
          {connectWallet ? "Connect your wallet" : "Explore the Shire"}
        </Button>
      </StyledNav>
    </div>
  );
};

export default Navbar;
