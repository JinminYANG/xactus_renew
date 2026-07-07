import { motion } from "framer-motion";
import { Card, Col, Row } from "react-bootstrap";
import { useAppStore } from "../store/useAppStore";
import DotNavigation from "../components/DotNavigation";
import { getSiteContent } from "../lib/i18n.original-en-clean";
import NewsroomHero from "../../docs/site_image_0616/usable_assets/hero_backgrounds/newsroom_hero_generated_v3_balanced.png";
import NewsCard01 from "../../docs/site_image_0616/extracted_backgrounds/news_bg_01_venture_business_certification.png";
import NewsCard02 from "../../docs/site_image_0616/extracted_backgrounds/news_bg_02_platform_update.png";
import NewsCard03 from "../../docs/site_image_0616/extracted_backgrounds/news_bg_03_aacr_2026.png";
import NoticeCard01 from "../../docs/site_image_0616/extracted_backgrounds/notice_bg_01_holiday_schedule_clean.png";
import NoticeCard02 from "../../docs/site_image_0616/extracted_backgrounds/notice_bg_02_year_end_closing_clean.png";
import NoticeCard03 from "../../docs/site_image_0616/extracted_backgrounds/notice_bg_03_privacy_policy_revision_clean.png";

const heroStyle = {
  backgroundImage: `url(${NewsroomHero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const contentSectionStyle = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  padding: "120px 0 72px",
};

const newsCardImages = [NewsCard01, NewsCard02, NewsCard03];
const noticeCardImages = [NoticeCard01, NoticeCard02, NoticeCard03];

const imageFocus = {
  news: ["center 8%", "center 14%", "center 18%"],
  notice: ["center 14%", "center 20%", "center 18%"],
};

const titleMotion = {
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.55 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const;

const cardContainerMotion = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
} as const;

const cardMotion = {
  hidden: { opacity: 0, y: 36, rotateX: -10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export default function Newsroom() {
  const language = useAppStore((s) => s.language);
  const content = getSiteContent(language).newsroom;
  const sections = [
    { id: "newsroom-hero-section", label: "Newsroom Hero", shortLabel: "NEWS" },
    { id: "news-section", label: "News", shortLabel: "NEWS" },
    { id: "notice-section", label: "Notice", shortLabel: "NOTICE" },
  ];

  return (
    <>
      <DotNavigation sections={sections} />

      <section id="newsroom-hero-section" className="section-wrapper hero-section bg-sheen newsroom-hero-section" style={heroStyle}>
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

      <section id="news-section" className="section-wrapper with-bg newsroom-section" style={contentSectionStyle}>
        <div className="container">
          <motion.div className="section-title" {...titleMotion}>
            <h2>{content.news.title}</h2>
          </motion.div>

          <motion.div variants={cardContainerMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.34 }}>
            <Row className="g-4">
              {content.news.items.map((item, index) => (
                <Col key={item.title} lg={4} md={6} sm={12}>
                  <motion.div variants={cardMotion}>
                    <ArticleCard
                      image={newsCardImages[index]}
                      imagePosition={imageFocus.news[index]}
                      badge={item.category}
                      title={item.title}
                      date={item.date}
                    />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          <motion.div
            style={{ marginTop: "22px", textAlign: "right", color: "#35516d", fontWeight: 600 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: 0.48, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {content.news.action} <span style={{ marginLeft: "8px" }}>→</span>
          </motion.div>
        </div>
      </section>

      <section id="notice-section" className="section-wrapper with-bg newsroom-section" style={contentSectionStyle}>
        <div className="container">
          <motion.div className="section-title" {...titleMotion}>
            <h2>{content.notice.title}</h2>
          </motion.div>

          <motion.div variants={cardContainerMotion} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.34 }}>
            <Row className="g-4">
              {content.notice.items.map((item, index) => (
                <Col key={item.title} lg={4} md={6} sm={12}>
                  <motion.div variants={cardMotion}>
                    <ArticleCard
                      image={noticeCardImages[index]}
                      imagePosition={imageFocus.notice[index]}
                      badge={content.notice.title}
                      title={item.title}
                      date={item.date}
                    />
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          <motion.div
            style={{ marginTop: "22px", textAlign: "right", color: "#35516d", fontWeight: 600 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: 0.48, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {content.notice.action} <span style={{ marginLeft: "8px" }}>→</span>
          </motion.div>
        </div>
      </section>
    </>
  );
}

type ArticleCardProps = {
  image: string;
  imagePosition: string;
  badge: string;
  title: string;
  date: string;
};

function ArticleCard({ image, imagePosition, badge, title, date }: ArticleCardProps) {
  return (
    <Card
      className="article-card-shell"
      style={{
        height: "100%",
        background: "transparent",
        border: "none",
        boxShadow: "none",
        backdropFilter: "none",
      }}
    >
      <div
        className="article-card-frame"
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          background: "#ffffff",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.24)",
        }}
      >
        <div
          className="article-card-media"
          style={{
            position: "relative",
            height: "178px",
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(219, 231, 242, 0.95), rgba(200, 216, 232, 0.82))",
          }}
        >
          <img
            src={image}
            alt={title}
            className="img-fluid article-card-image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: imagePosition,
              transform: "scale(1.12)",
              transformOrigin: "center top",
              filter: "saturate(0.92)",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              padding: "7px 12px",
              borderRadius: "11px",
              background: "rgba(44, 78, 62, 0.96)",
              color: "#ffffff",
              fontSize: "0.86rem",
              fontWeight: 700,
              lineHeight: 1,
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.18)",
            }}
          >
            {badge}
          </span>
        </div>

        <div style={{ padding: "22px 22px 18px" }}>
          <h5 style={{ color: "#1e2632", margin: 0, lineHeight: 1.28, fontSize: "clamp(1.18rem, 1.75vw, 1.5rem)", fontWeight: 700 }}>
            {title}
          </h5>
          <div style={{ marginTop: "20px", color: "#98a2b3", fontSize: "0.96rem", fontWeight: 600 }}>{date}</div>
        </div>
      </div>
    </Card>
  );
}
