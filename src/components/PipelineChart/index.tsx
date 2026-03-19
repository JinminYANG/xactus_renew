import React, { JSX, useEffect, useRef, useState } from "react";
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
    target: "TNIK",
    stages: [
      { label: "후보물질", value: 100 },
      { label: "타겟 발굴", value: 100 },
      { label: "리드 탐색", value: 70 },
      { label: "리드 최적화", value: 50 },
      { label: "전임상", value: 30 },
      { label: "임상신청", value: 0 },
    ],
  },
  {
    id: "XO-002",
    name: "XO-002",
    sub: "ADC payload",
    target: "STAT3i",
    stages: [
      { label: "후보물질", value: 100 },
      { label: "타겟 발굴", value: 100 },
      { label: "리드 탐색", value: 80 },
      { label: "리드 최적화", value: 70 },
      { label: "전임상", value: 50 },
      { label: "임상신청", value: 10 },
    ],
  },
  {
    id: "XO-003",
    name: "XO-003",
    sub: "전사인자 저해제",
    target: "FOXM1i",
    stages: [
      { label: "후보물질", value: 100 },
      { label: "타겟 발굴", value: 100 },
      { label: "리드 탐색", value: 50 },
      { label: "리드 최적화", value: 40 },
      { label: "전임상", value: 0 },
      { label: "임상신청", value: 0 },
    ],
  },
  {
    id: "XO-004",
    name: "XO-004",
    sub: "번역인자 저해제",
    target: "IRP2i",
    stages: [
      { label: "후보물질", value: 100 },
      { label: "타겟 발굴", value: 100 },
      { label: "리드 탐색", value: 50 },
      { label: "리드 최적화", value: 40 },
      { label: "전임상", value: 0 },
      { label: "임상신청", value: 0 },
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
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="pipeline-chart" ref={ref}>
      {/* Header Row */}
      <div className="pipeline-table">
        <div className="pipeline-header-row">
          <div className="header-cell header-label">{t('pipeline.tableHeaders.drugName', language)}</div>
          <div className="header-cell">{t('pipeline.tableHeaders.targetDiscovery', language)}</div>
          <div className="header-cell">{t('pipeline.tableHeaders.leadIdentification', language)}</div>
          <div className="header-cell">{t('pipeline.tableHeaders.leadOptimization', language)}</div>
          <div className="header-cell">{t('pipeline.tableHeaders.preclinical', language)}</div>
          <div className="header-cell">{t('pipeline.tableHeaders.clinicalApplication', language)}</div>
        </div>

        {/* Data Rows */}
        {DATA.map((drug, drugIdx) => {
          // 각 stage의 진행도를 합산해서 전체 진행률 계산
          const totalProgress = drug.stages.reduce((sum, stage) => sum + stage.value, 0) / (drug.stages.length * 100) * 100;
          
          return (
            <div key={drug.id} className="pipeline-row">
              <div className="row-label-cell">
                <div className="drug-name">{drug.name}</div>
                <div className="drug-sub">{drug.sub}</div>
              </div>
              <div className="row-progress-cell" style={{ gridColumn: '2 / 7' }}>
                <div className="progress-bar-wrapper">
                  <div
                    className="progress-bar"
                    style={{
                      width: visible ? `${totalProgress}%` : "0%",
                      transitionDelay: `${drugIdx * 100}ms`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
