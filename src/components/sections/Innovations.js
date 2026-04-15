"use client";

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   ANIMATIONS ENGINE
   ═══════════════════════════════════════════════════════════ */

const rotateY = keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION ARCHITECTURE
   ═══════════════════════════════════════════════════════════ */

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background: #000000;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 15%; 
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
  text-align: center;
`;

/* ═══════════════════════════════════════════════════════════
   HIGH-VISIBILITY 3D SYSTEM (Left, Center, Right)
   ═══════════════════════════════════════════════════════════ */

const LabAtmosphere = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  pointer-events: none;
`;

const MannequinForm = styled(motion.div)`
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotateY} ${props => props.$speed || "40s"} linear infinite;
  opacity: ${props => props.$opacity || 0.3}; /* High visibility */
  
  .slice {
    position: absolute;
    inset: 0;
    /* Thicker lines for visibility */
    border: 1.8px solid #D4AF37; 
    border-radius: 200px 200px 50px 50px;
    /* Outer glow to make the 3D pop */
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
  }
`;

/* ═══════════════════════════════════════════════════════════
   CONTENT ARCHITECTURE (Philosophy Style)
   ═══════════════════════════════════════════════════════════ */

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  margin-bottom: 60px;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 35px;
  span {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6em;
    color: #D4AF37;
  }
`;

const GoldLine = styled.div`
  width: 50px;
  height: 1px;
  background: #D4AF37;
`;

const SectionTitle = styled.h2`
  font-size: clamp(3.5rem, 10vw, 9rem);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.8;
  letter-spacing: -0.05em;
  margin-bottom: 40px;
  color: #FFFFFF;
`;

const ShimmerWord = styled.span`
  background: linear-gradient(90deg, #8B6B18, #D4AF37, #FFFFFF, #D4AF37, #8B6B18);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 8s linear infinite;
`;

const Motto = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.3;
  max-width: 800px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.8;
  max-width: 600px;
  margin: 40px auto 60px;
`;

export default function Innovations() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Section id="innovations">
      {/* ═══════════ THE MULTI-MANNEQUIN ATMOSPHERE ═══════════ */}
      <LabAtmosphere>
        {/* 1. LEFT FORM */}
        <MannequinForm 
          style={{ width: '18vw', height: '45vh' }} 
          $opacity={0.35} $speed="45s"
        >
          {mounted && [0, 60, 120].map(deg => (
            <div key={deg} className="slice" style={{ transform: `rotateY(${deg}deg)` }} />
          ))}
        </MannequinForm>

        {/* 2. CENTER FORM (Behind Text) */}
        <MannequinForm 
          style={{ width: '25vw', height: '70vh', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: -1 }} 
          $opacity={0.15} $speed="30s"
        >
          {mounted && [0, 45, 90, 135].map(deg => (
            <div key={deg} className="slice" style={{ transform: `rotateY(${deg}deg)` }} />
          ))}
        </MannequinForm>

        {/* 3. RIGHT FORM */}
        <MannequinForm 
          style={{ width: '18vw', height: '45vh' }} 
          $opacity={0.35} $speed="60s"
        >
          {mounted && [0, 60, 120].map(deg => (
            <div key={deg} className="slice" style={{ transform: `rotateY(${deg}deg)` }} />
          ))}
        </MannequinForm>
      </LabAtmosphere>

      {/* Central Flare Glow */}
      <div style={{ position: 'absolute', width: '70vw', height: '70vw', background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)', filter: 'blur(120px)', pointerEvents: 'none', zIndex: 2 }} />

      {/* ═══════════ CONTENT ARCHITECTURE ═══════════ */}
      <ContentWrapper>
        <Header>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Badge>
              <GoldLine />
              <span>OUR PRODUCT</span>
            </Badge>
            <SectionTitle>
              Kimelia <br /> <ShimmerWord>Luxe</ShimmerWord>
            </SectionTitle>
            <Motto>
              Building the world's first intelligent AI marketplace designed for global standard fashion.
            </Motto>
          </motion.div>
        </Header>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <Description>
            Architecting a borderless ecosystem where visionary design meets advanced technology. We build the systems that allow local talent to reach the world stage.
          </Description>

          <button className="metallic-gold-pill" style={{ padding: '22px 65px', fontSize: '0.85rem', margin: '0 auto' }}>
            Experience the Future <ArrowUpRight size={20} style={{ marginLeft: 15 }} />
          </button>
        </motion.div>
      </ContentWrapper>
    </Section>
  );
}