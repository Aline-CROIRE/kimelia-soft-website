"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Globe, Cpu, Shirt, Layers } from "lucide-react";

const Section = styled.section`
  padding: 160px 10%; background: #FFFFFF; color: #000; position: relative;
  background-image: radial-gradient(rgba(0, 0, 0, 0.03) 1.5px, transparent 1.5px);
  background-size: 40px 40px;
`;

const MissionGrid = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 100px; margin-bottom: 150px;
  @media (max-width: 1024px) { grid-template-columns: 1fr; gap: 60px; }
`;

const MVBlock = styled.div`
  .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5em; color: #D4AF37; margin-bottom: 30px; display: flex; align-items: center; gap: 15px; }
  h3 { font-size: 2.8rem; font-weight: 900; line-height: 1; margin-bottom: 30px; text-transform: uppercase; }
  p { font-family: var(--font-lora); font-style: italic; font-size: 1.6rem; color: #333; line-height: 1.4; }
`;

const DomainGrid = styled.div`
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; padding-top: 100px; border-top: 1px solid #EEE;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const DomainItem = styled.div`
  display: flex; flex-direction: column; gap: 20px;
  h5 { font-size: 1.3rem; font-weight: 800; text-transform: uppercase; display: flex; align-items: center; gap: 15px; }
  p { color: #666; line-height: 1.7; font-size: 1.1rem; max-width: 500px; }
`;

export default function Ecosystem() {
  return (
    <Section id="ecosystem">
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <MissionGrid>
          <MVBlock>
            <div className="label"><div style={{ width: 40, height: 1, background: '#D4AF37' }} /> Mission</div>
            <h3>Empowering <br /> Talent</h3>
            <p>“To create innovative digital products that empower local talent and transform how people interact with fashion.”</p>
          </MVBlock>
          <MVBlock>
            <div className="label"><div style={{ width: 40, height: 1, background: '#D4AF37' }} /> Vision</div>
            <h3>Leading <br /> Innovation</h3>
            <p>“To be the leading tech company in Africa for AI-driven solutions, marketplaces, and digital innovation.”</p>
          </MVBlock>
        </MissionGrid>

        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#D4AF37', marginBottom: '60px' }}>Interconnected Domains</div>
        <DomainGrid>
          <DomainItem>
            <h5><Globe size={20} color="#D4AF37" /> Digital Marketplaces</h5>
            <p>Curated commerce platforms for fashion and creative products, integrating payments and AI tools natively.</p>
          </DomainItem>
          <DomainItem>
            <h5><Cpu size={20} color="#D4AF37" /> AI-Driven Solutions</h5>
            <p>Building intelligence as infrastructure, from virtual try-on engines to advanced predictive analytics.</p>
          </DomainItem>
          <DomainItem>
            <h5><Shirt size={20} color="#D4AF37" /> Creative Tools</h5>
            <p>Professional storefronts and analytics that allow local talent to compete on global standards.</p>
          </DomainItem>
          <DomainItem>
            <h5><Layers size={20} color="#D4AF37" /> Product Incubation</h5>
            <p>A standardized methodology for taking bold ideas from concept to live, scalable digital products.</p>
          </DomainItem>
        </DomainGrid>
      </div>
    </Section>
  );
}