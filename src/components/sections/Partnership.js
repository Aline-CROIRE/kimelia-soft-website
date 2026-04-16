"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Shirt, Store, ShoppingBag, Handshake, X, Loader2, Sparkles } from "lucide-react";



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
    box-shadow: inset 0 -4px 0 #D4AF37; 
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

const Overlay = styled(motion.div)`
  position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 10000;
  display: flex; justify-content: center; align-items: center; backdrop-filter: blur(10px); padding: 20px;
`;

const FormCard = styled(motion.div)`
  background: #FFFFFF; width: 100%; max-width: 480px; 
  max-height: 92vh; overflow-y: auto; border-radius: 12px;
  box-shadow: 0 50px 100px rgba(0,0,0,0.5);
  position: relative;
  &::-webkit-scrollbar { width: 0px; }
`;

const IdentityBar = styled.div`
  width: 100%; padding: 40px 0; background: #FFF;
  border-bottom: 1px solid #F5F5F5;
  display: flex; justify-content: center; align-items: center;
  position: sticky; top: 0; z-index: 20;
`;

const FormPadding = styled.div`
  padding: 40px;
`;

const InputGroup = styled.div`
  margin-bottom: 22px;
  label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #000; margin-bottom: 10px; letter-spacing: 0.05em; }
  input, textarea { 
    width: 100%; padding: 16px; background: #F9F9F9; border: 1.5px solid #F0F0F0; border-radius: 6px;
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
        desc: "Invest in the infrastructure of Africa's creative economy. Let’s build the future together.",
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
    
    const formData = {
      category: activeForm.title,
      name: e.target.name.value,
      email: e.target.email.value,
      customDetail: e.target.custom.value,
      message: e.target.message.value
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setActiveForm(null);
          setStatus("idle");
        }, 5000);
      }
    } catch (err) {
      alert("Error submitting. Please check your connection.");
      setStatus("idle");
    }
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
            <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FormCard initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}>
                <X size={22} style={{ position: 'absolute', top: 25, right: 25, cursor: 'pointer', color: '#CCC', zIndex: 30 }} onClick={() => setActiveForm(null)} />
                
                <IdentityBar>
                  <Image src="/logo.png" alt="Kimelia Soft" width={150} height={45} style={{ objectFit: 'contain' }} />
                </IdentityBar>

                <FormPadding>
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
                         <span style={{ fontSize: '10px', fontWeight: 800, color: '#D4AF37', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{activeForm.title} Registration</span>
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
                          <textarea name="message" rows="3" placeholder="Tell us your goals..." />
                        </InputGroup>
                        <button className="metallic-gold-pill" style={{ width: '100%', color: '#FFF', height: '60px', borderRadius: '8px' }} disabled={status === "loading"}>
                          {status === "loading" ? <Loader2 className="animate-spin" /> : "Complete Registration"}
                        </button>
                      </form>
                    </>
                  )}
                </FormPadding>
              </FormCard>
            </Overlay>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}