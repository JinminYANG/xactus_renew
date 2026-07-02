import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, Col, Row } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import DotNavigation from "../components/DotNavigation";
import { getSiteContent } from "../lib/i18n.original-en-clean";
import HomeHero from "../../docs/site_image_0616/usable_assets/hero_backgrounds/home_hero_molecules.png";
import ResearcherImg from "../../docs/site_image_0616/usable_assets/content_photos/home_business_researcher.png";
import AnalyticsImg from "../../docs/site_image_0616/usable_assets/content_photos/home_business_analytics_laptop.png";
import LabImg from "../../docs/site_image_0616/usable_assets/content_photos/home_business_lab_equipment.png";
import DiagramXO001 from "../../docs/site_image_0616/usable_assets/diagrams/technology_xo001_tnik_inhibitor.png";
import DiagramXOA001 from "../../docs/site_image_0616/usable_assets/diagrams/technology_xoa001_adc_platform.png";
import DiagramXO003 from "../../docs/site_image_0616/usable_assets/diagrams/technology_xo003_foxm1_inhibitor.png";
import DiagramXO004 from "../../docs/site_image_0616/usable_assets/diagrams/technology_xo004_irp2_inhibitor.png";
import PartnerGNU from "../../docs/site_image_0616/usable_assets/partner_assets/crops8/gnu.png";
import PartnerKU from "../../docs/site_image_0616/usable_assets/partner_assets/crops8/ku.png";
import PartnerSKKU from "../../docs/site_image_0616/usable_assets/partner_assets/crops8/skku.png";
import PartnerSTH from "../../docs/site_image_0616/usable_assets/partner_assets/crops8/sth.png";
import PartnerSNUH from "../../docs/site_image_0616/usable_assets/partner_assets/crops8/snuh.png";
import PartnerAMC from "../../docs/site_image_0616/usable_assets/partner_assets/crops8/amc.png";
import PartnerSMC from "../../docs/site_image_0616/usable_assets/partner_assets/crops8/smc.png";
import PartnerSNU from "../../docs/site_image_0616/usable_assets/partner_assets/crops8/snu.png";

