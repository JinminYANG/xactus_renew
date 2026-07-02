export type Lang = "en" | "ko";

type NavChild = {
  label: string;
  hash: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

type FooterContent = {
  brand: string;
  tagline: string;
  privacy: string;
  copyright: string;
};

type HomeContent = {
  hero: {
    title: string;
    body: string;
    actions: { label: string; href: string }[];
  };
  whatWeDo: {
    title: string;
    body: string;
    items: { title: string; body: string }[];
  };
  coreTechnology: {
    title: string;
    body: string;
    programs: { code: string; name: string }[];
  };
  pipelineReview: {
    title: string;
    action: { label: string; href: string };
  };
  collaborators: {
    title: string;
    label: string;
    programsLabel: string;
    stageLabel: string;
  };
  contact: {
    title: string;
    body: string;
    details: { label: string; value: string }[];
    action: { label: string; href: string };
  };
};

type AboutContent = {
  hero: {
    title: string;
    body: string;
  };
  vision: {
    title: string;
    headline: string;
    keywords: string[];
    paragraphs: string[];
  };
  history: {
    title: string;
    items: { year: string; month?: string; text: string }[];
  };
  leadership: {
    title: string;
    technicalAdvisorsTitle: string;
    developmentAdvisorsTitle: string;
    leader: {
      name: string;
      role: string;
      bullets: string[];
    };
    technicalAdvisors: {
      name: string;
      role: string;
      bullets: string[];
      placeholder?: boolean;
    }[];
    developmentAdvisors: {
      name: string;
      role: string;
      bullets: string[];
      placeholder?: boolean;
    }[];
  };
};

type TechnologyProgram = {
  id: string;
  title: string;
  targetLabel: string;
  target: string[];
  pathwayLabel?: string;
  pathway?: string[];
  payloadLabel?: string;
  payload?: string[];
  therapeuticImpactLabel: string;
  therapeuticImpact: string[];
  differentiationLabel: string;
  differentiation: string[];
  whyTitle: string;
  whyCards: { title: string; body: string }[];
};

type TechnologyContent = {
  hero: {
    title: string;
    body: string;
  };
  overview: {
    title: string;
    body: string;
    centerLabel: string[];
    map: { label: string; sublabel: string }[];
  };
  programs: TechnologyProgram[];
};

type PipelineProgram = {
  program: string;
  sublabel: string;
  targetMoa: string;
  indication: string;
  modality: string;
  developmentStage: string;
  partnership: string;
  progress: number[];
};

type PipelineContent = {
  hero: {
    title: string;
    body: string;
  };
  table: {
    title: string;
    headers: string[];
    stageHeaders: string[];
    programs: PipelineProgram[];
    footnote: string;
  };
};

type NewsroomItem = {
  title: string;
  date: string;
  category: string;
  summary: string;
};

type NewsroomContent = {
  hero: {
    title: string;
    body: string;
  };
  news: {
    title: string;
    action: string;
    items: NewsroomItem[];
  };
  notice: {
    title: string;
    action: string;
    items: NewsroomItem[];
  };
};

type ContactContent = {
  hero: {
    title: string;
    body: string;
  };
  inquiryForm: {
    title: string;
    eyebrow: string;
    headline: string;
    body: string;
    helper: string;
    responseTitle: string;
    responseBody: string;
    fields: string[];
    inquiryTypes: string[];
    messageLabel: string;
    action: string;
  };
  contacts: {
    title: string;
    body: string;
    items: { label: string; value: string }[];
    heading: string;
    addressLines: string[];
    transportLines: string[];
  };
};

export type SiteContent = {
  nav: NavItem[];
  footer: FooterContent;
  home: HomeContent;
  about: AboutContent;
  technology: TechnologyContent;
  pipeline: PipelineContent;
  newsroom: NewsroomContent;
  contact: ContactContent;
};

const enContent: SiteContent = {
  nav: [
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Overview", hash: "#overview-section" },
        { label: "History", hash: "#history-section" },
        { label: "Leadership", hash: "#leadership-section" },
      ],
    },
    {
      label: "Technology",
      href: "/technology",
      children: [
        { label: "Overview", hash: "#overview-section" },
        { label: "XO-001", hash: "#xo-001-section" },
        { label: "XO-003", hash: "#xo-003-section" },
        { label: "XO-004", hash: "#xo-004-section" },
        { label: "XOA-001", hash: "#xoa-001-section" },
      ],
    },
    { label: "Pipeline", href: "/pipeline" },
    {
      label: "Newsroom",
      href: "/newsroom",
      children: [
        { label: "News", hash: "#news-section" },
        { label: "Notice", hash: "#notice-section" },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
      children: [
        { label: "Inquiry Form", hash: "#inquiry-section" },
        { label: "Contacts", hash: "#contacts-section" },
      ],
    },
  ],
  footer: {
    brand: "XACTUS Onco",
    tagline: "Developing First-in-Class Cancer Therapeutics and Expanding Treatment Opportunities for Patients",
    privacy: "Privacy Policy",
    copyright: "COPYRIGHT 2026. Xactus Onco, LTD. ALL RIGHTS RESERVED.",
  },
  home: {
    hero: {
      title: "Advancing First-in-Class Oncology Innovation",
      body: "From breakthrough cancer therapeutics to integrated clinical research platforms, we accelerate the path from discovery to patient impact.",
      actions: [
        { label: "Explore Technology", href: "/technology#overview-section" },
        { label: "Explore Pipeline", href: "/pipeline#pipeline-table-section" },
      ],
    },
    whatWeDo: {
      title: "What We Do",
      body: "Driving innovation across drug discovery, clinical research, and data intelligence.",
      items: [
        { title: "Drug Discovery", body: "Developing first-in-class cancer therapeutics" },
        { title: "Clinical Data Analytics", body: "Transforming clinical data into actionable insights" },
        { title: "Clinical Research Platform", body: "Integrated clinical trial management solutions" },
      ],
    },
    coreTechnology: {
      title: "Core Technology",
      body: "We provide four complementary platforms targeting cancer from multiple angles.",
      programs: [
        { code: "XO-001", name: "TNIK Inhibitor" },
        { code: "XOA-001", name: "ADC Platform" },
        { code: "XO-003", name: "FOXM1 Inhibitor" },
        { code: "XO-004", name: "IRP2 Inhibitor" },
      ],
    },
    pipelineReview: {
      title: "Our Pipeline",
      action: { label: "View Full Pipeline", href: "/pipeline#pipeline-table-section" },
    },
    collaborators: {
      title: "Collaborators & Partners",
      label: "Partner",
      programsLabel: "Programs",
      stageLabel: "Stage",
    },
    contact: {
      title: "Contact Us",
      body: "If you have any questions regarding Xactus Onco, please feel free to contact us anytime.",
      details: [
        { label: "Address", value: "Room 702, Building 8-3, Ewha-yeodae 1-an-gil, Seodaemun-gu, Seoul" },
        { label: "Email", value: "xactusonco@gmail.com" },
        { label: "Tel", value: "+82 10-2611-2634" },
      ],
      action: { label: "Contact", href: "/contact#inquiry-section" },
    },
  },
  about: {
    hero: {
      title: "About Xactus Onco",
      body: "Advancing oncology innovation through science, technology, and continuous commitment to patients.",
    },
    vision: {
      title: "Vision & Mission",
      headline: "Creating New Treatment Opportunities for Cancer Patients",
      keywords: ["First-in-Class Innovation", "Clinical Intelligence", "Integrated Research Platform", "Patient Impact"],
      paragraphs: [
        "Xactus Onco is dedicated to developing first-in-class cancer therapeutics through innovative drug discovery, clinical research, and data-driven technologies.",
        "By integrating clinical data analytics, research management systems, oncology expertise, and translational strategy, we aim to create new treatment opportunities and improve patient outcomes.",
      ],
    },
    history: {
      title: "History",
      items: [
        { year: "2026", text: "Pipeline and platform expansion" },
        { year: "2025", month: "SEP", text: "Obtained Venture Business Certification" },
        { year: "2024", text: "Technology and business development acceleration" },
        { year: "2023", month: "FEB", text: "Founded Xactus Onco" },
      ],
    },
    leadership: {
      title: "Leadership & Advisors",
      technicalAdvisorsTitle: "Technical Advisors",
      developmentAdvisorsTitle: "Development Advisors",
      leader: {
        name: "Sang Joon Shin, M.D., Ph.D.",
        role: "Founder & CEO",
        bullets: [
          "Professor, Yonsei University College of Medicine",
          "Founder of TNIK Therapeutics and pioneer in precision oncology",
          "Author of 125+ scientific publications, including a first-author paper in Nature (2021)",
        ],
      },
      technicalAdvisors: [
        {
          name: "Hyuk Lee, Ph.D.",
          role: "Technical Advisor",
          bullets: ["Ph.D. in Chemistry, Yonsei University", "Principal Research Scientist, KRICT"],
        },
        { name: "Placeholder", role: "", bullets: [], placeholder: true },
        { name: "Placeholder", role: "", bullets: [], placeholder: true },
        { name: "Placeholder", role: "", bullets: [], placeholder: true },
      ],
      developmentAdvisors: [
        {
          name: "Jong Sung Ko, Ph.D.",
          role: "Development Advisor",
          bullets: ["Ph.D. in Bio-organic Chemistry, Caltech", "Built drug discovery platforms at LG Chem", "Founder & CEO, Genosco"],
        },
        {
          name: "Young Choon Moon, Ph.D.",
          role: "Development Advisor",
          bullets: ["Ph.D. in Organic Chemistry", "Former executive at PTC Therapeutics", "Chief Business Officer (CBO), DineBio"],
        },
        { name: "Placeholder", role: "", bullets: [], placeholder: true },
        { name: "Placeholder", role: "", bullets: [], placeholder: true },
      ],
    },
  },
  technology: {
    hero: {
      title: "Our Technology",
      body: "We develop first-in-class therapeutics that target cancer's critical dependencies.",
    },
    overview: {
      title: "Technology Overview",
      body: "We target the critical dependencies of cancer.",
      centerLabel: ["Cancer", "Dependencies"],
      map: [
        { label: "XO-001", sublabel: "Signal Pathway Targeting" },
        { label: "XO-003", sublabel: "Transcription Factor Targeting" },
        { label: "XO-004", sublabel: "Metabolic Vulnerability Targeting" },
        { label: "XOA-001", sublabel: "ADC Delivery Platform" },
      ],
    },
    programs: [
      {
        id: "xo-001",
        title: "XO-001 (TNIK Inhibitor)",
        targetLabel: "Target",
        target: ["TNIK (Traf2 and NCK-interacting kinase)"],
        pathwayLabel: "Pathway",
        pathway: ["Wnt/beta-catenin Signaling"],
        therapeuticImpactLabel: "Therapeutic Impact",
        therapeuticImpact: ["Tumor Growth Suppression", "Anti-Metastatic Activity", "Cancer Stem Cell Suppression", "Resistance Prevention"],
        differentiationLabel: "Differentiation",
        differentiation: ["Terminal Wnt Transcription Control", "Selective Targeting of APC-Mutant Tumors", "Reduced On-Target Toxicity", "Prevention of Recurrence & Resistance"],
        whyTitle: "Why XO-001?",
        whyCards: [
          { title: "Terminal Wnt Control", body: "XO-001 selectively targets TNIK, the terminal regulator of Wnt/beta-catenin signaling." },
          { title: "Enhanced Selectivity", body: "Selective inhibition of aberrant Wnt signaling while minimizing toxicity to normal tissues." },
          { title: "Durable Disease Control", body: "Suppresses cancer stem cell-driven metastasis, recurrence, and therapeutic resistance." },
        ],
      },
      {
        id: "xo-003",
        title: "XO-003 (FOXM1 Inhibitor)",
        targetLabel: "Target",
        target: ["FOXM1"],
        pathwayLabel: "Pathway",
        pathway: ["FOXM1-Driven Transcriptional Program"],
        therapeuticImpactLabel: "Therapeutic Impact",
        therapeuticImpact: ["Proliferation Suppression", "Anti-Metastatic Activity", "Resistance Prevention", "Cellular Senescence Induction"],
        differentiationLabel: "Differentiation",
        differentiation: ["Master Transcription Factor Targeting", "Multiple-Pathway Suppression", "Resistance Mechanism Blockade", "Combination Therapy Potential"],
        whyTitle: "Why XO-003?",
        whyCards: [
          { title: "Master Regulator Targeting", body: "Targets FOXM1, a central transcriptional driver of cancer progression." },
          { title: "Multi-Pathway Suppression", body: "Simultaneously inhibits proliferation, metastasis, angiogenesis, and drug resistance." },
          { title: "Combination Therapy Potential", body: "Enhances therapeutic response by overcoming resistance to standard treatments." },
        ],
      },
      {
        id: "xo-004",
        title: "XO-004 (IRP2 Inhibitor)",
        targetLabel: "Target",
        target: ["IRP2"],
        pathwayLabel: "Pathway",
        pathway: ["IRP2-Mediated Iron Homeostasis"],
        therapeuticImpactLabel: "Therapeutic Impact",
        therapeuticImpact: ["Iron Deprivation", "Mitochondrial Dysfunction", "Autophagic Cell Death", "Tumor Growth Suppression"],
        differentiationLabel: "Differentiation",
        differentiation: ["Metabolic Vulnerability Targeting", "Cancer-Selective Iron Disruption", "Reduced Impact on Normal Cells", "Activity in Drug-Resistant Tumors"],
        whyTitle: "Why XO-004?",
        whyCards: [
          { title: "Iron Dependency", body: "Exploits the elevated iron demand required for cancer cell proliferation." },
          { title: "Cancer Selectivity", body: "Disrupts iron homeostasis in tumor cells while sparing normal cells." },
          { title: "Drug-Resistant Tumors", body: "Demonstrates efficacy in tumors resistant to conventional targeted therapies." },
        ],
      },
      {
        id: "xoa-001",
        title: "XOA-001 (ADC Platform)",
        targetLabel: "Platform",
        target: ["ADC Platform"],
        payloadLabel: "Payload",
        payload: ["KS-10070 (XO-002)"],
        therapeuticImpactLabel: "Therapeutic Impact",
        therapeuticImpact: ["Selective Tumor Cell Killing", "Bystander-Mediated Tumor Clearance", "Enhanced Intratumoral Drug Exposure", "Reduced Systemic Toxicity"],
        differentiationLabel: "Differentiation",
        differentiation: ["Enhanced Tumor Internalization", "Optimized Linker Stability", "Potent KS-10070 Payload", "Strong Bystander Effect"],
        whyTitle: "Why XOA-001?",
        whyCards: [
          { title: "Enhanced Internalization", body: "Optimized tumor cell uptake and intracellular delivery." },
          { title: "Stable Linker Design", body: "Maintains stability in circulation to reduce off-target toxicity." },
          { title: "Potent Payload", body: "KS-10070 enables strong tumor cell killing at low concentrations." },
          { title: "Bystander Effect", body: "Diffuses to neighboring tumor cells to overcome tumor heterogeneity." },
        ],
      },
    ],
  },
  pipeline: {
    hero: {
      title: "Pipeline",
      body: "Advancing first-in-class oncology programs from discovery to clinical development.",
    },
    table: {
      title: "Pipeline",
      headers: ["Program", "Target / MOA", "Indication", "Modality", "Development Stage", "Partnership"],
      stageHeaders: ["Discovery", "Lead Discovery", "Lead Optimization", "Preclinical", "Phase 1", "Phase 2", "Phase 3"],
      programs: [
        {
          program: "XO-001",
          sublabel: "Wnt Inhibitor",
          targetMoa: "TNIK (Wnt Signaling Inhibitor)",
          indication: "Solid Tumors (TNIK-high), Colorectal Cancer (APC-mutant selected)",
          modality: "Small Molecule",
          developmentStage: "Preclinical",
          partnership: "Korea University",
          progress: [100, 100, 100, 85, 0, 0, 0],
        },
        {
          program: "XOA-001",
          sublabel: "ADC Platform",
          targetMoa: "HER2 (ERBB2)",
          indication: "HER2-positive Solid Tumors (Breast, Gastric, Others)",
          modality: "ADC (MAb + Payload)",
          developmentStage: "Preclinical",
          partnership: "Inha University",
          progress: [100, 100, 100, 85, 0, 0, 0],
        },
        {
          program: "XO-003",
          sublabel: "Transcription Factor Inhibitor",
          targetMoa: "FOXM1",
          indication: "Solid Tumors, High FOXM1-Expressing Cancers",
          modality: "Small Molecule",
          developmentStage: "Lead Optimization",
          partnership: "In Discussion",
          progress: [100, 100, 75, 0, 0, 0, 0],
        },
        {
          program: "XO-004",
          sublabel: "Iron Metabolism Inhibitor",
          targetMoa: "IRP2",
          indication: "Anemia of Chronic Disease, Solid Tumors",
          modality: "Small Molecule",
          developmentStage: "Lead Optimization",
          partnership: "In Discussion",
          progress: [100, 100, 60, 0, 0, 0, 0],
        },
      ],
      footnote: "* Pipeline status as June 2026",
    },
  },
  newsroom: {
    hero: {
      title: "Newsroom",
      body: "Stay informed about our latest achievements, partnerships, and corporate milestones.",
    },
    news: {
      title: "News",
      action: "View all News",
      items: [
        {
          category: "Company Update",
          title: "Xactus Onco Receives Venture Business Certification",
          date: "2025-12-29",
          summary: "Xactus Onco completed the venture business certification process, strengthening its base for continued growth.",
        },
        {
          category: "Platform",
          title: "X-OncoTrack Platform Update",
          date: "2025-12-18",
          summary: "The latest platform update improves operational workflow visibility and research data usability.",
        },
        {
          category: "Conference",
          title: "Xactus Onco Presents at AACR 2026",
          date: "2025-12-05",
          summary: "The team shared recent oncology research progress and platform capabilities at AACR 2026.",
        },
      ],
    },
    notice: {
      title: "Notice",
      action: "View all Notice",
      items: [
        {
          category: "Schedule",
          title: "Holiday Schedule Notice (December 2025)",
          date: "2025-12-29",
          summary: "Holiday operating hours and support coverage for the year-end period have been announced.",
        },
        {
          category: "Operations",
          title: "Year-End Closing and New Year Holiday Notice",
          date: "2025-12-23",
          summary: "Administrative and office closing dates for the year-end and New Year holiday period are available.",
        },
        {
          category: "Policy",
          title: "Privacy Policy Revision Notice",
          date: "2025-12-15",
          summary: "The privacy policy has been revised to reflect updated operational and compliance requirements.",
        },
      ],
    },
  },
  contact: {
    hero: {
      title: "Contact Us",
      body: "We welcome collaboration, partnership, and business inquiries.",
    },
    inquiryForm: {
      title: "Inquiry Form",
      eyebrow: "GET IN TOUCH",
      headline: "Business and collaboration inquiries.",
      body: "Share the purpose of your inquiry and we will route it to the appropriate contact.",
      helper: "Please provide enough detail for efficient routing.",
      responseTitle: "Expected Response",
      responseBody: "We typically review incoming inquiries and respond after internal routing and relevance check.",
      fields: ["Name *", "Organization *", "Email *", "Inquiry Type"],
      inquiryTypes: ["General Inquiry", "Partnership", "Joint Research", "Investment", "Media"],
      messageLabel: "Message *",
      action: "Send Inquiry",
    },
    contacts: {
      title: "Contacts",
      body: "Direct contact and location information for Xactus Onco.",
      items: [
        { label: "Phone Support", value: "+82 10-2611-2634" },
        { label: "Fax", value: "+82 02-6280-2634" },
        { label: "Email", value: "xactusonco@gmail.com" },
        { label: "Social Media", value: "@placeholder" },
      ],
      heading: "Headquarter",
      addressLines: ["Seoul, South Korea:", "Room 702, Building 8-3, Ewha-yeodae 1-an-gil, Seodaemun-gu, Seoul"],
      transportLines: ["Line 2 Ewha Womans Univ. Station", "5 min walk"],
    },
  },
};

