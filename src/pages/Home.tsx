import React, { useRef, useState, useEffect } from "react";
import { motion } from 'framer-motion'
import { Card, Col, Row } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import { t } from "../lib/i18n";
import DotNavigation from "../components/DotNavigation";
import CoreTechImg from "../assets/images/core_technology.jpg";

export default function Home() {
  const language = useAppStore((s) => s.language);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const [missionVisible, setMissionVisible] = useState(false);

  const sections = [
    { id: 'hero-section', label: 'XACTUS', shortLabel: 'HOME' },
    { id: 'mission-section', label: 'Our Mission', shortLabel: 'MISSION' },
    { id: 'technology-section', label: 'Our Core Technology', shortLabel: 'TECH' },
    { id: 'footer-section', label: 'Footer', shortLabel: 'FIN' },
  ]

  useEffect(() => {
    const el = missionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setMissionVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98, borderColor: "rgba(0,180,216,0.2)" },
    animate: { opacity: 1, y: 0, scale: 1, borderColor: "rgba(0,180,216,0.2)" },
    hover: { y: -6, scale: 1.02, boxShadow: "0 12px 36px rgba(0,180,216,0.12)", borderColor: "rgba(0,180,216,0.45)", transition: { duration: 0.06, borderColor: { duration: 0.03 } } },
    tap: { scale: 0.98 }
  };

  const cardTransition = { duration: 0.32 };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 }
  }

  const MotionCard = (motion as any).create ? (motion as any).create(Card) : motion<any>(Card);

  return (
    <>
      <DotNavigation sections={sections} />
      {/* Hero Section */}
      <section id="hero-section" className="section-wrapper hero-section bg-sheen">
        <div className="section-decoration" aria-hidden="true" />
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-eyebrow">BIOPHARMACEUTICAL INNOVATION</p>
            <h1 className="hero-title">{t("home.title", language)}</h1>
            <p className="hero-subtitle">{t("home.subtitle", language)}</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission-section" className="section-wrapper mission-section" ref={missionRef}>
        <div className="container">
          <div className="section-title">
            <h2>Our Mission</h2>
            <p>{t("home.missionSubtitle", language)}</p>
          </div>
          <Row className="g-2" style={{ rowGap: "clamp(12px, 2vh, 20px)" }}>
            <Col lg={4} md={6} sm={12}>
              <MotionCard initial="initial" animate={missionVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0 }} whileHover="hover" whileTap="tap" layout style={{ height: "100%", position: 'relative' }}>
                <motion.div className="card-overlay" variants={overlayVariants} style={{ position: 'absolute', inset: 0, borderRadius: 16, pointerEvents: 'none' }} />
                <Card.Body style={{ padding: "clamp(12px, 1.5vw, 16px)" }}>
                  <h5 style={{ marginBottom: "clamp(10px, 1.5vw, 12px)", color: "var(--xactus-green)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                    {t("home.drugDevelopment", language)}
                  </h5>
                  <Card.Text>{t("home.drugDevelopmentDesc", language)}</Card.Text>
                </Card.Body>
              </MotionCard>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <MotionCard initial="initial" animate={missionVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.1 }} whileHover="hover" whileTap="tap" layout style={{ height: "100%", position: 'relative' }}>
                <motion.div className="card-overlay" variants={overlayVariants} style={{ position: 'absolute', inset: 0, borderRadius: 16, pointerEvents: 'none' }} />
                <Card.Body style={{ padding: "clamp(12px, 1.5vw, 16px)" }}>
                  <h5 style={{ marginBottom: "clamp(10px, 1.5vw, 12px)", color: "var(--accent-orange)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                    {t("home.innovation", language)}
                  </h5>
                  <Card.Text>{t("home.innovationDesc", language)}</Card.Text>
                </Card.Body>
              </MotionCard>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <MotionCard initial="initial" animate={missionVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.2 }} whileHover="hover" whileTap="tap" layout style={{ height: "100%", position: 'relative' }}>
                <motion.div className="card-overlay" variants={overlayVariants} style={{ position: 'absolute', inset: 0, borderRadius: 16, pointerEvents: 'none' }} />
                <Card.Body style={{ padding: "clamp(12px, 1.5vw, 16px)" }}>
                  <h5 style={{ marginBottom: "clamp(10px, 1.5vw, 12px)", color: "var(--xactus-green)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                    {t("home.patientImpact", language)}
                  </h5>
                  <Card.Text>{t("home.patientImpactDesc", language)}</Card.Text>
                </Card.Body>
              </MotionCard>
            </Col>
          </Row>
        </div>
      </section>

      {/* Core Technology Section */}
      <section id="technology-section" className="section-wrapper core-tech-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Technology</h2>
            <p>{t("home.coreSubtitle", language)}</p>
          </div>
          <Row>
            <Col lg={8} md={10} sm={12} className="mx-auto">
              <img src={CoreTechImg} alt="Core Technology" className="img-fluid rounded" style={{ marginBottom: "clamp(16px, 3vw, 24px)" }} />
              <p style={{ textAlign: "center", fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>
                {language === "ko"
                  ? "우리의 독점 기술 플랫폼은 전례 없는 정확성으로 새로운 치료 표적을 발굴하고 검증할 수 있습니다."
                  : "Our proprietary technology platform enables us to identify and validate novel therapeutic targets with unprecedented precision"}
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
