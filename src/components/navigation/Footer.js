"use client";

import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 60px 8%;
  background: #000000;
  color: #FFFFFF;
  border-top: 1px solid #111;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

const Brand = styled.div`
  h2 { 
    font-size: 1.1rem; 
    font-weight: 800; 
    letter-spacing: 0.12em; 
    margin: 0;
    text-transform: uppercase;
  }
`;


const QuoteBox = styled.div`
  text-align: center;
  p {
    font-family: var(--font-lora);
    font-style: italic;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
    letter-spacing: 0.02em;
  }

  span {
    display: block;
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    color: #D4AF37;
    margin-bottom: 8px;
    font-weight: 700;
  }
`;


const YearBox = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  padding-left: 30px;
  border-left: 1px solid #111;

  @media (max-width: 1024px) {
    border-left: none;
    padding-left: 0;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Content>
   
        <Brand>
          <h2>KIMELIA <span className="gold-shimmer-text">SOFT</span></h2>
        </Brand>

        
        <QuoteBox>
          <span>The Standard</span>
          <p>"Local roots. Global standards."</p>
        </QuoteBox>

       
        <YearBox>
          © 2026
        </YearBox>
      </Content>
    </FooterWrapper>
  );
}