import React, { useState } from 'react';
import { SOUND_DIRECTION_WORKS, ADDITIONAL_CREDITS, ASSETS } from '../data/portfolioData';
import { 
  Sliders, 
  Sparkles, 
  Disc, 
  Radio, 
  CheckCircle2, 
  Layers, 
  Headphones, 
  SlidersHorizontal, 
  Music2, 
  ShieldCheck,
  Cpu,
  ExternalLink,
  Youtube
} from 'lucide-react';

interface DirectionWindowProps {
  onOpenContact?: () => void;
}

export const DirectionWindow: React.FC<DirectionWindowProps> = ({ onOpenContact }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'atmos' | 'stereo' | 'mastering'>('all');

  const filteredCredits = ADDITIONAL_CREDITS.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'atmos') return item.category.includes('Dolby');
    if (activeCategory === 'stereo') return item.category === 'Mix & Master';
    if (activeCategory === 'mastering') return item.category === 'Mastering';
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Header Statement */}
      <div className="space-y-2 pb-4 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/20 text-amber-300 border border-amber-400/30">
            SOUND ENGINEERING & MIX/MASTER
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            DOLBY ATMOS 7.1.2 SPECIALIST
          </span>
          <span className="text-xs text-zinc-400">공식 믹싱 & 마스터링 크레딧 및 오디오 엔지니어링 실무</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Sound Engineering & Mix/Master
        </h1>
        <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
          공간 음향(7.1.2 Dolby Atmos) 믹스 실무부터 고해상도 스테레오 믹스 & 마스터링까지, 상용 음원 유통 표준에 부합하는 철저한 엔지니어링 실무 워크플로우를 제공합니다.
        </p>
      </div>

      {/* Hero Visual Studio Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-white/15 h-48 sm:h-52 bg-zinc-950 shadow-xl">
        <img
          src={ASSETS.dolbyStudio}
          alt="Audio Engineering Studio"
          className="w-full h-full object-cover opacity-60 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
        <div className="absolute bottom-4 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Spatial Audio Laboratory & Dolby Atmos Mix Facility</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
              7.1.2 Dolby Atmos 공간 음향 믹스 실무 & High-Fidelity 마스터링
            </div>
            <p className="text-xs text-zinc-300 mt-1 max-w-xl hidden sm:block">
              Dolby Atmos Accelerator Korea 선정 기반 실무 역량 · Apple Music, Tidal, Amazon Music 공식 표준 ADM BWF 마스터 납품 완결
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur border border-white/15">
              Logic Pro · Pro Tools
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur border border-white/15 text-amber-300">
              Dolby Atmos Renderer
            </span>
          </div>
        </div>
      </div>

      {/* 3 Core Mix & Master Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl bg-zinc-950/50 border border-amber-400/30 space-y-2 relative overflow-hidden">
          <div className="absolute top-2 right-2">
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-400/20 text-amber-300 border border-amber-400/30">
              실무 특화
            </span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300">
            <Headphones className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white">7.1.2 Dolby Atmos 믹스 실무</h3>
          <p className="text-xs text-zinc-300 leading-relaxed">
            7.1.2 Bed 트랙과 3차원 Object 정밀 공간 배치, 바이노럴(Binaural) 메타데이터 세팅 및 7.1.2 스피커와 헤드폰 간 완벽 호환 ADM BWF 마스터 실무 납품.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/50 border border-white/10 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white">Stereo Stem & Precision Mix</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            보컬 톤 쉐이핑, 펀치감 넘치는 드럼/베이스 저역대 제어, 정밀한 위상(Phase) 정렬 및 다이내믹 EQ를 통한 선명한 고해상도 사운드 스테이지.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950/50 border border-white/10 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-white">Streaming-Ready Mastering</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            플랫폼별 최적화된 라우드니스와 투명한 리미팅. 멜론, 스포티파이, 애플뮤직 등 전 플랫폼 규격 무결점 송출.
          </p>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. PRIMARY SECTION: Mix & Master Credits                 */}
      {/* ======================================================== */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Disc className="w-4 h-4 text-amber-400" />
              <span>Mix & Master Official Credits</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              국내 주요 아티스트 및 앨범의 믹싱 & 마스터링 참여 이력입니다.
            </p>
          </div>
          <span className="text-[11px] text-zinc-400 font-mono">
            총 {ADDITIONAL_CREDITS.length}개 공식 믹싱/마스터링 크레딧
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-white text-zinc-950 font-semibold'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            전체 크레딧 ({ADDITIONAL_CREDITS.length})
          </button>
          <button
            onClick={() => setActiveCategory('atmos')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeCategory === 'atmos'
                ? 'bg-amber-400 text-zinc-950 font-semibold'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Dolby Atmos Mix & Master ({ADDITIONAL_CREDITS.filter(c => c.category.includes('Dolby')).length})
          </button>
          <button
            onClick={() => setActiveCategory('stereo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeCategory === 'stereo'
                ? 'bg-indigo-400 text-zinc-950 font-semibold'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Stereo Mix & Master ({ADDITIONAL_CREDITS.filter(c => c.category === 'Mix & Master').length})
          </button>
          <button
            onClick={() => setActiveCategory('mastering')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeCategory === 'mastering'
                ? 'bg-emerald-400 text-zinc-950 font-semibold'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            Mastering Only ({ADDITIONAL_CREDITS.filter(c => c.category === 'Mastering').length})
          </button>
        </div>

        {/* Credits List */}
        <div className="rounded-xl border border-white/10 bg-zinc-950/40 divide-y divide-white/5 overflow-hidden">
          {filteredCredits.map((item) => (
            <div
              key={item.id}
              className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:bg-white/5 transition-colors group"
            >
              <div className="flex flex-wrap items-center gap-3">
                {item.category.includes('Dolby') ? (
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30 whitespace-nowrap flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Dolby ATMOS Mix & Master
                  </span>
                ) : item.category === 'Mix & Master' ? (
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-400/20 text-indigo-300 border border-indigo-400/30 whitespace-nowrap">
                    Stereo Mix & Master
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 whitespace-nowrap">
                    High-End Mastering
                  </span>
                )}

                <div className="font-semibold text-sm text-white group-hover:text-amber-200 transition-colors">
                  <span className="text-zinc-200">{item.artist}</span>
                  <span className="text-zinc-500 mx-2">-</span>
                  <span className="text-white">‘{item.title}’</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono self-end sm:self-auto">
                <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 text-[11px]">
                  {item.format}
                </span>
                {item.year && <span className="text-zinc-400 font-medium">{item.year}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. Featured Commercial & Directing Projects              */}
      {/* ======================================================== */}
      <div className="space-y-4 pt-2">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <Radio className="w-4 h-4 text-emerald-400" />
            <span>Commercial & Sound Direction Projects</span>
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            기업 글로벌 캠페인, 인터랙티브 5G AR, 국가 포럼 및 공연 사운드 총괄 디렉팅
          </p>
        </div>

        <div className="space-y-4">
          {SOUND_DIRECTION_WORKS.map((work) => (
            <div
              key={work.id}
              className="p-5 rounded-2xl bg-zinc-950/50 border border-white/10 hover:border-white/25 transition-all space-y-3 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                    {work.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span>{work.client}</span>
                  <span>·</span>
                  <span className="text-zinc-500">{work.period}</span>
                </div>
              </div>

              {/* Impact / Key Highlight */}
              <div className="px-3 py-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-200 text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{work.impact}</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {work.description}
              </p>

              {/* Video Link */}
              {work.videoUrl && (
                <div className="pt-1">
                  <a
                    href={work.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-600/15 hover:bg-red-600/25 text-red-200 border border-red-500/30 text-xs font-semibold transition-colors group/yt"
                  >
                    <Youtube className="w-4 h-4 text-red-400 fill-current" />
                    <span>공식 영상 감상:</span>
                    <span className="text-zinc-300 font-mono text-[11px] underline underline-offset-2 break-all">
                      {work.videoUrl}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-red-400 group-hover/yt:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              )}

              {/* Tags & Role */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                <div className="text-zinc-400 font-medium">
                  <span className="text-zinc-500">역할: </span>
                  <span className="text-zinc-200">{work.role}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-[10px] bg-zinc-800 text-zinc-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. Studio Systems & Precision Tools                      */}
      {/* ======================================================== */}
      <div className="p-5 rounded-2xl bg-zinc-950/50 border border-white/10 space-y-3.5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-300">
          <Cpu className="w-4 h-4 text-amber-400" />
          <span>Studio Systems & Precision Tools</span>
        </div>
        
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 space-y-3">
          <div className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
            <span className="text-amber-400 font-bold mr-2">Tool :</span>
            <span className="font-medium text-zinc-100">
              Logic Pro X, Pro tools, Ableton Live (Main), Cubase, Dolby Atmos Renderer, Sonarworks SoundID Reference, Universal Audio DSP
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
            {[
              { name: 'Ableton Live', note: 'Main', primary: true },
              { name: 'Logic Pro X', note: 'DAW' },
              { name: 'Pro tools', note: 'DAW' },
              { name: 'Cubase', note: 'DAW' },
              { name: 'Dolby Atmos Renderer', note: 'Spatial Suite' },
              { name: 'Sonarworks SoundID Reference', note: 'Calibration' },
              { name: 'Universal Audio DSP', note: 'Hardware DSP' }
            ].map((tool, idx) => (
              <div
                key={idx}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 border ${
                  tool.primary
                    ? 'bg-amber-400/10 text-amber-300 border-amber-400/30'
                    : 'bg-zinc-800/80 text-zinc-300 border-white/10'
                }`}
              >
                <span className="font-semibold">{tool.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  tool.primary ? 'bg-amber-400/20 text-amber-200 font-bold' : 'bg-zinc-700/60 text-zinc-400'
                }`}>
                  {tool.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
