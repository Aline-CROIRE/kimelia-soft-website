"use client";

import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: #000000;
  padding: 35px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #D4AF37;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Brand = styled.span`
  font-family: var(--font-montserrat);
  font-weight: 700;
  font-size: 1.4rem;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.3em;
`;

const SubBrand = styled.span`
  font-family: var(--font-montserrat);
  font-size: 0.65rem;
  color: #D4AF37;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  margin-top: 5px;
`;

const Links = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

const Link = styled.a`
  font-family: var(--font-montserrat);
  font-size: 0.75rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-decoration: none;
  &:hover { color: #D4AF37; }
`;

export default function Navbar() {
  return (
    <Nav>
      <LogoSection>
        <Brand>Kimelia Soft</Brand>
        <SubBrand>Technology & Innovation</SubBrand>
      </LogoSection>
      <Links>
        <Link href="#products">Products</Link>
        <Link href="#studio">Studio</Link>
        <Link href="#vision">Vision</Link>
      </Links>
    </Nav>
  );
}