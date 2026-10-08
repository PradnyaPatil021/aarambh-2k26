import React from 'react';
import { AlertTriangle, Thermometer, Activity } from 'lucide-react';
import type { WaterTelemetry } from '../data/mock';
interface WaterConditionsProps {
  telemetry: WaterTelemetry;
}

export const WaterConditions: React.FC<WaterConditionsProps> = ({ telemetry }) => {
  return (
    <div className="bg-white border border-[#E2EEF0] rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="pb-4 border-b border-[#E2EEF0] flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#0F1F2E] tracking-tight">
              Water Conditions
            </h2>
            <p className="text-xs text-[#64748B] mt-0.5">
              Current water conditions
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FEE2E2] border border-[#FCA5A5] text-[#DC2626]">
            <AlertTriangle className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Attention required</span>
          </div>
        </div>

        {/* Panel 1: Water Temperature */}
        <div className="mt-4 bg-[#EAF2FD] rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#334155]">
              <Thermometer className="w-4 h-4 text-[#00686F]" />
              <span className="text-[13px] font-semibold text-[#0F1F2E]">
                {telemetry.temperature.label}
              </span>
            </div>

            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#D8F0EC] text-[#00686F]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00686F]" />
              <span>{telemetry.temperature.status}</span>
            </span>
          </div>

          <div className="mt-2.5 flex items-baseline justify-between">
            <span className="text-[28px] font-bold text-[#0F1F2E] leading-none">
              {telemetry.temperature.value}
            </span>
            <span className="text-xs text-[#64748B] font-medium">
              {telemetry.temperature.rangeText}
            </span>
          </div>

          {/* Temperature Range Bar: Light blue base with teal active range */}
          <div className="mt-3 w-full h-2 rounded-full bg-[#BBD6F7] flex overflow-hidden">
            <div className="w-[20%] h-full bg-[#99C2F2]" />
            <div className="w-[55%] h-full bg-[#00686F] rounded-full" />
            <div className="w-[25%] h-full bg-[#99C2F2]" />
          </div>
        </div>

        {/* Panel 2: Dissolved Oxygen (DO) */}
        <div className="mt-3 bg-[#EAF2FD] rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#334155]">
              <Activity className="w-4 h-4 text-[#00686F]" />
              <span className="text-[13px] font-semibold text-[#0F1F2E]">
                {telemetry.dissolvedOxygen.label}
              </span>
            </div>

            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEE2E2] text-[#DC2626]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              <span>{telemetry.dissolvedOxygen.status}</span>
            </span>
          </div>

          <div className="mt-2.5 flex items-baseline justify-between">
            {/* 4.8 mg/L with unit INLINE right after the value (never below the bar) */}
            <div className="flex items-baseline">
              <span className="text-[28px] font-bold text-[#0F1F2E] leading-none">
                {telemetry.dissolvedOxygen.value}
              </span>
              <span className="text-xs font-medium text-[#64748B] ml-1">
                {telemetry.dissolvedOxygen.unit}
              </span>
            </div>

            <span className="text-xs text-[#64748B] font-medium">
              {telemetry.dissolvedOxygen.rangeText}
            </span>
          </div>

          {/* Segmented DO Range Bar: Red, Light Blue, Teal */}
          <div className="mt-3 w-full h-2 rounded-full overflow-hidden flex gap-1 bg-transparent">
            {/* Red segment (danger/low) */}
            <div className="w-[18%] h-full bg-[#DC2626] rounded-l-full" title="Critical Low (< 5.0)" />
            {/* Light blue segment (moderate) */}
            <div className="w-[32%] h-full bg-[#99C2F2]" title="Sub-optimal" />
            {/* Teal segment (optimal) */}
            <div className="w-[50%] h-full bg-[#00686F] rounded-r-full" title="Optimal (> 5.0)" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 mt-4 border-t border-[#E2EEF0] flex items-center justify-between text-xs text-[#64748B]">
        <span>{telemetry.footerTelemetry}</span>
        <span>{telemetry.footerStatus}</span>
      </div>
    </div>
  );
};
