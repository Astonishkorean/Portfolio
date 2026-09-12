import React from 'react';
import { ARTIST_PROFILE, ASSETS } from '../data/portfolioData';
import { Award, Sparkles, ExternalLink, Headphones } from 'lucide-react';

interface AboutWindowProps {
  onOpenWindow?: (type: string, data?: any) => void;
  onPlaySignature?: () => void;
}

export const AboutWindow: React.FC<AboutWindowProps> = () => {
  const dolbyHighlight = ARTIST_PROFILE.highlights.find(h => h.badge === 'Dolby Atmos');
  const otherHighlights = ARTIST_PROFILE.highlights.filter(h => h.badge !== 'Dolby Atmos');

  return (
    <div className="space-y-6">
      {/* 2-Column Split Section: Left (Photo) / Right (Top: Name & Role, Bottom: Description) */}
      <div className="p-5 sm:p-6 rounded-2xl bg-zinc-950/60 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 items-stretch">
          {/* [좌측 2분할]: 아티스트 사진 */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-center">
            <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-zinc-900 group">
              <img 
                src={ASSETS.avatar} 
                alt={ARTIST_PROFILE.stageName} 
                className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-mono text-zinc-300 font-medium">Asi.K</span>
              </div>
            </div>
          </div>

          {/* [우측 2분할]: 상단(이름 & 역할) / 하단(설명 & 해시태그) */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col justify-between py-1 space-y-5">
            {/* 우측 상단: 이름과 역할 (Chuncheon 제거 -> Seoul, KR) */}
            <div className="space-y-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[11px] px-2 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30 font-mono font-semibold">
                  PROFILE
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  Seoul, KR
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex flex-wrap items-baseline gap-2">
                <span>{ARTIST_PROFILE.nameKo}</span>
                <span className="text-lg sm:text-xl font-medium text-zinc-400 font-sans flex items-center gap-2">
                  | {ARTIST_PROFILE.stageName} ({ARTIST_PROFILE.stageNameKo})
                  <span className="text-xs sm:text-sm font-normal text-zinc-400/90 font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    1998.02.23
                  </span>
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-medium text-amber-300/90 tracking-wide">
                {ARTIST_PROFILE.title}
              </p>
            </div>

            {/* 우측 하단: 설명 및 코어 테마 해시태그 */}
            <div className="space-y-3.5">
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                {ARTIST_PROFILE.bio}
              </p>

              {/* Core Themes Hashtags */}
              <div className="flex flex-wrap gap-2 items-center pt-1">
                {ARTIST_PROFILE.coreThemes.map((theme, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 rounded-lg text-xs bg-zinc-800/90 text-amber-300/95 border border-white/10 font-medium tracking-wide shadow-sm"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Dolby Atmos 단독 단락 (한 단락으로 구성 및 공식 링크 추가) */}
      {dolbyHighlight && (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-950/70 to-zinc-900/60 border border-amber-400/30 space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-amber-400" />
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {dolbyHighlight.badge}
              </span>
              <span className="text-xs font-bold text-white">
                {dolbyHighlight.title}
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">{dolbyHighlight.year}</span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {dolbyHighlight.description}
          </p>

          <div className="pt-1">
            <a
              href={dolbyHighlight.linkUrl || "https://www.dolby.com/creator-lab/seoul-music-accelerator/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-white border border-amber-400/40 text-xs font-semibold transition-all shadow-sm group cursor-pointer"
            >
              <span>Dolby Seoul Music Accelerator 공식 사이트 바로가기</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      )}

      {/* 2. 기타 주요 하이라이트 (YGPLUS / Melon) */}
      <div className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 flex items-center gap-1.5">
          <Award className="w-4 h-4" />
          <span>Other Highlights</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {otherHighlights.map((item, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-zinc-950/40 border border-white/10 hover:border-amber-400/30 transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {item.badge}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">{item.year}</span>
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                {item.title}
              </h3>
              {item.subtitle && (
                <div className="text-xs font-medium text-emerald-400">
                  {item.subtitle}
                </div>
              )}
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
