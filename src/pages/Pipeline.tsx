import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import { t } from "../lib/i18n";
import TnikImg from "../assets/images/tnik_inhibitor.png";
import AdcImg from "../assets/images/adc_(stat3_inhibtor).png";
import Foxm1Img from "../assets/images/foxm1_inhibitor.png";
import Irp2Img from "../assets/images/irp2_inhibitor.png";
import PipelineChart from "../components/PipelineChart";

export default function Pipeline() {
  const language = useAppStore((s) => s.language);

  return (
    <>
      {/* Hero Section */}
      <section className="section-wrapper page-title-section">
        <div className="container">
          <div className="section-title">
            <h1>{t("pipeline.title", language)}</h1>
            <p>{t("pipeline.subtitle", language)}</p>
          </div>
        </div>
      </section>

      {/* Program Cards Section */}
      <section className="section-wrapper">
        <div className="container">
          <h2 style={{ marginBottom: "clamp(32px, 6vw, 48px)", textAlign: "center" }}>{t("pipeline.programs", language)}</h2>
          <Row className="g-4">
            <Col lg={6} md={6} sm={12}>
              <Card>
                <Card.Body>
                  <h5 style={{ marginBottom: "16px", color: "var(--xactus-green)" }}>{t("pipeline.tnikTitle", language)}</h5>
                  <img src={TnikImg} alt="TNIK inhibitor" className="img-fluid mb-3" />
                  <Card.Text>{t("pipeline.tnikDesc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card>
                <Card.Body>
                  <h5 style={{ marginBottom: "16px", color: "var(--accent-orange)" }}>{t("pipeline.adcTitle", language)}</h5>
                  <img src={AdcImg} alt="ADC (STAT3 inhibitor)" className="img-fluid mb-3" />
                  <Card.Text>{t("pipeline.adcDesc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card>
                <Card.Body>
                  <h5 style={{ marginBottom: "16px", color: "var(--xactus-green)" }}>{t("pipeline.foxm1Title", language)}</h5>
                  <img src={Foxm1Img} alt="FOXM1 inhibitor" className="img-fluid mb-3" />
                  <Card.Text>{t("pipeline.foxm1Desc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card>
                <Card.Body>
                  <h5 style={{ marginBottom: "16px", color: "var(--accent-orange)" }}>{t("pipeline.irp2Title", language)}</h5>
                  <img src={Irp2Img} alt="IRP2 inhibitor" className="img-fluid mb-3" />
                  <Card.Text>{t("pipeline.irp2Desc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Pipeline Overview Section */}
      <section className="section-wrapper" style={{ background: "var(--gradient-card)" }}>
        <div className="container">
          <h2 style={{ marginBottom: "clamp(32px, 6vw, 48px)", textAlign: "center" }}>{t("pipeline.pipelineProgress", language)}</h2>
          <Row>
            <Col lg={9} md={11} sm={12} className="mx-auto">
              <PipelineChart />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
