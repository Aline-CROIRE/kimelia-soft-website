"use client";

import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const Wrapper = styled.section`
  padding: 200px 8% 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlackBox = styled.div`
  width: 100%;
  max-width: 1300px;
  background: #000000;
  padding: 100px 80px;
  margin-bottom: 0;
`;

const Title = styled.h1`
  font-family: var(--font-montserrat);
  font-weight: 700;
  font-size: clamp(3rem, 10vw, 8.5rem);
  color: #FFFFFF;
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: -0.05em;
`;

const GoldText = styled.span`
  background: linear-gradient(90deg, #B8860B, #FFD700, #D4AF37, #B8860B);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 5s linear infinite;
`;

const Divider = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 8px;
  background: linear-gradient(90deg, #D4AF37, #FFD700, #B8860B);
  margin-bottom: 100px;
`;

const Grid = styled.div`
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 100px;
  @media (max-width: 968px) { grid-template-columns: 1fr; }
`;

const Box = styled.div`
  border: 3px solid #000000;
  padding: 60px;
`;

const Quote = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: 2.4rem;
  line-height: 1.2;
  color: #000000;
`;

const Button = styled.button`
  background: #000000;
  color: #FFFFFF;
  padding: 25px 50px;
  border: none;
  font-family: var(--font-montserrat);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  &:hover { background: #D4AF37; transform: translateX(10px); }
`;

export default function Hero() {
  return (
    <Wrapper>
      <BlackBox>
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Title>Digital <br /><GoldText>Innovation</GoldText></Title>
          <p style={{ color: '#D4AF37', marginTop: '40px', letterSpacing: '0.8em', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>Kigali 2025</p>
        </motion.div>
      </BlackBox>
      <Divider />
      <Grid>
        <Box>
          <Quote>"We engineer the AI-driven infrastructure for local talent."</Quote>
        </Box>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontFamily: 'var(--font-montserrat)', color: '#444', fontSize: '1.2rem', marginBottom: '50px' }}>Kimelia Soft is a technology studio creating premium digital ecosystems.</p>
          <Button>Launch Luxe <ArrowRight size={20} /></Button>
        </div>
      </Grid>
    </Wrapper>
  );
}