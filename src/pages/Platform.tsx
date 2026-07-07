import { motion } from "framer-motion";
import { Card, Col, Row } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import DotNavigation from "../components/DotNavigation";
import { getSiteContent } from "../lib/i18n.original-en-clean";
import TechnologyHero from "../../docs/site_image_0616/usable_assets/hero_backgrounds/technology_hero_generated_microscope_dashboard.png";
import DiagramXO001 from "../../docs/site_image_0616/usable_assets/diagrams/technology_xo001_tnik_inhibitor.png";
import DiagramXO003 from "../../docs/site_image_0616/usable_assets/diagrams/technology_xo003_foxm1_inhibitor.png";
import DiagramXO004 from "../../docs/site_image_0616/usable_assets/diagrams/technology_xo004_irp2_inhibitor.png";
import DiagramXOA001 from "../../docs/site_image_0616/usable_assets/diagrams/technology_xoa001_adc_platform.png";
import WhyXO001Card01 from "../assets/icons/terminal_wnt_control_icon.png";
import WhyXO001Card02 from "../assets/icons/enhanced_selectivity_icon.png";
import WhyXO001Card03 from "../assets/icons/durable_disease_control_icon.png";
import WhyXO003Card01 from "../assets/icons/master_regulator_targeting_icon.png";
import WhyXO003Card02 from "../assets/icons/multi_pathway_suppression_icon.png";
import WhyXO003Card03 from "../assets/icons/combination_therapy_potential_icon.png";
import WhyXO004Card01 from "../assets/icons/iron_dependency_icon.png";
import WhyXO004Card02 from "../assets/icons/cancer_selectivity_icon.png";
import WhyXO004Card03 from "../assets/icons/drug_resistant_tumors_icon.png";
import WhyXOA001Card01 from "../../output/pdf_extracted_icons_transparent/technology_xoa001_enhanced_internalization_refined.png";
import WhyXOA001Card02 from "../../output/pdf_extracted_icons_transparent/technology_xoa001_stable_linker_design_refined.png";
import WhyXOA001Card03 from "../../output/pdf_extracted_icons_transparent/technology_xoa001_potent_payload_refined.png";
import WhyXOA001Card04 from "../../output/pdf_extracted_icons_transparent/technology_xoa001_bystander_effect_refined.png";

const heroStyle = {
  backgroundImage: `url(${TechnologyHero})`,
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

const programSectionStyle = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "112px 0 56px",
};

const diagramByProgramId: Record<string, string> = {
  "xo-001": DiagramXO001,
  "xo-003": DiagramXO003,
  "xo-004": DiagramXO004,
  "xoa-001": DiagramXOA001,
};

const whyCardImagesByProgramId: Record<string, string[]> = {
  "xo-001": [WhyXO001Card01, WhyXO001Card02, WhyXO001Card03],
  "xo-003": [WhyXO003Card01, WhyXO003Card02, WhyXO003Card03],
  "xo-004": [WhyXO004Card01, WhyXO004Card02, WhyXO004Card03],
  "xoa-001": [WhyXOA001Card01, WhyXOA001Card02, WhyXOA001Card03, WhyXOA001Card04],
};

const whyCardImageFrameByProgramId: Record<string, { width: string; height: string }[]> = {
  "xo-001": [
    { width: "56%", height: "108px" },
    { width: "52%", height: "108px" },
    { width: "48%", height: "108px" },
  ],
  "xo-003": [
    { width: "56%", height: "108px" },
    { width: "56%", height: "108px" },
    { width: "56%", height: "108px" },
  ],
  "xo-004": [
    { width: "50%", height: "108px" },
    { width: "50%", height: "108px" },
    { width: "50%", height: "108px" },
  ],
  "xoa-001": [
    { width: "46%", height: "96px" },
    { width: "46%", height: "96px" },
    { width: "46%", height: "96px" },
    { width: "46%", height: "96px" },
  ],
};

