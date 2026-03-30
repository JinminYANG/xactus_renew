import React, { useRef, useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useAppStore } from "../store/useAppStore";
import { t } from "../lib/i18n";
import DotNavigation from "../components/DotNavigation";
import PlatformImg from "../assets/images/platform.png";

export default function Platform() {
  const language = useAppStore((s) => s.language);
  const overviewRef = useRef<HTMLDivElement | null>(null);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const impactRef = useRef<HTMLDivElement | null>(null);
  const [impactVisible, setImpactVisible] = useState(false);
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const [valuesVisible, setValuesVisible] = useState(false);

  const sections = [
    { id: 'hero-section', label: 'Our Platform', shortLabel: 'PLATFORM' },
    { id: 'overview-section', label: 'Who We Are', shortLabel: 'OVER' },
    { id: 'impact-section', label: 'Our Impact', shortLabel: 'IMPACT' },
    { id: 'values-section', label: 'Core Values', shortLabel: 'VALUE' },
    { id: 'footer-section', label: 'Footer', shortLabel: 'FIN' },
  ]

  useEffect(() => {
    const overviewEl = overviewRef.current;
    const impactEl = impactRef.current;
    const valuesEl = valuesRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === overviewEl) {
            setOverviewVisible(entry.isIntersecting);
          } else if (entry.target === impactEl) {
            setImpactVisible(entry.isIntersecting);
          } else if (entry.target === valuesEl) {
            setValuesVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (overviewEl) obs.observe(overviewEl);
    if (impactEl) obs.observe(impactEl);
    if (valuesEl) obs.observe(valuesEl);

    return () => obs.disconnect();
  }, []);

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  }

  const boxVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  }

  const cardTransition = { duration: 0.5 }
  const boxTransition = { duration: 0.6 }

  return (
    <>
      <DotNavigation sections={sections} />
      {/* Hero Section */}
      <section id="hero-section" className="section-wrapper hero-section bg-sheen">
        <div className="section-decoration" aria-hidden="true" />
        <div className="container">
          <div className="section-title hero-title">
            <h1 className="text-white">{t("platform.title", "en")}</h1>
            <p>{t("platform.subtitle", language)}</p>
          </div>
        </div>
      </section>

      {/* Vision/Overview Section */}
      <section id="overview-section" className="section-wrapper with-bg" ref={overviewRef}>
        <div className="container">
          <Row className="align-items-center g-2" style={{ rowGap: "clamp(16px, 3vh, 24px)" }}>
            <Col lg={6} md={12}>
              <motion.div initial="initial" animate={overviewVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.1 }}>
                <div>
                  <h2 style={{ marginBottom: "clamp(16px, 3vw, 24px)" }}>Who We Are</h2>
                  <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", marginBottom: "clamp(12px, 2vw, 16px)" }}>
                    {t("platform.whoWeAreDesc1", language)}
                  </p>
                  <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", marginBottom: "clamp(16px, 3vw, 24px)" }}>
                    {t("platform.whoWeAreDesc2", language)}
                  </p>
                </div>
              </motion.div>
            </Col>
            <Col lg={6} md={12}>
              <motion.div initial="initial" animate={overviewVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.2 }}>
                <img src={PlatformImg} alt="Platform" className="img-fluid rounded" style={{ maxHeight: "400px", objectFit: "cover" }} />
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact-section" className="section-wrapper with-bg" ref={impactRef}>
        <div className="container">
          <h2 style={{ marginBottom: "clamp(20px, 4vw, 32px)", textAlign: "center" }}>Our Impact</h2>
          <Row className="g-2" style={{ rowGap: "clamp(16px, 3vh, 24px)" }}>
            <Col lg={6} md={6} sm={12}>
              <motion.div initial="initial" animate={impactVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.1 }}>
                <Card>
                  <Card.Body>
                    <h5 style={{ color: "var(--xactus-green)", marginBottom: "clamp(10px, 1.5vw, 12px)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                      {t("platform.patientAccess", language)}
                    </h5>
                    <Card.Text>{t("platform.patientAccessDesc", language)}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <motion.div initial="initial" animate={impactVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.2 }}>
                <Card>
                  <Card.Body>
                    <h5 style={{ color: "var(--accent-orange)", marginBottom: "clamp(10px, 1.5vw, 12px)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                      {t("platform.socialImpact", language)}
                    </h5>
                    <Card.Text>{t("platform.socialImpactDesc", language)}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <motion.div initial="initial" animate={impactVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.3 }}>
                <Card>
                  <Card.Body>
                    <h5 style={{ color: "var(--xactus-green)", marginBottom: "clamp(10px, 1.5vw, 12px)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                      {t("platform.scientificExcellence", language)}
                    </h5>
                    <Card.Text>{t("platform.scientificExcellenceDesc", language)}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <motion.div initial="initial" animate={impactVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.4 }}>
                <Card>
                  <Card.Body>
                    <h5 style={{ color: "var(--accent-orange)", marginBottom: "clamp(10px, 1.5vw, 12px)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)" }}>
                      {t("platform.qualityOfLife", language)}
                    </h5>
                    <Card.Text>{t("platform.qualityOfLifeDesc", language)}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Value Propositions */}
      <section id="values-section" className="section-wrapper with-bg" ref={valuesRef}>
        <div className="container">
          <h2 style={{ marginBottom: "clamp(20px, 4vw, 32px)", textAlign: "center" }}>Core Values</h2>
          <Row>
            <Col lg={10} md={12} className="mx-auto">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(250px, 60vw, 280px), 1fr))", gap: "clamp(16px, 3vw, 24px)", marginTop: "clamp(20px, 3vw, 32px)" }}>
                <motion.div initial="initial" animate={valuesVisible ? "animate" : "initial"} variants={boxVariants} transition={{ ...boxTransition, delay: 0 }}>
                  <div className="core-value-box">
                    <h4 style={{ color: "var(--xactus-green)", marginBottom: "clamp(8px, 1.2vw, 10px)", fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}>🔬 {t("platform.scientificRigor", language)}</h4>
                    <p style={{ fontSize: "clamp(0.9rem, 1.6vw, 1rem)", lineHeight: "1.6", margin: 0 }}>
                      {t("platform.scientificRigorDesc", language)}
                    </p>
                  </div>
                </motion.div>
                <motion.div initial="initial" animate={valuesVisible ? "animate" : "initial"} variants={boxVariants} transition={{ ...boxTransition, delay: 0.1 }}>
                  <div className="core-value-box">
                    <h4 style={{ color: "var(--accent-orange)", marginBottom: "clamp(8px, 1.2vw, 10px)", fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}>🎯 {t("platform.patientFocus", language)}</h4>
                    <p style={{ fontSize: "clamp(0.9rem, 1.6vw, 1rem)", lineHeight: "1.6", margin: 0 }}>
                      {t("platform.patientFocusDesc", language)}
                    </p>
                  </div>
                </motion.div>
                <motion.div initial="initial" animate={valuesVisible ? "animate" : "initial"} variants={boxVariants} transition={{ ...boxTransition, delay: 0.2 }}>
                  <div className="core-value-box">
                    <h4 style={{ color: "var(--xactus-green)", marginBottom: "clamp(8px, 1.2vw, 10px)", fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}>💡 {t("platform.innovationValue", language)}</h4>
                    <p style={{ fontSize: "clamp(0.9rem, 1.6vw, 1rem)", lineHeight: "1.6", margin: 0 }}>
                      {t("platform.innovationValueDesc", language)}
                    </p>
                  </div>
                </motion.div>
                <motion.div initial="initial" animate={valuesVisible ? "animate" : "initial"} variants={boxVariants} transition={{ ...boxTransition, delay: 0.3 }}>
                  <div className="core-value-box">
                    <h4 style={{ color: "var(--accent-orange)", marginBottom: "clamp(8px, 1.2vw, 10px)", fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}>🤝 {t("platform.collaboration", language)}</h4>
                    <p style={{ fontSize: "clamp(0.9rem, 1.6vw, 1rem)", lineHeight: "1.6", margin: 0 }}>
                      {t("platform.collaborationDesc", language)}
                    </p>
                  </div>
                </motion.div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
