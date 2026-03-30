import React, { useRef, useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useAppStore } from "../store/useAppStore";
import { t } from "../lib/i18n";
import DotNavigation from "../components/DotNavigation";
import ShinImg from "../assets/images/shin.png";
import BossImg from "../assets/images/big_boss.png";
import ShinMiniImg from "../assets/images/shin_mini.png";
import LeeMiniImg from "../assets/images/lee.png";


export default function Company() {
  const language = useAppStore((s) => s.language);
  const leadershipRef = useRef<HTMLDivElement | null>(null);
  const [leadershipVisible, setLeadershipVisible] = useState(false);
  const teamRef = useRef<HTMLDivElement | null>(null);
  const [teamVisible, setTeamVisible] = useState(false);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [contactVisible, setContactVisible] = useState(false);

  const sections = [
    { id: 'hero-section', label: 'XACTUS Company', shortLabel: 'COMPANY' },
    { id: 'leadership-section', label: 'Leadership Profile', shortLabel: 'CEO' },
    { id: 'team-section', label: 'Our Team', shortLabel: 'TEAM' },
    { id: 'contact-section', label: 'Contact & Location', shortLabel: 'CONTACT' },
    { id: 'footer-section', label: 'Footer', shortLabel: 'FIN' },
  ]

  useEffect(() => {
    const leadershipEl = leadershipRef.current;
    const teamEl = teamRef.current;
    const contactEl = contactRef.current;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === leadershipEl) {
            setLeadershipVisible(entry.isIntersecting);
          } else if (entry.target === teamEl) {
            setTeamVisible(entry.isIntersecting);
          } else if (entry.target === contactEl) {
            setContactVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (leadershipEl) obs.observe(leadershipEl);
    if (teamEl) obs.observe(teamEl);
    if (contactEl) obs.observe(contactEl);

    return () => obs.disconnect();
  }, []);

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
            <h1 className="text-white">{t("company.title", "en")}</h1>
            <p>{t("company.subtitle", language)}</p>
          </div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section id="leadership-section" className="section-wrapper with-bg" ref={leadershipRef}>
        <div className="container">
          <h2 style={{ marginBottom: "clamp(20px, 3vw, 32px)", textAlign: "center" }}>Leadership Profile</h2>
          <Row>
            <Col lg={10} md={11} sm={12} className="mx-auto">
              <motion.div initial="initial" animate={leadershipVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.1 }}>
                <Card>
                <Card.Body style={{ padding: "clamp(12px, 2vw, 24px)" }}>
                  <Row className="align-items-flex-start g-2">
                    <Col sm={12} md={4} className="text-center my-auto">
                      <img src={BossImg} alt="Shin" className="m-auto rounded" style={{ maxWidth: "clamp(10px, 60vw, 180px)", height: "auto" }} />
                    </Col>
                    <Col sm={12} md={8} style={{ color: "rgba(210, 228, 248, 0.9)" }}>
                      <h4 style={{ marginBottom: "2px", fontSize: "clamp(1rem, 1.6vw, 1.3rem)", color: "rgba(210, 228, 248, 0.9)", lineHeight: "1.2" }}>
                        {language === "ko" ? "신 상 준 (Sang Joon Shin)" : "신 상 준 (Sang Joon Shin)"}
                      </h4>
                      <p style={{ color: "var(--xactus-green)", marginBottom: "clamp(6px, 1vw, 10px)", fontWeight: 600, fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)" }}>
                        {`M.D., Ph.D. | ${t("company.leadershipRole", language)}`}
                      </p>

                      <h6 style={{ marginTop: "clamp(6px, 1vw, 10px)", marginBottom: "4px", fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)", color: "rgba(210, 228, 248, 0.9)" }}>{t("company.professionalAchievements", language)}</h6>
                      <ul style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.9rem)", paddingLeft: "16px", marginBottom: "clamp(6px, 1vw, 10px)", lineHeight: "1.2", color: "rgba(210, 228, 248, 0.9)" }}>
                        <li style={{ marginBottom: "3px" }}>{t("company.techTransfer", language)}</li>
                        <li style={{ marginBottom: "3px" }}>{t("company.intlPatentApps", language)}</li>
                        <li style={{ marginBottom: "3px" }}>{t("company.domesticPatentReg", language)}</li>
                        <li style={{ marginBottom: "3px" }}>{t("company.bigDataPatent1", language)}</li>
                        <li style={{ marginBottom: "3px" }}>{t("company.bigDataPatent2", language)}</li>
                        <li style={{ marginBottom: "3px" }}>{t("company.tnikWnt", language)}</li>
                        <li style={{ marginBottom: "3px" }}>{t("company.nrasTargeted", language)}</li>
                        <li>{t("company.clinicalTrialLed", language)}</li>
                      </ul>

                      <Row style={{ marginTop: "clamp(8px, 1vw, 16px)", rowGap: "0.8rem" }}>
                        <Col sm={6} md={6} >
                          <h6 style={{ marginBottom: "2px", fontSize: "clamp(0.75rem, 1.1vw, 0.95rem)", color: "rgba(210, 228, 248, 0.9)" }}>{t("company.education", language)}</h6>
                          <ul style={{ color: "rgba(210, 228, 248, 0.9)", fontSize: "clamp(0.7rem, 1vw, 0.85rem)", paddingLeft: "14px", lineHeight: "1.2", marginBottom: "0" }}>
                            <li style={{ marginBottom: "2px" }}>{t("company.phd", language)}</li>
                            <li style={{ marginBottom: "2px" }}>{t("company.profYonsei", language)}</li>
                            <li>{t("company.residency", language)}</li>
                          </ul>
                        </Col>
                        <Col sm={6} md={6} >
                          <h6 style={{ marginBottom: "2px", fontSize: "clamp(0.75rem, 1.1vw, 0.95rem)", color: "rgba(210, 228, 248, 0.9)" }}>{t("company.leadershipRoles", language)}</h6>
                          <ul style={{ color: "rgba(210, 228, 248, 0.9)", fontSize: "clamp(0.7rem, 1vw, 0.85rem)", paddingLeft: "14px", lineHeight: "1.2", marginBottom: "0" }}>
                            <li style={{ marginBottom: "2px" }}>{t("company.innovationCenter", language)}</li>
                            <li style={{ marginBottom: "2px" }}>{t("company.infoSecurityCenter", language)}</li>
                            <li style={{ marginBottom: "2px" }}>{t("company.ksmoDirector", language)}</li>
                            <li>{t("company.chairConference", language)}</li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="section-wrapper with-bg" ref={teamRef}>
        <div className="container">
          <h2 style={{ marginBottom: "clamp(24px, 4vw, 40px)", textAlign: "center" }}>Our Team</h2>
          <Row className="g-2" style={{ rowGap: "clamp(16px, 3vh, 24px)" }}>
            <Col lg={3} md={6} sm={12}>
              <motion.div initial="initial" animate={teamVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.1 }}>
                <Card style={{ height: "100%", overflow: "hidden" }}>
                  <Card.Body style={{ padding: "clamp(12px, 1.5vw, 16px)" }}>
                    <h5 style={{ color: "var(--xactus-green)", marginBottom: "2px", fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)", lineHeight: "1.2" }}>
                      {language === "ko" ? "신 상 준" : "S.J. Shin"}
                    </h5>
                    <p style={{ color: "var(--accent-orange)", fontSize: "clamp(0.75rem, 1.3vw, 0.85rem)", marginBottom: "clamp(8px, 1.2vw, 12px)", fontWeight: 600 }}>
                      {t("company.founderCeo", language)}
                    </p>
                    <ul style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.8rem)", paddingLeft: "16px", textAlign: "left", color: "rgba(210, 228, 248, 0.9)", marginBottom: "0", lineHeight: "1.3" }}>
                      <li style={{ marginBottom: "3px" }}>{t("company.professor", language)}</li>
                      <li style={{ marginBottom: "3px" }}>{t("company.shinExperience1", language)}</li>
                      <li style={{ marginBottom: "3px" }}>{t("company.shinExperience2", language)}</li>
                      <li style={{ marginBottom: "0" }}>{t("company.shinExperience3", language)}</li>
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <motion.div initial="initial" animate={teamVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.2 }}>
                <Card style={{ height: "100%", overflow: "hidden" }}>
                  <Card.Body style={{ padding: "clamp(12px, 1.5vw, 16px)" }}>
                    <h5 style={{ color: "var(--xactus-green)", marginBottom: "2px", fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)", lineHeight: "1.2" }}>
                      {language === "ko" ? "이 혁" : "Lee"}
                    </h5>
                    <p style={{ color: "var(--accent-orange)", fontSize: "clamp(0.75rem, 1.3vw, 0.85rem)", marginBottom: "clamp(8px, 1.2vw, 12px)", fontWeight: 600 }}>
                      {t("company.technologyAdvisor", language)}
                    </p>
                    <ul style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.8rem)", paddingLeft: "16px", textAlign: "left", color: "rgba(210, 228, 248, 0.9)", marginBottom: "0", lineHeight: "1.3" }}>
                      <li style={{ marginBottom: "3px" }}>{t("company.leePhd", language)}</li>
                      <li style={{ marginBottom: "3px" }}>{t("company.leeResearcher", language)}</li>
                      <li style={{ marginBottom: "3px" }}>{t("company.leeExperience1", language)}</li>
                      <li style={{ marginBottom: "0" }}>{t("company.leeMedChem", language)}</li>
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <motion.div initial="initial" animate={teamVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.3 }}>
                <Card style={{ height: "100%" }}>
                  <Card.Body style={{ padding: "clamp(12px, 1.5vw, 16px)" }}>
                    <h5 style={{ color: "var(--xactus-green)", marginBottom: "2px", fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)", lineHeight: "1.2" }}>
                      {language === "ko" ? "고 종 성" : "Ko"}
                    </h5>
                    <p style={{ color: "var(--accent-orange)", fontSize: "clamp(0.75rem, 1.3vw, 0.85rem)", marginBottom: "clamp(8px, 1.2vw, 12px)", fontWeight: 600 }}>
                      {t("company.developmentAdvisor", language)}
                    </p>
                    <ul style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.8rem)", paddingLeft: "16px", textAlign: "left", color: "rgba(210, 228, 248, 0.9)", marginBottom: "0", lineHeight: "1.3" }}>
                      <li style={{ marginBottom: "3px" }}>{t("company.caltechPhd", language)}</li>
                      <li style={{ marginBottom: "3px" }}>{t("company.lgChemPlatform", language)}</li>
                      <li style={{ marginBottom: "0" }}>{t("company.genoCeo", language)}</li>
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <motion.div initial="initial" animate={teamVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.4 }}>
                <Card style={{ height: "100%" }}>
                  <Card.Body style={{ padding: "clamp(12px, 1.5vw, 16px)" }}>
                    <h5 style={{ color: "var(--xactus-green)", marginBottom: "2px", fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)", lineHeight: "1.2" }}>
                      {language === "ko" ? "문 영 춘" : "Moon"}
                    </h5>
                    <p style={{ color: "var(--accent-orange)", fontSize: "clamp(0.75rem, 1.3vw, 0.85rem)", marginBottom: "clamp(8px, 1.2vw, 12px)", fontWeight: 600 }}>
                      {t("company.developmentAdvisor", language)}
                    </p>
                    <ul style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.8rem)", paddingLeft: "16px", textAlign: "left", color: "rgba(210, 228, 248, 0.9)", marginBottom: "0", lineHeight: "1.3" }}>
                      <li style={{ marginBottom: "3px" }}>{t("company.orgChemPhd", language)}</li>
                      <li style={{ marginBottom: "3px" }}>{t("company.ptcTherapeutics", language)}</li>
                      <li style={{ marginBottom: "0" }}>{t("company.daimeBio", language)}</li>
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact-section" className="section-wrapper" style={{ background: "var(--gradient-card)" }} ref={contactRef}>
        <div className="container">
          <h2 style={{ marginBottom: "clamp(20px, 4vw, 40px)", textAlign: "center" }}>Contact & Location</h2>
          <Row className="g-2" style={{ rowGap: "clamp(16px, 3vh, 24px)" }}>
            <Col lg={6} md={12} className="d-flex">
              <motion.div initial="initial" animate={contactVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.1 }} style={{ width: "100%", display: "flex" }}>
                <Card style={{ width: "100%" }}>
                  <Card.Body style={{ padding: "clamp(12px, 2vw, 18px)" }}>
                    <h5 style={{ marginBottom: "clamp(8px, 1.2vw, 12px)", color: "var(--xactus-green)", fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)" }}>{t("company.headquarters", language)}</h5>
                  <p style={{ marginBottom: "clamp(10px, 1.5vw, 12px)", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", color: "rgba(210, 228, 248, 0.9)" }}>
                    <strong>{t("company.address", language)}:</strong>
                    <br />
                    {language === "ko" ? "서울특별시 서대문구 이화여대1안길 8-3 702호" : "Room 702, Building 8-3, Ewha-yeodae 1-an-gil, Seodaemun-gu, Seoul"}
                  </p>
                  <p style={{ marginBottom: "clamp(10px, 1.5vw, 12px)", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", color: "rgba(210, 228, 248, 0.9)" }}>
                    <strong>{t("company.email", language)}:</strong>
                    <br />
                    <a href="mailto:ssj338@yuhs.ac" style={{ color: "rgba(210, 228, 248, 0.9)", wordBreak: "break-all" }}>ssj338@yuhs.ac</a>
                  </p>
                  <p style={{ marginBottom: "0", fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)", color: "rgba(210, 228, 248, 0.9)" }}>
                    <strong>{t("company.phone", language)}:</strong>
                    <br />
                    <a href="tel:+82-10-2611-2634" style={{ color: "rgba(210, 228, 248, 0.9)", wordBreak: "break-all" }}>+82-10-2611-2634</a>
                  </p>
                </Card.Body>
              </Card>
              </motion.div>
            </Col>
            <Col lg={6} md={12} className="d-flex">
              <motion.div initial="initial" animate={contactVisible ? "animate" : "initial"} variants={cardVariants} transition={{ ...cardTransition, delay: 0.2 }} style={{ width: "100%", display: "flex" }}>
                <Card style={{ width: "100%" }}>
                  <Card.Body style={{ padding: "0" }}>
                    <iframe
                    width="100%"
                    height="100%"
                    style={{ border: "0", minHeight: "clamp(300px, 50vh, 500px)", display: "block" }}
                    loading="lazy"
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.836123854838!2d126.9403!3d37.5551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3cb6b0b0001%3A0x1234567890!2sEwha%20Womans%20University!5e0!3m2!1sen!2skr!4v1626784923456"
                  ></iframe>
                </Card.Body>
              </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
