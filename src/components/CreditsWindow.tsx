import React, { useState } from 'react';
import { OFFICIAL_RELEASES } from '../data/portfolioData';
import { Disc } from 'lucide-react';
import { OfficialRelease } from '../types';

interface CreditsWindowProps {
  onSelectRelease?: (release: OfficialRelease) => void;
  onPlayTrack?: (id: string) => void;
}

export const CreditsWindow: React.FC<CreditsWindowProps> = ({ onSelectRelease }) => {
  const [filterType, setFilterType] = useState<'all' | 'album' | 'single'>('all');

  const filteredReleases = OFFICIAL_RELEASES.filter((rel) => {
    if (filterType === 'all') return true;
    if (filterType === 'album') return rel.type === 'EP';
    if (filterType === 'single') return rel.type === 'Single';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
            OFFICIAL DISCOGRAPHY
          </span>
          <span className="text-xs text-zinc-400">전곡 프로듀싱 · 작사 · 작곡 · 편곡 · 믹스 & 마스터링</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Official Discography
        </h1>
        <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
          아티스트 Asi.K(애시케이)의 독창적인 음악 세계관과 정교한 사운드 텍스처를 구축하며 발매된 공식 릴리즈 목록입니다.
        </p>

        {/* Filters */}
        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filterType === 'all'
                ? 'bg-white text-zinc-950 font-semibold'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            전체 음반 ({OFFICIAL_RELEASES.length})
          </button>
          <button
            onClick={() => setFilterType('album')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filterType === 'album'
                ? 'bg-white text-zinc-950 font-semibold'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            EP ({OFFICIAL_RELEASES.filter(r => r.type === 'EP').length})
          </button>
          <button
            onClick={() => setFilterType('single')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filterType === 'single'
                ? 'bg-white text-zinc-950 font-semibold'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            싱글 음원 ({OFFICIAL_RELEASES.filter(r => r.type === 'Single').length})
          </button>
        </div>
      </div>

      {/* Official Releases Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Disc className="w-4 h-4 text-purple-400" />
            <span>Official Releases (2019 - 2025)</span>
          </h2>
          <span className="text-[11px] text-zinc-500 font-mono">총 {filteredReleases.length}개 릴리즈</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredReleases.map((rel) => (
            <div
              key={rel.id}
              onClick={() => onSelectRelease && onSelectRelease(rel)}
              className="p-4 rounded-xl bg-zinc-950/40 border border-white/10 hover:border-purple-500/40 hover:bg-zinc-900/40 transition-all flex gap-4 items-start relative cursor-pointer group"
            >
              {/* 1. 아트워크 (Artwork) */}
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800 border border-white/10 shadow-md">
                <img src={rel.coverImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* 2. 앨범제목, 3. 타이틀곡 제목, 4. 역할 */}
              <div className="flex-1 min-w-0 space-y-2">
                {/* 앨범제목 & 발매일 */}
                <div className="flex items-center justify-between gap-2">
                  <div className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-purple-300 transition-colors">
                    {rel.title}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 flex-shrink-0">
                    {rel.releaseDate}
                  </span>
                </div>

                {/* 타이틀곡 제목 */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 whitespace-nowrap flex-shrink-0">
                    타이틀곡
                  </span>
                  <span className="text-zinc-200 font-medium">
                    {rel.titleTrack}
                  </span>
                </div>

                {/* 역할 (생략 없이 전체 표시) */}
                <div className="flex items-start gap-2 text-xs pt-0.5">
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 whitespace-nowrap flex-shrink-0 mt-0.5">
                    역할
                  </span>
                  <span className="text-zinc-300 text-[11px] sm:text-xs leading-relaxed break-keep font-normal">
                    {rel.roles.join(', ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
