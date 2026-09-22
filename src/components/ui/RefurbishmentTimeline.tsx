import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  Target, 
  Sparkles, 
  Cpu, 
  Activity, 
  Award, 
  ShieldCheck, 
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedArrowRight } from './AnimatedArrow';
import { ActionPrimaryButton } from './AnimatedButtons';

interface RefurbishmentTimelineProps {
  lang: Language;
  onExploreProcess?: () => void;
}

interface ProcessStage {
  id: number;
  number: string;
  nameLine1: {
    pt: string;
    en: string;
  };
  nameLine2: {
    pt: string;
    en: string;
  };
  subtitle: {
    pt: string;
    en: string;
  };
  details: {
    pt: string[];
    en: string[];
  };
  icon: any;
  color: string;
  angle: number; // Angle in degrees for circular layout
}

const STAGES: ProcessStage[] = [
  {
    id: 1,
    number: '01',
    nameLine1: {
      pt: 'TRIAGEM &',
      en: 'TRIAGE &'
    },
    nameLine2: {
      pt: 'DIAGNÓSTICO',
      en: 'DIAGNOSIS'
    },
    subtitle: {
      pt: 'Auditoria visual e eletrónica de 50 pontos',
      en: 'Rigorous 50-point electronic diagnostic'
    },
    details: {
      pt: [
        'Inspeção óptica de ecrãs, portas e carcaças',
        'Teste de integridade de BIOS/UEFI e componentes',
        'Leitura de ciclos de bateria e saúde de SSD'
      ],
      en: [
        'Optical inspection of panels, ports & chassis',
        'Hardware BIOS/UEFI diagnostic integrity test',
        'Battery cycle count and SSD endurance audit'
      ]
    },
    icon: Target,
    color: '#0D7E73',
    angle: 270 // Top (12 o'clock)
  },
  {
    id: 2,
    number: '02',
    nameLine1: {
      pt: 'LIMPEZA &',
      en: 'CLEANING &'
    },
    nameLine2: {
      pt: 'HIGIENIZAÇÃO',
      en: 'SANITATION'
    },
    subtitle: {
      pt: 'Desinfeção e ultra-sons de precisão',
      en: 'Deep sanitation & ultrasonic air cleansing'
    },
    details: {
      pt: [
        'Eliminação de poeiras com ar comprimido ionizado',
        'Desinfeção antibacteriana certificada em carcaça',
        'Limpeza ultrassónica de teclados e dissipadores'
      ],
      en: [
        'Ionized high-pressure dust removal in cleanroom',
        'Certified medical-grade antibacterial sanitation',
        'Ultrasonic cleansing of cooling fans & keys'
      ]
    },
    icon: Sparkles,
    color: '#14B8A6',
    angle: 342 // Top Right (~2 o'clock)
  },
  {
    id: 3,
    number: '03',
    nameLine1: {
      pt: 'UPGRADE &',
      en: 'UPGRADE &'
    },
    nameLine2: {
      pt: 'RENOVAÇÃO',
      en: 'RENEWAL'
    },
    subtitle: {
      pt: 'Pastas térmicas OEM e novos SSDs NVMe',
      en: 'OEM thermal compound & NVMe storage'
    },
    details: {
      pt: [
        'Substituição de pasta térmica por composto de prata',
        'Instalação de SSDs NVMe novos com garantia 5 anos',
        'Expansão de memória RAM certificada e testada'
      ],
      en: [
        'Fresh application of high-conductivity thermal paste',
        'Brand-new high-speed NVMe PCIe SSD installation',
        'Tested dual-channel memory configuration'
      ]
    },
    icon: Cpu,
    color: '#0F766E',
    angle: 54 // Bottom Right (~4 o'clock)
  },
  {
    id: 4,
    number: '04',
    nameLine1: {
      pt: 'STRESS TEST',
      en: 'STRESS TEST'
    },
    nameLine2: {
      pt: '72 HORAS',
      en: '72H BENCH'
    },
    subtitle: {
      pt: 'Teste de esforço contínuo em bancada',
      en: 'Heavy load torture testing & thermal test'
    },
    details: {
      pt: [
        'Benchmarking de carga CPU/GPU a 100% de esforço',
        'Verificação de curvas de temperatura e ventilação',
        'Teste contínuo de carga e descarga de bateria'
      ],
      en: [
        '100% CPU/GPU continuous stress burn-in testing',
        'Acoustic and thermal curve profiling',
        'Multi-cycle real-world battery discharge logging'
      ]
    },
    icon: Activity,
    color: '#0D7E73',
    angle: 126 // Bottom Left (~7 o'clock)
  },
  {
    id: 5,
    number: '05',
    nameLine1: {
      pt: 'CERTIFICAÇÃO',
      en: 'GRADE A+'
    },
    nameLine2: {
      pt: 'GRAU A+',
      en: 'CERTIFICATION'
    },
    subtitle: {
      pt: 'Selo de garantia de 12 a 36 meses',
      en: 'Official laser seal & 12-36M warranty'
    },
    details: {
      pt: [
        'Classificação cosmética estrita de Grau A+',
        'Geração de relatório técnico individual por QR-code',
        'Embalagem anti-estática e selo de conformidade'
      ],
      en: [
        'Strict Grade A+ cosmetic classification score',
        'Unique cryptographic QA certificate generation',
        'Anti-static vacuum packing with SLA seal'
      ]
    },
    icon: Award,
    color: '#042F2C',
    angle: 198 // Top Left (~10 o'clock)
  }
];

