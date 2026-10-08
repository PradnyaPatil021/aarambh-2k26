import React from 'react';
import { Package, Clock, Banknote, TrendingUp, ArrowUp } from 'lucide-react';
import type { KpiMetric } from '../data/mock';

interface KpiCardProps {
  metric: KpiMetric;
}

export const KpiCard: React.FC<KpiCardProps> = ({ metric }) => {
  const renderIcon = () => {
    switch (metric.iconType) {
      case 'feed':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#E8F5F5] flex items-center justify-center text-[#00686F]">
            <Package className="w-4 h-4" />
          </div>
        );
      case 'clock':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#EAF2FD] flex items-center justify-center text-[#3B5B8A]">
            <Clock className="w-4 h-4" />
          </div>
        );
      case 'cost':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#EAF2FD] flex items-center justify-center text-[#3B5B8A]">
            <Banknote className="w-4 h-4" />
          </div>
        );
      case 'growth':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#EAF2FD] flex items-center justify-center text-[#3B5B8A]">
            <TrendingUp className="w-4 h-4" />
          </div>
        );
    }
  };

  return (
    <div className="bg-white border border-[#E2EEF0] rounded-2xl p-6 shadow-sm flex flex-col justify-between h-[156px] transition-all hover:shadow-md">
      {/* Top row: Label & Icon */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-wider text-[#64748B] uppercase">
          {metric.label}
        </span>
        {renderIcon()}
      </div>

      {/* Middle row: Main value & badges/chips */}
      <div>
        <div className="flex items-baseline gap-2">
          <div className="flex items-baseline">
            <span className={`text-[32px] font-bold leading-none tracking-tight ${
              metric.iconType === 'growth' ? 'text-[#00686F]' : 'text-[#0F1F2E]'
            }`}>
              {metric.value}
            </span>
            {metric.unit && (
              <span className="text-sm font-medium text-[#64748B] ml-1.5">
                {metric.unit}
              </span>
            )}
            {metric.trendIcon === 'up' && (
              <ArrowUp className="w-5 h-5 text-[#00686F] ml-1 stroke-[2.5]" />
            )}
          </div>

          {metric.badgeChip && (
            <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-[#DCE9F9] text-[#3B5B8A]">
              {metric.badgeChip}
            </span>
          )}
        </div>

        {/* Progress bar for feed metric */}
        {metric.progressPercent !== undefined && (
          <div className="w-full bg-[#E2EEF0] h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-[#00686F] h-full rounded-full transition-all duration-500"
              style={{ width: `${metric.progressPercent}%` }}
            />
          </div>
        )}
      </div>

      {/* Bottom Subtext */}
      <div className="text-xs text-[#64748B] font-medium leading-none">
        {metric.subtext}
      </div>
    </div>
  );
};
