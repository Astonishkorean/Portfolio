import React from 'react';
import { EDUCATION_MENTORING } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle, School } from 'lucide-react';

interface MentoringWindowProps {
  onOpenContact?: () => void;
}

export const MentoringWindow: React.FC<MentoringWindowProps> = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            EDUCATION & MENTORING
          </span>
          <span className="text-xs text-zinc-400">차세대 뮤지션 양성 및 아티스트 교육</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Education & Mentoring
        </h1>
        <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
          비트메이킹, 미디 시퀀싱, 사운드 엔지니어링 실무까지 탄탄한 기본기와 개성 있는 사운드 디자인을 전수하며 다수의 실용음악과 합격생과 신진 아티스트를 배출해왔습니다.
        </p>
      </div>

      {/* Mentoring Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {EDUCATION_MENTORING.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-zinc-950/50 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                  {item.period}
                </span>
                <School className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-200 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs text-zinc-400 font-medium mt-0.5">
                  {item.organization}
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Achievements Bullet list */}
            <div className="pt-3 border-t border-white/5 space-y-2">
              <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                주요 성과 및 지도 이력
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {item.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