const heroSectionStyle = {
  backgroundImage: `linear-gradient(rgba(32, 109, 184, 0.08), rgba(12, 40, 72, 0.1)), url(${HomeHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  minHeight: "100dvh",
  display: "flex",
  alignItems: "center",
};

const contentSectionStyle = {
  width: "100%",
  minHeight: "100dvh",
  display: "flex",
  alignItems: "center",
  padding: "120px 0 72px",
};

const photoByIndex = [ResearcherImg, AnalyticsImg, LabImg];
const coreTechnologyImageByCode: Record<string, string> = {
  "XO-001": DiagramXO001,
  "XOA-001": DiagramXOA001,
  "XO-003": DiagramXO003,
  "XO-004": DiagramXO004,
};
const pipelineColumnWidths = "1.3fr 0.8fr 0.95fr 1.55fr 0.75fr 0.7fr 0.8fr";

const tableHeaderCellStyle = {
  padding: "16px 14px",
  borderRight: "1px solid rgba(255,255,255,0.12)",
  textAlign: "center" as const,
};

const tableBodyCellStyle = {
  display: "flex",
  alignItems: "center",
  padding: "18px 16px",
  borderRight: "1px solid rgba(14, 36, 60, 0.08)",
};

const circleCellStyle = {
  ...tableBodyCellStyle,
  justifyContent: "center",
};

const dottedCircleStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  border: "2px dashed rgba(134, 150, 170, 0.7)",
};

const titleMotion = {
  initial: { opacity: 0, y: 34, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.55 },
  transition: { duration: 0.66, ease: [0.22, 1, 0.36, 1] },
} as const;

const containerMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
} as const;

const itemMotion = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.54, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

const progressFillTransition = {
  duration: 0.88,
  ease: [0.22, 1, 0.36, 1],
} as const;

const homeHeroCopyByLanguage = {
  en: {
    titleLines: ["Advancing First-in-Class", "Oncology Innovation"],
    bodyLines: [
      "From breakthrough cancer therapeutics to integrated clinical research",
      "platforms, we accelerate the path from discovery to patient impact.",
    ],
  },
  ko: {
    titleLines: ["차세대 항암 혁신을", "가속합니다"],
    bodyLines: [
      "혁신 신약 개발부터 임상 연구 플랫폼과 데이터 인텔리전스까지,",
      "발견에서 환자 적용까지의 여정을 앞당깁니다.",
    ],
  },
} as const;

const collaboratorCopy = {
  ko: {
    title: "Accelerator / Partner",
    description: "다양한 파트너들과 함께 혁신 생태계를 확장합니다.",
  },
  en: {
    title: "Accelerator / Partner",
    description: "Expanding innovation through a diverse partner ecosystem.",
  },
} as const;

const partnerCardRows = [
  [
    { labelKo: "경상국립대학교", labelEn: "Gyeongsang National University", src: PartnerGNU },
    { labelKo: "고려대학교", labelEn: "Korea University", src: PartnerKU },
    { labelKo: "성균관대학교", labelEn: "Sungkyunkwan University", src: PartnerSKKU },
    { labelKo: "서울기술지주회사", labelEn: "Seoul Techno Holdings", src: PartnerSTH },
    { labelKo: "서울대학교병원", labelEn: "Seoul National University Hospital", src: PartnerSNUH },
    { labelKo: "서울아산병원", labelEn: "Asan Medical Center", src: PartnerAMC },
    { labelKo: "삼성서울병원", labelEn: "Samsung Medical Center", src: PartnerSMC },
  ],
  [
    { labelKo: "서울대학교", labelEn: "Seoul National University", src: PartnerSNU },
    { labelKo: "고려대학교", labelEn: "Korea University", src: PartnerKU },
    { labelKo: "경상국립대학교", labelEn: "Gyeongsang National University", src: PartnerGNU },
    { labelKo: "성균관대학교", labelEn: "Sungkyunkwan University", src: PartnerSKKU },
    { labelKo: "서울기술지주회사", labelEn: "Seoul Techno Holdings", src: PartnerSTH },
    { labelKo: "서울대학교병원", labelEn: "Seoul National University Hospital", src: PartnerSNUH },
    { labelKo: "서울아산병원", labelEn: "Asan Medical Center", src: PartnerAMC },
  ],
] as const;

export default function Home() {
  const language = useAppStore((s) => s.language);
  const content = getSiteContent(language).home;
  const pipelineTable = getSiteContent(language).pipeline.table;
  const heroCopy = homeHeroCopyByLanguage[language];
  const sections = [
    { id: "home-hero-section", label: "Home Hero", shortLabel: "HOME" },
    { id: "what-we-do-section", label: "What We Do", shortLabel: "WHAT" },
    { id: "core-technology-section", label: "Core Technology", shortLabel: "TECH" },
    { id: "pipeline-review-section", label: "Pipeline Review", shortLabel: "PIPE" },
    { id: "collaborators-section", label: "Collaborators", shortLabel: "PARTNER" },
    { id: "contact-summary-section", label: "Contact", shortLabel: "CONTACT" },
  ];

  const marqueeRows = partnerCardRows.map((row) =>
    [...row, ...row].map((partner, index) => ({
      ...partner,
      id: `${partner.labelEn}-${index}`,
      label: language === "ko" ? partner.labelKo : partner.labelEn,
    })),
  );

  const currentCollaboratorCopy = collaboratorCopy[language];

  return (
    <>
      <DotNavigation sections={sections} />

      <section id="home-hero-section" className="section-wrapper hero-section bg-sheen" style={heroSectionStyle}>
        <div className="section-decoration" aria-hidden="true" />
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hero-title hero-title--home" aria-label={content.hero.title}>
              {heroCopy.titleLines.map((line) => (
                <span key={line} className="hero-title__line">
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero-subtitle hero-subtitle--home" aria-label={content.hero.body}>
              {heroCopy.bodyLines.map((line) => (
                <span key={line} className="hero-subtitle__line">
                  {line}
                </span>
              ))}
            </p>
            <motion.div
              style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "28px" }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {content.hero.actions.map((action) => (
                <Link key={action.href} to={action.href} className="btn btn-outline-light">
                  {action.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="what-we-do-section" className="section-wrapper mission-section" style={contentSectionStyle}>
        <div className="container">
          <motion.div className="section-title" style={{ textAlign: "left" }} {...titleMotion}>
            <h2>{content.whatWeDo.title}</h2>
            <p style={{ maxWidth: "760px", margin: 0 }}>{content.whatWeDo.body}</p>
          </motion.div>

          <motion.div variants={containerMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <Row className="g-4">
            {content.whatWeDo.items.map((item, index) => (
              <Col key={item.title} lg={4} md={6} sm={12}>
                <motion.div variants={itemMotion}>
                <Card className="card-hover-photo home-what-we-do-card" style={{ height: "100%" }}>
                  <div className="home-what-we-do-card__media">
                    <img
                      src={photoByIndex[index]}
                      alt={item.title}
                      className="img-fluid card-media"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <Card.Body>
                    <h5 style={{ color: index === 1 ? "var(--accent-orange)" : "var(--xactus-green)" }}>{item.title}</h5>
                    <Card.Text>{item.body}</Card.Text>
                  </Card.Body>
                </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          </motion.div>
        </div>
      </section>

      <section id="core-technology-section" className="section-wrapper core-tech-section" style={contentSectionStyle}>
        <div className="container">
          <motion.div className="section-title" style={{ textAlign: "left" }} {...titleMotion}>
            <h2>{content.coreTechnology.title}</h2>
            <p style={{ maxWidth: "760px", margin: 0 }}>{content.coreTechnology.body}</p>
          </motion.div>

          <motion.div variants={containerMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.32 }}>
          <Row className="g-4">
            {content.coreTechnology.programs.map((program) => (
              <Col key={program.code} lg={6} md={6} sm={12}>
                <motion.div variants={itemMotion} className="core-tech-flip-card-scene">
                  <div className="core-tech-flip-card">
                    <div className="core-tech-flip-card__inner">
                      <Card
                        className="core-tech-flip-card__face core-tech-flip-card__face--front"
                        style={{ minHeight: "260px", textAlign: "center" }}
                      >
                        <div className="core-tech-flip-card__front-content">
                          <div className="card-hover-icon-symbol" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff" }}>
                            {program.code}
                          </div>
                          <div
                            className="card-hover-icon-copy"
                            style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", color: "rgba(255,255,255,0.86)", marginTop: "8px" }}
                          >
                            {program.name}
                          </div>
                        </div>
                      </Card>
                      <Card
                        className="core-tech-flip-card__face core-tech-flip-card__face--back"
                        style={{ minHeight: "260px", textAlign: "center", backgroundImage: `url(${coreTechnologyImageByCode[program.code]})` }}
                      >
                        <div className="core-tech-flip-card__back-label">
                          <span className="core-tech-flip-card__back-code">{program.code}</span>
                          <span className="core-tech-flip-card__back-name">{program.name}</span>
                        </div>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
          </motion.div>
        </div>
      </section>

      <section id="pipeline-review-section" className="section-wrapper with-bg" style={contentSectionStyle}>
        <div className="container">
          <motion.div className="section-title" style={{ textAlign: "left" }} {...titleMotion}>
            <h2>{content.pipelineReview.title}</h2>
          </motion.div>

          <motion.div
            className="home-pipeline-preview"
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              background: "#ffffff",
              boxShadow: "0 18px 36px rgba(6, 16, 30, 0.14)",
              border: "1px solid rgba(255,255,255,0.45)",
              overflowX: "auto",
            }}
            initial={{ opacity: 0, y: 26, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: pipelineColumnWidths,
                background: "linear-gradient(180deg, #184c43, #103c35)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.9rem",
                minWidth: "980px",
              }}
            >
              <div style={tableHeaderCellStyle}>{pipelineTable.headers[0]}</div>
              <div style={tableHeaderCellStyle}>{pipelineTable.headers[1]}</div>
              <div style={tableHeaderCellStyle}>{pipelineTable.stageHeaders[1]}</div>
              <div style={tableHeaderCellStyle}>{pipelineTable.stageHeaders[2]}</div>
              <div style={tableHeaderCellStyle}>{pipelineTable.stageHeaders[3]}</div>
              <div style={tableHeaderCellStyle}>{pipelineTable.stageHeaders[4]}</div>
              <div style={{ ...tableHeaderCellStyle, borderRight: "none" }}>{pipelineTable.stageHeaders[6] ?? "Clinical Stage"}</div>
            </div>

            {pipelineTable.programs.map((program, rowIndex) => {
              const barWidth =
                program.developmentStage === pipelineTable.stageHeaders[3]
                  ? "100%"
                  : program.developmentStage === pipelineTable.stageHeaders[2]
                    ? "78%"
                    : "56%";

              return (
                <div
                  key={program.program}
                  style={{
                    display: "grid",
                    gridTemplateColumns: pipelineColumnWidths,
                    minHeight: "104px",
                    background: "#ffffff",
                    borderTop: rowIndex === 0 ? "none" : "1px solid rgba(14, 36, 60, 0.08)",
                    minWidth: "980px",
                  }}
                >
                  <div style={tableBodyCellStyle}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ width: "12px", height: "12px", marginTop: "7px", borderRadius: "50%", background: "#199667", flexShrink: 0 }} />
                      <div>
                        <div style={{ color: "#13956c", fontWeight: 800, fontSize: "1.02rem", marginBottom: "4px" }}>{program.program}</div>
                        <div style={{ color: "#4e6072", fontSize: "0.92rem", lineHeight: 1.35 }}>{program.sublabel}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ ...tableBodyCellStyle, color: "#31485f", fontWeight: 700, fontSize: "1rem", lineHeight: 1.35 }}>
                    {program.targetMoa.split(" (")[0]}
                  </div>

                  <div style={{ ...tableBodyCellStyle, gridColumn: "3 / span 3", padding: "0 18px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.55fr 0.75fr", width: "100%", alignItems: "center", height: "100%" }}>
                      <div />
                      <div style={{ position: "relative", width: "100%", height: "18px", borderRadius: "999px", background: "rgba(196, 224, 220, 0.44)" }}>
                        <motion.div
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: barWidth,
                            borderRadius: "999px",
                            background: "linear-gradient(90deg, #c2ddd9 0%, #1aa06f 100%)",
                            transformOrigin: "left center",
                          }}
                          initial={{ scaleX: 0, opacity: 0.7 }}
                          whileInView={{ scaleX: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.9 }}
                          transition={{ ...progressFillTransition, delay: 0.14 + rowIndex * 0.08 }}
                        />
                      </div>
                      <div />
                    </div>
                  </div>

                  <div style={circleCellStyle}>
                    <span style={dottedCircleStyle} />
                  </div>
                  <div style={{ ...circleCellStyle, borderRight: "none" }}>
                    <span style={dottedCircleStyle} />
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            style={{ marginTop: "24px" }}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.48, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={content.pipelineReview.action.href} className="btn btn-outline-light">
              {content.pipelineReview.action.label}
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="collaborators-section" className="section-wrapper with-bg" style={contentSectionStyle}>
        <div className="container">
          <motion.div
            style={{
              borderRadius: "28px",
              background: "linear-gradient(180deg, rgba(226, 242, 255, 0.14), rgba(201, 229, 250, 0.1))",
              border: "1px solid rgba(214, 240, 255, 0.2)",
              backdropFilter: "blur(8px)",
              padding: "34px 0 26px",
              boxShadow: "0 14px 32px rgba(26, 62, 105, 0.12)",
            }}
            initial={{ opacity: 0, y: 24, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div className="section-title" style={{ textAlign: "center", marginBottom: "24px" }} {...titleMotion}>
              <h2 style={{ marginBottom: "10px" }}>
                <span style={{ color: "#e85f4b", marginRight: "10px" }}>+</span>
                {currentCollaboratorCopy.title}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.88)", margin: 0 }}>{currentCollaboratorCopy.description}</p>
            </motion.div>

            <div style={{ display: "grid", gap: "18px" }}>
              {marqueeRows.map((row, rowIndex) => (
                <div key={rowIndex} className="partner-marquee">
                  <div className={`partner-track${rowIndex % 2 === 1 ? " reverse" : ""}`}>
{row.map((partner) => (
  <div key={`${rowIndex}-${partner.id}`} className="partner-card-slice">
    <img src={partner.src} alt={partner.label} decoding="async" />
  </div>
))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact-summary-section" className="section-wrapper with-bg" style={contentSectionStyle}>
        <div className="container">
          <Row className="g-4 align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="section-title" style={{ textAlign: "left", marginBottom: "12px" }}>
                  <h2 className="text-readable-strong">{content.contact.title}</h2>
                </div>
                <p className="text-readable" style={{ maxWidth: "620px", marginBottom: "20px" }}>
                  {content.contact.body}
                </p>
                <Link to={content.contact.action.href} className="btn btn-outline-light">
                  {content.contact.action.label}
                </Link>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
              <Card className="card-hover-contact" style={{ background: "linear-gradient(180deg, rgba(18, 51, 84, 0.76), rgba(13, 38, 66, 0.58))" }}>
                <Card.Body className="home-contact-summary-card" style={{ padding: "28px 28px 24px" }}>
                  {content.contact.details.map((detail, index) => (
                    <div
                      key={detail.label}
                      style={{
                        marginBottom: index === content.contact.details.length - 1 ? "0" : "18px",
                        paddingBottom: index === content.contact.details.length - 1 ? "0" : "18px",
                        borderBottom: index === content.contact.details.length - 1 ? "none" : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 700,
                          color: index === 1 ? "var(--accent-orange)" : "var(--xactus-green)",
                          marginBottom: "6px",
                        }}
                      >
                        {detail.label}
                      </div>
                      <div style={{ color: "#f6fbff", marginTop: "4px", lineHeight: 1.7, fontSize: "1rem" }}>{detail.value}</div>
                    </div>
                  ))}
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
