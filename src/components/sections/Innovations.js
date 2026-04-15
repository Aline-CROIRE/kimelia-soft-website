"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowUpRight, ScanLine, Globe2, Sparkle } from "lucide-react";

const Section = styled.section`
  padding: 200px 8%;
  background: #000000; /* Pure Institutional Black */
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
`;

const Atmosphere = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 140px;
`;

const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 60px;
  @media (max-width: 1024px) { flex-direction: column; align-items: center; text-align: center; gap: 40px; }
`;

const TitleArea = styled.div`
  max-width: 800px;
`;

const Label = styled.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8em;
  color: #D4AF37;
  margin-bottom: 30px;
`;

const MainTitle = styled.h2`
  font-size: clamp(3rem, 7vw, 7.5rem);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: -0.05em;
`;

const ItalicStatement = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  color: rgba(255, 255, 255, 0.6);
  margin-top: 30px;
`;

/* THE INNOVATION CARDS */
const PresentationGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 80px;
  align-items: center;
  @media (max-width: 1100px) { grid-template-columns: 1fr; }
`;

const GlassArtifact = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
  border: 1px solid rgba(212, 175, 55, 0.2);
  padding: 80px;
  position: relative;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) { padding: 40px; min-height: 450px; }
`;

const ArtifactTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;
`;

const FeatureSet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 60px;
`;

const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  .icon { color: #D4AF37; opacity: 0.8; }
  h4 { font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #D4AF37; }
  p { font-size: 0.95rem; color: rgba(255, 255, 255, 0.4); line-height: 1.6; }
`;

export default function Innovations() {
  return (
    <Section id="innovation">
      <Atmosphere />
      
      <Container>
        <TopBlock>
          <TitleArea>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
            >
              <Label>Active Innovation</Label>
              <MainTitle>Kimelia <br /> <span className="gold-shimmer-text">Luxe</span></MainTitle>
              <ItalicStatement>
                Building a new dimension of digital interaction.
              </ItalicStatement>
            </motion.div>
          </TitleArea>

          <button className="metallic-gold-pill" style={{ padding: '24px 60px', fontSize: '0.8rem' }}>
            Visit Platform <ArrowUpRight size={20} style={{ marginLeft: 15 }} />
          </button>
        </TopBlock>

        <PresentationGrid>
          <GlassArtifact
            className="light-sweep"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.4em', color: '#D4AF37', textTransform: 'uppercase' }}>Established Standard</span>
              <ArtifactTitle style={{ marginTop: 30 }}>Design Meets <br /> Intelligence.</ArtifactTitle>
              <p style={{ marginTop: 30, color: 'rgba(255,255,255,0.4)', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '400px' }}>
                We believe in technology that makes life better. Kimelia Luxe brings the future of interaction to the world of fashion.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
               <div style={{ width: 60, height: 60, border: '1px solid rgba(212,175,55,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkle size={24} color="#D4AF37" />
               </div>
               <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.3 }}>Kimelia Studio Engineering</span>
            </div>
            
            {/* Holographic background glow */}
            <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -1 }} />
          </GlassArtifact>

          <FeatureSet>
             <FeatureBox>
                <ScanLine className="icon" size={32} />
                <h4>Virtual Discovery</h4>
                <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ height: 1, background: '#D4AF37' }} />
                <p>See exactly how items look before you buy. Our smart visualization creates a perfect bridge between the digital and real world.</p>
             </FeatureBox>

             <FeatureBox>
                <Globe2 className="icon" size={32} />
                <h4>Global Network</h4>
                <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ height: 1, background: '#D4AF37' }} />
                <p>A connected space where the world’s best creators meet an audience that loves smart, high-quality design.</p>
             </FeatureBox>
          </FeatureSet>
        </PresentationGrid>
      </Container>
    </Section>
  );
}