"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Shirt, Store, ShoppingBag, Handshake, X, Loader2, Sparkles } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   STYLES
   ═══════════════════════════════════════════════════════════ */

const Section = styled.section`
  padding: 120px 10% 180px; 
  background: #F9F9F9; 
  color: #000; 
  position: relative;
  border-top: 1px solid #EEE;
`;

const AccessGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  gap: 1px; 
  background: #EEE; 
  border: 1px solid #EEE;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const Card = styled(motion.div)`
  background: #FFF; 
  padding: 80px 60px; 
  display: flex; 
  flex-direction: column; 
  gap: 40px; 
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  &:hover { 
    background: #FAFAFA; 
    box-shadow: inset 5px 0 0 #D4AF37, 0 30px 60px rgba(0,0,0,0.05); 
  }
  h4 { font-size: 1.8rem; font-weight: 800; text-transform: uppercase; }
  p { color: #666; line-height: 1.6; font-size: 1.1rem; max-width: 400px; }
  .cta-small { 
    display: flex; 
    align-items: center; 
    gap: 10px; 
    font-size: 0.85rem; 
    font-weight: 700; 
    color: #D4AF37; 
    text-transform: uppercase; 
    margin-top: auto; 
    letter-spacing: 0.1em; 
  }
`;

/* ═══════════════════════════════════════════════════════════
   FIXED MODAL ARCHITECTURE
   ═══════════════════════════════════════════════════════════ */

const Overlay = styled(motion.div)`
  position: fixed; 
  inset: 0; 
  background: rgba(0,0,0,0.85); 
  z-index: 10000;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  backdrop-filter: blur(12px); 
  padding: 20px;
  cursor: pointer; /* Signal that clicking away closes the form */
`;

const FormCard = styled(motion.div)`
  background: #FFFFFF; 
  width: 100%; 
  max-width: 520px; 
  max-height: 90vh; 
  border-radius: 16px;
  box-shadow: 0 50px 100px rgba(0,0,0,0.5);
  position: relative;
  cursor: default; /* Reset cursor inside the card */
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const IdentityBar = styled.div`
  width: 100%; 
  padding: 45px 40px; 
  background: #FFF;
  border-bottom: 1px solid #F5F5F5;
  display: flex; 
  justify-content: center; 
  align-items: center;
  position: relative;
  z-index: 20;

  /* Enlarged Logo Container */
  .logo-wrapper {
    position: relative;
    width: 220px; /* Increased size */
    height: 60px;  /* Increased size */
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 40px;
  height: 40px;
  background: #F5F5F5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: 0.3s;
  color: #999;

  &:hover {
    background: #EEE;
    color: #000;
    transform: rotate(90deg);
  }
`;

const ScrollableArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #EEE; border-radius: 10px; }
`;

const InputGroup = styled.div`
  margin-bottom: 24px;
  label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #000; margin-bottom: 10px; letter-spacing: 0.05em; }
  input, textarea { 
    width: 100%; padding: 18px; background: #F9F9F9; border: 1.5px solid #F0F0F0; border-radius: 8px;
    font-size: 1rem; outline: none; transition: 0.3s; 
    &:focus { border-color: #D4AF37; background: #FFF; box-shadow: 0 4px 20px rgba(212,175,55,0.1); } 
  }
`;

export default function Partnership() {
  const [activeForm, setActiveForm] = useState(null);
  const [status, setStatus] = useState("idle");

  const audiences = [
    { 
        title: "Retailers", 
        icon: <Store size={28}/>, 
        action: "Partner with us", 
        desc: "Bring AI Try-On into your shop and give your customers a better way to buy.",
        customLabel: "Store Name / Location",
        successMsg: "Confirmed. Our team will reach out to discuss your technology integration."
    },
    { 
        title: "Designers", 
        icon: <Shirt size={28}/>, 
        action: "Apply to join", 
        desc: "Scale your fashion brand. Be among the first creators to sell on Kimelia Luxe.",
        customLabel: "Portfolio or Social Link",
        successMsg: "Application received. Our team will review your work and reach out shortly."
    },
    { 
        title: "Early Buyers", 
        icon: <ShoppingBag size={28}/>, 
        action: "Request access", 
        desc: "Want to shop differently? Join our list for early access to the marketplace.",
        customLabel: "Fashion Interests",
        successMsg: "You're on the list. We will alert you the moment we open our digital doors."
    },
    { 
        title: "Partners", 
        icon: <Handshake size={28}/>, 
        action: "Get in touch", 
        desc: "Let’s build the future together. Join us in scaling Africa’s creative economy.",
        customLabel: "Inquiry Type",
        successMsg: "Thank you. We look forward to exploring a strategic collaboration with you."
    }
  ];

  useEffect(() => {
    const handleTrigger = () => {
      const partnerCategory = audiences.find(a => a.title === "Partners");
      setActiveForm(partnerCategory);
    };
    window.addEventListener("openPartnerForm", handleTrigger);
    return () => window.removeEventListener("openPartnerForm", handleTrigger);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call and DB save
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setActiveForm(null);
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <Section id="partnership">
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ marginBottom: '100px', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#D4AF37', marginBottom: '25px' }}>Access Node</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: '0.9', marginBottom: '40px' }}>Join the <span className="gold-shimmer-text">Network</span></h2>
        </div>

        <AccessGrid>
          {audiences.map((a, i) => (
            <Card key={i} onClick={() => setActiveForm(a)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <div style={{ color: '#D4AF37' }}>{a.icon}</div>
              <div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
              <div className="cta-small">{a.action} <ArrowUpRight size={16} /></div>
            </Card>
          ))}
        </AccessGrid>

        <AnimatePresence>
          {activeForm && (
            <Overlay 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setActiveForm(null)} /* Clicking background closes form */
            >
              <FormCard 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()} /* Prevents closing when clicking inside form */
              >
                <IdentityBar>
                  <CloseButton onClick={() => setActiveForm(null)}>
                    <X size={20} />
                  </CloseButton>
                  <div className="logo-wrapper">
<Image
  src="/logo.png"
  alt="Kimelia Soft Logo"
  width={220}
  height={80}
  style={{
    objectFit: "contain",
  }}
  priority
/>
                  </div>
                </IdentityBar>

                <ScrollableArea>
                  {status === "success" ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          <Sparkles size={60} color="#D4AF37" style={{ margin: '0 auto 25px' }} />
                      </motion.div>
                      <h3 style={{ textTransform: 'uppercase', fontSize: '1.4rem', fontWeight: 800 }}>Success</h3>
                      <p style={{ color: '#666', marginTop: 15, lineHeight: 1.6, fontSize: '1.1rem' }}>{activeForm.successMsg}</p>
                    </div>
                  ) : (
                    <>
                      <div style={{ marginBottom: '35px', textAlign: 'center' }}>
                         <span style={{ fontSize: '10px', fontWeight: 800, color: '#D4AF37', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{activeForm.title} Request</span>
                         <h3 style={{ fontSize: '1.4rem', fontWeight: 800, textTransform: 'uppercase', marginTop: '8px' }}>Register Interest</h3>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <InputGroup>
                          <label>Full Name</label>
                          <input name="name" required placeholder="Name" />
                        </InputGroup>
                        <InputGroup>
                          <label>Email Address</label>
                          <input name="email" type="email" required placeholder="Email" />
                        </InputGroup>
                        <InputGroup>
                          <label>{activeForm.customLabel}</label>
                          <input name="custom" required placeholder="Details" />
                        </InputGroup>
                        <InputGroup>
                          <label>How can we help you?</label>
                          <textarea name="message" rows="3" placeholder="Tell us about your goals..." />
                        </InputGroup>
                        <button className="metallic-gold-pill" style={{ width: '100%', color: '#FFF', height: '65px', borderRadius: '12px' }} disabled={status === "loading"}>
                          {status === "loading" ? <Loader2 className="animate-spin" /> : "Complete Registration"}
                        </button>
                      </form>
                    </>
                  )}
                </ScrollableArea>
              </FormCard>
            </Overlay>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}