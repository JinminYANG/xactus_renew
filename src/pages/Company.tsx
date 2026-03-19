import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import { t } from "../lib/i18n";
import ShinImg from "../assets/images/shin.png";
import BossImg from "../assets/images/big_boss.png";
import ShinMiniImg from "../assets/images/shin_mini.png";
import LeeMiniImg from "../assets/images/lee.png";


export default function Company() {
  const language = useAppStore((s) => s.language);

  return (
    <>
      {/* Hero Section */}
      <section className="section-wrapper page-title-section">
        <div className="container">
          <div className="section-title">
            <h1>{t("company.title", language)}</h1>
            <p>{t("company.subtitle", language)}</p>
          </div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="section-wrapper">
        <div className="container">
          <h2 style={{ marginBottom: "clamp(32px, 6vw, 48px)", textAlign: "center" }}>{t("company.leadershipProfile", language)}</h2>
          <Row>
            <Col lg={8} md={10} sm={12} className="mx-auto">
              <Card>
                <Card.Body style={{ padding: "clamp(24px, 4vw, 40px)" }}>
                  <Row className="align-items-center g-4">
                    <Col md={4} className="text-center">
                      <img src={BossImg} alt="Shin" className="img-fluid rounded" style={{ maxWidth: "250px" }} />
                    </Col>
                    <Col md={8}>
                      <h3 style={{ marginBottom: "8px" }}>
                        {language === "ko" ? "신 상 준 (Sang Joon Shin)" : "신 상 준 (Sang Joon Shin)"}
                      </h3>
                      <p style={{ color: "var(--xactus-green)", marginBottom: "clamp(16px, 3vw, 24px)", fontWeight: 600 }}>
                        {`M.D., Ph.D. | ${t("company.leadershipRole", language)}`}
                      </p>

                      <h5 style={{ marginTop: "clamp(16px, 3vw, 24px)", marginBottom: "12px" }}>{t("company.professionalAchievements", language)}</h5>
                      <ul style={{ color: "var(--medium-grey)", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
                        <li>{t("company.techTransfer", language)}</li>
                        <li>{t("company.intlPatentApps", language)}</li>
                        <li>{t("company.domesticPatentReg", language)}</li>
                        <li>{t("company.bigDataPatent1", language)}</li>
                        <li>{t("company.bigDataPatent2", language)}</li>
                        <li>{t("company.tnikWnt", language)}</li>
                        <li>{t("company.nrasTargeted", language)}</li>
                        <li>{t("company.clinicalTrialLed", language)}</li>
                      </ul>

                      <Row style={{ marginTop: "clamp(16px, 3vw, 24px)" }}>
                        <Col md={6}>
                          <h5 style={{ marginBottom: "12px" }}>{t("company.education", language)}</h5>
                          <ul style={{ color: "var(--medium-grey)", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
                            <li>{t("company.phd", language)}</li>
                            <li>{t("company.profYonsei", language)}</li>
                            <li>{t("company.residency", language)}</li>
                          </ul>
                        </Col>
                        <Col md={6}>
                          <h5 style={{ marginBottom: "12px" }}>{t("company.leadershipRoles", language)}</h5>
                          <ul style={{ color: "var(--medium-grey)", fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
                            <li>{t("company.innovationCenter", language)}</li>
                            <li>{t("company.infoSecurityCenter", language)}</li>
                            <li>{t("company.ksmoDirector", language)}</li>
                            <li>{t("company.chairConference", language)}</li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-wrapper">
        <div className="container">
          <h2 style={{ marginBottom: "clamp(32px, 6vw, 48px)", textAlign: "center" }}>{t("company.ourTeam", language)}</h2>
          <Row className="g-4">
            <Col lg={3} md={6} sm={12}>
              <Card style={{ height: "100%", overflow: "hidden" }}>
                <Card.Body style={{ paddingTop: "clamp(16px, 2vw, 20px)" }}>
                  <h5 style={{ color: "var(--xactus-green)", marginBottom: "4px", fontSize: "clamp(1rem, 1.8vw, 1.1rem)" }}>
                    {language === "ko" ? "신 상 준" : "S.J. Shin"}
                  </h5>
                  <p style={{ color: "var(--accent-orange)", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", marginBottom: "16px", fontWeight: 600 }}>
                    {t("company.founderCeo", language)}
                  </p>
                  <ul style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)", paddingLeft: "20px", textAlign: "left" }}>
                    <li style={{ marginBottom: "8px" }}>{t("company.professor", language)}</li>
                    <li style={{ marginBottom: "8px" }}>{t("company.shinExperience1", language)}</li>
                    <li style={{ marginBottom: "8px" }}>{t("company.shinExperience2", language)}</li>
                    <li>{t("company.shinExperience3", language)}</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card style={{ height: "100%", overflow: "hidden" }}>
                <Card.Body style={{ paddingTop: "clamp(16px, 2vw, 20px)" }}>
                  <h5 style={{ color: "var(--xactus-green)", marginBottom: "4px", fontSize: "clamp(1rem, 1.8vw, 1.1rem)" }}>
                    {language === "ko" ? "이 혁" : "Lee"}
                  </h5>
                  <p style={{ color: "var(--accent-orange)", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", marginBottom: "16px", fontWeight: 600 }}>
                    {t("company.technologyAdvisor", language)}
                  </p>
                  <ul style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)", paddingLeft: "20px", textAlign: "left" }}>
                    <li style={{ marginBottom: "8px" }}>{t("company.leePhd", language)}</li>
                    <li style={{ marginBottom: "8px" }}>{t("company.leeResearcher", language)}</li>
                    <li style={{ marginBottom: "8px" }}>{t("company.leeExperience1", language)}</li>
                    <li>{t("company.leeMedChem", language)}</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card style={{ height: "100%" }}>
                <Card.Body style={{ paddingTop: "clamp(16px, 2vw, 20px)" }}>
                  <h5 style={{ color: "var(--xactus-green)", marginBottom: "4px", fontSize: "clamp(1rem, 1.8vw, 1.1rem)" }}>
                    {language === "ko" ? "고 종 성" : "Ko"}
                  </h5>
                  <p style={{ color: "var(--accent-orange)", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", marginBottom: "16px", fontWeight: 600 }}>
                    {t("company.developmentAdvisor", language)}
                  </p>
                  <ul style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)", paddingLeft: "20px", textAlign: "left" }}>
                    <li style={{ marginBottom: "8px" }}>{t("company.caltechPhd", language)}</li>
                    <li style={{ marginBottom: "8px" }}>{t("company.lgChemPlatform", language)}</li>
                    <li>{t("company.genoCeo", language)}</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card style={{ height: "100%" }}>
                <Card.Body style={{ paddingTop: "clamp(16px, 2vw, 20px)" }}>
                  <h5 style={{ color: "var(--xactus-green)", marginBottom: "4px", fontSize: "clamp(1rem, 1.8vw, 1.1rem)" }}>
                    {language === "ko" ? "문 영 춘" : "Moon"}
                  </h5>
                  <p style={{ color: "var(--accent-orange)", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", marginBottom: "16px", fontWeight: 600 }}>
                    {t("company.developmentAdvisor", language)}
                  </p>
                  <ul style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)", paddingLeft: "20px", textAlign: "left" }}>
                    <li style={{ marginBottom: "8px" }}>{t("company.orgChemPhd", language)}</li>
                    <li style={{ marginBottom: "8px" }}>{t("company.ptcTherapeutics", language)}</li>
                    <li>{t("company.daimeBio", language)}</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-wrapper" style={{ background: "var(--gradient-card)" }}>
        <div className="container">
          <h2 style={{ marginBottom: "clamp(32px, 6vw, 48px)", textAlign: "center" }}>{t("company.contactLocation", language)}</h2>
          <Row className="g-4">
            <Col lg={6} md={12}>
              <Card>
                <Card.Body>
                  <h5 style={{ marginBottom: "16px", color: "var(--xactus-green)" }}>{t("company.headquarters", language)}</h5>
                  <p style={{ marginBottom: "12px", fontSize: "clamp(0.95rem, 1.8vw, 1rem)" }}>
                    <strong>{t("company.address", language)}:</strong>
                    <br />
                    {language === "ko" ? "서울특별시 서대문구 이화여대1안길 8-3 702호" : "Room 702, Building 8-3, Ewha-yeodae 1-an-gil, Seodaemun-gu, Seoul"}
                  </p>
                  <p style={{ marginBottom: "12px", fontSize: "clamp(0.95rem, 1.8vw, 1rem)" }}>
                    <strong>{t("company.email", language)}:</strong>
                    <br />
                    <a href="mailto:ssj338@yuhs.ac">ssj338@yuhs.ac</a>
                  </p>
                  <p style={{ marginBottom: "0", fontSize: "clamp(0.95rem, 1.8vw, 1rem)" }}>
                    <strong>{t("company.phone", language)}:</strong>
                    <br />
                    <a href="tel:+82-10-2611-2634">+82-10-2611-2634</a>
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12}>
              <Card>
                <Card.Body style={{ padding: "0" }}>
                  <iframe
                    width="100%"
                    height="400"
                    style={{ border: "0", minHeight: "300px" }}
                    loading="lazy"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.836123854838!2d126.9403!3d37.5551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3cb6b0b0001%3A0x1234567890!2sEwha%20Womans%20University!5e0!3m2!1sen!2skr!4v1626784923456"
                  ></iframe>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