const koContent: SiteContent = {
  nav: [
    {
      label: "회사소개",
      href: "/about",
      children: [
        { label: "개요", hash: "#overview-section" },
        { label: "연혁", hash: "#history-section" },
        { label: "리더십", hash: "#leadership-section" },
      ],
    },
    {
      label: "기술",
      href: "/technology",
      children: [
        { label: "개요", hash: "#overview-section" },
        { label: "XO-001", hash: "#xo-001-section" },
        { label: "XO-003", hash: "#xo-003-section" },
        { label: "XO-004", hash: "#xo-004-section" },
        { label: "XOA-001", hash: "#xoa-001-section" },
      ],
    },
    { label: "파이프라인", href: "/pipeline" },
    {
      label: "뉴스룸",
      href: "/newsroom",
      children: [
        { label: "뉴스", hash: "#news-section" },
        { label: "공지", hash: "#notice-section" },
      ],
    },
    {
      label: "문의",
      href: "/contact",
      children: [
        { label: "문의 양식", hash: "#inquiry-section" },
        { label: "연락처", hash: "#contacts-section" },
      ],
    },
  ],
  footer: {
    brand: "XACTUS Onco",
    tagline: "차세대 항암제를 개발하고 암 환자 치료 기회를 확장합니다.",
    privacy: "개인정보처리방침",
    copyright: "COPYRIGHT 2026. Xactus Onco, LTD. ALL RIGHTS RESERVED.",
  },
  home: {
    hero: {
      title: "차세대 항암 혁신을 가속합니다",
      body: "혁신 신약 개발부터 임상 연구 플랫폼과 데이터 인텔리전스까지, 발견에서 환자 적용까지의 여정을 앞당깁니다.",
      actions: [
        { label: "기술 보기", href: "/technology#overview-section" },
        { label: "파이프라인 보기", href: "/pipeline#pipeline-table-section" },
      ],
    },
    whatWeDo: {
      title: "What We Do",
      body: "신약 개발, 임상 연구, 데이터 인텔리전스 전반에서 혁신을 추진합니다.",
      items: [
        { title: "신약 개발", body: "퍼스트인클래스 항암제를 개발합니다" },
        { title: "임상 데이터 분석", body: "임상 데이터를 실행 가능한 인사이트로 전환합니다" },
        { title: "임상 연구 플랫폼", body: "통합형 임상시험 관리 솔루션을 제공합니다" },
      ],
    },
    coreTechnology: {
      title: "핵심 기술",
      body: "암을 다양한 각도에서 공략하는 네 가지 핵심 플랫폼을 보유하고 있습니다.",
      programs: [
        { code: "XO-001", name: "TNIK 억제제" },
        { code: "XOA-001", name: "ADC 플랫폼" },
        { code: "XO-003", name: "FOXM1 억제제" },
        { code: "XO-004", name: "IRP2 억제제" },
      ],
    },
    pipelineReview: {
      title: "파이프라인",
      action: { label: "전체 파이프라인 보기", href: "/pipeline#pipeline-table-section" },
    },
    collaborators: {
      title: "협력 기관 및 파트너",
      label: "파트너",
      programsLabel: "프로그램",
      stageLabel: "단계",
    },
    contact: {
      title: "문의하기",
      body: "Xactus Onco에 대해 궁금하신 사항이 있으시면 언제든지 문의해 주십시오.",
      details: [
        { label: "주소", value: "서울시 서대문구 이화여대1안길 8-3, 702호" },
        { label: "이메일", value: "xactusonco@gmail.com" },
        { label: "전화", value: "+82 10-2611-2634" },
      ],
      action: { label: "문의하기", href: "/contact#inquiry-section" },
    },
  },
  about: {
    hero: {
      title: "Xactus Onco 소개",
      body: "과학과 기술, 그리고 환자에 대한 지속적인 책임감을 바탕으로 항암 혁신을 추진합니다.",
    },
    vision: {
      title: "비전 및 미션",
      headline: "암 환자에게 새로운 치료 기회를 만듭니다",
      keywords: ["퍼스트인클래스 혁신", "임상 인텔리전스", "통합 연구 플랫폼", "환자 임팩트"],
      paragraphs: [
        "Xactus Onco는 혁신 신약 개발, 임상 연구, 데이터 기반 기술을 통해 퍼스트인클래스 항암제를 개발하는 데 전념하고 있습니다.",
        "임상 데이터 분석, 연구 운영 시스템, 종양학 전문성을 통합하여 새로운 치료 기회를 만들고 환자 치료 성과를 향상시키고자 합니다.",
      ],
    },
    history: {
      title: "연혁",
      items: [
        { year: "2026", text: "파이프라인 및 플랫폼 확장" },
        { year: "2025", month: "SEP", text: "벤처기업 인증 획득" },
        { year: "2024", text: "기술 및 사업화 고도화" },
        { year: "2023", month: "FEB", text: "Xactus Onco 설립" },
      ],
    },
    leadership: {
      title: "리더십 및 자문단",
      technicalAdvisorsTitle: "기술 자문단",
      developmentAdvisorsTitle: "개발 자문단",
      leader: {
        name: "신상준 M.D., Ph.D.",
        role: "창업자 겸 CEO",
        bullets: [
          "연세대학교 의과대학 교수",
          "TNIK Therapeutics 창업자이자 정밀 종양학 분야 개척자",
          "Nature(2021) 제1저자 논문을 포함한 125편 이상 과학 논문 저자",
        ],
      },
      technicalAdvisors: [
        {
          name: "이혁 Ph.D.",
          role: "기술 자문",
          bullets: ["연세대학교 화학과 박사", "한국화학연구원 책임연구원"],
        },
        { name: "추가 예정", role: "", bullets: [], placeholder: true },
        { name: "추가 예정", role: "", bullets: [], placeholder: true },
        { name: "추가 예정", role: "", bullets: [], placeholder: true },
      ],
      developmentAdvisors: [
        {
          name: "고종성 Ph.D.",
          role: "개발 자문",
          bullets: ["Caltech 생유기화학 박사", "LG Chem 신약개발 플랫폼 구축", "Genosco 창업자 겸 CEO"],
        },
        {
          name: "문영춘 Ph.D.",
          role: "개발 자문",
          bullets: ["유기화학 박사", "전 PTC Therapeutics 임원", "DineBio CBO"],
        },
        { name: "추가 예정", role: "", bullets: [], placeholder: true },
        { name: "추가 예정", role: "", bullets: [], placeholder: true },
      ],
    },
  },
  technology: {
    hero: {
      title: "우리의 기술",
      body: "암의 핵심 의존성을 표적하는 퍼스트인클래스 치료제를 개발합니다.",
    },
    overview: {
      title: "기술 개요",
      body: "우리는 암의 핵심 의존성을 표적합니다.",
      centerLabel: ["Cancer", "Dependencies"],
      map: [
        { label: "XO-001", sublabel: "신호 경로 표적" },
        { label: "XO-003", sublabel: "전사인자 표적" },
        { label: "XO-004", sublabel: "대사 취약성 표적" },
        { label: "XOA-001", sublabel: "ADC 전달 플랫폼" },
      ],
    },
    programs: [
      {
        id: "xo-001",
        title: "XO-001 (TNIK 억제제)",
        targetLabel: "표적",
        target: ["TNIK (Traf2 and NCK-interacting kinase)"],
        pathwayLabel: "경로",
        pathway: ["Wnt/beta-catenin 신호전달"],
        therapeuticImpactLabel: "치료적 효과",
        therapeuticImpact: ["종양 성장 억제", "전이 억제", "암 줄기세포 억제", "내성 예방"],
        differentiationLabel: "차별성",
        differentiation: ["말단 Wnt 전사 조절", "APC 변이 종양 선택적 표적화", "온타깃 독성 감소", "재발 및 내성 억제"],
        whyTitle: "Why XO-001?",
        whyCards: [
          { title: "말단 Wnt 조절", body: "XO-001은 Wnt/beta-catenin 신호전달의 말단 조절자인 TNIK를 선택적으로 표적합니다." },
          { title: "높은 선택성", body: "비정상 Wnt 신호를 선택적으로 억제하면서 정상 조직 독성을 최소화합니다." },
          { title: "지속적 질환 제어", body: "암 줄기세포 기반 전이, 재발, 치료 저항성을 억제합니다." },
        ],
      },
      {
        id: "xo-003",
        title: "XO-003 (FOXM1 억제제)",
        targetLabel: "표적",
        target: ["FOXM1"],
        pathwayLabel: "경로",
        pathway: ["FOXM1 전사 프로그램"],
        therapeuticImpactLabel: "치료적 효과",
        therapeuticImpact: ["증식 억제", "전이 억제", "내성 억제", "세포 노화 유도"],
        differentiationLabel: "차별성",
        differentiation: ["마스터 전사인자 표적", "다중 경로 억제", "내성 기전 차단", "병용 치료 확장성"],
        whyTitle: "Why XO-003?",
        whyCards: [
          { title: "마스터 조절인자 표적", body: "암 진행을 주도하는 중심 전사인자인 FOXM1을 표적합니다." },
          { title: "다중 경로 억제", body: "증식, 전이, 혈관신생, 약물 저항성을 동시에 억제합니다." },
          { title: "병용 치료 잠재력", body: "기존 치료제에 대한 저항성을 낮추어 치료 반응을 강화합니다." },
        ],
      },
      {
        id: "xo-004",
        title: "XO-004 (IRP2 억제제)",
        targetLabel: "표적",
        target: ["IRP2"],
        pathwayLabel: "경로",
        pathway: ["IRP2 매개 철 항상성"],
        therapeuticImpactLabel: "치료적 효과",
        therapeuticImpact: ["철 결핍 유도", "미토콘드리아 기능 이상", "자가포식성 세포사멸", "종양 성장 억제"],
        differentiationLabel: "차별성",
        differentiation: ["대사 취약성 표적", "암 선택적 철 대사 교란", "정상세포 영향 최소화", "약물 저항성 종양 적용 가능성"],
        whyTitle: "Why XO-004?",
        whyCards: [
          { title: "철 의존성 공략", body: "암세포 증식에 필요한 높은 철 수요를 공략합니다." },
          { title: "암 선택성", body: "정상세포를 비교적 보존하면서 종양세포의 철 항상성을 교란합니다." },
          { title: "저항성 종양 적용", body: "기존 표적 치료에 저항성을 보이는 종양에서도 가능성을 보입니다." },
        ],
      },
      {
        id: "xoa-001",
        title: "XOA-001 (ADC 플랫폼)",
        targetLabel: "플랫폼",
        target: ["ADC 플랫폼"],
        payloadLabel: "페이로드",
        payload: ["KS-10070 (XO-002)"],
        therapeuticImpactLabel: "치료적 효과",
        therapeuticImpact: ["선택적 종양세포 사멸", "바이스탠더 종양 제거", "종양 내 약물 노출 증가", "전신 독성 감소"],
        differentiationLabel: "차별성",
        differentiation: ["종양 내재화 향상", "링커 안정성 최적화", "강력한 KS-10070 페이로드", "우수한 바이스탠더 효과"],
        whyTitle: "Why XOA-001?",
        whyCards: [
          { title: "내재화 향상", body: "종양세포 흡수와 세포내 전달 효율을 최적화했습니다." },
          { title: "안정적 링커 설계", body: "순환 중 안정성을 확보하여 오프타깃 독성을 줄입니다." },
          { title: "강력한 페이로드", body: "KS-10070은 낮은 농도에서도 높은 종양세포 사멸 효과를 보입니다." },
          { title: "바이스탠더 효과", body: "주변 종양세포까지 확산하여 종양 이질성 문제를 보완합니다." },
        ],
      },
    ],
  },
  pipeline: {
    hero: {
      title: "파이프라인",
      body: "발굴 단계부터 임상 개발까지 퍼스트인클래스 종양학 프로그램을 추진합니다.",
    },
    table: {
      title: "파이프라인",
      headers: ["프로그램", "표적 / MOA", "적응증", "모달리티", "개발 단계", "파트너십"],
      stageHeaders: ["발굴", "리드 발굴", "리드 최적화", "전임상", "임상 1상", "임상 2상", "임상 3상"],
      programs: [
        {
          program: "XO-001",
          sublabel: "Wnt 억제제",
          targetMoa: "TNIK (Wnt 신호전달 억제)",
          indication: "고 TNIK 발현 고형암, APC 변이 대장암",
          modality: "소분자",
          developmentStage: "전임상",
          partnership: "고려대학교",
          progress: [100, 100, 100, 85, 0, 0, 0],
        },
        {
          program: "XOA-001",
          sublabel: "ADC 플랫폼",
          targetMoa: "HER2 (ERBB2)",
          indication: "HER2 양성 고형암 (유방암, 위암 등)",
          modality: "ADC (항체 + 페이로드)",
          developmentStage: "전임상",
          partnership: "인하대학교",
          progress: [100, 100, 100, 85, 0, 0, 0],
        },
        {
          program: "XO-003",
          sublabel: "전사인자 억제제",
          targetMoa: "FOXM1",
          indication: "고형암, FOXM1 고발현 암종",
          modality: "소분자",
          developmentStage: "리드 최적화",
          partnership: "논의 중",
          progress: [100, 100, 75, 0, 0, 0, 0],
        },
        {
          program: "XO-004",
          sublabel: "철 대사 억제제",
          targetMoa: "IRP2",
          indication: "만성질환성 빈혈, 고형암",
          modality: "소분자",
          developmentStage: "리드 최적화",
          partnership: "논의 중",
          progress: [100, 100, 60, 0, 0, 0, 0],
        },
      ],
      footnote: "* 2026년 6월 기준",
    },
  },
  newsroom: {
    hero: {
      title: "뉴스룸",
      body: "최근 성과, 파트너십, 주요 기업 소식을 확인하실 수 있습니다.",
    },
    news: {
      title: "뉴스",
      action: "전체 뉴스 보기",
      items: [
        {
          category: "기업 소식",
          title: "Xactus Onco, 벤처기업 인증 획득",
          date: "2025-12-29",
          summary: "벤처기업 인증을 완료하며 향후 성장 기반과 사업 추진 동력을 강화했습니다.",
        },
        {
          category: "플랫폼",
          title: "X-OncoTrack 플랫폼 업데이트",
          date: "2025-12-18",
          summary: "연구 운영 가시성과 데이터 활용성을 높이기 위한 최신 플랫폼 업데이트를 반영했습니다.",
        },
        {
          category: "학회",
          title: "AACR 2026에서 연구 성과 발표",
          date: "2025-12-05",
          summary: "AACR 2026에서 최근 종양학 연구 성과와 플랫폼 역량을 공유했습니다.",
        },
      ],
    },
    notice: {
      title: "공지",
      action: "전체 공지 보기",
      items: [
        {
          category: "일정",
          title: "2025년 12월 휴무 일정 안내",
          date: "2025-12-29",
          summary: "연말 기간 중 운영 일정과 문의 대응 가능 시간을 안내드립니다.",
        },
        {
          category: "운영",
          title: "연말 결산 및 신정 휴무 안내",
          date: "2025-12-23",
          summary: "연말 결산 일정과 신정 휴무 기간 중 행정 및 사무 운영 일정을 공지합니다.",
        },
        {
          category: "정책",
          title: "개인정보처리방침 개정 안내",
          date: "2025-12-15",
          summary: "운영 및 준법 요구사항 반영을 위해 개인정보처리방침이 개정되었습니다.",
        },
      ],
    },
  },
  contact: {
    hero: {
      title: "문의하기",
      body: "협업, 제휴, 비즈니스 문의를 접수합니다.",
    },
    inquiryForm: {
      title: "문의 양식",
      eyebrow: "문의 접수",
      headline: "제휴·협업·비즈니스 문의",
      body: "문의 목적과 내용을 간단히 작성해 주시면 담당 창구로 연결해 드립니다.",
      helper: "원활한 확인을 위해 필요한 정보를 함께 기재해 주십시오.",
      responseTitle: "응답 안내",
      responseBody: "접수된 문의는 내부 검토 및 담당 부서 확인 후 순차적으로 안내드립니다.",
      fields: ["이름 *", "소속 *", "이메일 *", "문의 유형"],
      inquiryTypes: ["일반 문의", "파트너십", "공동 연구", "투자", "미디어"],
      messageLabel: "메시지 *",
      action: "문의 보내기",
    },
    contacts: {
      title: "연락처",
      body: "연락처 및 위치 정보를 한 곳에서 확인하실 수 있습니다.",
      items: [
        { label: "전화", value: "+82 10-2611-2634" },
        { label: "팩스", value: "+82 02-6280-2634" },
        { label: "이메일", value: "xactusonco@gmail.com" },
        { label: "소셜 미디어", value: "@placeholder" },
      ],
      heading: "본사",
      addressLines: ["서울, 대한민국", "서울시 서대문구 이화여대1안길 8-3, 702호"],
      transportLines: ["지하철 2호선 이대역", "도보 5분"],
    },
  },
};

