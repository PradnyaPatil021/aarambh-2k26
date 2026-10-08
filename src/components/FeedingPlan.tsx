import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import type { FeedingScheduleItem } from '../data/mock';

interface FeedingPlanProps {
  title: string;
  subtitle: string;
  items: FeedingScheduleItem[];
  footerAction: string;
  onToggleItem?: (id: string) => void;
  onViewSchedule?: () => void;
}

export const FeedingPlan: React.FC<FeedingPlanProps> = ({
  title,
  subtitle,
  items,
  footerAction,
  onToggleItem,
  onViewSchedule,
}) => {
  return (
    <div className="bg-white border border-[#E2EEF0] rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="pb-4 border-b border-[#E2EEF0]">
          <h2 className="text-xl font-bold text-[#0F1F2E] tracking-tight">
            {title}
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* Feeding items list */}
        <div className="divide-y divide-[#E2EEF0]/60">
          {items.map((item) => (
            <div
              key={item.id}
              className="py-3.5 flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/50 rounded-lg px-1"
            >
              {/* Checkbox + Time & Label */}
              <div className="flex items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onToggleItem?.(item.id)}
                  className={`w-5 h-5 rounded flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#00686F]/30 ${
                    item.completed
                      ? 'bg-[#00686F] text-white'
                      : 'border-2 border-[#CBD5E1] bg-white hover:border-[#00686F]'
                  }`}
                  aria-label={`Mark ${item.label} as ${item.completed ? 'incomplete' : 'completed'}`}
                >
                  {item.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>

                <div className="flex flex-col text-left">
                  <span className="text-[15px] font-bold text-[#0F1F2E] leading-snug">
                    {item.time}
                  </span>
                  <span className="text-xs text-[#64748B] leading-none mt-0.5">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Amount + Status Chip */}
              <div className="flex items-center gap-4">
                <span className="text-[15px] font-bold text-[#0F1F2E]">
                  {item.amount}
                </span>

                <span
                  className={`px-2.5 py-1 rounded text-[11px] font-bold tracking-wider uppercase ${
                    item.status === 'COMPLETED'
                      ? 'bg-[#D8F0EC] text-[#00686F]'
                      : 'bg-[#DCE9F9] text-[#3B5B8A]'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer link: Right-aligned */}
      <div className="pt-4 mt-auto border-t border-[#E2EEF0] flex justify-end">
        <button
          type="button"
          onClick={onViewSchedule}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00686F] hover:text-[#005359] hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-[#00686F]/20 rounded"
        >
          <span>{footerAction}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
