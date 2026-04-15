"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Users, Globe, ShieldCheck } from "lucide-react";

const Section = styled.section`
  padding: 160px 8%;
  background: #F8F8F8; /* Soft Studio Gray for rhythm */
  position: relative;
`;

const Header = styled.div`
  max-width: 1400px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: end;
  @media (max-width: 1024px) { grid-template-columns: 1fr; }
`;

const SectionLabel = styled.div`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  color: #D4AF37;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.04em;
`;

const Subtitle = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: 1.4rem;
  color: rgba(0,0,0,0.5);
  max-width: 500px;
  line-height: 1.4;
`;

const PrinciplesGrid = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px; /* For the "Grid Line" look */
  background: rgba(0,0,0,0.05); /* Lines color */
  border: 1px solid rgba(0,0,0,0.05);

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const Card = styled(motion.div)`
  background: #FFFFFF;
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  transition: all 0.5s ease;

  &:hover {
    background: #FFFFFF;
    box-shadow: inset 0 -4px 0 #D4AF37;
    z-index: 2;
  }
`;

const IconBox = styled.div`
  color: #D4AF37;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const CardBody = styled.p`
  font-size: 0.95rem;
  color: rgba(0,0,0,0.6);
  line-height: 1.7;
`;

const principles = [
  {
    icon: <Cpu size={32} />,
    title: "Innovation First",
    body: "Technology is not decoration. We integrate AI as a genuine differentiator to solve complex interaction problems."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Experiential Design",
    body: "UX is central to every product. We build interfaces that feel intentional and seamless, removing all digital friction."
  },
  {
    icon: <Users size={32} />,
    title: "Talent Empowerment",
    body: "We engineer professional platforms that give local creative talent the infrastructure to compete at global standards."
  },
  {
    icon: <Globe size={32} />,
    title: "Scalable Systems",
    body: "Our architecture is modular and API-first. Every solution is built once to thrive in any market, at any scale."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Curated Trust",
    body: "We build safe, reliable ecosystems. Through admin-approval and verified listings, we maintain the integrity of our platforms."
  }
];

export default function Philosophy() {
  return (
    <Section id="philosophy">
      <Header>
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
        >
          <SectionLabel>Section 02</SectionLabel>
          <Title>The Studio <br /> Philosophy</Title>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Subtitle>
            "We don't build generic software. We build the architecture for the next generation of creators."
          </Subtitle>
        </motion.div>
      </Header>

      <PrinciplesGrid>
        {principles.map((p, i) => (
          <Card 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <IconBox>{p.icon}</IconBox>
            <CardTitle>{p.title}</CardTitle>
            <CardBody>{p.body}</CardBody>
          </Card>
        ))}
      </PrinciplesGrid>
    </Section>
  );
}