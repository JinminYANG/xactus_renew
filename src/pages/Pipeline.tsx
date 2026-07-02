import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import DotNavigation from "../components/DotNavigation";
import { getSiteContent } from "../lib/i18n.original-en-clean";
import PipelineHero from "../../docs/site_image_0616/usable_assets/hero_backgrounds/pipeline_hero_microscope.png";

const heroStyle = {
  backgroundImage: `linear-gradient(rgba(32, 109, 184, 0.08), rgba(12, 40, 72, 0.1)), url(${PipelineHero})`,
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

const rowContainerMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
} as const;

const rowMotion = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

const progressFillTransition = {
  duration: 0.88,
  ease: [0.22, 1, 0.36, 1],
} as const;

export default function Pipeline() {
  const language = useAppStore((s) => s.language);
  const content = getSiteContent(language).pipeline;

  const sections = [
    { id: "pipeline-hero-section", label: "Pipeline Hero", shortLabel: "PIPE" },
    { id: "pipeline-table-section", label: "Pipeline Table", shortLabel: "TABLE" },
  ];

  return (
    <>
      <DotNavigation sections={sections} />
      <section id="pipeline-hero-section" className="section-wrapper hero-section bg-sheen" style={heroStyle}>
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

      <section id="pipeline-table-section" className="section-wrapper with-bg" style={contentSectionStyle}>
        <div className="container">
          <motion.div className="section-title" style={{ textAlign: "left" }} {...titleMotion}>
            <h2>{content.table.title}</h2>
            <p style={{ maxWidth: "880px", margin: 0 }}>{content.hero.body}</p>
          </motion.div>

          <motion.div
            className="pipeline-table-shell"
            initial={{ opacity: 0, y: 24, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
          <Card>
            <Card.Body>
              <div className="pipeline-table-scroll">
              <table className="pipeline-table" style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
                <colgroup>
                  <col style={{ width: "14%" }} />
                  <col style={{ width: "14%" }} />
                  <col style={{ width: "26%" }} />
                  <col style={{ width: "12%" }} />
                  <col style={{ width: "24%" }} />
                  <col style={{ width: "10%" }} />
                </colgroup>
                <thead>
                  <tr>
                    {content.table.headers.map((header) => (
                      <th
                        key={header}
                        style={{
                          textAlign: "left",
                          padding: "14px 12px",
                          color: "#ffffff",
                          borderBottom: "1px solid rgba(255,255,255,0.14)",
                          fontSize: "0.9rem",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <motion.tbody variants={rowContainerMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                  {content.table.programs.map((program, rowIndex) => {
                    const totalProgress =
                      program.progress.reduce((sum, value) => sum + value, 0) / (program.progress.length * 100) * 100;
                    const currentStage =
                      program.progress.reduce((lastIndex, value, index) => (value > 0 ? index : lastIndex), -1) + 1;

                    return (
                      <motion.tr key={program.program} variants={rowMotion}>
                        <td style={cellStyle}>
                          <div style={{ color: "var(--xactus-green)", fontWeight: 700 }}>{program.program}</div>
                          <div style={{ color: "rgba(210,228,248,0.72)", fontSize: "0.84rem" }}>{program.sublabel}</div>
                        </td>
                        <td style={cellStyle}>{program.targetMoa}</td>
                        <td style={cellStyle}>{program.indication}</td>
                        <td style={cellStyle}>{program.modality}</td>
                        <td style={cellStyle}>
                          <div style={{ marginBottom: "12px", color: "#ffffff", fontWeight: 600 }}>{program.developmentStage}</div>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div
                              style={{
                                position: "relative",
                                flex: 1,
                                minWidth: 0,
                                height: "10px",
                                borderRadius: "999px",
                                background: "rgba(255,255,255,0.08)",
                                overflow: "hidden",
                              }}
                            >
                              <motion.div
                                style={{
                                  width: `${totalProgress}%`,
                                  height: "100%",
                                  background: "linear-gradient(90deg, var(--xactus-green), var(--accent-cyan))",
                                  transformOrigin: "left center",
                                }}
                                initial={{ scaleX: 0, opacity: 0.7 }}
                                whileInView={{ scaleX: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.9 }}
                                transition={{ ...progressFillTransition, delay: 0.16 + rowIndex * 0.08 }}
                              />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap", flexShrink: 0 }}>
                              <span style={{ color: "var(--accent-cyan)", fontWeight: 700, fontSize: "0.86rem" }}>{Math.round(totalProgress)}%</span>
                              <span
                                style={{
                                  padding: "4px 8px",
                                  borderRadius: "999px",
                                  border: "1px solid rgba(82, 217, 255, 0.24)",
                                  color: "rgba(210,228,248,0.92)",
                                  fontSize: "0.76rem",
                                  fontWeight: 700,
                                }}
                              >
                                {currentStage}/{program.progress.length}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td style={cellStyle}>{formatPartnership(program.partnership)}</td>
                      </motion.tr>
                    );
                  })}
                </motion.tbody>
              </table>
              </div>
              <motion.div
                style={{ marginTop: "18px", color: "rgba(210,228,248,0.7)", fontSize: "0.82rem" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.36, delay: 0.18 }}
              >
                {content.table.footnote}
              </motion.div>
            </Card.Body>
          </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}

const cellStyle = {
  padding: "16px 12px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  verticalAlign: "top" as const,
  color: "rgba(210,228,248,0.9)",
  lineHeight: 1.55,
  fontSize: "0.88rem",
  wordBreak: "keep-all" as const,
};

const formatPartnership = (value: string) =>
  value
    .replace("Korea University", "Korea Univ.")
    .replace("Inha University", "Inha Univ.")
    .replace("In Discussion", "Discussion");
