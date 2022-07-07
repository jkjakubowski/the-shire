import React from "react";
import styled from "styled-components";
import "../css/typography.css";

const CtaContent = styled.span`
  font-size: 16px;
  font-family: "Archivo";
`;

const StyledPrimaryButton = styled.button`
  font-family: "Archivo";
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease-in;
  font-size: 16px;
  padding: 14px 24px;
  border-radius: 8px;
  background: #074ee8;
  color: #fff;
  /* width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")}; */
  max-height: 40px;
  &:hover {
    text-decoration: none;
    background: #20325b;
  }
`;

const StyledSecondaryButton = styled.button`
  font-family: "Archivo";
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease-in;
  font-size: 16px;
  padding: 14px 24px;
  border-radius: 8px;
  background: #e6edfd;
  color: #074ee8;
  border: 1px solid transparent;
  max-height: 40px;
  &:hover {
    text-decoration: none;
    background: #fff;
    border: solid 1px #074ee8;
  }
`;

const Button = ({ children, onClick, href, primary }) => {
  return primary ? (
    <StyledPrimaryButton href={href} onClick={onClick}>
      <CtaContent>{children}</CtaContent>
    </StyledPrimaryButton>
  ) : (
    <StyledSecondaryButton href={href} onClick={onClick}>
      <CtaContent>{children}</CtaContent>
    </StyledSecondaryButton>
  );
};

export default Button;
