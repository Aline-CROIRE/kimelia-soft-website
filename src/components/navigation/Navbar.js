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
  padding: ${props => props.$scrolled ? "10px 6%" : "20px 6%"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const LogoBox = styled.div`
  position: relative;
  width: 170px;
  height: 40px;
  cursor: pointer;
`;

const LinkGroup = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
  @media (max-width: 1024px) { display: none; }
`;

const Item = styled.a`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #000000;
  opacity: 0.5;
  text-decoration: none;
  transition: 0.3s ease;
  &:hover { opacity: 1; color: #D4AF37; }
`;

const CompactPill = styled.button`
  padding: 10px 25px;
  font-size: 0.6rem;
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <LogoBox>
        <Image 
          src="/logo.png" 
          alt="Kimelia Soft" 
          fill 
          style={{ objectFit: 'contain' }} 
          priority 
          sizes="170px"
        />
      </LogoBox>
      
      <LinkGroup>
        <Item href="#innovations">Innovation</Item>
        <Item href="#studio">Studio</Item>
        <Item href="#vision">Vision</Item>
        <CompactPill className="metallic-gold-pill">Partner</CompactPill>
      </LinkGroup>

      <div style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        height: '2px', 
        background: 'linear-gradient(90deg, #8B6B18, #D4AF37, #8B6B18)' 
      }} />
    </Nav>
  );
}