import { useState } from 'react';

interface BrandShieldLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

export const AGENCY_LOGO_SRC = '/assets/aistudio/Kuzeyegesigortalogo_08a88991.jpg';

export function BrandShieldLogo({ variant = 'dark', size = 'md' }: BrandShieldLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const isLightText = variant === 'light';
  const iconSize = size === 'sm' ? 'h-10 w-10' : 'h-12 w-12';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      {!imgFailed ? (
        <img
          src={AGENCY_LOGO_SRC}
          alt="Kuzey Ege Sigorta Resmi Logosu"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className={`${iconSize} shrink-0 rounded-full bg-white object-cover ${
            isLightText ? 'p-0.5 ring-1 ring-white/25' : 'ring-1 ring-slate-200/90'
          }`}
        />
      ) : (
        <span
          className={`${iconSize} flex shrink-0 items-center justify-center rounded-full bg-[#0B192C] font-display text-xs font-extrabold text-white ring-1 ring-blue-400/50`}
          aria-hidden="true"
        >
          KE
        </span>
      )}
      <span
        className={`font-display text-lg font-bold tracking-tight ${
          isLightText ? 'text-white' : 'text-[#0B192C]'
        }`}
      >
        Kuzey Ege Sigorta
      </span>
    </span>
  );
}
