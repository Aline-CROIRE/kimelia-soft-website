"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Cpu, Activity, Zap } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   STYLES (Wide-Horizon Architectural Layout)
   ═══════════════════════════════════════════════════════════ */

const HeroWrapper = styled.section`
  min-height: 100vh;
  position: relative;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  /* Reduced top padding to pull content up and remove the gap */
  padding: 120px 5% 40px; 
  overflow: hidden;
`;

const BackgroundUniverse = styled.div`
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
  opacity: 0.35; /* Increased for better visibility */
`;

const RotatingWorld = styled.div`
  width: 100%; height: 100%; position: relative;
  transform-style: preserve-3d;
  animation: globeRotate 45s linear infinite;
`;

const Ring = styled.div`
  position: absolute; inset: 0; 
  border: 2px solid #D4AF37; /* Thicker lines */
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.15);
`;

const Node = styled.div`
  position: absolute;
  width: 6px; height: 6px;
  background: #D4AF37;
  border-radius: 50%;
  box-shadow: 0 0 15px #D4AF37;
  transform: translate(-50%, -50%);
`;

const MainGrid = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 1100px) { 
    flex-direction: column;
    text-align: center;
  }
`;

/* BRAND SIDE: Massive and Clean */
const BrandSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .tech-label {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.5em;
    color: #D4AF37;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(4rem, 10vw, 11rem); 
    font-weight: 900;
    line-height: 0.75;
    letter-spacing: -0.06em;
    text-transform: uppercase;
    color: #000;
  }
`;

const Shimmer = styled.span`
  background: linear-gradient(90deg, #8B6B18, #D4AF37, #000, #D4AF37, #8B6B18);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 8s linear infinite;
`;

/* MESSAGE SIDE: Readable and Balanced */
const MessageSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-left: 2px solid #F5F5F5;
  padding-left: 50px;
  max-width: 700px;
  
  @media (max-width: 1100px) { border-left: none; padding-left: 0; align-items: center; }
`;

const Mission = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: clamp(1.4rem, 2.5vw, 2.4rem);
  line-height: 1.1;
  color: #111;
`;

const Detail = styled.p`
  font-size: 1.15rem;
  color: #666;
  line-height: 1.7;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 20px;
  @media (max-width: 768px) { flex-direction: column; gap: 30px; }
`;

const TechStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  opacity: 0.4;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

/* ═══════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <HeroWrapper id="hero">
      {/* IMPROVED VISIBILITY 3D GLOBES */}
      <BackgroundUniverse>
        {mounted && [
          { size: 750, right: '0%', top: '10%', speed: '60s' }, 
          { size: 450, left: '-5%', bottom: '10%', speed: '50s' },  
          { size: 300, left: '45%', top: '5%', speed: '40s' }
        ].map((g, i) => (
          <GlobeContainer key={i} style={{ 
            width: g.size, height: g.size, 
            top: g.top, left: g.left, right: g.right, bottom: g.bottom
          }}>
            <RotatingWorld style={{ animationDuration: g.speed }}>
               <Ring style={{ transform: 'rotateX(90deg)' }} />
               <Ring style={{ transform: 'rotateY(0deg)' }} />
               <Ring style={{ transform: 'rotateY(60deg)' }} />
               {/* Data Nodes for high-tech visibility */}
               <Node style={{ top: '50%', left: '0%' }} />
               <Node style={{ top: '50%', left: '100%' }} />
               <Node style={{ top: '0%', left: '50%' }} />
            </RotatingWorld>
          </GlobeContainer>
        ))}
      </BackgroundUniverse>

      <MainGrid>
        {/* BRAND COLUMN */}
        <BrandSide>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
            <div className="tech-label">Advanced Software & AI</div>
            <h1>KIMELIA</h1>
            <h1><Shimmer>SOFT</Shimmer></h1>
          </motion.div>
        </BrandSide>

        {/* MESSAGE COLUMN */}
        <MessageSide>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }}>
            <Mission>
            We build high-quality software and intelligent systems that help businesses and creators grow and compete globally.
            </Mission>

            <Detail>
              We transform ideas into scalable digital products, combining advanced technology with thoughtful design to deliver real impact.
            </Detail>
            <ActionRow>
              <a href="#innovations" style={{ textDecoration: 'none' }}>
                <button className="metallic-gold-pill" style={{ padding: '22px 60px', fontSize: '0.85rem' }}>
                  See Innovations <ArrowUpRight size={20} style={{ marginLeft: 12 }} />
                </button>
              </a>

              <TechStats>
                <StatItem><Activity size={14} color="#D4AF37" /> AI Intelligence</StatItem>
                <StatItem><Cpu size={14} color="#D4AF37" /> Core Systems</StatItem>
              </TechStats>
            </ActionRow>
          </motion.div>
        </MessageSide>
      </MainGrid>
    </HeroWrapper>
  );
}