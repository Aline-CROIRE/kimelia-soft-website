"use client";

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Globe, Zap } from "lucide-react";

const HeroWrapper = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 180px 8% 100px;
  background: #FFFFFF;
  overflow: hidden;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

const GlobeContainer = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;

const RotatingWorld = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: globeRotate 35s linear infinite;
`;

const Ring = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  border: 2px solid rgba(212, 175, 55, 0.5);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
`;

const GlowingNode = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #D4AF37;
  border-radius: 50%;
  box-shadow: 0 0 15px #D4AF37;
  transform: translate(-50%, -50%);
`;

const ContentStack = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BrandSection = styled.div`
  margin-bottom: 80px;
`;

const BrandName = styled.h1`
  font-size: clamp(3.5rem, 12vw, 11rem);
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -0.06em;
  text-transform: uppercase;
  color: #000000;
`;

const Shimmer = styled.span`
  background: linear-gradient(90deg, #8B6B18, #D4AF37, #FFFFFF, #D4AF37, #8B6B18);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 8s linear infinite;
`;

const InstitutionalDivider = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(0,0,0,0.1);
  margin-bottom: 50px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 100%;
    background: #D4AF37;
  }
`;

const EditorialMission = styled.p`
  font-family: var(--font-lora);
  font-style: italic; /* Applied Italic */
  font-size: clamp(1.2rem, 3vw, 2.2rem); /* Reduced Size */
  line-height: 1.3;
  color: #000000;
  max-width: 850px;
  margin-bottom: 40px;
  opacity: 0.9;
`;

const SubDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(0,0,0,0.4);
  line-height: 1.7;
  max-width: 650px;
  margin-bottom: 60px;
`;

const ServiceRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  width: 100%;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #000000;
`;

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const globeSystem = [
    { id: 1, size: 600, top: '-10%', left: '-5%', speed: '30s' },
    { id: 2, size: 450, top: '20%', right: '-10%', speed: '45s' },
    { id: 3, size: 350, bottom: '-5%', left: '10%', speed: '25s' },
  ];

  return (
    <HeroWrapper>
      <BackgroundLayer>
        {mounted && globeSystem.map((g) => (
          <GlobeContainer key={g.id} style={{ width: g.size, height: g.size, top: g.top, left: g.left, right: g.right, bottom: g.bottom }}>
            <RotatingWorld style={{ animationDuration: g.speed }}>
               <Ring style={{ transform: 'rotateX(90deg)' }} />
               <Ring style={{ transform: 'rotateX(90deg) translateZ(60px) scale(0.9)' }} />
               <Ring style={{ transform: 'rotateY(0deg)' }} />
               <Ring style={{ transform: 'rotateY(60deg)' }} />
               <GlowingNode style={{ top: '50%', left: '100%' }} />
               <GlowingNode style={{ top: '0%', left: '50%' }} />
            </RotatingWorld>
          </GlobeContainer>
        ))}
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 75%)', filter: 'blur(100px)' }} />
      </BackgroundLayer>

      <ContentStack>
        <BrandSection>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 40 }}>
               <div style={{ width: 60, height: 1, background: '#D4AF37' }} />
               <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.8em', textTransform: 'uppercase', color: '#D4AF37' }}>Technology Innovation Studio</span>
               <div style={{ width: 60, height: 1, background: '#D4AF37' }} />
            </div>
            <BrandName>Kimelia <br /> <Shimmer>Soft</Shimmer></BrandName>
          </motion.div>
        </BrandSection>

        <InstitutionalDivider />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <EditorialMission>
            Building smart digital products that empower talented creators and change how people interact with technology.
          </EditorialMission>
          
          <SubDescription>
            Kimelia Soft is a technology lab focused on the future. We use AI and intentional design to create high-quality products built to solve problems and scale globally.
          </SubDescription>

          <button className="metallic-gold-pill" style={{ padding: '22px 65px', fontSize: '0.85rem' }}>
            Explore Innovations <ArrowUpRight size={22} />
          </button>

          <ServiceRow style={{ marginTop: '100px' }}>
            <ServiceItem><Globe size={20} color="#D4AF37" /> Marketplaces</ServiceItem>
            <ServiceItem><Cpu size={20} color="#D4AF37" /> AI Technology</ServiceItem>
            <ServiceItem><Zap size={20} color="#D4AF37" /> Smart Tools</ServiceItem>
            <ServiceItem><Layers size={20} color="#D4AF37" /> Incubation</ServiceItem>
          </ServiceRow>
        </motion.div>
      </ContentStack>
    </HeroWrapper>
  );
}