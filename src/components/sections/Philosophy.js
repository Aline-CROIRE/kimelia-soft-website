"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Cpu, Layout, Users, BarChart, ShieldCheck } from "lucide-react";

const Section = styled.section`
  padding: 180px 8%;
  background: #FCFCFC;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const Header = styled.div`
  max-width: 900px;
  margin-bottom: 140px;
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
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.05em;
  margin-bottom: 40px;
`;

const Motto = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: rgba(0,0,0,0.5);
  line-height: 1.4;
  max-width: 700px;
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1px;
  background: rgba(0,0,0,0.06); /* Grid line color */
  border: 1px solid rgba(0,0,0,0.06);
`;

const Card = styled(motion.div)`
  grid-column: ${props => props.$span || "span 4"};
  background: #FFFFFF;
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    z-index: 2;
    background: #FFFFFF;
    box-shadow: inset 5px 0 0 #D4AF37, 0 30px 60px rgba(0,0,0,0.05);
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) { grid-column: 1 / -1; padding: 60px 40px; }
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #D4AF37;
`;

const CardNumber = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3em;
  opacity: 0.5;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const CardBody = styled.p`
  font-size: 1.1rem;
  color: rgba(0,0,0,0.5);
  line-height: 1.8;
  max-width: 500px;
`;

const CardFooter = styled.p`
  font-family: var(--font-lora);
  font-style: italic;
  font-size: 1.3rem;
  color: #D4AF37;
  margin-top: auto;
`;

const commitments = [
  {
    id: "01",
    icon: <Cpu size={24} />,
    title: "Intelligent Design",
    body: "We combine deep logic with creative vision to build products that solve problems and open new possibilities for interaction.",
    footer: "Systems that think.",
    span: "span 7"
  },
  {
    id: "02",
    icon: <Layout size={24} />,
    title: "Intuitive Flow",
    body: "Digital products should feel natural. We focus on making technology invisible, so the experience stays human and clear.",
    footer: "Designed for people.",
    span: "span 5"
  },
  {
    id: "03",
    icon: <Users size={24} />,
    title: "Economic Growth",
    body: "Our mission is to create pathways for creators. We build the infrastructure that turns local talent into a global standard.",
    footer: "Empowering creators.",
    span: "span 5"
  },
  {
    id: "04",
    icon: <BarChart size={24} />,
    title: "Limitless Scale",
    body: "We engineer solutions that are ready for the world. Every system we build is architected to handle growth without friction.",
    footer: "Built to scale.",
    span: "span 7"
  },
  {
    id: "05",
    icon: <ShieldCheck size={24} />,
    title: "Trusted Excellence",
    body: "Security and quality are the foundations of our studio. We maintain the highest standards to ensure every platform is a safe space for commerce.",
    footer: "Commitment to quality.",
    span: "span 12"
  }
];

export default function Philosophy() {
  return (
    <Section id="studio" className="blueprint-dots">
      <ContentWrapper>
        <Header>
          <Badge>
            <GoldLine />
            <span>The Studio Philosophy</span>
          </Badge>
          <SectionTitle>
            Architecting <br /> the <span className="gold-shimmer-text">Future</span>
          </SectionTitle>
          <Motto>
            "Kimelia Soft exists to build the digital infrastructure that empowers creators and redefined how we interact with technology."
          </Motto>
        </Header>

        <Grid>
          {commitments.map((c, i) => (
            <Card 
              key={i} 
              $span={c.span}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <CardTop>
                {c.icon}
                <CardNumber>{c.id}</CardNumber>
              </CardTop>
              <div>
                <CardTitle>{c.title}</CardTitle>
                <CardBody>{c.body}</CardBody>
              </div>
              <CardFooter>{c.footer}</CardFooter>
            </Card>
          ))}
        </Grid>
      </ContentWrapper>
      

      <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: '300px', height: '300px', border: '1px solid rgba(212,175,55,0.1)', borderRadius: '50%', pointerEvents: 'none' }} />
    </Section>
  );
}