export const RefurbishmentTimeline: React.FC<RefurbishmentTimelineProps> = ({
  lang,
  onExploreProcess
}) => {
  const [selectedStageId, setSelectedStageId] = useState<number>(1);
  const activeStage = STAGES.find(s => s.id === selectedStageId) || STAGES[0];

  const isPt = lang === 'pt';

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* SECTION HEADER - Compact & Visually Balanced */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-[#CCFBF1] text-[#0D7E73] mb-2 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{isPt ? 'PROTOCOLO DE LABORATÓRIO' : 'LABORATORY PROTOCOL'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#042F2C] uppercase leading-tight">
          {isPt ? 'A QUALIDADE É UM CICLO. ' : 'QUALITY IS A LOOP. '}
          <span className="text-[#0D7E73]">
            {isPt ? 'NÓS CERTIFICAMOS.' : 'WE OPTIMIZE IT.'}
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-lg mx-auto">
          {isPt
            ? 'Não é sorte. É um protocolo de engenharia circular em 5 etapas rigorosas no laboratório da Trofa.'
            : 'Not luck. It is a 5-stage precision engineering protocol executed inside our certified Trofa lab.'}
        </p>
      </div>

      {/* COMPACT CIRCULAR DIAGRAM (Optimized to fit in 1 single viewport view with heading) */}
      <div className="relative w-full max-w-2xl mx-auto mb-6 flex flex-col items-center justify-center">
        
        {/* SVG Circular Path and Orbiting Nodes (Width 440px, Height 440px) */}
        <div className="relative w-[340px] h-[340px] sm:w-[410px] sm:h-[410px] md:w-[440px] md:h-[440px] flex items-center justify-center">
          
          {/* SVG Circular Track with Directional Animated Motion Arrows connecting outside node centers */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 440 440">
            <defs>
              <marker
                id="arrowhead-teal-animated"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="4"
                orient="auto"
              >
                <path d="M 1 1.5 L 7 4 L 1 6.5 z" fill="#0D7E73" />
              </marker>
            </defs>

            {/* Circular Background Track (Dashed Mint) at Radius 152 */}
            <circle
              cx="220"
              cy="220"
              r="152"
              fill="none"
              stroke="#CCFBF1"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* ANIMATED CURVED ARROWS (Motion dashes flowing between node perimeters without overlapping text) */}
            {/* Arrow 1: Stage 1 (Top) to Stage 2 (Top-Right) */}
            <motion.path
              d="M 260 74 A 152 152 0 0 1 348 140"
              fill="none"
              stroke="#0D7E73"
              strokeWidth="2.5"
              strokeDasharray="7 5"
              markerEnd="url(#arrowhead-teal-animated)"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
            />
            {/* Arrow 2: Stage 2 (Top-Right) to Stage 3 (Bottom-Right) */}
            <motion.path
              d="M 370 210 A 152 152 0 0 1 334 316"
              fill="none"
              stroke="#0D7E73"
              strokeWidth="2.5"
              strokeDasharray="7 5"
              markerEnd="url(#arrowhead-teal-animated)"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
            />
            {/* Arrow 3: Stage 3 (Bottom-Right) to Stage 4 (Bottom-Left) */}
            <motion.path
              d="M 276 360 A 152 152 0 0 1 164 360"
              fill="none"
              stroke="#0D7E73"
              strokeWidth="2.5"
              strokeDasharray="7 5"
              markerEnd="url(#arrowhead-teal-animated)"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
            />
            {/* Arrow 4: Stage 4 (Bottom-Left) to Stage 5 (Top-Left) */}
            <motion.path
              d="M 106 316 A 152 152 0 0 1 70 210"
              fill="none"
              stroke="#0D7E73"
              strokeWidth="2.5"
              strokeDasharray="7 5"
              markerEnd="url(#arrowhead-teal-animated)"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
            />
            {/* Arrow 5: Stage 5 (Top-Left) to Stage 1 (Top) */}
            <motion.path
              d="M 92 140 A 152 152 0 0 1 180 74"
              fill="none"
              stroke="#0D7E73"
              strokeWidth="2.5"
              strokeDasharray="7 5"
              markerEnd="url(#arrowhead-teal-animated)"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
            />
          </svg>

          {/* Central Hub Circle matching reference design */}
          <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full bg-white border-4 border-[#F0FDFA] shadow-[0_15px_35px_rgba(13,126,115,0.08)] flex flex-col items-center justify-center text-center p-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#0D7E73] to-[#14B8A6] text-white flex items-center justify-center mb-1 shadow-xs">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#64748B]">
              {isPt ? 'QUALIDADE CONSISTENTE' : 'CONSISTENT QUALITY'}
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#042F2C] tracking-tight leading-tight my-0.5">
              GRADE A+
            </h3>

            <p className="text-[9px] sm:text-[10px] text-[#64748B] font-semibold max-w-[140px] leading-tight">
              {isPt ? 'Não é Sorte. ' : 'Not Luck. '}
              <span className="font-bold text-[#0D7E73]">{isPt ? 'É um Sistema.' : "It's a System."}</span>
            </p>
          </div>

          {/* Orbiting Interactive Stage Nodes */}
          {STAGES.map((stage) => {
            const isSelected = selectedStageId === stage.id;
            const Icon = stage.icon;
            
            // Calculate position along circular radius
            const rad = (stage.angle * Math.PI) / 180;
            const rPercent = 34.5; // Radius % from center
            const leftPercent = 50 + rPercent * Math.cos(rad);
            const topPercent = 50 + rPercent * Math.sin(rad);

            return (
              <motion.div
                key={stage.id}
                style={{
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`
                }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedStageId(stage.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center cursor-pointer group"
              >
                {/* Outer Circular Icon Button */}
                <div
                  className={`w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
                    isSelected
                      ? 'bg-white border-3 scale-110 shadow-md ring-2 ring-[#0D7E73]/20'
                      : 'bg-white border-2 border-[#CCFBF1] group-hover:border-[#0D7E73]'
                  }`}
                  style={{
                    borderColor: isSelected ? stage.color : undefined
                  }}
                >
                  <div
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-transform duration-200"
                    style={{
                      backgroundColor: isSelected ? `${stage.color}15` : '#F0FDFA',
                      color: stage.color
                    }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Node Label Badge (Clean 2-line layout, with solid backdrop & z-index to guarantee 100% legibility) */}
                <div className="text-center mt-1.5 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs border border-slate-100 shadow-2xs select-none min-w-[70px] sm:min-w-[85px]">
                  <div 
                    className="text-[9px] sm:text-[10px] font-black uppercase tracking-tight leading-tight"
                    style={{ color: isSelected ? stage.color : '#042F2C' }}
                  >
                    {stage.nameLine1[lang]}
                  </div>
                  <div 
                    className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-tight text-slate-500 leading-tight"
                  >
                    {stage.nameLine2[lang]}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SELECTED STAGE COMPACT DETAIL STRIP & ACTION */}
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-[#CCFBF1] p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3 text-center sm:text-left min-w-0">
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 font-black text-xs shadow-xs"
            style={{ backgroundColor: activeStage.color }}
          >
            {activeStage.number}
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold text-[#042F2C] truncate">
              {activeStage.nameLine1[lang]} {activeStage.nameLine2[lang]}
            </div>
            <div className="text-[11px] text-slate-500 truncate">
              {activeStage.subtitle[lang]}
            </div>
          </div>
        </div>

        <ActionPrimaryButton
          onClick={onExploreProcess}
          size="sm"
          className="shrink-0"
        >
          {isPt ? 'Ver Processo Completo' : 'View Full Process'}
        </ActionPrimaryButton>
      </div>

      {/* Trust Badges Minimal Row */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap text-slate-500 text-[11px] font-semibold pt-2">
        <div className="flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-[#0D7E73]" />
          <span>{isPt ? 'Auditoria 50 Pontos' : '50-Point QA Audit'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-[#0D7E73]" />
          <span>{isPt ? '72H Stress Testing' : '72H Stress Testing'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-[#0D7E73]" />
          <span>{isPt ? 'Limpeza Ultrassónica' : 'Ultrasonic Clean'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-[#0D7E73]" />
          <span>{isPt ? 'Garantia 12-36 Meses' : '12-36M Warranty'}</span>
        </div>
      </div>

    </div>
  );
};
