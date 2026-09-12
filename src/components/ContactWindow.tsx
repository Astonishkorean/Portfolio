import React, { useState } from 'react';
import { ARTIST_PROFILE } from '../data/portfolioData';
import { Mail, Copy, Check, ExternalLink } from 'lucide-react';

export const ContactWindow: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ARTIST_PROFILE.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto py-2">
      {/* Header */}
      <div className="space-y-2 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
            CONTACT
          </span>
          <span className="text-xs text-zinc-400">공식 협업 및 문의 채널</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Contact
        </h1>
        <p className="text-sm text-zinc-300 leading-relaxed">
          음악 제작, 믹싱 & 마스터링, 레슨 및 협업 문의는 아래 이메일과 소셜 채널을 통해 연락주시기 바랍니다.
        </p>
      </div>

      <div className="space-y-4">
        {/* Email Address */}
        <div className="p-5 rounded-2xl bg-zinc-950/50 border border-white/10 space-y-3">
          <div className="text-xs text-zinc-400 flex items-center gap-1.5 font-medium">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Email address</span>
          </div>
          <div className="text-base sm:text-lg font-mono text-white select-all break-all font-semibold">
            {ARTIST_PROFILE.contact.email}
          </div>
          <button
            onClick={handleCopyEmail}
            className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors border border-white/10 cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>이메일 주소 복사됨</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Email address 복사하기</span>
              </>
            )}
          </button>
        </div>

        {/* Social channels */}
        <div className="p-5 rounded-2xl bg-zinc-950/50 border border-white/10 space-y-3">
          <div className="text-xs text-zinc-400 font-medium">Social channels</div>
          <div className="divide-y divide-white/5 text-sm">
            {ARTIST_PROFILE.socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-zinc-200 hover:text-white py-3 px-2 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <span className="font-medium group-hover:text-blue-300 transition-colors">{s.name}</span>
                <span className="text-zinc-400 font-mono text-xs flex items-center gap-1.5">
                  {s.handle}
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

