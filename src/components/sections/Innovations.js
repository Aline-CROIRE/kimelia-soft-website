"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Sparkles, ScanFace, ShoppingBag, ArrowRight } from "lucide-react";

const Section = styled.section`
  padding: 180px 8%;
  background: #121212; /* Deep Charcoal for visual rhythm */
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 100px;
  align-items: center;

  @media (max-width: 1100px) { grid-template-columns: 1fr; text-align: center; gap: 80px; }
`;

const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.04em;
`;

const Description = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: 1.6rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.4;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  text-align: left;
`;

const IconBox = styled.div`
  padding: 12px;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #D4AF37;
`;

const FeatureText = styled.div`
  h4 { font-size: 1rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; color: #D4AF37; }
  p { font-size: 0.95rem; color: rgba(255,255,255,0.5); line-height: 1.6; }
`;

/* THE DIGITAL ARTIFACT (App Mockup Representation) */
const VisualSide = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppMonolith = styled(motion.div)`
  width: 100%;
  max-width: 450px;
  height: 650px;
  background: #000000;
  border: 1px solid rgba(212, 175, 55, 0.3);
  position: relative;
  overflow: hidden;
  box-shadow: 0 50px 100px rgba(0,0,0,0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 4px;
    background: linear-gradient(90deg, #8B6B18, #D4AF37, #8B6B18);
  }
`;

const MonolithContent = styled.div`
  padding: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CaseStudyBtn = styled.button`
  margin-top: 40px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  color: #FFFFFF;
  padding: 18px 40px;
  font-family: var(--font-montserrat);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    border-color: #D4AF37;
    color: #D4AF37;
    transform: translateX(10px);
  }
`;

export default function Innovations() {
  return (
    <Section id="innovation">
      <div className="product-glow" style={{ position: 'absolute', top: '10%', right: '10%', width: '40vw', height: '40vw' }} />
      
      <ContentWrapper>
        <InfoSide>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Label>Innovation 01</Label>
            <ProductTitle>Kimelia <br /> <span className="gold-shimmer-text">Luxe</span></ProductTitle>
            <Description>
              "Where sophisticated fashion meets intelligent technology."
            </Description>
          </motion.div>

          <FeatureList>
            <FeatureItem>
              <IconBox><ScanFace size={24} /></IconBox>
              <FeatureText>
                <h4>AI Virtual Try-On</h4>
                <p>Experience clothes before they arrive. Our AI technology creates a realistic preview of how fashion fits your body.</p>
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <IconBox><ShoppingBag size={24} /></IconBox>
              <FeatureText>
                <h4>Curated Marketplace</h4>
                <p>A trusted ecosystem connecting talented local designers with a global audience who value high-quality design.</p>
              </FeatureText>
            </FeatureItem>
          </FeatureList>

          <CaseStudyBtn>
            Visit Platform <ArrowRight size={16} />
          </CaseStudyBtn>
        </InfoSide>

        <VisualSide>
          <AppMonolith
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <MonolithContent>
              <div>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', color: '#D4AF37', textTransform: 'uppercase' }}>Prototype v1.0</span>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, textTransform: 'uppercase', marginTop: '20px' }}>The Future of <br /> Interaction</h3>
              </div>
              
              <div style={{ opacity: 0.3 }}>
                <div style={{ width: '100%', height: '1px', background: '#FFFFFF', marginBottom: '20px' }} />
                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Architected by Kimelia Soft</p>
              </div>
            </MonolithContent>

            {/* Glowing interface accent */}
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '200px', height: '200px', background: 'rgba(212,175,55,0.1)', borderRadius: '50%', filter: 'blur(40px)' }} />
          </AppMonolith>
        </VisualSide>
      </ContentWrapper>
    </Section>
  );
}