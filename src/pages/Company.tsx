import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, Col, Row } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import DotNavigation from "../components/DotNavigation";
import { getSiteContent } from "../lib/i18n.original-en-clean";
import AboutHero from "../../docs/site_image_0616/usable_assets/hero_backgrounds/about_hero_sunset.png";
import LeaderPortrait from "../../docs/site_image_0616/usable_assets/team_portraits/leadership_sang_joon_shin.png";
import AdvisorPortrait from "../../docs/site_image_0616/usable_assets/team_portraits/advisor_hyuk_lee.png";
import KeywordOne from "../../output/pdf_extracted_icons_transparent/about_first_in_class.png";
import KeywordTwo from "../../output/pdf_extracted_icons_transparent/about_clinical_intelligence.png";
import KeywordThree from "../../output/pdf_extracted_icons_transparent/about_integrated_research_platform.png";
import KeywordFour from "../../output/pdf_extracted_icons_transparent/about_patient_impact.png";

const heroStyle = {
  backgroundImage: `linear-gradient(rgba(32, 109, 184, 0.07), rgba(12, 40, 72, 0.1)), url(${AboutHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const centeredSectionStyle = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "120px 0 72px",
};

const keywordIcons = [KeywordOne, KeywordTwo, KeywordThree, KeywordFour];

const titleMotion = {
  initial: { opacity: 0, y: 42, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.55 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
} as const;

const containerMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
} as const;

const itemMotion = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

type AdvisorGroup = "technical" | "development";

export default function Company() {
  const language = useAppStore((s) => s.language);
  const content = getSiteContent(language).about;
  const [advisorGroup, setAdvisorGroup] = useState<AdvisorGroup>("technical");

  const activeAdvisors =
    advisorGroup === "technical" ? content.leadership.technicalAdvisors : content.leadership.developmentAdvisors;

  const sections = [
    { id: "about-hero-section", label: "About Hero", shortLabel: "ABOUT" },
    { id: "overview-section", label: "Overview", shortLabel: "OVERVIEW" },
    { id: "history-section", label: "History", shortLabel: "HISTORY" },
    { id: "leadership-section", label: "Leadership", shortLabel: "LEAD" },
  ];

  return (
    <>
      <DotNavigation sections={sections} />

      <section id="about-hero-section" className="section-wrapper hero-section bg-sheen" style={heroStyle}>
        <div className="section-decoration" aria-hidden="true" />
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hero-title">{content.hero.title}</h1>
            <p className="hero-subtitle" style={{ marginLeft: "auto", marginRight: "auto" }}>
              {content.hero.body}
            </p>
          </motion.div>
        </div>
      </section>

      <section id="overview-section" className="section-wrapper with-bg" style={centeredSectionStyle}>
        <div className="container">
          <motion.div className="section-title" {...titleMotion} style={{ maxWidth: "860px", marginLeft: "auto", marginRight: "auto" }}>
            <h2 className="text-readable-strong">{content.vision.title}</h2>
            <p className="text-readable" style={{ maxWidth: "760px" }}>{content.vision.headline}</p>
          </motion.div>

          <motion.div variants={containerMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.42 }}>
            <Row className="g-4 about-overview-keywords" style={{ marginBottom: "28px" }}>
              {content.vision.keywords.map((keyword, index) => (
                <Col key={keyword} lg={3} md={6} sm={12} className="d-flex">
                  <motion.div variants={itemMotion} style={{ width: "100%", height: "100%" }}>
                    <Card className="card-hover-icon about-overview-keyword-card" style={{ height: "100%", textAlign: "center" }}>
                      <Card.Body>
                        <div className="about-overview-keyword-card__icon-wrap">
                          <img
                            src={keywordIcons[index]}
                            alt={keyword}
                            className="card-hover-icon-symbol about-overview-keyword-card__icon"
                            style={{ width: "72px", height: "72px", objectFit: "contain", margin: "0 auto" }}
                          />
                        </div>
                        <h5 className="card-hover-icon-copy" style={{ color: index % 2 === 0 ? "var(--xactus-green)" : "var(--accent-orange)", lineHeight: 1.25 }}>{keyword}</h5>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          <motion.div
            style={{ maxWidth: "920px", margin: "0 auto", textAlign: "center" }}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.58, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {content.vision.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-readable">{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="history-section" className="section-wrapper with-bg" style={centeredSectionStyle}>
        <div className="container">
          <motion.div className="section-title" {...titleMotion}>
            <h2>{content.history.title}</h2>
          </motion.div>

          <motion.div
            className="about-history-timeline"
            style={{ maxWidth: "780px", margin: "0 auto", position: "relative", paddingLeft: "28px" }}
            variants={containerMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.38 }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "10px",
                width: "2px",
                background: "rgba(255,255,255,0.45)",
              }}
            />
            {content.history.items.map((item) => (
              <motion.div key={item.year + item.text} variants={itemMotion} style={{ position: "relative", paddingBottom: "42px" }}>
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-24px",
                    top: "10px",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "var(--off-white)",
                    border: "4px solid var(--xactus-green)",
                  }}
                />
                <Row className="g-3 align-items-start">
                  <Col md={3}>
                    <div style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#ffffff" }}>{item.year}</div>
                  </Col>
                  <Col md={9}>
                    <div style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", color: "#ffffff", fontWeight: 600 }}>
                      {item.month ? `${item.month} ${item.text}` : item.text}
                    </div>
                  </Col>
                </Row>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="leadership-section" className="section-wrapper with-bg" style={centeredSectionStyle}>
        <div className="container">
          <motion.div className="section-title" {...titleMotion}>
            <h2 style={{ marginBottom: "6px" }}>{content.leadership.title}</h2>
          </motion.div>

          <div
            className="about-leadership-layout"
            style={{
              display: "grid",
              gridTemplateRows: "auto auto 1fr",
              gap: "12px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="card-hover-profile card-hover-profile-lead">
                <Card.Body style={{ padding: "20px 28px" }}>
                  <Row className="g-3 align-items-center">
                    <Col lg={3} md={4} sm={12}>
                      <img
                        src={LeaderPortrait}
                        alt={content.leadership.leader.name}
                        className="img-fluid rounded card-media"
                        style={{ maxHeight: "196px", objectFit: "contain", margin: "0 auto" }}
                      />
                    </Col>
                    <Col lg={9} md={8} sm={12}>
                      <h4 style={{ color: "#ffffff", marginBottom: "6px", fontSize: "1.9rem", lineHeight: 1.15 }}>{content.leadership.leader.name}</h4>
                      <p style={{ color: "var(--xactus-green)", fontWeight: 700, marginBottom: "10px", fontSize: "1.08rem" }}>
                        {content.leadership.leader.role}
                      </p>
                      <ul style={{ margin: 0, paddingLeft: "20px", color: "rgba(210, 228, 248, 0.92)", fontSize: "1.02rem", lineHeight: 1.42 }}>
                        {content.leadership.leader.bullets.map((bullet) => (
                          <li key={bullet} style={{ marginBottom: "4px" }}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.48, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}
            >
              <div style={{ color: "#ffffff", fontSize: "1.22rem", fontWeight: 700 }}>
                {advisorGroup === "technical"
                  ? content.leadership.technicalAdvisorsTitle
                  : content.leadership.developmentAdvisorsTitle}
              </div>

              <div
                className="about-advisor-toggle-bar"
                style={{
                  display: "inline-flex",
                  gap: "8px",
                  padding: "6px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setAdvisorGroup("technical")}
                  style={advisorToggleStyle(advisorGroup === "technical")}
                >
                  {content.leadership.technicalAdvisorsTitle}
                </button>
                <button
                  type="button"
                  onClick={() => setAdvisorGroup("development")}
                  style={advisorToggleStyle(advisorGroup === "development")}
                >
                  {content.leadership.developmentAdvisorsTitle}
                </button>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={advisorGroup}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                style={{ minHeight: 0 }}
              >
                <Row className="g-3 h-100 about-advisor-row" style={{ margin: 0 }}>
                  {activeAdvisors.map((advisor, index) => (
                    <Col key={advisor.name + index} lg={3} md={6} sm={12}>
                      <Card className="card-hover-profile" style={{ height: "100%" }}>
                        <Card.Body style={{ padding: "12px 14px", minHeight: "194px" }}>
                          {!advisor.placeholder && advisorGroup === "technical" && index === 0 ? (
                            <img
                              src={AdvisorPortrait}
                              alt={advisor.name}
                              className="img-fluid rounded card-media"
                              style={{ width: "100%", height: "72px", objectFit: "cover", marginBottom: "8px" }}
                            />
                          ) : null}

                          <h5
                            style={{
                              color: advisor.placeholder ? "rgba(255,255,255,0.7)" : "var(--xactus-green)",
                              fontSize: "1rem",
                              marginBottom: "4px",
                            }}
                          >
                            {advisor.name}
                          </h5>

                          {advisor.role ? (
                            <p style={{ fontWeight: 700, color: "var(--accent-orange)", marginBottom: "8px", fontSize: "0.9rem" }}>
                              {advisor.role}
                            </p>
                          ) : null}

                          {advisor.bullets.length > 0 ? (
                            <ul
                              style={{
                                margin: 0,
                                paddingLeft: "16px",
                                color: "rgba(210, 228, 248, 0.92)",
                                fontSize: "0.76rem",
                                lineHeight: 1.28,
                              }}
                            >
                              {advisor.bullets.map((bullet) => (
                                <li key={bullet} style={{ marginBottom: "4px" }}>
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div
                              style={{
                                height: "100%",
                                display: "grid",
                                placeItems: "center",
                                color: "rgba(255,255,255,0.55)",
                                fontSize: "1rem",
                                fontWeight: 600,
                              }}
                            >
                              {advisor.name}
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

function advisorToggleStyle(active: boolean) {
  return {
    border: 0,
    borderRadius: "999px",
    padding: "10px 18px",
    fontSize: "0.88rem",
    fontWeight: 700,
    color: active ? "#ffffff" : "rgba(255,255,255,0.72)",
    background: active ? "rgba(39, 169, 75, 0.82)" : "transparent",
    boxShadow: active ? "0 10px 24px rgba(39, 169, 75, 0.24)" : "none",
  } as const;
}
