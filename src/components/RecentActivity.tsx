import React from 'react';
import { History, ArrowRight } from 'lucide-react';
import type { ActivityItem } from '../data/mock';

interface RecentActivityProps {
  title: string;
  subtitle: string;
  items: ActivityItem[];
  footerAction: string;
  onViewAll?: () => void;
}

export const RecentActivity: React.FC<RecentActivityProps> = ({
  title,
  subtitle,
  items,
  footerAction,
  onViewAll,
}) => {
  return (
    <div className="bg-white border border-[#E2EEF0] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
      {/* Header with History Icon & Title */}
      <div className="pb-4 border-b border-[#E2EEF0] flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-[#EAF2FD] flex items-center justify-center text-[#3B5B8A] shrink-0">
          <History className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#0F1F2E] tracking-tight">
            {title}
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* 3 Compact One-Line Rows */}
      <div className="divide-y divide-[#E2EEF0]/60 my-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="py-3.5 flex items-center justify-between gap-4 text-left transition-colors hover:bg-slate-50/50 rounded-lg px-1"
          >
            {/* Status dot + Bold title · Muted description */}
            <div className="flex items-center gap-3 overflow-hidden">
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${
                  item.statusDot === 'red' ? 'bg-[#DC2626]' : 'bg-[#00686F]'
                }`}
                aria-hidden="true"
              />

              <div className="flex items-center flex-wrap sm:flex-nowrap gap-1.5 sm:gap-2 text-sm truncate">
                <span className="font-bold text-[#0F1F2E] whitespace-nowrap">
                  {item.title}
                </span>
                <span className="text-[#94A3B8] hidden sm:inline" aria-hidden="true">
                  ·
                </span>
                <span className="text-xs text-[#64748B] truncate">
                  {item.description}
                </span>
              </div>
            </div>

            {/* Time right-aligned */}
            <span className="text-sm font-semibold text-[#3B5B8A] shrink-0 ml-2">
              {item.time}
            </span>
          </div>
        ))}
      </div>

      {/* Footer: View All Activity on LEFT in teal */}
      <div className="pt-4 border-t border-[#E2EEF0] flex justify-start">
        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00686F] hover:text-[#005359] hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20 rounded"
        >
          <span>{footerAction}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
