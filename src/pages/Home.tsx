import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import { t } from "../lib/i18n";
import CoreTechImg from "../assets/images/core_technology.jpg";
import LogoMiniImg from "../assets/images/logo_mini.png";

export default function Home() {
  const language = useAppStore((s) => s.language);

  return (
    <>
      {/* Hero Section */}
      <section className="section-wrapper hero-section">
        <div className="container">
          <Row className="align-items-center g-4">
            <Col lg={6} md={12}>
              <div>
                <h1>{t("home.title", language)}</h1>
                <p style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)", marginBottom: "clamp(24px, 4vw, 32px)", lineHeight: 1.8 }}>
                  {t("home.subtitle", language)}
                </p>
              </div>
            </Col>
            <Col lg={6} md={12}>
              {/* <img src={CoreTechImg} alt="Core Technology" className="img-fluid rounded" style={{ maxHeight: "400px", objectFit: "cover" }} /> */}
              <img src={LogoMiniImg} alt="Logo Mini" className="img-fluid rounded p-5 logo-image" style={{ maxHeight: "400px", objectFit: "cover" }} />
            </Col>
          </Row>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-wrapper">
        <div className="container">
          <div className="section-title">
            <h2>{t("home.missionTitle", language)}</h2>
            <p>{t("home.missionSubtitle", language)}</p>
          </div>
          <Row className="g-4">
            <Col lg={4} md={6} sm={12}>
              <Card className="h-100">
                <Card.Body>
                  <h5 className="mb-3" style={{ color: "var(--xactus-green)" }}>
                    {t("home.drugDevelopment", language)}
                  </h5>
                  <Card.Text>{t("home.drugDevelopmentDesc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="h-100">
                <Card.Body>
                  <h5 className="mb-3" style={{ color: "var(--accent-orange)" }}>
                    {t("home.innovation", language)}
                  </h5>
                  <Card.Text>{t("home.innovationDesc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="h-100">
                <Card.Body>
                  <h5 className="mb-3" style={{ color: "var(--xactus-green)" }}>
                    {t("home.patientImpact", language)}
                  </h5>
                  <Card.Text>{t("home.patientImpactDesc", language)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="section-wrapper">
        <div className="container">
          <div className="section-title">
            <h2>{t("home.coreOurCore", language)}</h2>
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
