import React, { useRef, useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useAppStore } from "../store/useAppStore";
import { t } from "../lib/i18n";import DotNavigation from "../components/DotNavigation";import TnikImg from "../assets/images/tnik_inhibitor.png";
import AdcImg from "../assets/images/adc_(stat3_inhibtor).png";
import Foxm1Img from "../assets/images/foxm1_inhibitor.png";
import Irp2Img from "../assets/images/irp2_inhibitor.png";
import PipelineChart from "../components/PipelineChart";

export default function Pipeline() {
  const language = useAppStore((s) => s.language);
  const programsRef = useRef<HTMLDivElement | null>(null);
  const [programsVisible, setProgramsVisible] = useState(false);

  useEffect(() => {
    const el = programsRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setProgramsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const sections = [
    { id: 'hero-section', label: 'Our Pipeline', shortLabel: 'PIPELINE' },
    { id: 'programs-section', label: 'Development Programs', shortLabel: 'PROG' },
    { id: 'chart-section', label: 'Pipeline Progress', shortLabel: 'CHART' },
    { id: 'footer-section', label: 'Footer', shortLabel: 'FIN' },
  ]

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  }

  const cardTransition = { duration: 0.5 }

  return (
    <>
      <DotNavigation sections={sections} />
      {/* Hero Section */}
      <section id="hero-section" className="section-wrapper hero-section bg-sheen">
        <div className="section-decoration" aria-hidden="true" />
        <div className="container">
          <div className="section-title hero-title">
            <h1 className="text-white">{t("pipeline.title", "en")}</h1>
            <p>{t("pipeline.subtitle", language)}</p>
          </div>
        </div>
      </section>

      {/* Program Cards Section */}
      <section id="programs-section" className="section-wrapper with-bg">
        <div className="container">
          <h2 style={{ marginBottom: "clamp(20px, 4vw, 32px)", textAlign: "center" }}>Development Programs</h2>
          <Row className="g-2" style={{ rowGap: "clamp(10px, 1vh, 24px)" }} ref={programsRef}>
            <Col lg={6} md={6} sm={12}>
              <motion.div initial="initial" animate={programsVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.1 }}>
                <Card style={{ height: "100%" }}>
                  <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                    <h5 style={{ marginBottom: "clamp(8px, 1.2vw, 10px)", color: "var(--xactus-green)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", lineHeight: "1.4" }}>{t("pipeline.tnikTitle", language)}</h5>
                    <Row>
                      <Col md={12} xs={6} className="">
                        <img src={TnikImg} alt="TNIK inhibitor" className="img-fluid mb-2 mx-auto" style={{ maxHeight: "clamp(80px, 20vw, 300px)", objectFit: "contain" }} />
                      </Col>
                      <Col md={12} xs={6} className="">
                        <Card.Text style={{ marginTop: "auto", fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}>{t("pipeline.tnikDesc", language)}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <motion.div initial="initial" animate={programsVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.2 }}>
                <Card style={{ height: "100%" }}>
                  <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                    <h5 style={{ marginBottom: "clamp(8px, 1.2vw, 10px)", color: "var(--accent-orange)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", lineHeight: "1.4" }}>{t("pipeline.adcTitle", language)}</h5>
                    <Row>
                      <Col md={12} xs={6} className="">
                        <img src={AdcImg} alt="ADC (STAT3 inhibitor)" className="img-fluid mb-2 mx-auto" style={{ maxHeight: "clamp(80px, 20vw, 300px)", objectFit: "contain" }} />
                      </Col>
                      <Col md={12} xs={6} className="">
                        <Card.Text style={{ marginTop: "auto", fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}>{t("pipeline.adcDesc", language)}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <motion.div initial="initial" animate={programsVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.3 }}>
                <Card style={{ height: "100%" }}>
                  <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                    <h5 style={{ marginBottom: "clamp(8px, 1.2vw, 10px)", color: "var(--xactus-green)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", lineHeight: "1.4" }}>{t("pipeline.foxm1Title", language)}</h5>
                    <Row>
                      <Col md={12} xs={6} className="">
                        <img src={Foxm1Img} alt="FOXM1 inhibitor" className="img-fluid mb-2 mx-auto" style={{ maxHeight: "clamp(80px, 20vw, 300px)", objectFit: "contain" }} />
                      </Col>
                      <Col md={12} xs={6} className=""> 
                        <Card.Text style={{ marginTop: "auto", fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}>{t("pipeline.foxm1Desc", language)}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <motion.div initial="initial" animate={programsVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.4 }}>
                <Card style={{ height: "100%" }}>
                  <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                    <h5 style={{ marginBottom: "clamp(8px, 1.2vw, 10px)", color: "var(--accent-orange)", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", lineHeight: "1.4" }}>{t("pipeline.irp2Title", language)}</h5>
                    <Row>
                      <Col md={12} xs={6} className="">
                        <img src={Irp2Img} alt="IRP2 inhibitor" className="img-fluid mb-2 mx-auto" style={{ maxHeight: "clamp(80px, 20vw, 300px)", objectFit: "contain" }} />
                      </Col>
                      <Col md={12} xs={6} className="">
                        <Card.Text style={{ marginTop: "auto", fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}>{t("pipeline.irp2Desc", language)}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Pipeline Chart Section */}
      <section id="chart-section" className="section-wrapper with-bg">
        <div className="container">
          <h2 style={{ marginBottom: "clamp(10px, 3vw, 28px)", textAlign: "center" }}>Pipeline Progress</h2>
          <Row>
            <Col lg={12} md={12} sm={12} className="mx-auto">
              <PipelineChart />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
