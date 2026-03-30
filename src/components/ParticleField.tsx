import React from 'react'

export default function ParticleField(){
  // Static SVG particles positioned to create a 'scientific' field
  return (
    <div className="particle-field" aria-hidden="true">
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="none">
          <g className="particle p-1" transform="translate(180,120)">
            <circle className="core" cx="0" cy="0" r="10" fill="#7c93ff" opacity="1" />
            <circle cx="0" cy="0" r="22" fill="rgba(124,147,255,0.15)" />
          </g>

          <g className="particle p-2" transform="translate(420,80)">
            <circle className="core" cx="0" cy="0" r="9" fill="#27A94B" opacity="1" />
            <circle cx="0" cy="0" r="20" fill="rgba(39,169,75,0.15)" />
          </g>

          <g className="particle p-3" transform="translate(760,150)">
            <circle className="core" cx="0" cy="0" r="12" fill="#7c93ff" opacity="1" />
            <circle cx="0" cy="0" r="26" fill="rgba(124,147,255,0.12)" />
+          </g>
+
+          <g className="particle p-4" transform="translate(980,90)">
            <circle className="core" cx="0" cy="0" r="8" fill="#27A94B" opacity="1" />
            <circle cx="0" cy="0" r="18" fill="rgba(39,169,75,0.12)" />
+          </g>
+
+          <g className="particle p-5" transform="translate(610,40)">
            <circle className="core" cx="0" cy="0" r="10" fill="#7c93ff" opacity="1" />
            <circle cx="0" cy="0" r="22" fill="rgba(124,147,255,0.14)" />
+          </g>
        </g>
      </svg>
    </div>
  )
}
