import React, { JSX, useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import { useAppStore } from "../../store/useAppStore";
import { t } from "../../lib/i18n";
import "./PipelineChart.css";

type RowItem = {
  id: string;
  name: string;
  sub: string;
  target: string;
  stages: {
    label: string;
    value: number;
  }[];
};

const DATA: RowItem[] = [
  {
    id: "XO-001",
    name: "XO-001",
    sub: "Wnt 저해제",
    target: "TNIKi",
    stages: [
      { label: "candidateCompound", value: 100 },
      { label: "targetDiscovery", value: 100 },
      { label: "leadIdentification", value: 70 },
      { label: "leadOptimization", value: 50 },
      { label: "preclinical", value: 30 },
      { label: "clinicalApplication", value: 0 },
    ],
  },
  {
    id: "XO-002",
    name: "XO-002",
    sub: "ADC payload",
    target: "STAT3i",
    stages: [
      { label: "candidateCompound", value: 100 },
      { label: "targetDiscovery", value: 100 },
      { label: "leadIdentification", value: 80 },
      { label: "leadOptimization", value: 70 },
      { label: "preclinical", value: 50 },
      { label: "clinicalApplication", value: 10 },
    ],
  },
  {
    id: "XO-003",
    name: "XO-003",
    sub: "전사인자 저해제",
    target: "FOXM1i",
    stages: [
      { label: "candidateCompound", value: 100 },
      { label: "targetDiscovery", value: 100 },
      { label: "leadIdentification", value: 50 },
      { label: "leadOptimization", value: 40 },
      { label: "preclinical", value: 0 },
      { label: "clinicalApplication", value: 0 },
    ],
  },
  {
    id: "XO-004",
    name: "XO-004",
    sub: "번역인자 저해제",
    target: "IRP2i",
    stages: [
      { label: "candidateCompound", value: 100 },
      { label: "targetDiscovery", value: 100 },
      { label: "leadIdentification", value: 50 },
      { label: "leadOptimization", value: 40 },
      { label: "preclinical", value: 0 },
      { label: "clinicalApplication", value: 0 },
    ],
  },
];

export default function PipelineChart(): JSX.Element {
  const language = useAppStore((s) => s.language);
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 진행 단계 계산 함수
  const getProgressStage = (stages: any[]) => {
    let currentIndex = -1;
    for (let i = 0; i < stages.length; i++) {
      if (stages[i].value > 0) currentIndex = i;
    }
    return currentIndex;
  };

  return (
    <div className="pipeline-chart" ref={ref}>
      {/* Table Header */}
      <div className="pipeline-header">
        <div className="header-progress">
          {DATA[0]?.stages.map((stage, idx) => (
            <span key={`header-${idx}`} className="header-stage-label">
              {t(`pipeline.stages.${stage.label}`, language)}
            </span>
          ))}
        </div>
        <div className="header-info">{t('pipeline.chartHeaders.progress', language)}</div>
      </div>

      <div className="pipeline-table-wrapper">
        {DATA.map((drug, drugIdx) => {
          const totalProgress = drug.stages.reduce((sum, stage) => sum + stage.value, 0) / (drug.stages.length * 100) * 100;
          const currentStage = getProgressStage(drug.stages);
          
          return (
            <motion.div
              key={drug.id}
              initial={{ opacity: 0, y: 10 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: drugIdx * 0.08 }}
              className="pipeline-row-card"
            >
              {/* Left Section - Drug Info */}
              <div className="row-drug-info text-center">
                <div className="row-header">
                  <h4 className="row-drug-name">{drug.name}</h4>
                </div>
                <p className="row-drug-sub">{drug.sub}</p>
              </div>

              {/* Left Section - Target Info */}
              <div className="row-drug-info text-center">
                <div className="row-header">
                  <h4 className="row-drug-name">{drug.target}</h4>
                </div>
              </div>

              {/* Center Section - Progress Bar */}
              <div className="row-progress-main">
                <div className="progress-bar-wrapper">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0, opacity: 0.6 }}
                    animate={visible ? { width: `${totalProgress}%`, opacity: 1 } : { width: 0 }}
                    transition={{ duration: 0.8, delay: drugIdx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>

              {/* Right Section - Percentage & Stage Badge */}
              <div className="row-right-section">
                <div className="progress-info">
                  <span className="progress-percent">{Math.round(totalProgress)}%</span>
                  <span className="stage-badge">{currentStage + 1}/{drug.stages.length}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
