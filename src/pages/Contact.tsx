import { useState } from "react";
import { motion } from "framer-motion";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import DotNavigation from "../components/DotNavigation";
import GoogleLocationMap from "../components/GoogleLocationMap";
import { getSiteContent } from "../lib/i18n.original-en-clean";
import ContactHero from "../../docs/site_image_0616/usable_assets/hero_backgrounds/contact_hero_generated_v3_sage.png";
import "./Contact.css";

const heroStyle = {
  backgroundImage: `linear-gradient(rgba(32, 109, 184, 0.08), rgba(12, 40, 72, 0.1)), url(${ContactHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const contentSectionStyle = {
  width: "100%",
  padding: "120px 0 72px",
};

const titleMotion = {
  initial: { opacity: 0, y: 34, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.55 },
  transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] },
} as const;

const chipContainerMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08,
    },
  },
} as const;

const chipMotion = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export default function Contact() {
  const language = useAppStore((s) => s.language);
  const content = getSiteContent(language).contact;
  const [inquiryType, setInquiryType] = useState(content.inquiryForm.inquiryTypes[0]);
  const contactItems = content.contacts.items.filter((item) => item.value.trim() !== "@placeholder");
  const mapTitle = language === "ko" ? "XACTUS Onco 위치" : "XACTUS Onco Location";
  const sections = [
    { id: "contact-hero-section", label: "Contact Hero", shortLabel: "CONTACT" },
    { id: "inquiry-section", label: "Inquiry", shortLabel: "FORM" },
    { id: "contacts-section", label: "Contacts", shortLabel: "INFO" },
  ];

  return (
    <>
      <DotNavigation sections={sections} />
      <section id="contact-hero-section" className="section-wrapper hero-section bg-sheen" style={heroStyle}>
        <div className="section-decoration" aria-hidden="true" />
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hero-title">{content.hero.title}</h1>
            <p className="hero-subtitle" style={{ marginLeft: "auto", marginRight: "auto" }}>
              {content.hero.body}
            </p>
          </motion.div>
        </div>
      </section>

      <section id="inquiry-section" className="section-wrapper with-bg" style={contentSectionStyle}>
        <div className="container">
          <motion.div className="section-title" style={{ textAlign: "left" }} {...titleMotion}>
            <h2>{content.inquiryForm.title}</h2>
          </motion.div>

          <Row className="g-4 align-items-stretch contact-inquiry-layout">
            <Col lg={4} md={12}>
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.34 }}
                transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
              <Card className="card-hover-contact" style={{ height: "100%" }}>
                <Card.Body style={{ padding: "26px 24px" }}>
                  <div style={{ color: "var(--xactus-green)", fontSize: "0.86rem", fontWeight: 700, letterSpacing: "0.14em", marginBottom: "16px" }}>
                    {content.inquiryForm.eyebrow}
                  </div>
                  <h5 style={{ color: "#ffffff", fontSize: "1.55rem", lineHeight: 1.3, marginBottom: "14px" }}>
                    {content.inquiryForm.headline}
                  </h5>
                  <p style={{ color: "rgba(210,228,248,0.82)", marginBottom: "22px", fontSize: "0.98rem", lineHeight: 1.65 }}>
                    {content.inquiryForm.body}
                  </p>

                  <motion.div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "22px" }}
                    variants={chipContainerMotion}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.45 }}
                  >
                    {content.inquiryForm.inquiryTypes.map((item, index) => (
                      <motion.span
                        key={item}
                        variants={chipMotion}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "9px 13px",
                          borderRadius: "999px",
                          background: index % 2 === 0 ? "rgba(39,169,75,0.14)" : "rgba(235,94,40,0.14)",
                          border: `1px solid ${index % 2 === 0 ? "rgba(39,169,75,0.28)" : "rgba(235,94,40,0.22)"}`,
                          color: index % 2 === 0 ? "var(--xactus-green)" : "var(--accent-orange)",
                          fontSize: "0.84rem",
                          fontWeight: 700,
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div
                    style={{
                      borderRadius: "18px",
                      padding: "18px 18px 16px",
                      background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div style={{ color: "#ffffff", fontWeight: 700, marginBottom: "10px" }}>{content.inquiryForm.responseTitle}</div>
                    <div style={{ color: "rgba(210,228,248,0.82)", lineHeight: 1.65, fontSize: "0.94rem" }}>{content.inquiryForm.responseBody}</div>
                  </div>
                </Card.Body>
              </Card>
              </motion.div>
            </Col>

            <Col lg={8} md={12}>
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.62, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
              <Card className="card-hover-form" style={{ height: "100%" }}>
                <Card.Body style={{ padding: "26px 24px" }}>
                  <Form>
                    <Row className="g-4">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label style={labelStyle}>{content.inquiryForm.fields[0]}</Form.Label>
                          <Form.Control type="text" style={inputStyle} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label style={labelStyle}>{content.inquiryForm.fields[1]}</Form.Label>
                          <Form.Control type="text" style={inputStyle} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label style={labelStyle}>{content.inquiryForm.fields[2]}</Form.Label>
                          <Form.Control type="email" style={inputStyle} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label style={labelStyle}>{content.inquiryForm.fields[3]}</Form.Label>
                          <Form.Select
                            className="inquiry-type-select"
                            value={inquiryType}
                            onChange={(event) => setInquiryType(event.target.value)}
                            style={inputStyle}
                          >
                            {content.inquiryForm.inquiryTypes.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label style={labelStyle}>{content.inquiryForm.messageLabel}</Form.Label>
                          <Form.Control as="textarea" rows={6} style={{ ...inputStyle, resize: "none" as const }} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <div style={{ marginTop: "26px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                      <div style={{ color: "rgba(210,228,248,0.68)", fontSize: "0.9rem" }}>{content.inquiryForm.helper}</div>
                      <button type="button" className="btn btn-outline-light" style={{ minWidth: "180px" }}>
                        {content.inquiryForm.action}
                      </button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      <section id="contacts-section" className="section-wrapper with-bg" style={contentSectionStyle}>
        <div className="container">
          <motion.div className="section-title" style={{ textAlign: "left", marginBottom: "20px", maxWidth: "720px" }} {...titleMotion}>
            <h2>{content.contacts.title}</h2>
            {/* <p style={{ color: "rgba(210,228,248,0.78)", margin: "16px 0 0", lineHeight: 1.7 }}>{content.contacts.body}</p> */}
          </motion.div>

          <Row className="g-4 align-items-stretch contact-location-layout">
            <Col lg={4} md={12}>
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.34 }}
                transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
              >
              <Card className="card-hover-contact contact-info-card" style={{ height: "100%" }}>
                <Card.Body className="p-4" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  {/* <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "8px 14px",
                      borderRadius: "999px",
                      background: "rgba(39,169,75,0.12)",
                      border: "1px solid rgba(39,169,75,0.22)",
                      color: "var(--xactus-green)",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      marginBottom: "18px",
                    }}
                  >
                    {content.contacts.heading}
                  </div> */}

                  <div style={{ color: "#ffffff", fontSize: "1.38rem", fontWeight: 700, lineHeight: 1.45, marginBottom: "14px" }}>
                    {content.contacts.addressLines[0]}
                  </div>
                  <div style={{ color: "rgba(210,228,248,0.88)", lineHeight: 1.8, marginBottom: "22px" }}>
                    {content.contacts.addressLines.slice(1).map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: "14px",
                      padding: "18px 0",
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      marginBottom: "18px",
                    }}
                  >
                    {contactItems.map((item) => (
                      <div
                        key={item.label}
                        className="contact-detail-row"
                        style={{
                          display: "grid",
                          gridTemplateColumns: "108px minmax(0, 1fr)",
                          gap: "12px",
                          alignItems: "start",
                        }}
                      >
                        <div style={{ color: "rgba(210,228,248,0.62)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                          {item.label}
                        </div>
                        <div style={{ color: "#ffffff", lineHeight: 1.6, wordBreak: "break-word" as const }}>{item.value}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "grid", gap: "8px", color: "rgba(210,228,248,0.82)", lineHeight: 1.7 }}>
                    {content.contacts.transportLines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
              </motion.div>
            </Col>

            <Col lg={8} md={12}>
              <motion.div
                initial={{ opacity: 0, x: 28, scale: 0.99 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.62, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
              <Card className="card-hover-map contact-map-card" style={{ height: "100%" }}>
                <Card.Body style={{ padding: "18px", height: "100%" }}>
                  <div
                    className="contact-map-frame"
                    style={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "rgba(255,255,255,0.03)",
                      height: "100%",
                    }}
                  >
                    <GoogleLocationMap language={language} title={mapTitle} addressLines={content.contacts.addressLines} />
                  </div>
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

const labelStyle = {
  color: "#ffffff",
  fontWeight: 700,
  marginBottom: "10px",
};

const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "14px",
  color: "#ffffff",
  minHeight: "52px",
  padding: "14px 16px",
  boxShadow: "none",
};