const titleMotion = {
  initial: { opacity: 0, y: 36, filter: "blur(8px)" },
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
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.54, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export default function Platform() {
  const language = useAppStore((s) => s.language);
  const content = getSiteContent(language).technology;
  const sections = [
    { id: "technology-hero-section", label: "Technology Hero", shortLabel: "TECH" },
    { id: "overview-section", label: "Overview", shortLabel: "OVERVIEW" },
    ...content.programs.map((program) => ({
      id: `${program.id}-section`,
      label: program.title,
      shortLabel: program.id.toUpperCase(),
    })),
  ];

  return (
    <>
      <DotNavigation sections={sections} />
      <section id="technology-hero-section" className="section-wrapper hero-section bg-sheen technology-hero-section" style={heroStyle}>
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

      <section id="overview-section" className="section-wrapper with-bg technology-section" style={centeredSectionStyle}>
        <div className="container">
          <motion.div className="section-title" style={{ maxWidth: "860px", marginLeft: "auto", marginRight: "auto" }} {...titleMotion}>
            <h2 className="text-readable-strong">{content.overview.title}</h2>
            <p className="text-readable" style={{ maxWidth: "760px" }}>{content.overview.body}</p>
          </motion.div>

          <motion.div
            className="tech-overview-map"
            style={{
              maxWidth: "880px",
              margin: "0 auto",
              minHeight: "520px",
              position: "relative",
              display: "grid",
              placeItems: "center",
            }}
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="tech-overview-center"
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.78)",
                display: "grid",
                placeItems: "center",
                color: "#ffffff",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              initial={{ opacity: 0, scale: 0.82 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.52, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ color: "#445d57", fontWeight: 700, fontSize: "clamp(1.4rem, 2.2vw, 2rem)", lineHeight: 1.3 }}>
                {content.overview.centerLabel[0]}
                <br />
                {content.overview.centerLabel[1]}
              </div>
            </motion.div>

            {content.overview.map.map((item, index) => {
              return (
                <div key={item.label} className={`tech-overview-node-anchor tech-overview-node-anchor--${index}`}>
                  <motion.div
                    className="tech-overview-node"
                    style={{
                      color: "#173452",
                      textShadow: "none",
                    }}
                    initial={{ opacity: 0, y: index < 2 ? -18 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.46, delay: 0.16 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="tech-overview-node__content">
                      <div style={{ fontWeight: 700, fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}>{item.label}</div>
                      <div style={{ fontSize: "clamp(1rem, 1.7vw, 1.35rem)", lineHeight: 1.35 }}>{item.sublabel}</div>
                    </div>
                  </motion.div>
                </div>
              );
            })}

            <div className="tech-overview-connector tech-overview-connector--top" />
            <div className="tech-overview-connector tech-overview-connector--bottom" />
            <div className="tech-overview-connector tech-overview-connector--left" />
            <div className="tech-overview-connector tech-overview-connector--right" />
          </motion.div>
        </div>
      </section>

      {content.programs.map((program, index) => {
        const compactCards = program.whyCards.length === 4;
        const whyCardImages = whyCardImagesByProgramId[program.id] ?? [];
        const whyCardImageFrames = whyCardImageFrameByProgramId[program.id] ?? [];
        const detailGroups = [
          { label: program.targetLabel, tone: "green", items: program.target },
          ...(program.pathway ? [{ label: program.pathwayLabel ?? "", tone: "orange", items: program.pathway }] : []),
          ...(program.payload ? [{ label: program.payloadLabel ?? "", tone: "orange", items: program.payload }] : []),
          { label: program.therapeuticImpactLabel, tone: "green", items: program.therapeuticImpact },
          { label: program.differentiationLabel, tone: "orange", items: program.differentiation },
        ];

        return (
          <section
            key={program.id}
            id={`${program.id}-section`}
            className={`section-wrapper with-bg technology-section`}
            style={programSectionStyle}
          >
            <div className="container">
              <motion.div className="section-title" style={{ textAlign: "left", marginBottom: "16px" }} {...titleMotion}>
                <h2 style={{ marginBottom: "10px" }}>{program.title}</h2>
              </motion.div>

              <motion.div variants={containerMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }}>
              <Row className="g-4 tech-program-top-row" style={{ marginBottom: "18px", alignItems: "stretch" }}>
                <Col lg={6} md={12} className="tech-program-diagram-col d-flex">
                  <motion.div variants={itemMotion} style={{ width: "100%", height: "100%" }}>
                  <Card className="card-hover-diagram tech-program-diagram-card" style={{ height: "100%" }}>
                    <Card.Body style={{ padding: "18px" }}>
                      <div
                        className="tech-diagram-shell"
                        style={{
                          // height: "360px",
                          display: "grid",
                          placeItems: "center",
                          borderRadius: "14px",
                          // background: "rgba(255,255,255,0.05)",
                        }}
                      >
                        <img
                          src={diagramByProgramId[program.id]}
                          alt={program.title}
                          className="img-fluid rounded card-media"
                          style={{ 
                            // maxHeight: "324px",
                             objectFit: "contain" 
                            }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                  </motion.div>
                </Col>

                <Col lg={6} md={12} className="tech-program-detail-col d-flex">
                  <motion.div variants={itemMotion} style={{ width: "100%", height: "100%" }}>
                  <Card className="card-hover-detail tech-program-detail-card" style={{ height: "100%" }}>
                    <Card.Body style={{ padding: "18px" }}>
                      <div
                        className="tech-detail-grid"
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                          gap: "14px 18px",
                        }}
                      >
                        {detailGroups.map((group) => (
                          <div key={group.label} className="tech-detail-grid__item">
                            <h5 style={{ color: group.tone === "green" ? "#38d96b" : "#ff9a3d", marginBottom: "8px" }}>
                              {group.label}
                            </h5>
                            <ul style={{ margin: 0, paddingLeft: "18px", color: "rgba(210, 228, 248, 0.92)", fontSize: "0.96rem", lineHeight: 1.45 }}>
                              {group.items.map((item) => (
                                <li key={item} style={{ marginBottom: "4px" }}>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                  </motion.div>
                </Col>
              </Row>
              </motion.div>

              <motion.div
                style={{ color: "#10253d", fontWeight: 700, fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)", marginBottom: "14px" }}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.64 }}
                transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
              >
                {program.whyTitle}
              </motion.div>

              <motion.div variants={containerMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.28 }}>
              <Row className="g-3 tech-program-why-row">
                {program.whyCards.map((card, cardIndex) => (
                  <Col key={card.title} lg={compactCards ? 3 : 4} md={compactCards ? 6 : 4} sm={12} className="d-flex">
                    <motion.div variants={itemMotion} style={{ width: "100%", height: "100%" }}>
                    <Card className="card-hover-number tech-program-why-card" style={{ height: "100%", textAlign: "center" }}>
                      <Card.Body style={{ padding: compactCards ? "18px 18px 16px" : "20px 20px 18px" }}>
                        <div
                          className="tech-program-why-card__media"
                          style={{
                            width: "100%",
                            height: compactCards ? "112px" : "124px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "2px",
                          }}
                        >
                          <img
                            src={whyCardImages[cardIndex]}
                            alt={card.title}
                            className="tech-program-why-card__image"
                            style={{
                              width: whyCardImageFrames[cardIndex]?.width ?? "54%",
                              maxWidth: "100%",
                              height: whyCardImageFrames[cardIndex]?.height ?? "108px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <div className="tech-program-why-card__copy">
                          <h5 style={{ color: "#ffffff", marginBottom: "8px", fontSize: compactCards ? "1.02rem" : "1.08rem" }}>{card.title}</h5>
                          <Card.Text style={{ margin: 0, fontSize: compactCards ? "0.9rem" : "0.94rem", lineHeight: 1.45 }}>{card.body}</Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
              </motion.div>
            </div>
          </section>
        );
      })}
    </>
  );
}
