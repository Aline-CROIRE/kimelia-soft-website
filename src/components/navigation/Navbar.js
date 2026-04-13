"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: #FFFFFF;
  padding: ${(props) => (props.$scrolled ? "15px 8%" : "35px 8%")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 60px;
  cursor: pointer;
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.1));
`;

const Links = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  @media (max-width: 1024px) { display: none; }
`;

const NavLink = styled.a`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #000000;
  opacity: 0.4;
  text-decoration: none;
  transition: 0.3s ease;
  &:hover { opacity: 1; color: #D4AF37; }
`;

const PillButton = styled.button`
  padding: 12px 30px;
  font-size: 0.65rem;
`;

const Spine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.$scrolled ? "2px" : "4px")};
  background: linear-gradient(90deg, #D4AF37, #FFD700, #B8860B);
  transition: all 0.6s ease;
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <LogoWrapper>
        <Image 
          src="/logo.png" 
          alt="Kimelia Soft" 
          fill 
          sizes="220px" /* Performance Fix: Tells browser exactly how large the logo is */
          style={{ objectFit: 'contain' }} 
          priority 
        />
      </LogoWrapper>
      <Links>
        <NavLink href="#studio">Studio</NavLink>
        <NavLink href="#innovations">Innovations</NavLink>
        <NavLink href="#mission">Mission</NavLink>
        <PillButton className="metallic-gold-pill">Get in touch</PillButton>
      </Links>
      <Spine $scrolled={scrolled} />
    </Nav>
  );
}