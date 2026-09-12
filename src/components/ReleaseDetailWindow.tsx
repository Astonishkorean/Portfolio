import React from 'react';
import { OfficialRelease } from '../types';
import { Play, Pause, Disc3, Sparkles, ExternalLink, Music2, Share2, Check } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface ReleaseDetailWindowProps {
  release: OfficialRelease;
  isPlaying: boolean;
  activeTrackId: string;
  onTogglePlay: (id: string) => void;
}

export const ReleaseDetailWindow: React.FC<ReleaseDetailWindowProps> = ({
  release,
  isPlaying,
  activeTrackId,
  onTogglePlay
}) => {
  const [copied, setCopied] = React.useState(false);
  const isThisPlaying = isPlaying && activeTrackId === release.id;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Hero matching Frame B layout */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Cover Art with Vinyl Preview Effect */}
        <div className="relative group/cover w-full md:w-56 flex-shrink-0">
          <div className="relative z-10 aspect-square rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-zinc-800">
            <img
              src={release.coverImage}
              alt={release.title}
              className="w-full h-full object-cover select-none"
            />
            {/* Play overlay button on image */}
            <button
              onClick={() => onTogglePlay(release.id)}
              className="absolute inset-0 bg-black/40 opacity-0 group-hover/cover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs"
            >
              <div className="w-12 h-12 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-lg transform group-hover/cover:scale-105 transition-transform">
                {isThisPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </div>
            </button>
          </div>

          {/* Vinyl disc peeking out when playing */}
          <div className={`absolute top-0 right-0 w-full h-full rounded-full bg-zinc-950 border border-zinc-700 shadow-xl flex items-center justify-center transition-all duration-700 ${
            isThisPlaying ? 'translate-x-12 rotate-[360deg] opacity-100' : 'translate-x-0 opacity-0'
          } pointer-events-none -z-0`}>
            <div className="w-16 h-16 rounded-full border-4 border-zinc-800 bg-amber-900 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
        </div>

        {/* Narrative & Credits Info matching Frame B style and Melon album info */}
        <div className="flex-1 space-y-3 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
              [{release.type === 'Single' ? '싱글' : release.type}]
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {release.releaseDate}
            </span>
            {release.chartHighlight && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {release.chartHighlight}
              </span>
            )}
          </div>

          {/* Title & Artist matching screenshot */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {release.title}
            </h1>
            <div className="text-base font-semibold text-emerald-400">
              {release.artistName || 'Asi.K (애시케이)'}
            </div>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                타이틀곡
              </span>
              <span className="text-sm font-medium text-zinc-100">
                {release.titleTrack}
              </span>
            </div>
          </div>

          {/* Metadata Table if agency/distributor/genre present */}
          {(release.genre || release.distributor || release.agency) && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2 px-3 rounded-lg bg-zinc-900/60 border border-white/5 text-xs">
              <div>
                <span className="text-zinc-500 block text-[10px]">발매일</span>
                <span className="text-zinc-200 font-medium">{release.releaseDate}</span>
              </div>
              {release.genre && (
                <div>
                  <span className="text-zinc-500 block text-[10px]">장르</span>
                  <span className="text-zinc-200 font-medium">{release.genre}</span>
                </div>
              )}
              {release.distributor && (
                <div>
                  <span className="text-zinc-500 block text-[10px]">발매사</span>
                  <span className="text-zinc-200 font-medium">{release.distributor}</span>
                </div>
              )}
              {release.agency && (
                <div>
                  <span className="text-zinc-500 block text-[10px]">기획사</span>
                  <span className="text-zinc-200 font-medium">{release.agency}</span>
                </div>
              )}
            </div>
          )}

          {/* Role Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
              역할
            </span>
            {release.roles.map((role, idx) => (
              <span 
                key={idx} 
                className="px-2 py-0.5 rounded-md text-[11px] bg-zinc-800 text-zinc-300 border border-white/10 font-medium"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Theme Description */}
          <p className="text-sm text-zinc-300 leading-relaxed pt-1">
            {release.description}
          </p>

          {/* Audio preview controls bar */}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => onTogglePlay(release.id)}
              className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {isThisPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>일시정지</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>사운드스케이프 프리뷰 재생</span>
                </>
              )}
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 text-xs flex items-center gap-1.5 border border-white/10 transition-colors"
              title="링크 복사"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Album Introduction & Official Credits Note (스크린샷 2026-09-13 01.37.25 앨범소개) */}
      {(release.albumIntro || release.creditsNote) && (
        <div className="p-4 sm:p-5 rounded-xl bg-zinc-950/60 border border-white/10 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
            <h3 className="text-sm font-bold text-white tracking-tight">앨범소개</h3>
            <span className="text-[11px] text-zinc-400">Official Album Liner Notes</span>
          </div>

          {release.albumIntro && (
            <div className="space-y-1 text-xs text-zinc-300">
              {release.albumIntro.map((line, i) => (
                <p key={i} className={line === '' ? 'h-2' : ''}>{line}</p>
              ))}
            </div>
          )}

          {release.creditsNote && (
            <div className="space-y-1 text-xs text-zinc-400 font-mono pt-2 border-t border-white/5 whitespace-pre-line leading-relaxed">
              {release.creditsNote.map((line, i) => (
                <p key={i} className={line === '' ? 'h-2' : 'text-zinc-300'}>{line}</p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tracklist & Audio Specs */}
      <div className="border-t border-white/10 pt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tracklist */}
        <div className="md:col-span-2 space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Music2 className="w-3.5 h-3.5" />
            <span>Tracklist</span>
          </h3>
          <div className="bg-zinc-950/40 rounded-xl border border-white/5 divide-y divide-white/5 overflow-hidden">
            {release.tracks?.map((track, i) => (
              <div 
                key={i} 
                className="px-4 py-2.5 flex items-center justify-between hover:bg-white/5 transition-colors text-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xs font-mono text-zinc-500 w-4">{i + 1}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-zinc-200 truncate">{track.title}</span>
                      {track.highlight && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                          TITLE
                        </span>
                      )}
                    </div>
                    {track.artists && (
                      <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                        {track.artists}
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-500">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Audio Engine Specs */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Audio Specs & Tech
          </h3>
          <div className="bg-zinc-950/40 rounded-xl p-3.5 border border-white/5 space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-zinc-400">
              <span>Theme:</span>
              <span className="font-medium text-zinc-200">{release.theme}</span>
            </div>
            {release.audioSample && (
              <>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Tempo / Key:</span>
                  <span className="font-mono text-zinc-200">{release.audioSample.bpm} BPM · {release.audioSample.key}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Genre Signature:</span>
                  <span className="text-zinc-200">{release.audioSample.style}</span>
                </div>
              </>
            )}
            <div className="flex justify-between items-center text-zinc-400 pt-1 border-t border-white/5">
              <span>Mastering Spec:</span>
              <span className="text-emerald-400 font-mono font-medium">Dolby Atmos / 24bit 96kHz</span>
            </div>
          </div>

          {/* Streaming Platforms */}
          <div className="pt-2">
            <div className="text-[11px] text-zinc-500 mb-2">Available on streaming</div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-xs border border-white/10 hover:border-white/30 cursor-pointer">
                Melon
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-xs border border-white/10 hover:border-white/30 cursor-pointer">
                Spotify
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-xs border border-white/10 hover:border-white/30 cursor-pointer">
                Apple Music
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
