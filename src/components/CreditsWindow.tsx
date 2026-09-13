import React, { useState } from 'react';
import { OFFICIAL_RELEASES } from '../data/portfolioData';
import { Disc, Sparkles, Music2, ArrowUpRight } from 'lucide-react';
import { OfficialRelease } from '../types';

interface CreditsWindowProps {
  onSelectRelease?: (release: OfficialRelease) => void;
  onPlayTrack?: (id: string) => void;
}

export const CreditsWindow: React.FC<CreditsWindowProps> = () => {
  const [filterType, setFilterType] = useState<'all' | 'album' | 'single'>('all');

  const epCount = OFFICIAL_RELEASES.filter(r => r.type === 'EP').length;
  const singleCount = OFFICIAL_RELEASES.filter(r => r.type === 'Single').length;

  const filteredReleases = OFFICIAL_RELEASES.filter((rel) => {
    if (filterType === 'all') return true;
    if (filterType === 'album') return rel.type === 'EP';
    if (filterType === 'single') return rel.type === 'Single';
    return true;
  });

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* 1. Compact Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold tracking-wider">
              OFFICIAL DISCOGRAPHY
            </span>
            <span className="text-[11px] text-zinc-400 font-mono">2019 – 2025</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>Official Discography</span>
            <span className="text-xs font-normal text-zinc-400">({OFFICIAL_RELEASES.length} Releases)</span>
          </h1>
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-2 text-xs">
          <div className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-white/10 text-zinc-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            <span>EP {epCount}작 · 싱글 {singleCount}작</span>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-zinc-800/80 border border-white/10 text-zinc-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>전곡 올인원 프로듀싱</span>
          </div>
        </div>
      </div>

      {/* 2. Compact Overview Box (Liquid Glass) */}
      <div className="p-3 sm:p-3.5 rounded-2xl liquid-glass grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
            <Disc className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block font-medium">공식 발매 카탈로그</span>
            <span className="font-semibold text-white">10개 오리지널 음반</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block font-medium">올인원 크레딧</span>
            <span className="font-semibold text-white">작사 · 작곡 · 편곡 · 믹스 · 마스터</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
            <Music2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 block font-medium">음악 스펙트럼</span>
            <span className="font-semibold text-white">Alternative R&B · 팝 펑크 · Hip-Hop</span>
          </div>
        </div>
      </div>

      {/* 3. Compact Filter Bar */}
      <div className="flex items-center justify-between gap-2 pt-0.5">
        <div className="inline-flex items-center p-1 rounded-xl liquid-glass-button text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1 rounded-lg transition-all font-medium cursor-pointer ${
              filterType === 'all'
                ? 'bg-purple-600 text-white font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            전체 ({OFFICIAL_RELEASES.length})
          </button>
          <button
            onClick={() => setFilterType('album')}
            className={`px-3 py-1 rounded-lg transition-all font-medium cursor-pointer ${
              filterType === 'album'
                ? 'bg-purple-600 text-white font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            EP ({epCount})
          </button>
          <button
            onClick={() => setFilterType('single')}
            className={`px-3 py-1 rounded-lg transition-all font-medium cursor-pointer ${
              filterType === 'single'
                ? 'bg-purple-600 text-white font-semibold shadow-xs'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            싱글 ({singleCount})
          </button>
        </div>

        <span className="text-[11px] text-zinc-400 hidden sm:inline font-mono">
          * 음반 클릭 시 공식 음원 YouTube 영상 및 플레이리스트로 연결됩니다.
        </span>
      </div>

      {/* 4. Compact Album Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredReleases.map((rel) => (
          <a
            key={rel.id}
            href={rel.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-3.5 rounded-2xl liquid-glass hover:border-purple-400/50 transition-all flex gap-3.5 items-center relative cursor-pointer group shadow-xs block text-left"
          >
            {/* 1. Artwork with Type Badge */}
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 bg-zinc-800 border border-white/10 shadow-md">
              <img 
                src={rel.coverImage} 
                alt={rel.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 select-none" 
              />
              <div className="absolute top-1 left-1 px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-black/80 backdrop-blur-xs text-purple-300 border border-purple-500/30">
                {rel.type}
              </div>
            </div>

            {/* 2. Compact Album Info */}
            <div className="flex-1 min-w-0 space-y-1.5">
              {/* Title & Year */}
              <div className="flex items-center justify-between gap-2">
                <div className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-purple-300 transition-colors">
                  {rel.title}
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[11px] font-mono text-zinc-400">
                    {rel.releaseDate}
                  </span>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30 text-[10px] font-medium group-hover:bg-red-600/30 transition-colors">
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Title Track */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 whitespace-nowrap shrink-0">
                  타이틀
                </span>
                <span className="text-zinc-200 font-medium truncate">
                  {rel.titleTrack}
                </span>
              </div>

              {/* Roles */}
              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="text-[9px] font-medium px-1 py-0.2 rounded bg-zinc-800 text-zinc-400 whitespace-nowrap shrink-0">
                  크레딧
                </span>
                <span className="text-zinc-300 truncate font-normal">
                  {rel.roles.join(' · ')}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
