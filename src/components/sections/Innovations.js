"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowUpRight, Scan, Globe, Sparkles } from "lucide-react";

const Section = styled.section`
  padding: 180px 8%;
  background: #121212; /* Deep Studio Charcoal */
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
`;

const Layout = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 120px;
  align-items: center;

  @media (max-width: 1100px) { grid-template-columns: 1fr; text-align: center; gap: 80px; }
`;

const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const Label = styled.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6em;
  color: #D4AF37;
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 1100px) { justify-content: center; }
`;

const ProductTitle = styled.h2`
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.85;
  letter-spacing: -0.05em;
`;

const Motto = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: 1.8rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.3;
  max-width: 500px;
`;

const FeatureGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 20px;
`;

const Feature = styled.div`
  display: flex;
  gap: 25px;
  text-align: left;
`;

const IconCircle = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D4AF37;
  flex-shrink: 0;
`;

const FeatureText = styled.div`
  h4 { font-size: 1.1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #D4AF37; margin-bottom: 10px; }
  p { font-size: 1rem; color: rgba(255,255,255,0.4); line-height: 1.7; max-width: 400px; }
`;

/* THE VISIONARY GLASS PANEL */
const VisionPanel = styled(motion.div)`
  width: 100%;
  height: 700px;
  background: #000000;
  border: 1px solid rgba(212, 175, 55, 0.2);
  position: relative;
  overflow: hidden;
  box-shadow: 0 60px 120px rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 6px;
    background: linear-gradient(90deg, #8B6B18, #D4AF37, #8B6B18);
  }
`;

const PanelTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

export default function Innovations() {
  return (
    <Section id="innovations">
      <div className="horizon-glow" style={{ position: 'absolute', top: '20%', right: '10%', width: '50vw', height: '50vw' }} />
      
      <Layout>
        <ContentSide>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Label><div style={{ width: 40, height: 1, background: '#D4AF37' }} /> Flagship Solution</Label>
            <ProductTitle>Kimelia <br /> <span className="gold-shimmer-text">Luxe</span></ProductTitle>
            <Motto>"The new digital standard for fashion and interaction."</Motto>
          </motion.div>

          <FeatureGrid>
            <Feature>
              <IconCircle><Scan size={24} /></IconCircle>
              <FeatureText>
                <h4>Virtual Experience</h4>
                <p>Allowing users to visualize products in high-detail before purchase, creating an immersive bridge between the digital and physical world.</p>
              </FeatureText>
            </Feature>
            <Feature>
              <IconCircle><Globe size={24} /></IconCircle>
              <FeatureText>
                <h4>Connected Ecosystem</h4>
                <p>A global-standard marketplace where visionary talent meets an audience that values exceptional design and quality.</p>
              </FeatureText>
            </Feature>
          </FeatureGrid>

          <button className="metallic-gold-pill" style={{ width: 'fit-content', padding: '22px 55px', fontSize: '0.8rem' }}>
            Visit Platform <ArrowUpRight size={18} style={{ marginLeft: 15 }} />
          </button>
        </ContentSide>

        <VisionPanel
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.6em', color: '#D4AF37', textTransform: 'uppercase' }}>Kimelia Soft Systems</span>
            <PanelTitle style={{ marginTop: 30 }}>Transforming talent <br /> into global icons.</PanelTitle>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
             <div style={{ width: 60, height: 60, border: '1px solid rgba(212,175,55,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={20} color="#D4AF37" />
             </div>
             <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', opacity: 0.3 }}>Refined Infrastructure</p>
          </div>

          {/* Deep glass glow */}
          <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        </VisionPanel>
      </Layout>
    </Section>
  );
}