export const siteContent: Record<Lang, SiteContent> = {
  en: enContent,
  ko: koContent,
};

export const getSiteContent = (lang: Lang): SiteContent => siteContent[lang];

export const translations = {
  en: {
    nav: {
      home: "Home",
      pipeline: "Pipeline",
      platform: "Technology",
      company: "About",
    },
    footer: {
      tagline: enContent.footer.tagline,
      aboutTitle: enContent.footer.brand,
      aboutDesc: "Xactus Onco is dedicated to developing first-in-class cancer therapeutics through innovative drug discovery, clinical research, and data-driven technologies.",
      quickLinks: "Quick Links",
      contact: "Contact",
      address: "Room 702, Building 8-3, Ewha-yeodae 1-an-gil, Seodaemun-gu, Seoul",
      email: "Email: xactusonco@gmail.com",
      phone: "Tel: +82 10-2611-2634",
      fax: "Fax: +82 02-6280-2634",
      locationTitle: "Address",
      locationAddressFull: "Room 702, Building 8-3, Ewha-yeodae 1-an-gil, Seodaemun-gu, Seoul",
      copyright: "COPYRIGHT",
      year: "2026. Xactus Onco, LTD. ALL RIGHTS RESERVED.",
      policyTerms: enContent.footer.privacy,
      policyTermsUrl: "#",
      termsConditions: "Terms & Conditions",
      termsConditionsUrl: "#",
    },
    pipeline: {
      chartHeaders: {
        progress: "Progress",
      },
      stages: {
        candidateCompound: "Candidate Compound",
        targetDiscovery: "Target Discovery",
        leadIdentification: "Lead Identification",
        leadOptimization: "Lead Optimization",
        preclinical: "Preclinical",
        clinicalApplication: "Clinical Development",
      },
    },
  },
  ko: {
    nav: {
      home: "홈",
      pipeline: "파이프라인",
      platform: "기술",
      company: "회사소개",
    },
    footer: {
      tagline: koContent.footer.tagline,
      aboutTitle: koContent.footer.brand,
      aboutDesc: "Xactus Onco는 혁신 신약 개발, 임상 연구, 데이터 기반 기술을 통해 퍼스트인클래스 항암제를 개발하는 데 전념하고 있습니다.",
      quickLinks: "바로가기",
      contact: "연락처",
      address: "서울시 서대문구 이화여대1안길 8-3, 702호",
      email: "이메일: xactusonco@gmail.com",
      phone: "전화: +82 10-2611-2634",
      fax: "팩스: +82 02-6280-2634",
      locationTitle: "주소",
      locationAddressFull: "서울시 서대문구 이화여대1안길 8-3, 702호",
      copyright: "COPYRIGHT",
      year: "2026. Xactus Onco, LTD. ALL RIGHTS RESERVED.",
      policyTerms: koContent.footer.privacy,
      policyTermsUrl: "#",
      termsConditions: "이용약관",
      termsConditionsUrl: "#",
    },
    pipeline: {
      chartHeaders: {
        progress: "진행률",
      },
      stages: {
        candidateCompound: "후보물질",
        targetDiscovery: "타깃 발굴",
        leadIdentification: "리드 발굴",
        leadOptimization: "리드 최적화",
        preclinical: "전임상",
        clinicalApplication: "임상 개발",
      },
    },
  },
} as const;

export const t = (path: string, lang: Lang): string => {
  const keys = path.split(".");
  let value: unknown = translations[lang];

  for (const key of keys) {
    if (typeof value !== "object" || value === null || !(key in value)) {
      return path;
    }
    value = (value as Record<string, unknown>)[key];
  }

  return typeof value === "string" ? value : path;
};
