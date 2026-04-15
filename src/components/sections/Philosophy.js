"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Users, Globe, ShieldCheck } from "lucide-react";

const Section = styled.section`
  padding: 180px 8%;
  background: #FCFCFD; /* Very soft studio light gray */
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

const IntroSection = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  span {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6em;
    color: #D4AF37;
  }
`;

const MainTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4.8rem);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: #000000;
`;

const PhilosophyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
  @media (max-width: 1024px) { display: flex; flex-direction: column; }
`;

const PhilosophyCard = styled(motion.div)`
  grid-column: ${props => props.$span || "span 4"};
  background: #FFFFFF;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(0,0,0,0.05);
  position: relative;
  min-height: 400px;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-10px);
    border-color: #D4AF37;
    box-shadow: 0 30px 60px rgba(0,0,0,0.05);
  }
`;

const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D4AF37;
  margin-bottom: 40px;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 20px;
  color: #000000;
`;

const CardBody = styled.p`
  font-size: 1.05rem;
  color: rgba(0,0,0,0.5);
  line-height: 1.7;
  font-weight: 400;
`;

const QuoteLayer = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: 1.8rem;
  color: #000000;
  opacity: 0.8;
  margin-top: auto;
  border-top: 1px solid rgba(0,0,0,0.05);
  padding-top: 30px;
`;

const principles = [
  {
    icon: <Cpu size={28} />,
    title: "Innovation First",
    body: "Technology is not decoration. We integrate AI as a genuine solution to solve real, observable problems.",
    quote: "Intelligence at the core.",
    span: "span 7"
  },
  {
    icon: <Sparkles size={28} />,
    title: "Intentional UX",
    body: "Design is central to every product. We deliver user experiences that feel seamless and refined, not utilitarian.",
    quote: "Beauty in function.",
    span: "span 5"
  },
  {
    icon: <Users size={28} />,
    title: "Talent Focused",
    body: "We build professional platforms that give local creators the tools and infrastructure to compete globally.",
    quote: "Empowering the vision.",
    span: "span 5"
  },
  {
    icon: <Globe size={28} />,
    title: "Scalable Systems",
    body: "Every product is architected to scale. Built once to serve 10 users and engineered to serve 10 million.",
    quote: "Global by architecture.",
    span: "span 7"
  }
];

export default function Philosophy() {
  return (
    <Section id="philosophy">
      <ContentWrapper>
        <IntroSection>
          <Badge>
            <div style={{ width: 40, height: 1, background: '#D4AF37' }} />
            <span>The Studio Culture</span>
          </Badge>
          <MainTitle>
            Engineering <br /> with <span className="text-gradient-gold">Purpose</span>
          </MainTitle>
          <p style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '1.4rem', color: 'rgba(0,0,0,0.5)', lineHeight: '1.5' }}>
            "We don't build generic software. We build the digital infrastructure for the next generation of African creators."
          </p>
        </IntroSection>

        <PhilosophyGrid>
          {principles.map((p, i) => (
            <PhilosophyCard 
              key={i} 
              $span={p.span}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <div>
                <IconCircle>{p.icon}</IconCircle>
                <CardTitle>{p.title}</CardTitle>
                <CardBody>{p.body}</CardBody>
              </div>
              <QuoteLayer>{p.quote}</QuoteLayer>
            </PhilosophyCard>
          ))}
        </PhilosophyGrid>
      </ContentWrapper>
      
      {/* Subtle background light node */}
      <div style={{ position: 'absolute', bottom: '-10%', left: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)', zIndex: -1 }} />
    </Section>
  );
}