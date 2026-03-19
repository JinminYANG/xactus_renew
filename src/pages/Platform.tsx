import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import { t } from "../lib/i18n";
import PlatformImg from "../assets/images/platform.png";

export default function Platform() {
  const language = useAppStore((s) => s.language);

  return (
    <>
      {/* Hero Section */}
      <section className="section-wrapper page-title-section">
        <div className="container">
          <div className="section-title">
            <h1>{t("platform.title", language)}</h1>
            <p>{t("platform.subtitle", language)}</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-wrapper">
        <div className="container">
          <Row className="align-items-center g-4">
            <Col lg={6} md={12}>
              <h2 style={{ marginBottom: "clamp(16px, 3vw, 24px)" }}>{t("platform.whoWeAre", language)}</h2>
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", marginBottom: "clamp(12px, 2vw, 16px)" }}>
                {t("platform.whoWeAreDesc1", language)}
              </p>
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", marginBottom: "clamp(16px, 3vw, 24px)" }}>
                {t("platform.whoWeAreDesc2", language)}
              </p>
            </Col>
            <Col lg={6} md={12}>
              <img src={PlatformImg} alt="Platform" className="img-fluid rounded" />
            </Col>
          </Row>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-wrapper" style={{ background: "var(--gradient-card)" }}>
        <div className="container">
          <h2 style={{ marginBottom: "clamp(32px, 6vw, 48px)", textAlign: "center" }}>{t("platform.ourImpact", language)}</h2>
          <Row className="g-4">
            <Col lg={6} md={6} sm={12}>
              <Card>
                <Card.Body>
                  <h5 style={{ color: "var(--xactus-green)", marginBottom: "16px" }}>
                    {t("platform.patientAccess", language)}
                  </h5>
                  <Card.Text>{t("platform.patientAccessDesc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card>
                <Card.Body>
                  <h5 style={{ color: "var(--accent-orange)", marginBottom: "16px" }}>
                    {t("platform.socialImpact", language)}
                  </h5>
                  <Card.Text>{t("platform.socialImpactDesc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card>
                <Card.Body>
                  <h5 style={{ color: "var(--xactus-green)", marginBottom: "16px" }}>
                    {t("platform.scientificExcellence", language)}
                  </h5>
                  <Card.Text>{t("platform.scientificExcellenceDesc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Card>
                <Card.Body>
                  <h5 style={{ color: "var(--accent-orange)", marginBottom: "16px" }}>
                    {t("platform.qualityOfLife", language)}
                  </h5>
                  <Card.Text>{t("platform.qualityOfLifeDesc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section-wrapper">
        <div className="container">
          <h2 style={{ marginBottom: "clamp(32px, 6vw, 48px)", textAlign: "center" }}>{t("platform.coreValues", language)}</h2>
          <Row>
            <Col lg={10} md={12} className="mx-auto">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(20px, 3vw, 32px)", marginTop: "clamp(20px, 3vw, 32px)" }}>
                <div>
                  <h4 style={{ color: "var(--xactus-green)", marginBottom: "16px" }}>🔬 {t("platform.scientificRigor", language)}</h4>
                  <p style={{ color: "var(--medium-grey)", fontSize: "clamp(0.95rem, 1.8vw, 1rem)" }}>
                    {t("platform.scientificRigorDesc", language)}
                  </p>
                </div>
                <div>
                  <h4 style={{ color: "var(--accent-orange)", marginBottom: "16px" }}>🎯 {t("platform.patientFocus", language)}</h4>
                  <p style={{ color: "var(--medium-grey)", fontSize: "clamp(0.95rem, 1.8vw, 1rem)" }}>
                    {t("platform.patientFocusDesc", language)}
                  </p>
                </div>
                <div>
                  <h4 style={{ color: "var(--xactus-green)", marginBottom: "16px" }}>💡 {t("platform.innovationValue", language)}</h4>
                  <p style={{ color: "var(--medium-grey)", fontSize: "clamp(0.95rem, 1.8vw, 1rem)" }}>
                    {t("platform.innovationValueDesc", language)}
                  </p>
                </div>
                <div>
                  <h4 style={{ color: "var(--accent-orange)", marginBottom: "16px" }}>🤝 {t("platform.collaboration", language)}</h4>
                  <p style={{ color: "var(--medium-grey)", fontSize: "clamp(0.95rem, 1.8vw, 1rem)" }}>
                    {t("platform.collaborationDesc", language)}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
