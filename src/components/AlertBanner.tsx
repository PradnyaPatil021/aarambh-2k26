import React from 'react';
import { AlertTriangle, ArrowRight, X } from 'lucide-react';
import type { AlertBannerData } from '../data/mock';

interface AlertBannerProps {
  data: AlertBannerData;
  onDismiss?: () => void;
  onViewAlert?: () => void;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({
  data,
  onDismiss,
  onViewAlert,
}) => {
  return (
    <div
      role="alert"
      className="w-full bg-[#FEE2E2] border border-[#FCA5A5] rounded-2xl py-5 px-6 flex items-center justify-between shadow-sm transition-all animate-in fade-in duration-200"
    >
      {/* Left content: Icon + Pill + Message all inline */}
      <div className="flex items-center gap-3.5 flex-wrap sm:flex-nowrap">
        <AlertTriangle className="w-5 h-5 text-[#DC2626] shrink-0" aria-hidden="true" />
        
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FCA5A5]/30 border border-[#FCA5A5] text-[#DC2626] shrink-0">
          {data.badge}
        </span>

        <p className="text-[15px] text-[#7F1D1D] leading-normal">
          <span>{data.messagePrefix} </span>
          <strong className="font-bold text-[#7F1D1D]">{data.highlightValue}</strong>
        </p>
      </div>

      {/* Right content: View Alert link + Dismiss button */}
      <div className="flex items-center gap-5 shrink-0 ml-4">
        <button
          type="button"
          onClick={onViewAlert}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#DC2626] underline hover:text-[#B91C1C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 rounded"
        >
          <span>{data.linkText}</span>
          <ArrowRight className="w-4 h-4 no-underline" />
        </button>

        <button
          type="button"
          onClick={onDismiss}
          className="p-1 rounded-lg text-[#DC2626] hover:bg-[#FCA5A5]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#DC2626]/40"
          aria-label="Dismiss alert"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
