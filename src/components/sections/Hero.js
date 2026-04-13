"use client";

import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Globe, Zap } from "lucide-react";

const HeroWrapper = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px 8% 100px;
  background: #FFFFFF;
  overflow: hidden;
`;

const BackgroundDepth = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const AmbientGlow = styled.div`
  position: absolute;
  width: 60vw;
  height: 60vw;
  top: -10%;
  right: -10%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
  filter: blur(100px);
`;

const FloatingPane = styled(motion.div)`
  position: absolute;
  border: 1px solid rgba(212, 175, 55, 0.1);
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(212,175,55,0.02) 100%);
  backdrop-filter: blur(5px);
  z-index: 1;
`;

const MainContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1400px;
  text-align: center;
`;

const TitleBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  span {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8em;
    color: #D4AF37;
  }
`;

const HeroHeading = styled.h1`
  font-size: clamp(3.5rem, 12vw, 10.5rem);
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -0.06em;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 30px;
`;

const Shimmer = styled.span`
  background: linear-gradient(90deg, #B8860B, #FFD700, #FFFFFF, #FFD700, #B8860B);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 8s linear infinite;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 100px;
  text-align: left;
  margin-top: 100px;
  border-top: 1px solid rgba(0,0,0,0.1);
  padding-top: 80px;
  @media (max-width: 1024px) { grid-template-columns: 1fr; gap: 60px; text-align: center; }
`;

const MissionStatement = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: 2.5rem;
  line-height: 1.1;
  color: #000000;
  @media (max-width: 768px) { font-size: 1.8rem; }
`;

const SubText = styled.p`
  font-size: 1.15rem;
  color: rgba(0,0,0,0.5);
  line-height: 1.8;
  margin-bottom: 40px;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media (max-width: 1024px) { justify-items: center; }
`;

const Service = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #000000;
`;

const HeroCTA = styled.button`
  padding: 24px 55px;
  font-size: 0.8rem;
  margin-top: 50px;
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <BackgroundDepth>
        <AmbientGlow />
        {[...Array(4)].map((_, i) => (
          <FloatingPane
            key={i}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              y: [0, -80, 0], 
              rotate: [0, 10, 0] 
            }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 150 + i * 100,
              height: 150 + i * 100,
              top: `${15 + i * 15}%`,
              left: `${5 + i * 20}%`,
              borderRadius: i % 2 === 0 ? '4px' : '50%'
            }}
          />
        ))}
      </BackgroundDepth>

      <MainContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <TitleBadge>
            <div style={{ width: 50, height: 1, background: '#D4AF37' }} />
            <span>Technology & Innovation Studio</span>
          </TitleBadge>
          <HeroHeading>
            Kimelia <br /> <Shimmer>Soft</Shimmer>
          </HeroHeading>
        </motion.div>

        <ContentGrid>
          <div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <MissionStatement>
                Building smart digital products that empower talented creators and change how people interact with technology.
              </MissionStatement>
              <HeroCTA className="metallic-gold-pill">
                See Our Innovations <ArrowUpRight size={22} />
              </HeroCTA>
            </motion.div>
          </div>

          <div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <SubText>
                Kimelia Soft is a technology lab focused on the future. We use AI and intentional design to create high-quality products built to solve problems and scale globally.
              </SubText>
              <ServiceGrid>
                <Service><Globe size={20} color="#D4AF37" /> Marketplaces</Service>
                <Service><Cpu size={20} color="#D4AF37" /> AI Technology</Service>
                <Service><Zap size={20} color="#D4AF37" /> Creative Tools</Service>
                <Service><Layers size={20} color="#D4AF37" /> Product Launch</Service>
              </ServiceGrid>
            </motion.div>
          </div>
        </ContentGrid>
      </MainContent>

      <div style={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '30vh',
        background: 'linear-gradient(to top, rgba(212,175,55,0.03) 0%, transparent 100%)',
        zIndex: 0
      }} />
    </HeroWrapper>
  );
}